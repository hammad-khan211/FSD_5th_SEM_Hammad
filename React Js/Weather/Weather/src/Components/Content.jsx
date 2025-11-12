import React from "react";
import "./Content.css";
import Weather from "./Weather";

const Content = () => {
  return (
    <div className="content">
      <div className="content-container">
        <h2 className="content-title">Today's Weather</h2>
        <Weather /> {/* ✅ shows fetched weather data */}
      </div>
    </div>
  );
};

export default Content;
