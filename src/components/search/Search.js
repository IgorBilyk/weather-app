import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

import { options } from "../../api";
import "../../App.css";

export const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
    setSearch("");
  };

  const fetchCity = async (search) => {
    return fetch(
      `https://wft-geo-db.p.rapidapi.com/v1/geo/cities/?minPopulation=10000&namePrefix=${search}`,
      options
    )
      .then((res) => res.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.city}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="container">
      <AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={fetchCity}
      />
    </div>
  );
};
