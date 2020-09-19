import React from 'react';
import {cleanup,  render, fireEvent, screen} from '@testing-library/react';
import App from '../App.jsx';

const countStockRecommendations = () => {
    return screen.getAllByTestId("recommendationRow").length;
}
const validInputStockSymbol = "logm";
const invalidInputStockSymbol = "tesla";
const newAlgorithm = "(price, socialMediaCount) => {return recommendations.BUY;}";


afterEach(cleanup);
describe('App should be rendered empty at the startup.', () => { 
    it('It should set the time window to 10 by default.',()=>{
        render(<App />);
        const numberInput = screen.getByPlaceholderText("Time window");
        expect(Number(numberInput.value)).toBe(10);
    });
    it('It should not render a social media section',()=>{
        render(<App />);
        const socialMediaInfoSection = screen.queryByTestId("socialMediaInfo");
        expect(socialMediaInfoSection).toBeNull();
    });
    it('It should not render a stock price recommendations section',()=>{
        render(<App />);
        const stockPriceSection = screen.queryByTestId("stockPriceRecommendations");
        expect(stockPriceSection).toBeNull();
    });
    it('It should not render the stock symbol',()=>{
        render(<App />);
        const stockSymbolLabel = screen.queryByTestId("stockSymbolLabel");
        expect(stockSymbolLabel).toBeNull();
    });
    it('It should have an empty text input',()=>{
        render(<App />);
        const textInput = screen.getByPlaceholderText("Stock symbol");
        expect(textInput.value).toBe('');
    });  
});

describe('App should be rendered empty', () => { 
    it('If an invalid stock symbol is set.',()=>{
        render(<App />);
        const textInput = screen.getByPlaceholderText("Stock symbol");
        fireEvent.change(textInput, { target: { value: invalidInputStockSymbol} })
        const socialMediaInfoSection = screen.queryByTestId("socialMediaInfo");
        expect(socialMediaInfoSection).toBeNull();
        const stockPriceSection = screen.queryByTestId("stockPriceRecommendations");
        expect(stockPriceSection).toBeNull();
        const stockSymbolLabel = screen.queryByTestId("stockSymbolLabel");
        expect(stockSymbolLabel).toBeNull();
        expect(textInput.value).toBe(invalidInputStockSymbol);
    });
});

describe('App should render the result section', () => { 
    it('If a valid stock symbol is set.',()=>{
        render(<App />);
        const textInput = screen.getByPlaceholderText("Stock symbol");
        fireEvent.change(textInput, { target: { value: validInputStockSymbol} })
        const socialMediaInfoSection = screen.queryByTestId("socialMediaInfo");
        expect(socialMediaInfoSection).not.toBeNull();
        const stockPriceSection = screen.queryByTestId("stockPriceRecommendations");
        expect(stockPriceSection).not.toBeNull();
        const stockSymbolLabel = screen.queryByTestId("stockSymbolLabel");
        expect(stockSymbolLabel.textContent).toBe(validInputStockSymbol.toUpperCase());
        expect(textInput.value).toBe(validInputStockSymbol);
    });

    it('The StockPriceRecommendation table should countains 10 recommendations by default',()=>{
        render(<App />);
        const textInput = screen.getByPlaceholderText("Stock symbol");
        fireEvent.change(textInput, { target: { value: validInputStockSymbol} })
        const count = countStockRecommendations();
        expect(count).toBe(10);
    });
    it('The StockPriceRecommendation table should have 11 recommendations if the time window is set to 11',()=>{
        render(<App />);
        const textInput = screen.getByPlaceholderText("Stock symbol");
        fireEvent.change(textInput, { target: { value: validInputStockSymbol} });
        const numberInput = screen.getByPlaceholderText("Time window");
        fireEvent.change(numberInput, { target: { value: 11} });
        const count = countStockRecommendations();
        expect(count).toBe(11);
    });
    it('The StockPriceRecommendation table should have 10 recommendations if the time window is set to -1',()=>{
        render(<App />);
        const textInput = screen.getByPlaceholderText("Stock symbol");
        fireEvent.change(textInput, { target: { value: validInputStockSymbol} });
        const numberInput = screen.getByPlaceholderText("Time window");
        fireEvent.change(numberInput, { target: { value: -1} });
        const count = countStockRecommendations();
        expect(count).toBe(10);
    });
    it('The Stock symbol label should not change if the input stock symbol is set to an invalid value after a valid one.',()=>{
        render(<App />);
        const textInput = screen.getByPlaceholderText("Stock symbol");
        fireEvent.change(textInput, { target: { value: validInputStockSymbol} });
        const stockSymbolLabel = screen.queryByTestId("stockSymbolLabel");
        expect(stockSymbolLabel.textContent).toBe(validInputStockSymbol.toUpperCase());
        fireEvent.change(textInput, { target: { value: invalidInputStockSymbol} });
        expect(stockSymbolLabel.textContent).toBe(validInputStockSymbol.toUpperCase());
    });
    it('The recommendations should all be set to buy if the algorithm is changed to return only buy.',()=>{
        render(<App />);
        const textInput = screen.getByPlaceholderText("Stock symbol");
        fireEvent.change(textInput, { target: { value: validInputStockSymbol} });
        const algoButton = screen.getByTestId("headerAlgoButton");
        fireEvent.click(algoButton);
        const textAreaEditAlgorithm = screen.getByTestId("textAreaEditAlgorithm");
        fireEvent.change(textAreaEditAlgorithm, { target: { value: newAlgorithm} });
        const buttonEditAlgorithm = screen.getByTestId("buttonEditAlgorithm");
        fireEvent.click(buttonEditAlgorithm);
        const recommendationRows = screen.getAllByTestId("recommendationRow");
        expect(recommendationRows.length).toBe(10);
        recommendationRows.forEach((row)=>{
            expect(row.className).toBe("recommendation-buy");
        });       
    });
});


