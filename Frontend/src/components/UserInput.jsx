import React from 'react';
import StockSymbolInput from "./StockSymbolInput.jsx";
import TimeWindowInput from "./TimeWindowInput.jsx";

function UserInput(props) {
  return (
  <form>
    <StockSymbolInput stockSymbol = {props.stockSymbol} onChangeStockSymbol={props.onChangeStockSymbol} />
    <TimeWindowInput timeWindow = {props.timeWindow} onChangeTimeWindow={props.onChangeTimeWindow} />
  </form>
  );
};

export default UserInput;
