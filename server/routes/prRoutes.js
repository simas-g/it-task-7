import express from "express";
import {
  createPresentation,
  getAllPresentations,
} from "../controllers/prControllers.js";
const router = express.Router();

router.get("/", getAllPresentations);
router.post("/create", createPresentation);
// router.post("/join", joinPresentation);

export default router;
