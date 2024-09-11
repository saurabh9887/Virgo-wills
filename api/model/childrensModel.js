import mongoose from "mongoose";

const ChildrenModelSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    dob: {
      day: {
        type: Number,
        min: 1,
        max: 31,
      },
      month: {
        type: Number,
        min: 1,
        max: 12,
      },
      year: {
        type: Number,
        max: 2007,
      },
    },
  },
  { timestamps: true }
);

export const ChildreModel = mongoose.model("children", ChildrenModelSchema);
