import React from 'react';
import SocialMediaPieChartLegend from './SocialMediaPieChartLegend.jsx';
import './styles/SocialMediaPieChart.scss';
function SocialMediaPieChart(props) {
    const [conicString] = React.useState(()=>{return props.socialMediaInfos.constructConicGradientString()});
    const [displayLegend, setDisplayLegend] = React.useState(false);
    const [mousePosition, setMousePosition] = React.useState(()=>{return undefined});
    const [mouseHasLeft, setMouseHasLeft] = React.useState(false);
    const divStyle = { 
        backgroundImage: 'conic-gradient(' + conicString + ')',
    };

    React.useEffect(() => {
        let timeoutID;
        setDisplayLegend(false);
        if(mousePosition != undefined && !mouseHasLeft){
            timeoutID = window.setTimeout(() => {
                setDisplayLegend(true);
            }, 1000);  
        }  
        return () => {
            if(timeoutID){
                window.clearTimeout(timeoutID)
            }
        };
    }, [mousePosition, mouseHasLeft]);

    return (
        <div data-testid="socialMediaPieChart" 
        className="socialMedia-pieChart" style={divStyle}
        onMouseEnter={()=>{setMouseHasLeft(false);}}
        onMouseMove={(e)=>{setMousePosition({x: e.clientX, y:e.clientY});}}
        onMouseLeave={()=>{setMouseHasLeft(true);}}>
            {displayLegend &&
            <SocialMediaPieChartLegend position={mousePosition}
             socialMediaInfos={props.socialMediaInfos} />
            }
        </div> 
        
    );
};

export default SocialMediaPieChart;
