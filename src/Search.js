import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState("");
  const [submittedCity, setSubmittedCity] = useState("");

  function handleCity(event) {
    event.preventDefault();
    setSubmittedCity(city);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Search">
      {" "}
      <form id="search-form" className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter city name..."
              className="form-control"
              id="city-input"
              autocomplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-outline-secondary w-100"
            />
          </div>
        </div>
      </form>{" "}
    </div>
  );
}
