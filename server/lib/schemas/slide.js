import mongoose from "mongoose";
const { model, Schema, models } = mongoose;
import { ElementSchema } from "./element.js";

const SlideSchema = new Schema({
  name: { type: String, required: true },
  index: { type: Number, required: true },
  background: { type: String, default: "white" },
  elements: [ElementSchema],
});

const Slide = models.SlideSchema || model("Slide", SlideSchema);
export { SlideSchema, Slide };
