import React from "react";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
import Classes from "./pages/classes/Classes";
import HomeWork from "./pages/homework/HomeWork";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/classes" element={<Classes />} />
      <Route path="/homework" element={<HomeWork />} />
    </Routes>
  );
};

export default App;
