/* eslint-disable react/prop-types */
import React from 'react';
function WeatherCard({ city, temperature, humidity, windSpeed, weatherCondition }) {
  return (
    <div>
      <h2 className="text-lg font-bold mb-2">{city}</h2>
      <p>Temperature: {temperature}°C</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind Speed: {windSpeed} m/s</p>
      <img src={`http://openweathermap.org/img/wn/${weatherCondition}@2x.png`} alt={weatherCondition} />
    </div>
  );
}
export default WeatherCard;