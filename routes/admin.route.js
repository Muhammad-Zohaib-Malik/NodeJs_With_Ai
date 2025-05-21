import express from "express";
import { verifyToken } from "../middleware/user.middleware.js";
import { addChatBot } from "../controllers/admin.controller.js";
import upload from "../middleware/multer.js";

const router = express.Router();

router.post("/add-chat-bot", verifyToken, upload.single("image"), addChatBot);

export default router;
