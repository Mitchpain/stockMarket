import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import SocialMediaPieChartLegend from '../SocialMediaPieChartLegend.jsx';
const mockedSocialMediaInfos = {
    facebook: 100,
    instagram: 200,
    twitter: 300,
    linkedin: 400
};
const mockedPosition = {x:100,y:100};

const renderLegend = () =>{
    return render(<SocialMediaPieChartLegend socialMediaInfos={mockedSocialMediaInfos} position={mockedPosition}/>);
}

afterEach(cleanup);
describe('SocialMediaPieChartLegend should render the legend.', () => { 
    it('It should display the legend at the right position',()=>{
        renderLegend();
        const legendContainer = screen.getByTestId("socialMediaPieChartLegend");
        expect(legendContainer).not.toBe(undefined);
        expect(legendContainer.style.top).toBe(mockedPosition.y +"px");
        expect(legendContainer.style.left).toBe(mockedPosition.x +"px");
    });
    it('It should display the information about facebook',()=>{
        renderLegend();
        const fbInfos = screen.getByTestId("socialMediaPieChartLegendFb");
        expect(fbInfos).not.toBe(undefined);
        expect(fbInfos.textContent).toBe("Facebook: "+mockedSocialMediaInfos.facebook);
    });
    it('It should display the information about twitter',()=>{
        renderLegend();
        const twInfos = screen.getByTestId("socialMediaPieChartLegendTw");
        expect(twInfos).not.toBe(undefined);
        expect(twInfos.textContent).toBe("Twitter: "+mockedSocialMediaInfos.twitter);
    });
    it('It should display the information about instagram',()=>{
        renderLegend();
        const instaInfos = screen.getByTestId("socialMediaPieChartLegendInsta");
        expect(instaInfos).not.toBe(undefined);
        expect(instaInfos.textContent).toBe("Instagram: "+mockedSocialMediaInfos.instagram);
    });
    it('It should display the information about linkedin',()=>{
        renderLegend();
        const liInfos = screen.getByTestId("socialMediaPieChartLegendLi");
        expect(liInfos).not.toBe(undefined);
        expect(liInfos.textContent).toBe("Linkedin: "+mockedSocialMediaInfos.linkedin);
    });
});