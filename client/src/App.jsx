import { Routes, Route } from "react-router-dom";
import StudentDashboard from "./pages/StudentDashboard";
import InstructorDashboard from "./pages/InstructorDashboard";
import LiveEditorPage from "./pages/LiveEditorPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnalyticsDashboard from "./components/AnalyticsDashboard";
import EditorPanel from "./components/EditorPanel";
import Leaderboard from "./components/LeaderBoard";
import RunOutput from "./components/RunOutput";

function App() {
   const sampleResults = [
    {
      input: "5, 3",
      expected: "8",
      output: "8",
      passed: true,
      points: 2,
    },
    {
      input: "2, 2",
      expected: "4",
      output: "5",
      passed: false,
      points: 0,
    },
    {
      input: "10, 20",
      expected: "30",
      output: "30",
      passed: true,
      points: 2,
    },
  ];

  const totalScore = sampleResults.reduce((acc, test) => acc + test.points, 0);
  return (
    <>

     {/* <RunOutput output="Code executed successfully!" error="" execTime={45} /> */}
     {/* <SubmissionResult results={sampleResults} totalScore={totalScore} /> */}


      {/* actual part */}
      <Navbar />
      <Routes>
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/instructor" element={<InstructorDashboard />} />
        <Route path="/live" element={<LiveEditorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;