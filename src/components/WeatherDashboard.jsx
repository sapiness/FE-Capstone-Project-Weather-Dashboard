import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';
import ErrorMessage from './ErrorMessage';
function WeatherDashboard() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchWeatherData = async () => {
    
      try {
        const apikey = import.meta.env.REACT_APP_API_KEY;
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID={apikey}`);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        setError('Failed to fetch weather data');
      }
    };
    if (city) {
      fetchWeatherData();
    }
  }, [city]);
  const handleSearch = (cityName) => {
    setCity(cityName);
  };
  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage message={error} />}
      {weatherData && (
        <WeatherCard
          city={weatherData.name}
          temperature={weatherData.main.temp}
          humidity={weatherData.main.humidity}
          windSpeed={weatherData.wind.speed}
          weatherCondition={weatherData.weather[0].icon}
        />
      )}
    </div>
  );
}
export default WeatherDashboard;