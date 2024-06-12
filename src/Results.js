import React from "react";

export default function Results() {
  return (
    <div className="Results">
      {" "}
      <div class="row">
        <div class="col-6">
          <div class="clearfix weather-temperature">
            <img src="" alt="Clear" id="icon" class="float-left" />
            <div class="float-left">
              <strong id="temperature"></strong>
              <span class="units">
                <a href="#" id="celsius-link" class="active">
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
        <div class="col-6">
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
      <div class="weather-forecast" id="forecast"></div>
    </div>
  );
}
