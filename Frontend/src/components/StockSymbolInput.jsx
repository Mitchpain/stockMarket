import React from 'react';
import StockInfo from "../app/StockInfo";

function StockSymbolInput(props) {
  return (
    <div className="inputContainer">
      <input type="text"
        data-testid="stockSymbolInput"
        onChange={(e)=>{
        if(StockInfo.validateStockSymbol(e.target.value)) {
          props.onChangeStockSymbol(e.target.value)}
        }
      } />
      <span>Stock Symbol</span>
    </div>
  );
};

export default StockSymbolInput;
