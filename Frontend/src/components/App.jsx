import React, { useEffect } from 'react';
import UserInput from './UserInput.jsx'
import Header from './Header.jsx'
import Result from './Result.jsx'
import StockInfo from "../app/StockInfo";
import SocialMediaInfo from '../app/SocialMediaInfo.js';
import {setNewAlgorithm} from "../app/AlgorithmManager.js";
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
    
    const [algorithmHasChange, setAlgorithmHasChanged] = React.useState(false);

    const [socialMediaInfos, setSocialMediaInfos] = React.useState(()=>{return new SocialMediaInfo(stockSymbol)});

    useEffect(()=>{
        setSocialMediaInfos(new SocialMediaInfo(stockSymbol));
    },[stockSymbol]);

    useEffect(()=>{
        if(StockInfo.validateStockSymbol(stockSymbol)){
            setStockRecommendations(
                StockInfo.fetchStockPriceRecommendations(stockSymbol,timeWindow, socialMediaInfos.total)
            ); 
        }
    },[stockSymbol, timeWindow]);

    useEffect(()=>{
        if(StockInfo.validateStockSymbol(stockSymbol)){
            setStockRecommendations(
            StockInfo.processNewAlgorithm(stockRecommendations, socialMediaInfos.total)
            );
        }
        setAlgorithmHasChanged(false);
    },[algorithmHasChange])

    return (
        <div id="app">
            <Header setNewAlgorithm={setNewAlgorithm} setAlgorithmHasChanged={setAlgorithmHasChanged}/>
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