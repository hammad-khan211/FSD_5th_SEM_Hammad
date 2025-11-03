import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
    <nav className="navbar">
      <div className="nav-logo">BookStore</div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#books">Books</a></li>
        <li><a href="#categories">Categories</a></li>
        <li><a href="#about">About</a></li>
      </ul>

      <button className="nav-btn">Login</button>
    </nav>
    </div>
  );
}

export default Navbar;
