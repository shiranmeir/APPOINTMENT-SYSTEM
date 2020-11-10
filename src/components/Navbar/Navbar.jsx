import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-title">Clalit.</div>
      <div className="navbar-links">
        <Link className="link" to="/">
          Logout
        </Link>
      </div>
    </header>
  );
}
