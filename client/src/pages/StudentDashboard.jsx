import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useSocket } from "../context/SocketContext";
// import axios from "axios";

const StudentDashboard = () => {
  const navigate = useNavigate();
  // const { socket } = useSocket();

  // Sample client-side data
  const [assignments, setAssignments] = useState([
    {
      _id: "1",
      title: "Python Basics",
      language: "python",
      deadline: new Date().toISOString(),
    },
    {
      _id: "2",
      title: "C++ Loops",
      language: "cpp",
      deadline: new Date(Date.now() + 86400000).toISOString(),
    },
    {
      _id: "3",
      title: "JS Functions",
      language: "javascript",
      deadline: new Date(Date.now() + 2 * 86400000).toISOString(),
    },
  ]);

  const [submissions, setSubmissions] = useState([
    {
      assignmentTitle: "Python Basics",
      score: 10,
      status: "Passed",
      submittedAt: new Date().toISOString(),
    },
    {
      assignmentTitle: "C++ Loops",
      score: 5,
      status: "Failed",
      submittedAt: new Date().toISOString(),
    },
  ]);

  // Navigate to live editor (mock)
  const handleOpenEditor = (assignmentId) => {
    alert(`Open editor for assignment ID: ${assignmentId}`);
    // navigate(`/live-editor?assignment=${assignmentId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🎓 Student Dashboard</h1>

      {/* Active Assignments */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Active Assignments</h2>
        {assignments.length === 0 ? (
          <p className="text-gray-500">No active assignments available.</p>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3">Title</th>
                <th className="text-left p-3">Language</th>
                <th className="text-left p-3">Deadline</th>
                <th className="text-center p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((a) => (
                <tr key={a._id} className="border-b hover:bg-gray-100">
                  <td className="p-3">{a.title}</td>
                  <td className="p-3 capitalize">{a.language}</td>
                  <td className="p-3">{new Date(a.deadline).toLocaleString()}</td>
                  <td className="text-center p-3">
                    <button
                      onClick={() => handleOpenEditor(a._id)}
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                    >
                      Open Editor
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Previous Submissions */}
      <div className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Previous Submissions</h2>
        {submissions.length === 0 ? (
          <p className="text-gray-500">No submissions yet.</p>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3">Assignment</th>
                <th className="text-left p-3">Score</th>
                <th className="text-left p-3">Status</th>
                <th className="text-left p-3">Submitted At</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((s, index) => (
                <tr key={index} className="border-b hover:bg-gray-100">
                  <td className="p-3">{s.assignmentTitle || "N/A"}</td>
                  <td className="p-3 font-semibold">{s.score ?? "-"}</td>
                  <td
                    className={`p-3 font-medium ${
                      s.status === "Passed" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {s.status}
                  </td>
                  <td className="p-3">
                    {s.submittedAt ? new Date(s.submittedAt).toLocaleString() : "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;