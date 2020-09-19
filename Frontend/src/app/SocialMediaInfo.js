import {socialMediaCountGenerator} from "./dataMocker";
const FACEBOOK_COLOR = "#4267B2";
const TWITTER_COLOR = "#1DA1F2";
const LINKEDIN_COLOR = "#2867B2";
const INSTAGRAM_COLOR = "#E1306C";
const socialMedias = {
    TWITTER: "twitter",
    FACEBOOK: "facebook",
    INSTAGRAM: "instagram",
    LINKEDIN: "linkedin"
}
export default class SocialMediaInfo {
    constructor(stockSymbol){
        this.stockSymbol = stockSymbol;
        this.computeSocialMediaCount();
    }

    computeSocialMediaCount(){
        this.twitter = this.getSocialMediaCount(socialMedias.TWITTER);
        this.facebook = this.getSocialMediaCount(socialMedias.FACEBOOK);
        this.instagram = this.getSocialMediaCount(socialMedias.INSTAGRAM);
        this.linkedin = this.getSocialMediaCount(socialMedias.LINKEDIN);
        this.total = this.twitter + this.facebook + this.instagram + this.linkedin;
    }

    getSocialMediaCount(socialMediaType){
        return socialMediaCountGenerator(this.stockSymbol, socialMediaType);
    }

    constructGradientString(color, firstAngle, secondAngle){
        return color + " " + firstAngle + "deg, " + color + " " + secondAngle +"deg";
    }

    calculateConicGradientAngle(numberOfPost, previousAngle){
        return Math.round(numberOfPost / this.total * 360) + previousAngle;
    }

    constructConicGradient(){
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