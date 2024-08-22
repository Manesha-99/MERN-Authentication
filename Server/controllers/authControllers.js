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
    const { password: hashedPassword, ...rest } = validUser._doc;
    const expiryDate = new Date(Date.now() + 3600000);
    res
      .cookie("access_token", token, { httpOnly: true, expires: expiryDate })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

//--------------------------------Google--------------------------------------------------------

export const google = async (req, res, next) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password: hashedPassword, ...rest } = user._doc;
      const expiryDate = new Date(Date.now() + 3600000);
      res
        .cookie("access_token", token, { httpOnly: true, expires: expiryDate })
        .status(200)
        .json(rest);
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      const newUser = new userModel({
        username:
          req.body.name.split(" ").join("").toLowerCase() +
          Math.floor(Math.random() * 10000).toString(),
        email: req.body.email,
        password: hashedPassword,
        profilePicture: req.body.photo,
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      const { password: hashedPassword2, ...rest } = newUser._doc;
      const expiryDate = new Date(Date.now() + 3600000);
      res
        .cookie("access_token", token, { httpOnly: true, expires: expiryDate })
        .status(201)
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};
