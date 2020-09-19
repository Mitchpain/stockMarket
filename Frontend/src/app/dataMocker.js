export class StockPrices {
    constructor(date, price){
        this.date = date;
        this.price = price;
    }
}

const recommendations= {
    BUY: 'buy',
    HOLD: 'hold',
    SELL:'sell'
} 

export function stockPriceGenerator (stockSymbol, dates) {
    const stockPrices = [];
    dates.forEach(date => {
        const price = Math.random() * 1000;
        stockPrices.push(new StockPrices(date,price.toFixed(2)));
    });
    console.log(stockPrices)
    return stockPrices;
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

export function recommendationAlgorithm (price, socialMediaCount, args) {
 return currentAlgorithm(price, socialMediaCount, args);
}

export function socialMediaCountGenerator(stockSymbol, socialMediaType){
    return Number(((Math.random() * 1000)).toFixed(0));
}