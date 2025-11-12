import React from "react";
import "./Content.css";
import Weather from "./Weather";

const Content = () => {
  const cities = [
    "Delhi,IN",
    "Lucknow,IN",
    "Hyderabad,IN",
    "Mumbai,IN",
    "Lakhimpur-Kheri,IN",
    "Ghaziabad,IN",
    "Chennai,IN",
    "Shimla,IN"
  ];

  return (
    <div className="content">
      <div className="content-container">
        <h2 className="content-title">Today's Weather Across India</h2>

        <div className="weather-grid">
          {cities.map((city, index) => (
            <Weather key={index} city={city} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
