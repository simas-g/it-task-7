import {
  getPresentations,
  publishPresentation,
  fetchPresentationById,
} from "../models/prModel.js";

export async function createPresentation(req, res) {
  const { creator, title } = req.body;
  if (!creator || !title) {
    return res.status(400).json({ message: "Missing required fields." });
  }
  try {
    const result = await publishPresentation(creator, title);
    console.log(result, "our result");
    return res
      .status(200)
      .json({ result, message: "Presentation succesfully inserted." });
  } catch (error) {
    return res.status(500).json({ message: "Server error. Try again later." });
  }
}

export async function getAllPresentations(_req, res) {
  try {
    const result = await getPresentations();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: "Server error. Try again later." });
  }
}

export async function getPresentationById(req, res) {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "Missing required parameters." });
  }
  try {
    const result = await fetchPresentationById(id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: "Server error. Try again later." });
  }
}
