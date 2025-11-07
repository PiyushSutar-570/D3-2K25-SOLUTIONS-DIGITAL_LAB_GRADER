import axios from "axios";

// ✅ Create a single axios instance for all API requests
const API = axios.create({
  baseURL: "http://localhost:5000/api", // your Express backend base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// ================================
// 📘 Instructor APIs
// ================================

// Create a new assignment
export const createAssignment = async (assignmentData) => {
  const res = await API.post("/assignments", assignmentData);
  return res.data;
};

// Fetch all assignments
export const fetchAssignments = async () => {
  const res = await API.get("/assignments");
  return res.data;
};

// Upload test cases (input/output files)
export const uploadTestCases = async (formData) => {
  const res = await API.post("/assignments/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};

// Get analytics data for an assignment
export const fetchAnalytics = async (assignmentId) => {
  const res = await API.get(`/analytics/${assignmentId}`);
  return res.data;
};

// ================================
// 🎓 Student APIs
// ================================

// Fetch all assignments (student view)
export const getAllAssignments = async () => {
  const res = await API.get("/assignments");
  return res.data;
};

// Execute code (temporary run)
export const executeCode = async (code, language) => {
  const res = await API.post("/execute", { code, language });
  return res.data;
};

// Submit code for grading
export const submitAssignment = async (code, language, assignmentId) => {
  const res = await API.post("/submit", { code, language, assignmentId });
  return res.data;
};

// Get previous submissions for a student
export const fetchSubmissions = async (studentId) => {
  const res = await API.get(`/submissions/${studentId}`);
  return res.data;
};

export default API;
