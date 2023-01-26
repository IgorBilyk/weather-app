//Transform to celsium/fahrenheit
export const transformCelcium = (temp) => {
  const result = temp - 273.15;
  return Math.round(result.toFixed(2));
};
export const transformFahrenheit = (temp) => {
  const result = (temp - 273.15) * (9 / 5) + 32;
  return Math.round(result.toFixed(2));
};

const date = new Date();
const dayInWeek = date.getDay();
const dayInMonth = date.getDate();
const month = date.getMonth();
const hours = date.getHours();
const minutes = date.getMinutes();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
export const generateDate = (loop, index, day) => {
  const str_month = months[month];
  const str_day = loop ? day : WEEK[dayInWeek];

  if (loop !== true)
    return `${str_day} | ${str_month} ${dayInMonth} | ${hours}:${minutes}`;
  return `${str_day}`;
};
