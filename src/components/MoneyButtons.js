import React from "react";
import "./MoneyButtons.css";

function MoneyButtons({ handleMoneyClick }) {
  const moneyValues = [1, 5, 10, 20];

  return (
    <div className="money-buttons">
      {moneyValues.map((value) => (
        <button key={value} onClick={() => handleMoneyClick(value)}>
          ${value}
        </button>
      ))}
    </div>
  );
}

export default MoneyButtons;