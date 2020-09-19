import {stockPriceGenerator, recommendationAlgorithm, socialMediaCountGenerator} from "./dataMocker";
export default class StockInfo {
    constructor (price, date, recommendation) {
        this.price = price;
        this.date = date;
        this.recommendation = recommendation;
    }   
    
    /**
     * @name computeDates
     * @description Compute the dates for a given time window.
     * @param {number} timeWindow Time window selected by the user
     * @returns {Date[]} An array of dates for the time window.
     */
    static computeDates (timeWindow) {
        const dates = [];
        for (let i = 0; i < timeWindow ; i++) {
            dates.push(
                new Date(
                    Date.now() - i * ( 3600 * 1000 * 24)
                    )
                );
        }
        return dates;
    }

    static fetchStockPriceRecommendations(stockSymbol, timeWindow, socialMediaCount) {
        const stockInfos = [];
        const stocks = stockPriceGenerator(stockSymbol, this.computeDates(timeWindow));
        stocks.forEach(stock => {
            const recommendation = recommendationAlgorithm(stock.price, socialMediaCount);
            stockInfos.push(new StockInfo(stock.price, stock.date, recommendation));
        });        
        return stockInfos;
    }

    static validateStockSymbol(stockSymbol) {
        const validStockSymbol =  ["kirk", "trill", "tsla", "logm", "zm", "vslr"];
        const index = validStockSymbol.indexOf(stockSymbol.toLowerCase());  
        return (index > -1);
    }
    
    static getSocialMediaCount(stockSymbol,socialMediaType){
        return socialMediaCountGenerator(stockSymbol, socialMediaType);
    }
}