import express from "express";
import {
  getUsersForSidebar,
  getMessages,
  sendMessage,
} from "../controllers/message.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

// Protect all message routes
router.use(protectRoute);

// Get users for the sidebar
router.get("/users", protectRoute, getUsersForSidebar);

// Get conversation with a specific user
router.get("/:id", protectRoute, getMessages);

// Send a message to a specific user
router.post("/send/:id", protectRoute, sendMessage);

export default router;
