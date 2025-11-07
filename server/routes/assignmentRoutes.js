import express from "express";
import {
  createAssignment,
  getAllAssignments,
  getAssignmentById,
  updateAssignment,
  deleteAssignment,
} from "../controllers/assignmentController.js";

const router = express.Router();

// ➕ Create new assignment (Instructor)
router.post("/", createAssignment);

// 📦 Get all assignments (Student + Instructor)
router.get("/", getAllAssignments);

// 🔍 Get single assignment by ID
router.get("/:id", getAssignmentById);

// ✏️ Update an assignment by ID (Instructor)
router.put("/:id", updateAssignment);

// ❌ Delete an assignment by ID (Instructor)
router.delete("/:id", deleteAssignment);

export default router;
