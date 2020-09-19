import React, { useEffect } from 'react';
import UserInput from './UserInput.jsx'
import Result from './Result.jsx'
import StockInfo from "../app/StockInfo";
import SocialMediaInfo from '../app/SocialMediaInfo.js';
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
    let socialMediaInfos= new SocialMediaInfo(stockSymbol);

    useEffect(()=>{
        socialMediaInfos = new SocialMediaInfo(stockSymbol);
    },[stockSymbol]);

    useEffect(()=>{
        if(StockInfo.validateStockSymbol(stockSymbol)){
            setStockRecommendations(
                StockInfo.fetchStockPriceRecommendations(stockSymbol,timeWindow, socialMediaInfos.total)
            ); 
        }
    },[stockSymbol, timeWindow]);
    return (
        <div id="app">
            <header className="main-header">
                <div className="container">
                    <nav className="main-nav">
                        <h1>Stock Market Recommender</h1>
                        <h1 onClick={updateAlgo} id="updateButton">Update Algorithm</h1>
                    </nav>
                </div>
            </header>
            <div className="app-container">
                <UserInput onChangeStockSymbol={setStockSymbol} 
                onChangeTimeWindow={setTimeWindow} stockSymbol={stockSymbol} 
                timeWindow={timeWindow}/>
                <Result stockSymbol={stockSymbol} socialMediaInfos={socialMediaInfos} stockRecommendations={stockRecommendations} />
            </div>
        </div>

    );
};
  
export default App;