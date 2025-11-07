import React, { useEffect, useState /*, useContext */ } from "react";
import { motion } from "framer-motion";
// import { SocketContext } from "../context/SocketContext"; // Uncomment when using sockets

export default function Leaderboard() {
  // const socket = useContext(SocketContext); // Commented out for now
  const [leaders, setLeaders] = useState([]);

  // Sample client-side leaderboard data
  const sampleData = [
    { id: 1, name: "Piyush Sutar", score: 95, lastSubmission: "2025-11-07 12:15" },
    { id: 2, name: "Ananya Singh", score: 90, lastSubmission: "2025-11-07 12:10" },
    { id: 3, name: "Rohan Sharma", score: 85, lastSubmission: "2025-11-07 11:50" },
    { id: 4, name: "Meera Joshi", score: 80, lastSubmission: "2025-11-07 11:30" },
  ];

  useEffect(() => {
    // === Client-side mock fetch ===
    setTimeout(() => {
      setLeaders(sampleData);
    }, 500);

    // === Socket code commented out for future backend integration ===
    /*
    // Fetch initial leaderboard
    socket.emit("getLeaderboard");

    // Receive updates
    socket.on("leaderboardData", (data) => {
      setLeaders(data);
    });

    return () => {
      socket.off("leaderboardData");
    };
    */
  }, [/* socket */]);

  return (
    <div className="w-full bg-gray-900 text-white rounded-2xl shadow-lg border border-gray-800 mt-4">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 rounded-t-2xl">
        <h2 className="text-lg font-semibold">🏆 Leaderboard</h2>
        <span className="text-sm text-gray-400">
          {leaders.length} Students Ranked
        </span>
      </div>

      {/* Table */}
      <div className="p-4 overflow-y-auto max-h-72">
        {leaders.length === 0 ? (
          <p className="text-gray-500 text-sm">No data yet. Waiting for submissions...</p>
        ) : (
          <table className="w-full text-sm border-separate border-spacing-y-2">
            <thead>
              <tr className="text-gray-400 text-left">
                <th className="py-1 px-2">Rank</th>
                <th className="py-1 px-2">Name</th>
                <th className="py-1 px-2">Score</th>
                <th className="py-1 px-2">Last Submission</th>
              </tr>
            </thead>
            <tbody>
              {leaders.map((student, index) => (
                <motion.tr
                  key={student.id || index}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`${
                    index === 0
                      ? "bg-yellow-800/40 border border-yellow-600"
                      : "bg-gray-800 hover:bg-gray-700"
                  } rounded-lg`}
                >
                  <td className="py-1 px-2 font-semibold">{index + 1}</td>
                  <td className="py-1 px-2">{student.name}</td>
                  <td className="py-1 px-2 text-green-400 font-semibold">
                    {student.score}
                  </td>
                  <td className="py-1 px-2 text-gray-400">
                    {student.lastSubmission || "-"}
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