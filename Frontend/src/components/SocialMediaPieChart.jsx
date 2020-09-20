import React from 'react';
import SocialMediaPieChartLegend from './SocialMediaPieChartLegend.jsx';
import './styles/SocialMediaPieChart.scss';
function SocialMediaPieChart(props) {
    let displayLegend=false;
    const conicString = props.socialMediaInfos.constructConicGradientString();
    const divStyle = { 
        backgroundImage: 'conic-gradient(' + conicString + ')',
    };
    return (
        <div data-testid="socialMediaPieChart" 
        className="socialMedia-pieChart" style={divStyle}
        onMouseEnter={()=>{displayLegend = true}}>
            {displayLegend &&
            <SocialMediaPieChartLegend socialMediaInfos={props.socialMediaInfos} />
            }
        </div> 
        
    );
};

export default SocialMediaPieChart;
