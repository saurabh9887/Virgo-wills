import mongoose from "mongoose";

const userModelSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("UserModel", userModelSchema);
