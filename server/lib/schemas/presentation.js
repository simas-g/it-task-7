import mongoose from "mongoose";
const { model, Schema, models } = mongoose;
import { SlideSchema } from "./slide.js";

const PresentationSchema = new Schema(
  {
    creator_nickname: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      default: "Untitled Presentation",
    },
    slides: [SlideSchema],
    history: [
      {
        actionId: String,
        userNickname: String,
        typeOfAction: String,
        timestamp: { type: Date, default: Date.now },
        targetSlideId: String,
        targetElementId: String,
        undoState: Schema.Types.Mixed,
      },
    ],
  },
  { timestamps: true }
);

const Presentation =
  models.Presentation || model("Presentation", PresentationSchema);

export default Presentation;
