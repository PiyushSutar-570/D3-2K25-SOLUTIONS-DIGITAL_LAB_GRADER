import React, { useState } from "react";
import EditorPanel from "../components/EditorPanel";
import RunOutput from "../components/RunOutput";
import SubmissionResult from "../components/SubmissionResult";
// import { useSocket } from "../context/SocketContext";
// import axios from "axios";

const LiveEditorPage = () => {
  // const { sendCodeUpdate, sendSubmission } = useSocket();
  const [language, setLanguage] = useState("python");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // 🧪 Run Code (client-side mock)
  const handleRunCode = async () => {
    setLoading(true);
    setOutput(""); // reset previous output

    // === Client-side mock execution ===
    setTimeout(() => {
      setOutput(`✅ Code executed successfully!\n\nYour code:\n${code || "// Write something here"}`);
      setLoading(false);
    }, 1000);

    // === Backend API call (commented) ===
    /*
    try {
      const res = await axios.post("http://localhost:5000/api/execute", {
        code,
        language,
      });
      setOutput(res.data.output);
      sendCodeUpdate({ code, output: res.data.output });
    } catch (err) {
      setOutput("❌ Error executing code");
      console.error(err);
    }
    setLoading(false);
    */
  };

  // 📤 Submit Code (client-side mock)
  const handleSubmit = async () => {
    setLoading(true);

    // === Client-side mock submission ===
    setTimeout(() => {
      const mockResult = {
        totalScore: 3,
        results: [
          { input: "5,3", expected: "8", output: "8", passed: true, points: 1 },
          { input: "2,2", expected: "4", output: "5", passed: false, points: 0 },
          { input: "10,20", expected: "30", output: "30", passed: true, points: 2 },
        ],
      };
      setResult(mockResult);
      setLoading(false);
    }, 1500);

    // === Backend API call (commented) ===
    /*
    try {
      const res = await axios.post("http://localhost:5000/api/submit", {
        code,
        language,
      });
      setResult(res.data);
      sendSubmission(res.data);
    } catch (err) {
      setResult({ error: "❌ Submission failed" });
      console.error(err);
    }
    setLoading(false);
    */
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">💻 Live Coding Editor</h1>

      {/* Language Selector */}
      <div className="flex justify-center mb-4">
        <select
          className="p-2 border rounded-lg focus:ring focus:ring-blue-300"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="python">Python</option>
          <option value="cpp">C++</option>
          <option value="javascript">JavaScript</option>
        </select>
      </div>

      {/* Code Editor */}
      <EditorPanel language={language} />

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 my-4">
        <button
          onClick={handleRunCode}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          disabled={loading}
        >
          ▶ Run Code
        </button>
        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          disabled={loading}
        >
          🚀 Submit
        </button>
      </div>

      {/* Output & Result Sections */}
      <RunOutput output={output} error="" execTime={45} />
      {result && <SubmissionResult results={result.results} totalScore={result.totalScore} />}
    </div>
  );
};

export default LiveEditorPage;
