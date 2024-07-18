import { User } from "../models/UserModel.js";
import bcryptjs from "bcryptjs";
import { errorhandler } from "../utils/errorhandler.js";

export const test_auth = async (req, res, next) => {
  try {
    const { user_name, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);

    if (!user_name || !email || !password) {
      return res.status(400).json({ message: "Provide necessary data...." });
    }

    // const existingUser = await User.findOne({ $or: [{ user_name }, { email }] });

    // if (existingUser) {
    //     return res.status(400).json({ message: "Username or email already exists." });
    //   }

    const newUser = {
      user_name: user_name,
      email: email,
      password: hashedPassword,
    };

    const user = await User.create(newUser);
    return res
      .status(200)
      .json({ message: "New user has been created....", user });
  } catch (error) {
    next(errorhandler(500, "Hikenaw mewa"));
  }
};
