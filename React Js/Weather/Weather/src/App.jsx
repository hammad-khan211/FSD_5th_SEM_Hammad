import React, { useState, useEffect } from "react";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
     fetch("https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=ddbf5efb5892268530104cc95413bb93&units=metric")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch weather. Check API key or city name.");
        }
        return res.json();
      })
      .then((data) => setWeather(data))
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  }, []);

  if (error) {
    return (
      <div style={{ textAlign: "center", marginTop: "20px", color: "red" }}>
        ⚠️ {error}
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {weather ? (
        <>
          <h2>{weather.name} Weather</h2>
          <p>🌡️ {weather.main?.temp}°C</p>
          <p>💧 Humidity: {weather.main?.humidity}%</p>
          <p>🌥️ {weather.weather?.[0]?.description}</p>
        </>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
}

export default Weather;
