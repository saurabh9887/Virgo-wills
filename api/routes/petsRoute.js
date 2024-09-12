import express from "express";
import { PetsModel } from "../model/petsModel.js";

const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const newPet = new PetsModel({
      name: req.body.name,
      userId: req.body.userId,
    });

    const savedPet = await newPet.save();
    res.status(200).json(savedPet);
  } catch (error) {
    console.log(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const allPets = await PetsModel.find({});
    res.status(200).json(allPets);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const petFound = await PetsModel.findById(req.params.id);
    if (!petFound) {
      return res.status(404).send("person not found");
    }
    res.status(200).json(petFound);
  } catch (error) {
    console.log(error);
  }
});

export default router;
