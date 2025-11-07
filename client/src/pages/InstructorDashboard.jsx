import React, { useEffect, useState } from "react";
// import { useSocket } from "../context/SocketContext";
// import axios from "axios";
import AnalyticsDashboard from "../components/AnalyticsDashboard";
import Leaderboard from "../components/LeaderBoard";
import AssignmentForm from "../components/AssignmentForm";

const InstructorDashboard = () => {
  // const { socket } = useSocket();
  const [assignments, setAssignments] = useState([]);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [submissions, setSubmissions] = useState([]);

  // =========================
  // Sample data for client-side mock
  const sampleAssignments = [
    { _id: "1", title: "Python Basics" },
    { _id: "2", title: "C++ Loops" },
    { _id: "3", title: "JavaScript Arrays" },
  ];

  const sampleSubmissions = [
    {
      studentName: "Piyush",
      score: 8,
      status: "Passed",
      submittedAt: new Date().toLocaleString(),
      assignmentId: "1",
    },
    {
      studentName: "Rahul",
      score: 5,
      status: "Failed",
      submittedAt: new Date().toLocaleString(),
      assignmentId: "1",
    },
  ];
  // =========================

  // Fetch assignments from backend (commented)
  /*
  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/assignments");
        setAssignments(res.data);
      } catch (err) {
        console.error("Error fetching assignments:", err);
      }
    };
    fetchAssignments();
  }, []);
  */

  // Use sample data for now
  useEffect(() => {
    setAssignments(sampleAssignments);
    setSubmissions(sampleSubmissions);
  }, []);

  // Listen for real-time submissions via socket (commented)
  /*
  useEffect(() => {
    if (!socket) return;
    socket.on("new_submission", (data) => {
      console.log("📩 New submission received:", data);
      setSubmissions((prev) => [...prev, data]);
    });

    return () => socket.off("new_submission");
  }, [socket]);
  */

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        🧑‍🏫 Instructor Dashboard
      </h1>

      {/* Assignment Management Section */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Create New Assignment
        </h2>
        <AssignmentForm />
      </div>

      {/* Assignment Selection */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Select Assignment to View Analytics
        </h2>
        <select
          className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
          onChange={(e) => setSelectedAssignment(e.target.value)}
        >
          <option value="">-- Select Assignment --</option>
          {assignments.map((a) => (
            <option key={a._id} value={a._id}>
              {a.title}
            </option>
          ))}
        </select>
      </div>

      {/* Analytics & Leaderboard */}
      {selectedAssignment && (
        <div className="grid md:grid-cols-2 gap-6">
          <AnalyticsDashboard assignmentId={selectedAssignment} />
          <Leaderboard
            assignmentId={selectedAssignment}
            submissions={submissions.filter(
              (s) => s.assignmentId === selectedAssignment
            )}
          />
        </div>
      )}
    </div>
  );
};

export default InstructorDashboard;
