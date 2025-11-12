// src/Component/Navbar.jsx
import React from "react";
import "./navbar.css";
import {Routes,Route,Link} from 'react-router-dom'

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


        <Link to="/Login">
          <button className="nav-btn">Login</button>
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
