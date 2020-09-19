import React from 'react';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import Header from './Header.jsx';

const mockedSetNewAlgorithm = ()=>{
    return;
}

const mockedSetAlgorithmHasChanged = ()=>{
    return;
}
const renderHeader= ()=>{
    return render(<Header setNewAlgorithm={mockedSetNewAlgorithm} setAlgorithmHasChanged={mockedSetAlgorithmHasChanged}/>);
}
afterEach(cleanup);
describe('Header should be rendered.', () => { 
    it('It should render the application name, the update algorithm button but should not render the AlgorithmUpdater window.',()=>{
        renderHeader();
        const appName = screen.getByTestId("headerAppName");
        expect(appName).not.toBe(undefined);
        const algoButton = screen.getByTestId("headerAlgoButton");
        expect(algoButton).not.toBe(undefined);
        const algoWindow = screen.queryByTestId("algoWindow");
        expect(algoWindow).toBeNull();        
    });
    it('It should render the AlgorithmUpdater window when the update algorithm button is clicked',()=>{
        renderHeader();
        const algoButton = screen.getByTestId("headerAlgoButton");
        fireEvent.click(algoButton);
        const algoWindow = screen.queryByTestId("algoWindow");
        expect(algoWindow).not.toBeNull();    
    });
});


