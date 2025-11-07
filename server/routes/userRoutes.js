import express from "express";
import {
  registerUser,
  loginUser,
  getProfile,
} from "../controllers/userController.js";

const router = express.Router();

// 🧾 Register a new user
router.post("/register", registerUser);

// 🔑 Login user
router.post("/login", loginUser);

// 👤 Get user profile by ID
router.get("/:id", getProfile);

export default router;