import React from 'react';
import SocialMediaPieChartLegend from './SocialMediaPieChartLegend.jsx';
import './styles/SocialMediaPieChart.scss';
function SocialMediaPieChart(props) {
    const [conicString] = React.useState(()=>{return props.socialMediaInfos.constructConicGradientString()});
    const [displayLegend, setDisplayLegend] = React.useState(false);
    const divStyle = { 
        backgroundImage: 'conic-gradient(' + conicString + ')',
    };
    const mouseEnter = ()=>{
        setTimeout(function(){
            setDisplayLegend(true);
        }, 500);
    }
    return (
        <div data-testid="socialMediaPieChart" 
        className="socialMedia-pieChart" style={divStyle}
        onMouseMove={()=>{setDisplayLegend(false);}}
        onMouseEnter={()=>{mouseEnter();}}
        onMouseLeave={()=>{setDisplayLegend(false);}}>
            {displayLegend &&
            <SocialMediaPieChartLegend socialMediaInfos={props.socialMediaInfos} />
            }
        </div> 
        
    );
};

export default SocialMediaPieChart;
