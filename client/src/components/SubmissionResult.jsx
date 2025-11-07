import React from "react";
import { motion } from "framer-motion";

export default function SubmissionResult({ results, totalScore }) {
  return (
    <div className="w-full bg-gray-900 text-white rounded-2xl shadow-lg border border-gray-800 mt-4">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 rounded-t-2xl">
        <h2 className="text-lg font-semibold">Submission Results</h2>
        <span className="text-sm text-gray-300">Total Score: {totalScore}</span>
      </div>

      {/* Results Table */}
      <div className="p-4 overflow-y-auto max-h-64">
        {results.length === 0 ? (
          <p className="text-gray-500 text-sm">No submissions yet.</p>
        ) : (
          <table className="w-full text-sm border-separate border-spacing-y-2">
            <thead>
              <tr className="text-gray-400 text-left">
                <th className="py-1 px-2">#</th>
                <th className="py-1 px-2">Input</th>
                <th className="py-1 px-2">Expected Output</th>
                <th className="py-1 px-2">Your Output</th>
                <th className="py-1 px-2">Result</th>
                <th className="py-1 px-2 text-right">Points</th>
              </tr>
            </thead>
            <tbody>
              {results.map((test, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800 hover:bg-gray-700 rounded-lg"
                >
                  <td className="py-1 px-2">{index + 1}</td>
                  <td className="py-1 px-2 text-gray-300">{test.input}</td>
                  <td className="py-1 px-2 text-gray-300">{test.expected}</td>
                  <td className="py-1 px-2 text-gray-300">{test.output}</td>
                  <td className="py-1 px-2">
                    {test.passed ? (
                      <span className="text-green-400 font-semibold">✅ Pass</span>
                    ) : (
                      <span className="text-red-400 font-semibold">❌ Fail</span>
                    )}
                  </td>
                  <td className="py-1 px-2 text-right text-gray-200">
                    {test.points}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
