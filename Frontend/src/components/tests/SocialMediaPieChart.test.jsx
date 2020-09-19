import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import SocialMediaPieChart from '../SocialMediaPieChart.jsx';
let constructConicGradientCalled = false;
const mockedSocialMediaInfos = {
    constructConicGradient: ()=>{
        constructConicGradientCalled = true;
    }
}
afterEach(cleanup);
describe('SocialMediaPieChart should render a pie chart.', () => { 
    it('It should call the function constructConicGradient, construct a conic-gradient with the result and set it as its style',()=>{
        render(<SocialMediaPieChart socialMediaInfos={mockedSocialMediaInfos}/>);
        expect(constructConicGradientCalled).toBe(true);
        const pieChart = screen.getByTestId("socialMediaPieChart");
        expect(pieChart).not.toBe(undefined);
    });
});
