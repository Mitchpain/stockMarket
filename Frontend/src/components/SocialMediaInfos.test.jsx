import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import SocialMediaInfos from './SocialMediaInfos.jsx';
let constructConicGradientCalled = false;
const mockedTotal = 100;
const mockedSocialMediaInfos = {
    constructConicGradient: ()=>{
        constructConicGradientCalled = true;
    },
    total:mockedTotal
}

afterEach(cleanup);
describe('SocialMediaInfos should render a pie chart.', () => { 
    it('It should render a pie chart',()=>{
        render(<SocialMediaInfos socialMediaInfos={mockedSocialMediaInfos}/>);
        const pieChart = screen.getByTestId("socialMediaPieChart");
        expect(pieChart).not.toBe(undefined);
        expect(constructConicGradientCalled).toBe(true);
    });
    it('It should render a text that display the total social media post',()=>{
        render(<SocialMediaInfos socialMediaInfos={mockedSocialMediaInfos}/>);
        const socialMediaCount = screen.getByTestId("socialMediaTotal");
        expect(socialMediaCount.textContent).toBe("Social Media Posts : " + mockedTotal);
    });
});
