import express from "express";
import {
  createSubmission,
  getSubmissionsByStudent,
} from "../controllers/submissionController.js";

const router = express.Router();

// 📤 Create a new submission
router.post("/", createSubmission);

// 📜 Get submissions by student name
router.get("/:studentName", getSubmissionsByStudent);

export default router;