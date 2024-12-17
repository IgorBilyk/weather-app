import React, { useState, useEffect } from "react";
import "./App.css";
import { CurrentWeather } from "./components/current_weather/CurrentWeather";
import { Forecast } from "./components/forecast/Forecast";
import { Search } from "./components/search/Search";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);
  //Get weather for current location of user if he allows to see his geo
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const fetchCurrentWeather = await fetch(
        `${process.env.REACT_APP_WEATHER_URL}weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      )
        .then((response) => response.json())
        .catch((err) => console.log(err));
      setCurrentWeather(fetchCurrentWeather);
    });
  }, []);

  const handleSearchChange = async (data) => {
    const [lat, lon] = data?.value.split(" ");
    const fetchCurrentWeather = fetch(
      `${process.env.REACT_APP_WEATHER_URL}weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    );
    const fetchForecastWeather = fetch(
      `${process.env.REACT_APP_WEATHER_URL}forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    );
    Promise.all([fetchCurrentWeather, fetchForecastWeather])
      .then(async (response) => {
        const currentWeather = await response[0].json();
        const forecastWeather = await response[1].json();
        setCurrentWeather({ city: data, ...currentWeather });
        setForecastWeather(forecastWeather);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <Search onSearchChange={handleSearchChange} />
      {currentWeather && (
        <CurrentWeather data={currentWeather} forecast="false" />
      )}
      {forecastWeather && <Forecast forecastWeather={forecastWeather} />}
    </div>
  );
}

export default App;
