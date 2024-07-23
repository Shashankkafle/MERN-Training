import React, { useState, useEffect } from "react";

const SearchFrom = ({ weatherData, isLoading }) => {
  const [city, setCity] = useState("");
  const [fetchWeather, setFetchWeather] = useState(false);

  useEffect(() => {
    if (fetchWeather) {
      const fetchWeatherData = async () => {
        const apiKey = "40d07c48b1e547bd89a94717241907";
        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

        try {
          isLoading(true);
          weatherData((prev) => prev && null);
          const response = await fetch(apiUrl);
          const data = await response.json();
          if (response.ok) {
            weatherData(data);
          } else {
            console.error("data.message");
          }
        } catch (error) {
          console.error("Failed to fetch weather data:", error);
        } finally {
          isLoading(false);
          setFetchWeather(false);
        }
      };
      fetchWeatherData();
    }
  }, [fetchWeather]);

  const handleGetWeather = (e) => {
    e.preventDefault();
    setFetchWeather((prev) => {
      return !prev;
    });
  };
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  return (
    <div>
      <form onSubmit={handleGetWeather} className="mb-6 relative">
        <label htmlFor="city" className="block text-blue-700 font-medium mb-2">
          Enter City:
        </label>
        <div className="flex items-center">
          <input
            type="text"
            id="city"
            name="city"
            className="mt-1 px-4 py-2 block w-64 h-12 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-500"
            placeholder="Enter city name"
            value={city}
            onChange={handleCityChange}
          />
          <button
            type="submit"
            className="ml-1 bg-blue-500 text-white py-2 px-4 h-12 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Get Weather
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchFrom;
