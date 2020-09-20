import SocialMediaInfo from "../SocialMediaInfo";
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
});