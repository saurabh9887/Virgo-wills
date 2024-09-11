import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoute from "./routes/auth.js";
import peopleRoute from "./routes/peopleRoute.js";
import childRoute from "./routes/childrensRoute.js";
import petRoute from "./routes/petsRoute.js";

const app = express();
app.use(cors());
dotenv.config();

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/people", peopleRoute);
app.use("/api/children", childRoute);
app.use("/api/pet", petRoute);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => console.log(error));

app.listen(3000, () => {
  console.log("app is listening on port 3000");
});
