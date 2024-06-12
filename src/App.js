import Search from "./Search";
import Results from "./Results";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="weather-app-wrapper">
        <div class="weather-app">
          <Search />
          <Results />
        </div>

        <footer>
          This project was coded by{" "}
          <a
            href="https://www.shecodes.io/graduates/33063-elizabeth-ballesteros-bosworth"
            target="_blank"
            rel="noreferrer"
          >
            Elizabeth Ballesteros Bosworth
          </a>
          , is open-sourced on{" "}
          <a
            href="https://github.com/grumpyalpaca/react-project-elly"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>{" "}
          and website hosted on{" "}
          <a
            href="https://react-elly-project.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
