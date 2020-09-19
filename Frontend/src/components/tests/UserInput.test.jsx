import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import UserInput from '../UserInput.jsx';

afterEach(cleanup);
describe('UserInput should render two inputs.', () => { 
  const timeWindow = 15;  
    it('It should have an empty text input',()=>{
      render(<UserInput timeWindow={timeWindow} />);
      const textInput = screen.getByPlaceholderText("Stock symbol");
      expect(textInput.value).toBe('');
    }); 
    it('It should have a number input with the initial value set.',()=>{
      render(<UserInput timeWindow={timeWindow} />);
      const numberInput = screen.getByPlaceholderText("Time window");
      expect(Number(numberInput.value)).toBe(timeWindow);
    }); 
  });
