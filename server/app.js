import express from "express";
import cors from "cors";
import prRoutes from "./routes/prRoutes.js";
const FRONTEND_URL = process.env.FRONTEND_URL;

const app = express();
app.use(
  cors({
    origin: FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(express.json());
app.use("/presentations", prRoutes);
export default app;
