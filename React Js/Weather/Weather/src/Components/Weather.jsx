import React, { useState, useEffect } from "react";

function Weather({ city }) {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const apiKey = "WZKYWYEVPPCSNQZPJ7KNNF9TN";
      const location = city || "Delhi,IN";
      const unitGroup = "metric";
      const contentType = "json";

      const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(
        location
      )}?unitGroup=${unitGroup}&key=${apiKey}&contentType=${contentType}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch weather. Check API key or location.");
        }

        const weatherData = await response.json();
        setWeather(weatherData);
      } catch (errorResponse) {
        console.error("Error fetching weather:", errorResponse);
        setError("Unable to fetch weather data. Please try again later.");
      }
    };

    fetchWeatherData();
  }, [city]);

  if (error) {
    return (
      <div className="weather-card error-card">
        <p style={{ color: "red" }}>{error}</p>
      </div>
    );
  }

  return (
    <div className="weather-card">
      {weather ? (
        <>
          <h3>{weather.resolvedAddress}</h3>
          <p>🌡️ Temp: {weather.currentConditions?.temp}°C</p>
          <p>💧 Humidity: {weather.currentConditions?.humidity}%</p>
          <p>🌥️ {weather.currentConditions?.conditions}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Weather;
