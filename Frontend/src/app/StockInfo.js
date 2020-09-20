import {stockPriceGenerator} from "./dataMocker";
import {recommendationAlgorithm} from "./AlgorithmManager";
/**
 * @name StockInfo
 * @description Keep the informations about the price, the date and
 * the result of the algorithm
 */
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
                    Date.now() + i * ( 3600 * 1000 * 24)
                    )
                );
        }
        return dates;
    }

    /**
     * @name fetchStockInfos
     * @description Compute the StockInfo about a stock for the requested time window
     * @param {string} stockSymbol The analyzed stock symbol
     * @param {number} timeWindow The analyzed time frame
     * @param {number} socialMediaCount The number of post about the analyzed stock.
     * @returns {StockInfo[]} An array describing the result of the request.
     */
    static fetchStockInfos(stockSymbol, timeWindow, socialMediaCount) {
        const stockInfos = [];
        const stocks = stockPriceGenerator(stockSymbol, this.computeDates(timeWindow));
        stocks.forEach(stock => {
            const recommendation = recommendationAlgorithm(stock.price, socialMediaCount);
            stockInfos.push(new StockInfo(stock.price, stock.date, recommendation));
        });        
        return stockInfos;
    }

    /**
     * @name validateStockSymbol
     * @description Validate the stock symbol typed by the user
     * @param {string} stockSymbol 
     * @returns {boolean} True if the stock is handled
     */
    static validateStockSymbol(stockSymbol) {
        //Todo : Fetch the handled stock on a server.
        const validStockSymbol =  ["kirk", "trill", "tsla", "logm", "zm", "vslr"];
        const index = validStockSymbol.indexOf(stockSymbol.toLowerCase());  
        return (index > -1);
    }

    /**
     * @name processNewAlgorithm
     * @description Process new stock info when the algorithm is modified
     * @param {StockInfo[]} stockInfos An array that contains the result of a previous analysis
     * @param {number} socialMediaCount The number of post about the analyzed stock.
     */
    static processNewAlgorithm(stockInfos, socialMediaCount){
        const newStockInfos = []
        stockInfos.forEach(stockInfo => {
            const recommendation = recommendationAlgorithm(stockInfo.price, socialMediaCount);
            newStockInfos.push(new StockInfo(stockInfo.price, stockInfo.date, recommendation));
        }); 
        return newStockInfos;
    }
}