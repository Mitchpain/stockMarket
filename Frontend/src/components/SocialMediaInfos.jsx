import React from 'react';
import SocialMediaPieChart from './SocialMediaPieChart.jsx';
function SocialMediaInfo(props) {
    return (
        <div id="socialMediaInfos">
            <SocialMediaPieChart socialMediaInfos = {props.socialMediaInfos} />
        </div>
        );
};

export default SocialMediaInfo;