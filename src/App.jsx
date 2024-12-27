import React from "react";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
import Exams from "./pages/exams/Exams";
import Classes from "./pages/classes/Classes";
import HomeWork from "./pages/homework/HomeWork";
import HWResalt from "./pages/homeWorkResalt/HWResalt";
import Resources from "./pages/resources/Resources";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/classes" element={<Classes />} />
      <Route path="/exams" element={<Exams />} />
      <Route path="/exams-results" element={<Exams />} />
      <Route path="/homework" element={<HomeWork />} />
      <Route path="/hw-results" element={<HWResalt />} />
      <Route path="/resources" element={<Resources />} />
    </Routes>
  );
};

export default App;
