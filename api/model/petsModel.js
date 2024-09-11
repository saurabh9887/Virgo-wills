import mongoose from "mongoose";

const PetsModelSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const PetsModel = mongoose.model("pets", PetsModelSchema);
