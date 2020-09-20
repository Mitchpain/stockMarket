import React from 'react';
import './styles/SocialMediaPieChartLegend.scss';
function SocialMediaPieChartLegend(props) {
    return (
        <div id="socialMediaPie-Legend">
            <div className="legend-element">
                <div className="facebook-legend"></div>
                <span className="legend-label">Facebook: {props.socialMediaInfos.facebook}</span>                    
            </div>
            <div className="legend-element">
                <div className="instagram-legend"></div>
                <span className="legend-label">Instagram: {props.socialMediaInfos.instagram}</span>                    
            </div>
            <div className="legend-element">
                <div className="twitter-legend"></div>
                <span className="legend-label">Twitter: {props.socialMediaInfos.twitter}</span>                    
            </div>
            <div className="legend-element">
                <div className="linkedin-legend"></div>
                <span className="legend-label">Linkedin: {props.socialMediaInfos.linkedin}</span>                    
            </div>
        </div>        
    );
};

export default SocialMediaPieChartLegend;