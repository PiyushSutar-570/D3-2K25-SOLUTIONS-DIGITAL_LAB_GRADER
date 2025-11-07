import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gray-900 text-gray-400 text-sm py-4 text-center border-t border-gray-800 mt-6"
    >
      <p>
        © {new Date().getFullYear()} <span className="text-blue-400 font-semibold">Digital TA</span> — Empowering Smart Learning 💡
      </p>
    </motion.footer>
  );
}
