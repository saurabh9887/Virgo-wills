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
    userId: {
      type: String,
    },
  },
  { timestamps: true }
);

export const ChildrenModel = mongoose.model("children", ChildrenModelSchema);
