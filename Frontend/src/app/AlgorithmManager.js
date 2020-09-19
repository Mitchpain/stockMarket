const recommendations= {
    BUY: 'buy',
    HOLD: 'hold',
    SELL:'sell'
} 

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


export function setNewAlgorithm(newAlgorithm){
    currentAlgorithm = eval(newAlgorithm);
} 

export function recommendationAlgorithm (price, socialMediaCount, args) {
    return currentAlgorithm(price, socialMediaCount, args);
   }