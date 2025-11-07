import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-gray-900 text-white px-6 py-3 flex justify-between items-center shadow-md border-b border-gray-800"
    >
      <h1 className="text-lg font-bold tracking-wide">Digital TA</h1>

      <div className="flex gap-4 text-sm">
        <NavLink
          to="/student"
          className={({ isActive }) =>
            `hover:text-blue-400 ${isActive ? "text-blue-500 font-semibold" : "text-gray-300"}`
          }
        >
          Student Dashboard
        </NavLink>
        <NavLink
          to="/instructor"
          className={({ isActive }) =>
            `hover:text-blue-400 ${isActive ? "text-blue-500 font-semibold" : "text-gray-300"}`
          }
        >
          Instructor Dashboard
        </NavLink>
        <NavLink
          to="/live"
          className={({ isActive }) =>
            `hover:text-blue-400 ${isActive ? "text-blue-500 font-semibold" : "text-gray-300"}`
          }
        >
          Live Editor
        </NavLink>
      </div>
    </motion.nav>
  );
}
