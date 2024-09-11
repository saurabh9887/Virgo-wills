import express from "express";
import { PeopleModel } from "../model/peopleModel.js";

const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const newPerson = new PeopleModel({
      name: req.body.name,
      email: req.body.email,
      dob: req.body.dob,
      age: req.body.age,
      address: req.body.address,
      personType: req.body.personType,
      userId: req.body.userId,
    });

    const savedPerson = await newPerson.save();
    res.status(200).json(savedPerson);
  } catch (error) {
    console.log(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const allPeople = await PeopleModel.find({});
    res.status(200).json(allPeople);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const personFound = await PeopleModel.findById(req.params.id);
    if (!personFound) {
      return res.status(404).send("person not found");
    }
    res.status(200).json(personFound);
  } catch (error) {
    console.log(error);
  }
});

export default router;
