import express from "express";

const router = express.Router();

router.post("/send-message", sendMessage);

export default router;
