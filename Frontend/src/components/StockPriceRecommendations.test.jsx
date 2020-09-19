import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import StockPriceRecommendations from './StockPriceRecommendations.jsx';
const date = new Date();
const mockedStockBuyRecommendations = [
    {
        date: date,
        price: 1000,
        recommendation: "buy"
    }
];

const mockedStockSellRecommendations = [
    {
        date: date,
        price: 1000,
        recommendation: "sell"
    }
];

const mockedStockHoldRecommendations = [
    {
        date: date,
        price: 1000,
        recommendation: "hold"
    }
];

afterEach(cleanup);
describe('StockPriceRecommendations should render a table.', () => { 
    it('It should change the row class to recommendation-buy if the recommendation is to buy.',()=>{
        render(<StockPriceRecommendations stockRecommendations={mockedStockBuyRecommendations}/>);
        const tableRow = screen.getByTestId("recommendationRow");
        expect(tableRow.className).toBe("recommendation-buy");
    });
    it('It should change the row class to recommendation-hold if the recommendation is to hold.',()=>{
        render(<StockPriceRecommendations stockRecommendations={mockedStockHoldRecommendations}/>);
        const tableRow = screen.getByTestId("recommendationRow");
        expect(tableRow.className).toBe("recommendation-hold");
    });
    it('It should change the row class to recommendation-sell if the recommendation is to sell.',()=>{
        render(<StockPriceRecommendations stockRecommendations={mockedStockSellRecommendations}/>);
        const tableRow = screen.getByTestId("recommendationRow");
        expect(tableRow.className).toBe("recommendation-sell");
    });
    it('It should display the date and the price.',()=>{
        render(<StockPriceRecommendations stockRecommendations={mockedStockSellRecommendations}/>);
        const dateColumn = screen.getByTestId("recommendationDate");
        expect(dateColumn.textContent).toBe(date.toLocaleDateString("en-US"));
        const priceColumn = screen.getByTestId("recommendationPrice");
        expect(Number(priceColumn.textContent)).toBe(mockedStockSellRecommendations[0].price);
    });
  });
