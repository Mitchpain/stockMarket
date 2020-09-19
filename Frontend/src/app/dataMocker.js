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

export function recommendationAlgorithm (price, socialMediaCount) {
    const temp = Math.random() * 1000;
    if(price < temp && socialMediaCount < temp)
    {
        return recommendations.BUY;
    }
    else if(price > temp && socialMediaCount < temp)
    {
        return recommendations.HOLD;
    }
    return recommendations.SELL;
}

export function socialMediaCountGenerator(stockSymbol, socialMediaType){
    return ((Math.random() * 1000)).toFixed(0);
}