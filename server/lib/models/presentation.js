import mongoose from "mongoose";

const { Schema } = mongoose;

const PresentationSchema = new Schema({
  creator_nickname: {
    type: String,
    required: true,
    trim: true,
  },
  creator_token: {
    type: String,
    required: true,
    unique: true,
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
      undoState: mongoose.Types.Mixed,
    },
  ],

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

PresentationSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const Presentation =
  mongoose.models.Presentation ||
  mongoose.model("Presentation", PresentationSchema);

export default Presentation;
