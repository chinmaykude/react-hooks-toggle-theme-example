import React, { useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import { ThemeContext } from "./context/themeContext";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="App">
      <header className={`App-header ${theme}-theme`}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
