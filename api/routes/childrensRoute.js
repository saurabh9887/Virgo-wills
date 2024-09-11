import express from "express";
import { ChildrenModel } from "../model/childrensModel.js";

const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const newChild = new ChildrenModel({
      name: req.body.name,
      dob: req.body.dob,
    });

    const savedChild = await newChild.save();
    res.status(200).json(savedChild);
  } catch (error) {
    console.log(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const allChildrens = await ChildrenModel.find({});
    res.status(200).json(allChildrens);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const childFound = await ChildrenModel.findById(req.params.id);
    if (!childFound) {
      return res.status(404).send("person not found");
    }
    res.status(200).json(childFound);
  } catch (error) {
    console.log(error);
  }
});

export default router;
