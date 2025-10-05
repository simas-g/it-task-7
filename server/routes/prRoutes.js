import express from "express";
import { createPresentation } from "../controllers/prControllers.js";
const router = express.Router();

// router.get("/", getPresentations);
router.post("/create", createPresentation);
// router.post("/join", joinPresentation);

export default router;
