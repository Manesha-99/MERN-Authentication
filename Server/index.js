import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { port, mongoDbUrl } from "./config.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(mongoDbUrl)
  .then(() => {
    app.listen(port, (req, res) => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/user", userRoutes);
app.use("/auth", authRoutes);

app.use((err, req, res, next) => {
  const statuscode = err.statuscode || 500;
  const message = err.message || "Internal Error";
  return res.status(statuscode).json({
    success: false,
    message,
    statuscode,
  });
});
