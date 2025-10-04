import mongoose, { model, models } from "mongoose";

const { Schema } = mongoose;

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
export default Slide;
