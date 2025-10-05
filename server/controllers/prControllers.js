import { publishPresentation } from "../models/prModel.js";

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
