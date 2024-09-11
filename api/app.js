import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoute from "./routes/auth.js";

const app = express();
app.use(cors());
dotenv.config();

app.use(express.json());
app.use("/api/auth", authRoute);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => console.log(error));

app.listen(3000, () => {
  console.log("app is listening on port 3000");
});
