import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <img
          src="https://img.freepik.com/premium-vector/uje-logo-design-initial-letter-uje-monogram-logo-using-hexagon-shape_1101554-53066.jpg?semt=ais_hybrid&w=740&q=80"
          alt="ABES Fashion Society Logo"
        />
        <h1>ABES Fashion Society</h1>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/fashion">Shop</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
