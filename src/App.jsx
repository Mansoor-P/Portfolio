import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./LandingPage";
import ProjectsSinglePage from "./sections/Projects/ProjectsSinglePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/projects/:id" element={<ProjectsSinglePage />} />
    </Routes>
  );
}

export default App;
