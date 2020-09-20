import React from 'react';
import './styles/SocialMediaPieChart.scss';
function SocialMediaPieChart(props) {
    const conicString = props.socialMediaInfos.constructConicGradient();
    const divStyle = { 
        backgroundImage: 'conic-gradient(' + conicString + ')',
    };
    return (
        <div data-testid="socialMediaPieChart" className="socialMedia-pieChart" style={divStyle}></div> 
    );
};

export default SocialMediaPieChart;
