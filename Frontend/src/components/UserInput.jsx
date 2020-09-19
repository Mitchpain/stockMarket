import React from 'react';
import StockSymbolInput from "./StockSymbolInput.jsx";
import TimeWindowInput from "./TimeWindowInput.jsx";

function UserInput(props) {
  return (
    <div className="section">
    <form id="userInputs">
      <StockSymbolInput stockSymbol = {props.stockSymbol} onChangeStockSymbol={props.onChangeStockSymbol} />
      <TimeWindowInput timeWindow = {props.timeWindow} onChangeTimeWindow={props.onChangeTimeWindow} />
    </form>
  </div>
  );
};

export default UserInput;
