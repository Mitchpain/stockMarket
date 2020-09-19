export class StockPrices {
    constructor(date, price){
        this.date = date;
        this.price = price;
    }
}
export function stockPriceGenerator (stockSymbol, dates) {
    const stockPrices = [];
    dates.forEach(date => {
        const price = Math.random() * 1000;
        stockPrices.push(new StockPrices(date,price.toFixed(2)));
    });
    return stockPrices;
}

export function socialMediaCountGenerator(stockSymbol, socialMediaType){
    return Number(((Math.random() * 1000)).toFixed(0));
}