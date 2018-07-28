import React from "react"

import Spinner from "./Spinner"
import SearchContainer from "../containers/SearchContainer"
import ArrowIcon from "react-icons/lib/fa/long-arrow-right"
import MapIcon from "react-icons/lib/fa/map-marker"

const Weather = ({
  weather,
  changeLocation,
  changeInput,
  temperature,
  data
}) => {
  const { wind, name } = weather
  const weatherIcon = weather.weather[0].icon
  if (!data.length) {
    return <Spinner />
  }
  return (
    <div className="weather">
      {changeInput ? (
        <SearchContainer />
      ) : (
        <div className="weather__name-change">
          <h2 className="weather__name">{name}</h2>
          <span onClick={() => changeLocation()} className="weather__change">
            <MapIcon size={22} /> Change location
          </span>
        </div>
      )}
      <div className="weather__block">
        <div className="weather__block-image">
          <img
            className="weather__block-icon"
            src={`https://openweathermap.org/img/w/${weatherIcon}.png`}
            alt="icon"
          />
        </div>
        <span className="weather__block-text">Today</span>
      </div>
      <h1 className="weather__temp">
        {temperature}
        <div className="icon__degree" />
      </h1>
      <span className="weather__wind-speed">
        Wind {wind.speed}m/s{" "}
        <ArrowIcon
          className="arrow_wind"
          style={{ transform: `rotate(${wind.deg}deg)` }}
        />
      </span>
    </div>
  )
}

export default Weather