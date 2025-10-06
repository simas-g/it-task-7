import Presentation from "../lib/schemas/presentation.js";

export async function publishPresentation(creator, title) {
  const presentation = await Presentation.create({
    creator_nickname: creator,
    name: title,
  });
  return presentation;
}

export async function getPresentations() {
  const presentations = await Presentation.find();
  return presentations;
}

export async function fetchPresentationById(id) {
  const presentation = await Presentation.findOne({ _id: id });
  return presentation;
}
