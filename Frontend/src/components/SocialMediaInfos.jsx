import React from 'react';
import SocialMediaPieChart from './SocialMediaPieChart.jsx';
function SocialMediaInfo(props) {
    return (
        <div data-testid="socialMediaInfo" id="socialMediaInfos" className="stockInfoBase">
            <SocialMediaPieChart socialMediaInfos = {props.socialMediaInfos} />
            <h3 data-testid="socialMediaTotal" id="socialMediaCounter" >Social Media Posts : {props.socialMediaInfos.total}</h3>
        </div>
        );
};

export default SocialMediaInfo;