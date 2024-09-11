import mongoose from "mongoose";

const PeopleModelSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
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
    age: {
      type: String,
    },
    address: {
      type: String,
    },
    personType: {
      type: String,
    },
    userId: {
      type: String,
    },
  },
  { timestamps: true }
);

export const PeopleModel = mongoose.model("people", PeopleModelSchema);
