import React from 'react';

// This component is purely for presentation. It accepts data and error props.
function Weather({ city, data, error }) {
  if (error) {
    return (
      <div className="weather-card error-card">
        <h3>{city}</h3>
        <p style={{ color: 'red' }}>{error}</p>
      </div>
    );
  }

  return (
    <div className="weather-card">
      {data ? (
        <>
          {/* Display city name from prop */}
          <h3>{city}</h3> 
          <p>🌡️ Temp: {data.currentConditions?.temp}°C</p>
          <p>💧 Humidity: {data.currentConditions?.humidity}%</p>
          <p>🌥️ {data.currentConditions?.conditions}</p>
        </>
      ) : (
        <>
          <h3>{city}</h3>
          <p>Loading...</p>
        </>
      )}
    </div>
  );
}

export default Weather;