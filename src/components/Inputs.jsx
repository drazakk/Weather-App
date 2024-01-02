import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { toast } from "react-toastify";

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info("Fetching users location.");
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Locatoin fetched!");
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  return (
    <div className="flex flex-row justify-center my-6 space-x-20">
      {/* Search */}
      <div className="flex flex-row w=3/4 items-center justify-center space-x-4">
        {/* Search Bar */}
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          className="text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase"
          placeholder="Search for city....."
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearchClick();
          }}
        />
        {/* Search Icon */}
        <UilSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearchClick}
        />
        {/* Search by location */}
        <UilLocationPoint
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleLocationClick}
        />
      </div>

      {/* Temperature Conversion */}
      <div className="flex flex-row items-center justify-center w=1/4">
        {/* Celcius */}
        <button
          name="metric"
          className="text-xl text-white font-light"
          onClick={handleUnitsChange}
        >
          °C
        </button>
        <p className="text-xl text-white mx-1">|</p>

        {/* Fahrenheit */}
        <button
          name="imperial"
          className="text-xl text-white font-light"
          onClick={handleUnitsChange}
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
