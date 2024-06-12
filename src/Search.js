import React from "react";

export default function Search() {
  return (
    <div className="Search">
      {" "}
      <form id="search-form" class="mb-3">
        <div class="row">
          <div class="col-9">
            <input
              type="search"
              placeholder="Enter city name..."
              class="form-control"
              id="city-input"
              autocomplete="off"
            />
          </div>
          <div class="col-3">
            <input
              type="submit"
              value="Search"
              class="btn btn-outline-secondary w-100"
            />
          </div>
        </div>
      </form>{" "}
    </div>
  );
}
