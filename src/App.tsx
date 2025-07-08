import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "./pages/Profile";
import Project from "./pages/Project";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/projects/:name" element={<Project />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
