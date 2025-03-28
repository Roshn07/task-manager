import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Dashboard from "./pages/Dashboard";
import Task from "./pages/Task";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/Task" element={<Task />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}
