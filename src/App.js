import React, { useState } from "react";
import NumberButtons from "./components/NumberButtons";
import ActionButtons from "./components/ActionButtons";
import MoneyButtons from "./components/MoneyButtons";
import SelectedNumbers from "./components/SelectedNumbers";

import "./App.css";
import videoFile from "./lottery-background.mp4"; // Update with the correct path

function App() {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [totalMoney, setTotalMoney] = useState(0);

  // Handle number selection
  const handleNumberClick = (number) => {
    if (selectedNumbers.includes(number)) {
      // Unselect number
      setSelectedNumbers(selectedNumbers.filter((num) => num !== number));
    } else {
      if (selectedNumbers.length < 5) {
        // Select number
        setSelectedNumbers([...selectedNumbers, number]);
      } else {
        alert("You can only select 5 numbers!");
      }
    }
  };

  // Handling money 
  const handleMoneyClick = (amount) => {
    if (selectedNumbers.length === 5) {
      setTotalMoney(totalMoney + amount);
    } else {
      alert("Please select 5 numbers first!");
    }
  };

  // Handling clear action
  const handleClear = () => {
    setSelectedNumbers([]);
    setTotalMoney(0);
  };

  // Handling random action
  const handleRandom = () => {
    const randomNumbers = [];
    while (randomNumbers.length < 5) {
      const randomNum = Math.floor(Math.random() * 20) + 1;
      if (!randomNumbers.includes(randomNum)) {
        randomNumbers.push(randomNum);
      }
    }
    setSelectedNumbers(randomNumbers);
  };

  return (
    <div className="app">
      <video autoPlay loop muted playsInline className="video-background">
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>

      {/* Main Content */}
      <div className="header-bar">
        <h1>WHE WHE Lottery on Fortune Flicks</h1>
      </div>
      <div className="container">
        <NumberButtons
          selectedNumbers={selectedNumbers}
          handleNumberClick={handleNumberClick}
        />
        <MoneyButtons handleMoneyClick={handleMoneyClick} />
        <SelectedNumbers
          selectedNumbers={selectedNumbers}
          totalMoney={totalMoney}
        />
        <ActionButtons handleClear={handleClear} handleRandom={handleRandom} />
      </div>
    </div>
  );
}

export default App;
