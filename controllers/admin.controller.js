import { ChatBot } from "../models/chatbot-model.js";

export const addChatBot = async (req, res) => {
  try {
    const { name, message, prompt_message, image, status } = req.body;
    const newChatBot = new ChatBot({
      name,
      message,
      prompt_message,
      image,
      status,
    });
    await newChatBot.save();
    res
      .status(201)
      .json({ message: "Chatbot added successfully", chatbot: newChatBot });
  } catch (error) {
    console.error("Error adding chatbot:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllChatBots = async (req, res) => {
  try {
    const chatbots = await ChatBot.find();
    res.status(200).json(chatbots);
  } catch (error) {
    console.error("Error fetching chatbots:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getChatBotById = async (req, res) => {
  try {
    const chatbot = await ChatBot.findById(req.params.id);
    if (!chatbot) {
      return res.status(404).json({ message: "Chatbot not found" });
    }
    res.status(200).json(chatbot);
  } catch (error) {
    console.error("Error fetching chatbot:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateChatBot = async (req, res) => {
  try {
    const { name, message, prompt_message, image, status } = req.body;
    const chatbot = await ChatBot.findByIdAndUpdate(
      req.params.id,
      { name, message, prompt_message, image, status },
      { new: true }
    );
    if (!chatbot) {
      return res.status(404).json({ message: "Chatbot not found" });
    }
    res.status(200).json({ message: "Chatbot updated successfully", chatbot });
  } catch (error) {
    console.error("Error updating chatbot:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteChatBot = async (req, res) => {
  try {
    const chatbot = await ChatBot.findByIdAndDelete(req.params.id);
    if (!chatbot) {
      return res.status(404).json({ message: "Chatbot not found" });
    }
    res.status(200).json({ message: "Chatbot deleted successfully" });
  } catch (error) {
    console.error("Error deleting chatbot:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
