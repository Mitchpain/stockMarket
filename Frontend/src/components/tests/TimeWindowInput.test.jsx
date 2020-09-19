import React from 'react';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import TimeWindowInput from '../TimeWindowInput.jsx';
let mocked = 0;

const onChangeMocked = (value)=>{
    mocked = value;
}

afterEach(cleanup);
describe('TimeWindowInput should render one input.', () => { 
  const timeWindow = 5;  
    it('It should have a number input containing the props input',()=>{
      render(<TimeWindowInput timeWindow={timeWindow} />);
      const numberInput = screen.getByPlaceholderText("Time window");
      expect(Number(numberInput.value)).toBe(timeWindow);
    });  
    it('The input should not accept negative number',()=>{
        render(<TimeWindowInput timeWindow={timeWindow} />);
        const numberInput = screen.getByPlaceholderText("Time window");
        fireEvent.change(numberInput, { target: { value: -1 } })
        expect(Number(numberInput.value)).toBe(timeWindow);
      }); 
      it('It should excute the given function when the input is changed.',()=>{
        render(<TimeWindowInput timeWindow={timeWindow} onChangeTimeWindow={onChangeMocked} />);
        const numberInput = screen.getByPlaceholderText("Time window");
        fireEvent.change(numberInput, { target: { value: 20 } })
        expect(Number(mocked)).toBe(20);
      }); 
  });
