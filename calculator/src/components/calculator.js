import React, { useState } from "react";
import "./calculator.css";
import darkModeIcon from "./dark-mode.png"; // Ensure this is correctly imported

const Calculator = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  const handleEvaluate = () => {
    try {
      setOutput(eval(input)); // Using eval to evaluate the expression
    } catch (error) {
      setOutput("Error");
    }
  };

  const handlePercentage = () => {
    try {
      const percentage = (parseFloat(input) / 100);
      setOutput(percentage);
      setInput(String(percentage));
    } catch (error) {
      setOutput("Error");
    }
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1)); // Removes the last character
  };

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`calculator ${darkMode ? "dark-mode" : "light-mode"}`}>
      {/* Navbar */}
      <div className="navbar">
        <h1>Calcino</h1>
      </div>

      <div className="display">
        <div className="input">{input}</div>
        <div className="output">{output}</div>
      </div>

      <div className="buttons">
        <button className="button" onClick={handleClear}>C</button>
        <button className="button" onClick={handleBackspace}>←</button>
        <button className="button" onClick={handlePercentage}>%</button>
        <button className="button" onClick={() => handleClick("/")}>/</button>

        <button className="button" onClick={() => handleClick("7")}>7</button>
        <button className="button" onClick={() => handleClick("8")}>8</button>
        <button className="button" onClick={() => handleClick("9")}>9</button>
        <button className="button" onClick={() => handleClick("*")}>*</button>

        <button className="button" onClick={() => handleClick("4")}>4</button>
        <button className="button" onClick={() => handleClick("5")}>5</button>
        <button className="button" onClick={() => handleClick("6")}>6</button>
        <button className="button" onClick={() => handleClick("-")}>-</button>

        <button className="button" onClick={() => handleClick("1")}>1</button>
        <button className="button" onClick={() => handleClick("2")}>2</button>
        <button className="button" onClick={() => handleClick("3")}>3</button>
        <button className="button" onClick={() => handleClick("+")}>+</button>

        <button className="button blank-space"></button>
        <button className="button" onClick={() => handleClick("0")}>0</button>
        <button className="button" onClick={() => handleClick(".")}>.</button>
        <button className="button" onClick={handleEvaluate}>=</button>
      </div>

      {/* Dark Mode Toggle */}
      <button className="toggle" onClick={toggleMode}>
        <img src={darkModeIcon} alt="Toggle Dark Mode" />
      </button>

      {/* Branding Section at the Bottom */}
      <div className="branding">Calcino - Your Smart Calculator</div>
    </div>
  );
};

export default Calculator;