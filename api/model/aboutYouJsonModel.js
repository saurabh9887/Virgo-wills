import mongoose from "mongoose";

const aboutYouJsonSchema = mongoose.Schema(
  {
    legalName: {
      type: String,
      required: true,
    },
    nickName: {
      type: String,
    },
    dob: {
      day: Number,
      month: Number,
      year: Number,
    },
    address1: {
      type: String,
      required: true,
    },
    address2: {
      type: String,
    },
    city: {
      type: String,
    },
    postalCode: {
      type: Number,
    },
    maritalStatus: {
      type: String,
      required: true,
    },
    selectedPartner: {
      type: [String],
    },
    haveChildrens: {
      type: String,
    },
    childrenSelected: {
      type: [String],
    },
    havePets: {
      type: String,
    },
    petSelected: {
      type: [String],
    },
  },
  { timestamps: true }
);

export const AYModel = mongoose.model("ayjson", aboutYouJsonSchema);
