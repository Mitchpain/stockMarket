import React, { useEffect } from 'react';
import UserInput from './UserInput.jsx'
import Result from './Result.jsx'
import StockInfo from "../app/StockInfo";
const DEFAULT_TIME_WINDOW = 10;

function App() {
    const [stockSymbol, setStockSymbol] = React.useState(()=>{
        return "";
    });
    const [timeWindow, setTimeWindow] = React.useState(()=>{
        return DEFAULT_TIME_WINDOW;
    });
    const [stockRecommendations, setStockRecommendations] = React.useState(()=>{
        return [];
    });
    const [socialMediaCount, setSocialMediaCount] = React.useState(()=>{
        return 0;
    });

    useEffect(()=>{
        setSocialMediaCount(StockInfo.getSocialMediaCount(stockSymbol, "socialMediaType"));
        console.log(socialMediaCount);
    },[stockSymbol]);

    useEffect(()=>{
        if(StockInfo.validateStockSymbol(stockSymbol)){
            setStockRecommendations(
                StockInfo.fetchStockPriceRecommendations(stockSymbol,timeWindow, socialMediaCount)
            ); 
        }
    },[stockSymbol, timeWindow]);

    return (
      <div className="greeting">
        <UserInput onChangeStockSymbol={setStockSymbol} 
        onChangeTimeWindow={setTimeWindow} stockSymbol={stockSymbol} 
        timeWindow={timeWindow}/>
        <Result stockRecommendations={stockRecommendations} />
      </div>
    );
};
  
export default App;