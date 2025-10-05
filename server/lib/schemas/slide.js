import mongoose from "mongoose";
const { model, Schema, models } = mongoose;
import { ElementSchema } from "./element.js";

const SlideSchema = new Schema(
  {
    slideId: {
      type: String,
      required: true,
      default: () => mongoose.Types.ObjectId().toHexString(),
    },
    index: { type: Number, required: true },
    background: { type: String, default: "white" },
    elements: [ElementSchema],
  },
  { _id: false }
);

const Slide = models.SlideSchema || model("Slide", SlideSchema);
export { SlideSchema, Slide };
