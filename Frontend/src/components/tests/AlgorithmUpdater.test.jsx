import React from 'react';
import {cleanup, render, screen, fireEvent} from '@testing-library/react';
import AlgorithmUpdater from '../AlgorithmUpdater.jsx';
let windowIsOpen = true;
let newAlgo = "";
let algorithmHasChanged = false;
const mockedNewAlgorithm = "newAlgorithm";
beforeEach(()=>{
    windowIsOpen = true;
    newAlgo = "";
    algorithmHasChanged=false;
});

const mockSetAlgorithmUpdaterIsDisplayed = (value)=>{
    windowIsOpen = value;
}

const mockedSetNewAlgorithm = (value) =>{
    newAlgo = value;
}

const mockedSetAlgorithmHasChanged = (value) =>{
    algorithmHasChanged = value;
}

afterEach(cleanup);
describe('AlgorithmUpdater', () => { 
    it('It should close the window and change nothing if the Cancel button is click',()=>{
        render(
        <AlgorithmUpdater 
            setAlgorithmUpdaterIsDisplayed={mockSetAlgorithmUpdaterIsDisplayed} 
            setNewAlgorithm={mockedSetNewAlgorithm} 
            setAlgorithmHasChanged={mockedSetAlgorithmHasChanged} 
            />
        );
        const buttonCancelEditAlgorithm = screen.getByTestId("buttonCancelEditAlgorithm");
        fireEvent.click(buttonCancelEditAlgorithm);
        expect(windowIsOpen).toBe(false);
        expect(algorithmHasChanged).toBe(false);   
        expect(newAlgo).toBe('');           
    });
    it('It should return the text in the text area and close the window if the edit button is clicked',()=>{
        render(
        <AlgorithmUpdater 
            setAlgorithmUpdaterIsDisplayed={mockSetAlgorithmUpdaterIsDisplayed} 
            setNewAlgorithm={mockedSetNewAlgorithm} 
            setAlgorithmHasChanged={mockedSetAlgorithmHasChanged} 
            />
        );
        const textAreaEditAlgorithm = screen.getByTestId("textAreaEditAlgorithm");
        fireEvent.change(textAreaEditAlgorithm, { target: { value: mockedNewAlgorithm} });
        const buttonEditAlgorithm = screen.getByTestId("buttonEditAlgorithm");
        fireEvent.click(buttonEditAlgorithm);
        expect(windowIsOpen).toBe(false);
        expect(algorithmHasChanged).toBe(true);   
        expect(newAlgo).toBe(mockedNewAlgorithm);           
    });
});