import React from "react";
import Weather from "./Weather";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <Weather defaultCity="Barcelona" />

          <footer>
            This project was coded by{" "}
            <a
              href="https://www.shecodes.io/graduates/33063-elizabeth-ballesteros-bosworth"
              target="_blank"
              rel="noopener noreferrer"
            >
              Elizabeth Ballesteros Bosworth
            </a>{" "}
            and is open-sourced on{" "}
            <a
              href="https://github.com/grumpyalpaca/react-project-elly"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://react-elly-project.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netlify
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}
