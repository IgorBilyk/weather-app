export const API_KEY_AUTOCOMPLETE_CITIES = `d32d320f68msh2f2b2a33a76259fp119f20jsn0c5aa6915351`;
export const API_KEY_WEATHER_API = `1192ae3d1ebdb8edcae3bdfb00ac72b6`;
export const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/`;

export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": API_KEY_AUTOCOMPLETE_CITIES,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const fetchCurrentWeather = ({ lat, lon }) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY_WEATHER_API}`
  )
    .then((response) => response.json())
    .then((response) => response.data);
};
