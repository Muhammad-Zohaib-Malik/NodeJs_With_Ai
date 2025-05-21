import { loginUser, registerUser } from "../controllers/user.controller.js";
import express from "express";

const router = express.Router();

// Register route
router.post("/register", registerUser);
// Login route
router.post("/login", loginUser);

export default router;
