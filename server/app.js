import express from "express";
import cors from "cors";

const FRONTEND_URL = process.env.FRONTEND_URL;

const app = express();
app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(express.json());
// app.use("/api/presentation", presentationRoutes);

export default app;
