import React from 'react';
function SocialMediaPieChart(props) {
    const conicString = props.socialMediaInfos.constructConicGradient();

    const divStyle = { 
        backgroundImage: 'conic-gradient(' + conicString+ ')',
    };
    return (
        <div className="socialMedia-pieChart" style={divStyle}></div> 
    );
};

export default SocialMediaPieChart;
