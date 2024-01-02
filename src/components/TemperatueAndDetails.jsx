import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "../services/WeatherService";

function TemperatueAndDetails({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <div>
      {/* Weather Information */}
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{details}</p>
      </div>

      {/* Weather Details */}
      <div className="flex flex-row items-center justify-between py-3 text-white">
        {/* Weather Icon */}
        <img src={iconUrlFromCode(icon)} alt="" className="w-20" />

        {/* Temperature */}
        <p className="text-5xl">{`${temp.toFixed()}°`}</p>

        {/* Additional Information: Section 1 */}
        <div className="flex flex-col space-y-2">
          {/* Real Feel */}
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Real feel:
            <span className="font-medium ml-1">{`${feels_like.toFixed()}°`}</span>
          </div>

          {/* Humidity */}
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
          </div>

          {/* Wind */}
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">{`${speed.toFixed()} km/h`}</span>
          </div>
        </div>
      </div>

      {/* Addition Information: Section 2 */}
      <div className="flex flex-row items-center justify-center w-max space-x-2 text-white text-sm py-3">
        {/* Sunrise */}
        <UilSun />
        <p className="font-light">
          Rise:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunrise, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>

        {/* Sunset */}
        <UilSunset />
        <p className="font-light">
          Sunset:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunset, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>

        {/* High */}
        <UilArrowUp />
        <p className="font-light">
          High:{" "}
          <span className="font-medium ml-1">{`${temp_max.toFixed()}°`}</span>
        </p>
        <p className="font-light">|</p>

        {/* Low */}
        <UilArrowDown />
        <p className="font-light">
          Low:{" "}
          <span className="font-medium ml-1">{`${temp_min.toFixed()}°`}</span>
        </p>
      </div>
    </div>
  );
}

export default TemperatueAndDetails;
