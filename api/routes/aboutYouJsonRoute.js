import express from "express";
import { AYModel } from "../model/aboutYouJsonModel.js";

const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const newAYJson = new AYModel({
      legalName: req.body.legalName,
      nickName: req.body.nickName,
      dob: req.body.dob,
      address1: req.body.address1,
      address2: req.body.address2,
      city: req.body.city,
      postalCode: req.body.postalCode,
      selectedPartner: req.body.selectedPartner,
      maritalStatus: req.body.maritalStatus,
      haveChildrens: req.body.haveChildrens,
      childrenSelected: req.body.childrenSelected,
      havePets: req.body.havePets,
      petSelected: req.body.petSelected,
    });

    const savedJson = await newAYJson.save();
    res.status(200).json(savedJson);
  } catch (error) {
    console.log(error);
  }
});

export default router;
