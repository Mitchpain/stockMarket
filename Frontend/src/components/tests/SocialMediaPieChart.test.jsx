import React from 'react';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import SocialMediaPieChart from '../SocialMediaPieChart.jsx';
import { act } from 'react-dom/test-utils';
let constructConicGradientCalled = false;
const mockedSocialMediaInfos = {
    constructConicGradientString: ()=>{
        constructConicGradientCalled = true;
    }
}
afterEach(cleanup);
describe('SocialMediaPieChart should render a pie chart.', () => { 
    it('It should call the function constructConicGradientString, construct a conic-gradient with the result and set it as its style',()=>{
        render(<SocialMediaPieChart socialMediaInfos={mockedSocialMediaInfos}/>);
        expect(constructConicGradientCalled).toBe(true);
        const pieChart = screen.getByTestId("socialMediaPieChart");
        expect(pieChart).not.toBe(undefined);
    });
    it('It display the legend if the mouse is over',()=>{
        jest.useFakeTimers();
        render(<SocialMediaPieChart socialMediaInfos={mockedSocialMediaInfos}/>);
        const pieChart = screen.getByTestId("socialMediaPieChart");
        act(()=>{
            fireEvent.mouseMove(pieChart);
        });
        act(()=>{
            jest.runAllTimers();
        });        
        
        const socialMediaPieChartLegend = screen.queryByTestId("socialMediaPieChartLegend");
        expect(socialMediaPieChartLegend).not.toBeNull();
    });
});
