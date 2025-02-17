import React from "react";
import "./SelectedNumbers.css";

function SelectedNumbers({ selectedNumbers = [], totalMoney }) {
  return (
    <div className="selected-numbers">
      <h2>Numbers Selected:</h2>
      <p>{selectedNumbers.length > 0 ? selectedNumbers.join(", ") : "None"}</p>
      <h2>Total Money: ${totalMoney.toFixed(2)}</h2>
    </div>
  );
}

export default SelectedNumbers;
