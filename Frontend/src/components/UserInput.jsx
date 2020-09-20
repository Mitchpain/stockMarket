import React from 'react';
import StockSymbolInput from "./StockSymbolInput.jsx";
import TimeWindowInput from "./TimeWindowInput.jsx";
import './styles/UserInput.scss';
function UserInput(props) {
  return (
    <div  id="userInputs" className="section">
    <form onSubmit={(e)=>{e.preventDefault();}}>
      <StockSymbolInput onChangeStockSymbol={props.onChangeStockSymbol} />
      <TimeWindowInput timeWindow = {props.timeWindow} onChangeTimeWindow={props.onChangeTimeWindow} />
    </form>
  </div>
  );
};

export default UserInput;
