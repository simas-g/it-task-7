import express from "express";
import {
  createPresentation,
  getAllPresentations,
  getPresentationById,
  joinPresentation,
  changeCollaboratorsRole,
} from "../controllers/prControllers.js";
const router = express.Router();

router.get("/", getAllPresentations);
router.get("/:id", getPresentationById);
router.post("/create", createPresentation);
router.post("/assign", joinPresentation);
router.post("/collaborators", changeCollaboratorsRole);

export default router;
