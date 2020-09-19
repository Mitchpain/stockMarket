import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import Result from '../Result.jsx';
let constructConicGradientCalled = false;
const mockedTotal = 100;
const mockedSocialMediaInfos = {
    constructConicGradient: ()=>{
        constructConicGradientCalled = true;
    },
    total:mockedTotal
};
const date = new Date();
const mockedStockRecommendations = [
    {
        date: date,
        price: 1000,
        recommendation: "buy"
    }
];
const mockedStockSymbol = "logm";

const renderResult = ()=>{
    return render(<Result 
        stockRecommendations={mockedStockRecommendations} 
        stockSymbol={mockedStockSymbol}
         socialMediaInfos={mockedSocialMediaInfos}/>);
}

const renderEmptyResult = ()=>{
    return render(<Result 
        stockRecommendations={[]} 
        stockSymbol={mockedStockSymbol}
         socialMediaInfos={mockedSocialMediaInfos}/>);
}

afterEach(cleanup);
describe('If the stock price recommendation is set',()=>{
    it('It should not render the empty div',()=>{
        renderResult();
        const resultIsEmptySection = screen.queryByTestId("resultIsEmpty");
        expect(resultIsEmptySection).toBeNull();
    });
    it('It should render a social media section',()=>{
        renderResult();
        const socialMediaInfoSection = screen.queryByTestId("socialMediaInfo");
        expect(socialMediaInfoSection).not.toBeNull();
    });
    it('It should render a stock price recommendations section',()=>{
        renderResult();
        const stockPriceSection = screen.queryByTestId("stockPriceRecommendations");
        expect(stockPriceSection).not.toBeNull();
    });
    it('It should render the stock symbol',()=>{
        renderResult();
        const stockSymbolLabel = screen.queryByTestId("stockSymbolLabel");
        expect(stockSymbolLabel).not.toBeNull();
        expect(stockSymbolLabel.textContent).toBe(mockedStockSymbol.toUpperCase());
    });
});
describe('If the stock price recommendation is not set',()=>{
    it('It should render the empty div',()=>{
        renderEmptyResult();
        const resultIsEmptySection = screen.queryByTestId("resultIsEmpty");
        expect(resultIsEmptySection).not.toBeNull();
    });
    it('It should not render a social media section',()=>{
        renderEmptyResult();
        const socialMediaInfoSection = screen.queryByTestId("socialMediaInfo");
        expect(socialMediaInfoSection).toBeNull();
    });
    it('It should not render a stock price recommendations section',()=>{
        renderEmptyResult();
        const stockPriceSection = screen.queryByTestId("stockPriceRecommendations");
        expect(stockPriceSection).toBeNull();
    });
    it('It should not render the stock symbol',()=>{
        renderEmptyResult();
        const stockSymbolLabel = screen.queryByTestId("stockSymbolLabel");
        expect(stockSymbolLabel).toBeNull();
    });
});