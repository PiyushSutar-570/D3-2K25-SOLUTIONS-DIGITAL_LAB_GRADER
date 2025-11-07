import React from "react";
import { motion } from "framer-motion";

export default function RunOutput({ output, error, execTime }) {
  return (
    <div className="w-full bg-gray-900 text-white rounded-2xl shadow-lg border border-gray-800 mt-4">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 rounded-t-2xl">
        <h2 className="text-lg font-semibold">Execution Output</h2>
        {execTime && (
          <span className="text-sm text-gray-300">
            ⏱ Time: {execTime}s
          </span>
        )}
      </div>

      {/* Output */}
      <div className="p-4 font-mono text-sm overflow-y-auto max-h-60">
        {error && error.length > 0 ? (
          <motion.pre
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-400 whitespace-pre-wrap"
          >
            {error}
          </motion.pre>
        ) : output && output.length > 0 ? (
          <motion.pre
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-400 whitespace-pre-wrap"
          >
            {output}
          </motion.pre>
        ) : (
          <p className="text-gray-500">No output yet. Run your code to see results.</p>
        )}
      </div>
    </div>
  );
}
