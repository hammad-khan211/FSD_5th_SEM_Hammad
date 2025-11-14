import React, { useState, useEffect } from "react";
import "./Content.css";
// Import the renamed display component
import Weather from "./Weather"; 

const Content = () => {
  const cities = [
    "Delhi,IN",
    "Lucknow,IN",
    "Kanpur,IN",
    "Lakhimpur-Kheri,IN",
    "Mumbai,IN",
    "Chennai,IN",
    "Hyderabad,IN",
    "Kolkata,IN"
  ];
  
  // State to store the weather data for ALL cities
  // Structure: [{ city: 'Delhi,IN', data: {...}, error: null }, ...]
  const [allWeather, setAllWeather] = useState(
    cities.map(city => ({ city: city, data: null, error: null }))
  );
  
  const apiKey = "WZKYWYEVPPCSNQZPJ7KNNF9TN";
  const unitGroup = "metric";
  const contentType = "json";

  useEffect(() => {
    const fetchAllWeatherSequentially = async () => {
      // Create a copy of the current state to modify during the loop
      let updatedWeather = [...allWeather];
      
      for (let i = 0; i < cities.length; i++) {
        const location = cities[i];
        
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(
          location
        )}?unitGroup=${unitGroup}&key=${apiKey}&contentType=${contentType}`;

        try {
          // 1. Fetch the data
          const response = await fetch(url);
          
          if (!response.ok) {
            throw new Error("Failed to fetch weather. Check API key or location.");
          }

          const weatherData = await response.json();
          
          // 2. Update the specific city's entry in the array
          updatedWeather[i] = { ...updatedWeather[i], data: weatherData, error: null };
          
          // 3. Update state *after* each successful fetch (optional: shows progress)
          setAllWeather([...updatedWeather]); 

        } catch (errorResponse) {
          console.error(`Error fetching weather for ${location}:`, errorResponse);
          
          // 4. Update state with the error
          updatedWeather[i] = { ...updatedWeather[i], data: null, error: "Fetch failed." };
          setAllWeather([...updatedWeather]);
        }
        
        // IMPORTANT: Introduce a brief pause before the next request
        // This is crucial for solving rate-limiting issues when fetching sequentially.
        await new Promise(resolve => setTimeout(resolve, 500)); // Wait 500ms between requests
      }
    };

    fetchAllWeatherSequentially();
    
    // Empty dependency array ensures this runs only once on mount
  }, []); 

  return (
    <div className="content">
      <div className="content-container">
        <h2 className="content-title">Today's Weather Across India</h2>

        <div className="weather-grid">
          {/* Map over the state that contains the fetched results */}
          {allWeather.map((item) => (
            <Weather 
              key={item.city} 
              city={item.city} 
              data={item.data} 
              error={item.error} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;