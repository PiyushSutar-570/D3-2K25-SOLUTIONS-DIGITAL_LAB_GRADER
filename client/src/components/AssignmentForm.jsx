import React, { useState } from "react";
import { motion } from "framer-motion";

export default function AssignmentForm() {
  const [formData, setFormData] = useState({
    title: "",
    deadline: "",
    language: "python",
    testCases: [],
  });

  const [message, setMessage] = useState("");
  const [assignments, setAssignments] = useState([]); // Client-side storage

  // Input change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // File upload handler
  const handleFileChange = (e) => {
    setFormData({ ...formData, testCases: Array.from(e.target.files) });
  };

  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    // === Client-side storage ===
    const newAssignment = {
      title: formData.title,
      deadline: formData.deadline,
      language: formData.language,
      testCases: formData.testCases.map((file) => file.name),
    };
    setAssignments([...assignments, newAssignment]);
    setMessage("✅ Assignment created successfully!");

    // Reset form
    setFormData({ title: "", deadline: "", language: "python", testCases: [] });

    // === Backend integration placeholder ===
    /*
    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("deadline", formData.deadline);
      data.append("language", formData.language);
      formData.testCases.forEach((file) => data.append("testCases", file));

      await axios.post("/api/assignments", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to create assignment. Try again.");
    }
    */
  };

  return (
    <div className="w-full bg-gray-900 text-white rounded-2xl shadow-lg border border-gray-800 p-6">
      <h2 className="text-xl font-semibold mb-4">🧾 Create New Assignment</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Assignment Title"
          className="input-field"
          required
        />

        <input
          type="datetime-local"
          name="deadline"
          value={formData.deadline}
          onChange={handleChange}
          className="input-field"
          required
        />

        <select
          name="language"
          value={formData.language}
          onChange={handleChange}
          className="input-field"
        >
          <option value="python">Python</option>
          <option value="cpp">C++</option>
          <option value="javascript">JavaScript</option>
        </select>

        <input
          type="file"
          name="testCases"
          multiple
          onChange={handleFileChange}
          className="input-field"
        />

        <motion.button
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="submit-btn"
        >
          Create Assignment
        </motion.button>
      </form>

      {message && <p className="text-center mt-4">{message}</p>}

      {/* Display assignments */}
      {assignments.length > 0 && (
        <div className="mt-6">
          <h3 className="font-semibold mb-2">📄 Submitted Assignments</h3>
          <ul>
            {assignments.map((a, idx) => (
              <li key={idx} className="mb-1 border-b border-gray-700 pb-1">
                <strong>{a.title}</strong> - {a.language} - Deadline: {a.deadline}
                <br />
                Test Cases: {a.testCases.join(", ")}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
