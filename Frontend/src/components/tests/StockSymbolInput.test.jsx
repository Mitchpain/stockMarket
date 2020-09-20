import React from 'react';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import StockSymbolInput from '../StockSymbolInput.jsx';
let mocked = "";

const onChangeMocked = (value)=>{
    mocked = value;
}

afterEach(cleanup);
describe('StockSymbolInput should render a text input.', () => { 
    it('It should have an empty text input',()=>{
      render(<StockSymbolInput />);
      const textInput = screen.queryByTestId("stockSymbolInput");
      expect(textInput.value).toBe('');
    });  
    it('It should trigger the props function if the value is valid.',()=>{
        const inputStockSymbol = "logm";
        render(<StockSymbolInput onChangeStockSymbol={onChangeMocked} />);
        const textInput = screen.queryByTestId("stockSymbolInput");
        fireEvent.change(textInput, { target: { value: inputStockSymbol} })
        expect(mocked).toBe(inputStockSymbol);
      });  
      it('It should not trigger the props function if the value is invalid.',()=>{
        const invalidInputStockSymbol = "tesla";
        render(<StockSymbolInput onChangeStockSymbol={onChangeMocked} />);
        const textInput = screen.queryByTestId("stockSymbolInput");
        fireEvent.change(textInput, { target: { value: invalidInputStockSymbol} })
        expect(mocked).not.toBe(invalidInputStockSymbol);
      });  
  });
