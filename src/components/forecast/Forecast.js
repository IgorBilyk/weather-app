import React from "react";

import { Current_Weather } from "../current_weather/Current_Weather";
import { WEEK } from "../../date";

export const Forecast = ({ forecastWeather }) => {
  const forecast = forecastWeather.list.filter((item) =>
    item.dt_txt.includes("15:00:00")
  );
 
  //Generate array with days in a week from today forward
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK
    .slice(dayInAWeek, WEEK.length)
    .concat(WEEK.slice(0, dayInAWeek));
  return (
    <div className="forecast-container">
      {forecast &&
        forecast.map((item, index) => (
          <Current_Weather
            data={item}
            key={index}
            forecast="true"
            index={index}
            loop={true}
            day ={forecastDays[index]}
          />
        ))}
    </div>
  );
};
