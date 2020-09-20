import StockInfo from '../StockInfo';
describe('StockInfo class', () => {  
    it('Compute dates should return the time window amount of dates.',()=>{
        const dates = StockInfo.computeDates(10);
        expect(dates.length).toBe(10);
    }); 
    it('computeDates should return today if there is only one date.',()=>{
        const today = new Date();
        const date = StockInfo.computeDates(1);
        expect(date[0].getDay()).toBe(today.getDay());
        expect(date[0].getMonth()).toBe(today.getMonth());
        expect(date[0].getFullYear()).toBe(today.getFullYear());
    }); 
    it('Fetch Stock Infos should an array of stock info',()=>{
        const stockInfo = StockInfo.fetchStockInfos("logm",1,100);
        expect(stockInfo.length).toBe(1);
        expect(stockInfo[0].date).not.toBe(undefined);
        expect(stockInfo[0].price).not.toBe(undefined);
        expect(stockInfo[0].recommendation).not.toBe(undefined);
    });
    it('Validate stock symbol should returns true for a valid stock symbol',()=>{
        const validStockSymbol =  ["kirk", "trill", "tsla", "logm", "zm", "vslr"];
        while(validStockSymbol.length > 0){
            expect(StockInfo.validateStockSymbol(validStockSymbol.pop())).toBe(true);
        }
    });
    it('Validate stock symbol should returns false for an ivalid stock symbol',()=>{
        expect(StockInfo.validateStockSymbol("js")).toBe(false);
    });
});
