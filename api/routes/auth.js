import express from "express";
import { User } from "../model/userModel.js";
import bcrypt from "bcrypt";

const router = express.Router();

const hashPassword = async (password) => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

router.post("/register", async (req, res) => {
  try {
    const hashedPassword = await hashPassword(req.body.password);
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      contactNumber: req.body.contactNumber,
    });

    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    console.log(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const foundUser = await User.findOne({ email: req.body.email });
    if (!foundUser) {
      return res.status(404).send("User not found!");
    }

    const validate = await bcrypt.compare(
      req.body.password,
      foundUser.password
    );
    if (!validate) {
      return res.status(401).send("You are not authenticated!");
    }

    const { password, ...otherInfo } = foundUser._doc;
    res.status(200).json(otherInfo);
  } catch (error) {
    console.log(error);
  }
});

export default router;
