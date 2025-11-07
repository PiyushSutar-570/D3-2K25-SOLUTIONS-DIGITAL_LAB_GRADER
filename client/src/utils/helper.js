// ================================
// 📆 TIME & DATE HELPERS
// ================================

// Format date-time into readable format
export const formatDateTime = (dateString) => {
  if (!dateString) return "-";
  const date = new Date(dateString);
  return date.toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

// Calculate how much time left until deadline
export const getTimeRemaining = (deadline) => {
  const total = Date.parse(deadline) - Date.now();
  if (total <= 0) return "Deadline Passed";
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return `${days}d ${hours}h ${minutes}m left`;
};

// ================================
// 🧠 GRADING HELPERS
// ================================

// Calculate total score based on passed test cases
export const calculateScore = (results) => {
  if (!results || results.length === 0) return 0;
  return results.reduce(
    (total, test) => total + (test.passed ? test.points : 0),
    0
  );
};

// Generate grade letter from score
export const getGrade = (score, total) => {
  const percent = (score / total) * 100;
  if (percent >= 90) return "A+";
  if (percent >= 80) return "A";
  if (percent >= 70) return "B";
  if (percent >= 60) return "C";
  if (percent >= 50) return "D";
  return "F";
};

// ================================
// ⚙️ OUTPUT HELPERS
// ================================

// Compare actual vs expected output (for backend use)
export const compareOutputs = (expected, actual) => {
  return expected.trim() === actual.trim();
};

// Format code execution time in readable form
export const formatExecutionTime = (ms) => {
  if (ms < 1000) return `${ms} ms`;
  return `${(ms / 1000).toFixed(2)} s`;
};

// ================================
// 🧾 RESULT DISPLAY HELPERS
// ================================

// Simplify long strings (like code snippets)
export const truncateText = (text, maxLength = 100) => {
  if (!text) return "";
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

// Capitalize first letter of a word
export const capitalize = (text) => {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
};
