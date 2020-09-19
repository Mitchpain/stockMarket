import React from 'react';
import SocialMediaPieChart from './SocialMediaPieChart.jsx';
function SocialMediaInfo(props) {
    return (
        <div id="socialMediaInfos" className="stockInfoBase">
            <SocialMediaPieChart socialMediaInfos = {props.socialMediaInfos} />
            <h3 id="socialMediaCounter" >Social Media Posts : {props.socialMediaInfos.total} </h3>
        </div>
        );
};

export default SocialMediaInfo;