import React from 'react';
import SocialMediaInfos from './SocialMediaInfos.jsx';
import StockPriceRecommendations from './StockPriceRecommendations.jsx'
function Result(props) {
    const hasRecommendations = props.stockRecommendations?.length > 0;
    if(hasRecommendations){
        return (
            <div className="section" id="result">
                <h1 data-testid="stockSymbolLabel" id="stockName">{props.stockSymbol.toUpperCase()}</h1>
                <StockPriceRecommendations stockRecommendations={props.stockRecommendations}/>
                <SocialMediaInfos socialMediaInfos = {props.socialMediaInfos} />
            </div>
        );
    }
    return(<div data-testid="resultIsEmpty"></div>);
};

export default Result;
