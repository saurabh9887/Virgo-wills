import mongoose from "mongoose";

const PetsModelSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
    },
  },
  { timestamps: true }
);

export const PetsModel = mongoose.model("pets", PetsModelSchema);
