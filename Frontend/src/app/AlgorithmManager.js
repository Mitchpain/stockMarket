const recommendations= {
    BUY: 'buy',
    HOLD: 'hold',
    SELL:'sell'
} 
/**
 * @name baseAlgorithm
 * @description Base algorithm before any modification
 * @param {number} price Price of the stock
 * @param {number} socialMediaCount Number of social media post
 * @returns {string} Recommendations to buy, hold or sell
 */
const baseAlgorithm = (price, socialMediaCount) => {
    const temp = Math.random();
    if(temp < 1/3){
        return recommendations.BUY;
    }
    else if(1/3 < temp && temp < 2/3){
        return recommendations.HOLD;
    }
    return recommendations.SELL;
}

let currentAlgorithm = baseAlgorithm;

/**
 * @name setNewAlgorithm
 * @description edit the current algorithm
 * @param {string} newAlgorithm A javascript function in a string to allow 
 * the user to edit on the fly the algorithm
 */
export function setNewAlgorithm(newAlgorithm){
    //todo : Security
    currentAlgorithm = eval(newAlgorithm);
} 

/**
 * @name recommendationAlgorithm
 * @description Trigger the current algorithm
 * @param {number} price Price of the stock
 * @param {number} socialMediaCount Number of social media post
 * @param {[]} args Custom args defined by the user
 * @returns {string} Recommendations to buy, hold or sell
 */
export function recommendationAlgorithm (price, socialMediaCount, args) {
    return currentAlgorithm(price, socialMediaCount, args);
   }