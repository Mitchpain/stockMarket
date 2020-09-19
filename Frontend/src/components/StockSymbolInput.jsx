import React from 'react';
import StockInfo from "../app/StockInfo";

function StockSymbolInput(props) {
  return (
    <input type="text" placeholder="Stock symbol" 
    onChange={(e)=>{
      if(StockInfo.validateStockSymbol(e.target.value)) {
        props.onChangeStockSymbol(e.target.value)}
      }} />
  );
};

export default StockSymbolInput;
