import React, { useState } from "react";

export default function Results() {
  return (
    <div className="Results">
      {" "}
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img src="" alt="Clear" id="icon" className="float-left" />
            <div className="float-left">
              <strong id="temperature"></strong>
              <span className="units">
                <a href="#" id="celsius-link" className="active">
                  °C
                </a>{" "}
                |
                <a href="#" id="fahrenheit-link">
                  °F
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity: <span id="humidity"></span>%
            </li>
            <li>
              Wind: <span id="wind"></span> m/h
            </li>
          </ul>
        </div>
      </div>
      <div className="weather-forecast" id="forecast"></div>
    </div>
  );
}
