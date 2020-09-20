import {socialMediaCountGenerator} from "./dataMocker";
export const FACEBOOK_COLOR = "#4267B2";
export const TWITTER_COLOR = "#1DA1F2";
export const LINKEDIN_COLOR = "#2867B2";
export const INSTAGRAM_COLOR = "#C13584";
const SOCIAL_MEDIAS = {
    TWITTER: "twitter",
    FACEBOOK: "facebook",
    INSTAGRAM: "instagram",
    LINKEDIN: "linkedin"
}
/**
 * @name SocialMediaInfo
 * @description Class managing the social media infos of the app
 */
export default class SocialMediaInfo {
    constructor(stockSymbol){
        this.stockSymbol = stockSymbol;
        this.computeSocialMediaCount();
    }

    /**
     * @name computeSocialMediaCount
     * @description Fetch the count on the handled social media
     */
    computeSocialMediaCount(){
        this.twitter = this.getSocialMediaCount(SOCIAL_MEDIAS.TWITTER);
        this.facebook = this.getSocialMediaCount(SOCIAL_MEDIAS.FACEBOOK);
        this.instagram = this.getSocialMediaCount(SOCIAL_MEDIAS.INSTAGRAM);
        this.linkedin = this.getSocialMediaCount(SOCIAL_MEDIAS.LINKEDIN);
        this.total = this.twitter + this.facebook + this.instagram + this.linkedin;
    }

    /**
     * @name getSocialMediaCount
     * @description Call the api function to fetch the number of post
     * about the current stock on a specified social media
     * @param {string} socialMediaType Name of the requested social media
     * @return {number} Number of post on that social media
     */
    getSocialMediaCount(socialMediaType){
        return socialMediaCountGenerator(this.stockSymbol, socialMediaType);
    }

    /**
     * @name constructGradientString
     * @description Construct the gradient string used to construct the chart pie
     * @param {string} color Color of a section in the pie
     * @param {number} firstAngle First angle of the section in the pie
     * @param {number} secondAngle Last angle of the section in the pie
     */
    constructGradientString(color, firstAngle, secondAngle){
        return color + " " + firstAngle + "deg, " + color + " " + secondAngle +"deg";
    }

    /**
     * @name calculateConicGradientAngle
     * @description Calculate the second angle of the chart pie of a based
     * on the previous angle and the proportion of the posts.
     * @param {number} numberOfPost Number of posts on a social media
     * @param {number} previousAngle Base position in the pie
     */
    calculateConicGradientAngle(numberOfPost, previousAngle){
        return Math.round(numberOfPost / this.total * 360) + previousAngle;
    }

    /**
     * @name constructConicGradientString
     * @description Contruct the string used by the coninc gradient to
     * construct the chart pie.
     */
    constructConicGradientString(){
        const fbAngle = this.calculateConicGradientAngle(this.facebook,0);
        const fbGradientString = this.constructGradientString(FACEBOOK_COLOR,0, fbAngle);
        const twitterAngle = this.calculateConicGradientAngle(this.twitter, fbAngle);
        const twitterGradientString = this.constructGradientString(TWITTER_COLOR, fbAngle, twitterAngle);
        const instagramAngle = this.calculateConicGradientAngle(this.instagram, twitterAngle);
        const instagramGradientString = this.constructGradientString(INSTAGRAM_COLOR, twitterAngle, instagramAngle);
        const linkedingGradientString = this.constructGradientString(LINKEDIN_COLOR, instagramAngle, 360);
        return fbGradientString + ", " + twitterGradientString + ", " + instagramGradientString + ", " +linkedingGradientString;
    }

}