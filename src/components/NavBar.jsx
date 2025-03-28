import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <div>
        <Link to="/">Dashboard</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Task">Task</Link>
      </div>
    </div>
  );
}
