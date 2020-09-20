import {recommendationAlgorithm, recommendations, setNewAlgorithm} from '../AlgorithmManager';
describe('AlgorithmManager', () => {  
    it('From scratch, recommendationAlgorithm should return buy, hold or sell',()=>{
        const result = [recommendations.BUY,recommendations.HOLD, recommendations.SELL];
        const recommendation = recommendationAlgorithm(10,10);
        expect(result.indexOf(recommendation)).not.toBe(-1);
    }); 
    it('The algorithm can be updated to return any other value.',()=>{
        setNewAlgorithm('()=>{return "mockedValue"}');
        const recommendation = recommendationAlgorithm(10,10);
        expect(recommendation).toBe("mockedValue");
    }); 
});