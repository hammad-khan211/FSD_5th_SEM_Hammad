import React, { useState, useEffect } from "react";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const apiKey = "WZKYWYEVPPCSNQZPJ7KNNF9TN"; // ✅ your Visual Crossing key
      const location = "Delhi,IN"; // you can change city here
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
        console.log(weatherData); // view full API response in console
        setWeather(weatherData);
      } catch (errorResponse) {
        console.error("Error fetching weather:", errorResponse);
        setError("Unable to fetch weather data. Please try again later.");
      }
    };

    fetchWeatherData();
  }, []);

  if (error) {
    return (
      <div style={{ textAlign: "center", marginTop: "20px", color: "red" }}>
        {error}
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {weather ? (
        <>
          <h2>{weather.resolvedAddress} Weather</h2>
          <p>🌡️ Temp: {weather.currentConditions?.temp}°C</p>
          <p>💧 Humidity: {weather.currentConditions?.humidity}%</p>
          <p>🌥️ {weather.currentConditions?.conditions}</p>
        </>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
}

export default Weather;
