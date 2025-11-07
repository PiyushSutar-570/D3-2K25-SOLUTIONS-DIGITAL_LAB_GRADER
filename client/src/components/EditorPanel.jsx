import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { motion } from "framer-motion";
const onRun = async (code) => {
    console.log("Running code:", code);
    return { output: "Mock output from server" };
};
export default function EditorPanel({ language = "python"}) {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState(""); // Client-side output
  const [isRunning, setIsRunning] = useState(false);

  // Mock client-side run function
  const handleRun = async () => {
    setIsRunning(true);
    setOutput(""); // Reset previous output

    // === Client-side mock execution ===
    // For demonstration, we just echo the code or simulate output
    setTimeout(() => {
      setOutput(`✅ Code executed successfully!\n\nYour code:\n${code}`);
      setIsRunning(false);
    }, 1000);

    // === Backend API integration placeholder ===
    // Uncomment and adjust when connecting to backend:
    /*
    if (onRun) {
      try {
        setIsRunning(true);
        const result = await onRun(code); // e.g., POST to API
        setOutput(result.output);
      } catch (err) {
        setOutput("❌ Error running code.");
        console.error(err);
      } finally {
        setIsRunning(false);
      }
    }
    */
  };

  return (
    <div className="flex flex-col w-full h-full bg-gray-900 text-white rounded-2xl shadow-lg border border-gray-800">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 rounded-t-2xl">
        <h2 className="text-lg font-semibold">Code Editor</h2>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={handleRun}
          disabled={isRunning}
          className={`px-4 py-1 rounded-md text-sm font-medium ${
            isRunning
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-500"
          }`}
        >
          {isRunning ? "Running..." : "Run Code"}
        </motion.button>
      </div>

      {/* Monaco Editor */}
      <div className="flex-1">
        <Editor
          height="60vh"
          defaultLanguage={language}
          theme="vs-dark"
          value={code}
          onChange={(value) => setCode(value || "")}
          options={{
            fontSize: 14,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            automaticLayout: true,
          }}
        />
      </div>

      {/* Output Panel */}
      <div className="mt-2 p-3 bg-gray-800 rounded-b-2xl h-32 overflow-auto font-mono text-sm">
        <pre>{output}</pre>
      </div>
    </div>
  );
}