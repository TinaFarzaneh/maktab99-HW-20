import React, { useState, useEffect } from "react";
import { Wrapper } from "../base/Wrapper";
import axios from "axios";

export const WheatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("tehran");

  const API_KEY = "ec26934cfe7d49f2905191700231411";
  // const API_BASE_URL = `https://api.weatherapi.com/v1/current.json`;
  // const city = "tehran";

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          // `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
          `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${searchTerm}`
        );
        setWeatherData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, [searchTerm, API_KEY]);

  const handleSearch = (newSearchTerm) => {
    console.log(searchTerm);
    setSearchTerm(newSearchTerm);
  };
  // return <Wrapper weatherData={weatherData} />;
  return <Wrapper weatherData={weatherData} handleSearch={handleSearch} />;
};
