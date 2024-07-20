import { userModel } from "../models/UserModel.js";
import bcryptjs from "bcryptjs";

export const test_auth = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);

    if (!username || !email || !password) {
      return res.status(400).json({ message: "Provide necessary data...." });
    }
    const newUser = {
      username,
      email,
      password: hashedPassword,
    };

    const user = await userModel.create(newUser);
    return res
      .status(200)
      .json({ message: "New user has been created....", user });
  } catch (error) {
    // next(errorhandler(500, "Hikenaw mewa"));
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};
