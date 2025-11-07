import Submission from "../models/submissionModel.js";
import Assignment from "../models/assignmentModel.js";

// 🧾 Get all submissions
export const getAllSubmissions = async (req, res) => {
  try {
    const submissions = await Submission.find().populate("assignment");
    res.json(submissions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching submissions" });
  }
};

// 🧠 Submit code for grading
export const createSubmission = async (req, res) => {
  try {
    const { assignmentId, code, language, studentName } = req.body;

    const assignment = await Assignment.findById(assignmentId);
    if (!assignment) return res.status(404).json({ message: "Assignment not found" });

    const randomScore = Math.floor(Math.random() * 100);
    const status = randomScore >= 50 ? "Passed" : "Failed";

    const submission = await Submission.create({
      assignment: assignmentId,
      studentName,
      code,
      language,
      score: randomScore,
      status,
    });

    res.status(201).json(submission);
  } catch (error) {
    res.status(500).json({ message: "Error submitting code" });
  }
};

// 📜 Get submissions by student name
export const getSubmissionsByStudent = async (req, res) => {
  try {
    const submissions = await Submission.find({ studentName: req.params.studentName }).populate("assignment");
    res.json(submissions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching student submissions" });
  }
};
