import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import connectDB from "./config/db";
import movie from "./model/Movie";
import movieRoutes from "./route/movieRoutes";

const app = express();

const MONGO_URI = process.env.MONGO_URI || "";
app.use(express.json());
app.use("/movies", movieRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Helle Express-TS");
});

connectDB(MONGO_URI);
app.listen(8001, () => {
  console.log("server aslaa-TS");
});
