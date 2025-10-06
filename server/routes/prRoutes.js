import express from "express";
import {
  createPresentation,
  getAllPresentations,
  getPresentationById,
} from "../controllers/prControllers.js";
const router = express.Router();

router.get("/", getAllPresentations);
router.get("/:id", getPresentationById);
router.post("/create", createPresentation);
// router.post("/join", joinPresentation);

export default router;
