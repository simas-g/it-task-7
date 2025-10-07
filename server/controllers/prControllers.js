import {
  getPresentations,
  publishPresentation,
  fetchPresentationById,
  assignToPresentation,
  changeRole,
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
export async function joinPresentation(req, res) {
  const { id, name } = req.body;
  console.log(name, "params");
  if (!name || !id) {
    return res.status(400).json({ message: "Missing required parameters." });
  }
  try {
    const result = await assignToPresentation(id, name);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: "Server error. Try again later." });
  }
}
export async function changeCollaboratorsRole(req, res) {
  const { projectId, username, newRole } = req.body;
  if (!projectId || !username || !newRole) {
    return res.status(400).json({ message: "Missing required parameters." });
  }
  try {
    const result = await changeRole(projectId, username, newRole);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: "Server error. Try again later." });
  }
}
