import mongoose from "mongoose";
const chatBotSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    prompt_message: {
      type: String,
      required: true,
    },
    image: {
      type: String, // URL or path to the image
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  { timestamps: true }
);

export const ChatBot = mongoose.model("ChatBot", chatBotSchema);
