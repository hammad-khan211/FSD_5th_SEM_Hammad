import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">🌤️ WeatherNow</h1>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Forecast</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
