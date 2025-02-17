import React from "react";
import "./NumberButtons.css";

function NumberButtons({ selectedNumbers, handleNumberClick }) {
  return (
    <div className="number-buttons">
      {Array.from({ length: 20 }, (_, i) => i + 1).map((number) => (
        <button
          key={number}
          className={selectedNumbers.includes(number) ? "selected" : ""}
          onClick={() => handleNumberClick(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
}

export default NumberButtons;