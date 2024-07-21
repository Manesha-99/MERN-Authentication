import { userModel } from "../models/UserModel.js";
import bcryptjs from "bcryptjs";
import { errorhandler } from "../utils/errorhandler.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

//------------------------Sign_UP----------------------------------------------------------------

export const sign_up = async (req, res, next) => {
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
    next(error);
  }
};

//-----------------------------------Sign_in----------------------------------------------------

export const sign_in = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await userModel.findOne({ email });
    if (!validUser) return next(errorhandler(404, "User Not Found...."));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorhandler(401, "Wrong Credentials...."));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const {password: hashedPassword, ...rest} = validUser._doc
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {}
};
