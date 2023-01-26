import React from "react";

import "../../App.css";

import {
  transformCelcium,
  transformFahrenheit,
  generateDate,
} from "../../date";

export const Current_Weather = ({ data, forecast, index, loop,day}) => {
  const { main, city, weather, wind } = data;
  const { temp } = main;

  return (
    <div
      className="box"
      title={`
    Wind: ${wind.speed}/sec Pressure: ${main.pressure}hPa
    
    `}
    >
      {forecast === "true" ? "" : <div className="wave -one"></div>}

      <div className="weathercon">
        {!loop && (
          <i
            className={
              transformCelcium(temp) > 22
                ? "hot-style description"
                : "cold-style description"
            }
          >
            {weather[0].main}
          </i>
        )}
      </div>
      <div className="info">
        {loop && <p className="date loop">{generateDate(loop, index,day)}</p>}
        {loop && (
          <i
            className={
              transformCelcium(temp) > 22
                ? "hot-style description-loop"
                : "cold-style description-loop"
            }
          >
            {weather[0].main}
          </i>
        )}
        <img
          src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
          alt="icon"
          className="icon"
        />
        <h2
          className={transformCelcium(temp) > 22 ? "hot-style" : "cold-style"}
        >
          {forecast === "true"
            ? ""
            : city?.label
            ? city.label
            : "In Your Location"}
        </h2>
        {!loop && <p className="date">{generateDate(loop, index)}</p>}
        <h1
          className={transformCelcium(temp) > 22 ? "hot-style" : "cold-style"}
        >
          {transformCelcium(temp)} &deg;C | {transformFahrenheit(temp)} &deg;F
        </h1>
      </div>
    </div>
  );
};
