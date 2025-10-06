import mongoose from "mongoose";
const { Schema } = mongoose;

const CollaboratorSchema = new Schema(
  {
    nickname: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["owner", "editor", "viewer"],
    },
    currentSlideId: { type: String, default: null },
  },
  {
    _id: false,
  }
);

export { CollaboratorSchema };
