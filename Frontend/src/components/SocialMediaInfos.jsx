import React from 'react';
import SocialMediaPieChart from './SocialMediaPieChart.jsx';
function SocialMediaInfo(props) {
    return (
        <SocialMediaPieChart socialMediaInfos = {props.socialMediaInfos} />
        );
};

export default SocialMediaInfo;