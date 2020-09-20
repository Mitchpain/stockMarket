import SocialMediaInfo, {SOCIAL_MEDIAS, FACEBOOK_COLOR, INSTAGRAM_COLOR, LINKEDIN_COLOR, TWITTER_COLOR} from "../SocialMediaInfo";
describe('SocialMediaInfo', () => {  
    it('It should fetch the number of posts on social media when initialized',()=>{
        const socialMediaInfo = new SocialMediaInfo('logm');
        expect(socialMediaInfo.twitter).not.toBe(undefined);
        expect(socialMediaInfo.facebook).not.toBe(undefined);
        expect(socialMediaInfo.instagram).not.toBe(undefined);
        expect(socialMediaInfo.linkedin).not.toBe(undefined);
        expect(socialMediaInfo.total).not.toBe(undefined);
        expect(socialMediaInfo.total > socialMediaInfo.twitter).toBe(true);
        expect(socialMediaInfo.total > socialMediaInfo.facebook).toBe(true);
        expect(socialMediaInfo.total > socialMediaInfo.instagram).toBe(true);
        expect(socialMediaInfo.total > socialMediaInfo.linkedin).toBe(true);
    }); 
    it('Construct Conic Gradient should return a string to construct the style of the conic gradient',()=>{
        const socialMediaInfo = new SocialMediaInfo('logm');
        const gradientString = socialMediaInfo.constructConicGradientString();
        expect(gradientString.indexOf(FACEBOOK_COLOR)).not.toBe(-1);
        expect(gradientString.indexOf(INSTAGRAM_COLOR)).not.toBe(-1);
        expect(gradientString.indexOf(LINKEDIN_COLOR)).not.toBe(-1);
        expect(gradientString.indexOf(TWITTER_COLOR)).not.toBe(-1);
    }); 
    it('Calculate Conic Gradient Angle should return 180 if the number of post is half of the total',()=>{
        const socialMediaInfo = new SocialMediaInfo('logm');
        const angle = socialMediaInfo.calculateConicGradientAngle(socialMediaInfo.total/2,0);
        expect(angle).toBe(180);
    }); 
});