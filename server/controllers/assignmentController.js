import Assignment from "../models/assignmentModel.js";

// 📦 Get all assignments
export const getAllAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find().sort({ createdAt: -1 });
    res.json(assignments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching assignments" });
  }
};

// ➕ Create a new assignment
export const createAssignment = async (req, res) => {
  try {
    const { title, description, language, deadline } = req.body;
    const newAssignment = await Assignment.create({
      title,
      description,
      language,
      deadline,
    });
    res.status(201).json(newAssignment);
  } catch (error) {
    res.status(500).json({ message: "Error creating assignment" });
  }
};

// 🔍 Get a single assignment by ID
export const getAssignmentById = async (req, res) => {
  try {
    const assignment = await Assignment.findById(req.params.id);
    if (!assignment) {
      return res.status(404).json({ message: "Assignment not found" });
    }
    res.json(assignment);
  } catch (error) {
    res.status(500).json({ message: "Error fetching assignment" });
  }
};

// ✏️ Update an assignment
export const updateAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!assignment) {
      return res.status(404).json({ message: "Assignment not found" });
    }
    res.json(assignment);
  } catch (error) {
    res.status(500).json({ message: "Error updating assignment" });
  }
};

// ❌ Delete an assignment
export const deleteAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.findByIdAndDelete(req.params.id);
    if (!assignment) {
      return res.status(404).json({ message: "Assignment not found" });
    }
    res.json({ message: "Assignment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting assignment" });
  }
};