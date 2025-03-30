import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="nav-links">
        <Link to="/">Dashboard</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Task">Task</Link>
      </div>
    </div>
  );
}
