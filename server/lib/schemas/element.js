import mongoose from "mongoose";
const { model, Schema, models } = mongoose;

const ElementSchema = new Schema({
  type: {
    type: String,
    required: true,
    enum: ["text", "rectangle", "circle", "triangle", "image"],
  },
  creator: { type: String, required: true },
  content: { type: String, default: "" },
  style: {
    x: { type: Number, required: true, default: 0 },
    y: { type: Number, required: true, default: 0 },
    width: { type: Number, default: 200 },
    height: { type: Number, default: 50 },
    zIndex: { type: Number, default: 1 },
    color: { type: String, default: "#000000" },
    backgroundColor: { type: String, default: "transparent" },
    fontSize: { type: Number, default: 16 },
  },
});

const Element = models.Element || model("Element", ElementSchema);
export { Element, ElementSchema };
