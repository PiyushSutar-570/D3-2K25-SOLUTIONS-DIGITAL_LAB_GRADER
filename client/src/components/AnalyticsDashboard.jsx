import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const mockData = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 70 },
  { name: "Charlie", score: 95 },
  { name: "David", score: 60 },
  { name: "Eve", score: 80 },
];

const AnalyticsDashboard = ({ fetchFromBackend = false }) => {
  const [data, setData] = useState(mockData);

  useEffect(() => {
    if (fetchFromBackend) {
      // Example: Replace this with real API call
      // axios.get("http://localhost:5000/api/analytics")
      //   .then(res => setData(res.data))
      //   .catch(err => console.error(err));
    }
  }, [fetchFromBackend]);

  const averageScore = (
    data.reduce((acc, cur) => acc + cur.score, 0) / data.length
  ).toFixed(2);

  return (
    <div className="p-6 min-h-screen bg-gray-50 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">📊 Analytics Dashboard</h1>

      {/* Average Score */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-8 text-center">
        <h2 className="text-xl font-semibold mb-2">Class Average Score</h2>
        <p className="text-4xl font-bold text-blue-600">{averageScore}</p>
      </div>

      {/* Score Bar Chart */}
      <div className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Student Scores</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="score" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;