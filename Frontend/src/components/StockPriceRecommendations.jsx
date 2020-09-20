import React from 'react';
import './styles/StockPriceRecommendations.scss';
function StockPriceRecommendations(props) {
  const stockRecommendations = (props.stockRecommendations);
    return (
      <div data-testid="stockPriceRecommendations"  id="recommendations" className="stockInfoBase">
      <table>
        <thead>
        <tr>
            <th>Date</th>
            <th>Price</th>
        </tr>
        </thead>
        <tbody>
        {stockRecommendations.map((recommendation, index) => (
          <tr data-testid="recommendationRow" key={index} className={"recommendation-"+recommendation.recommendation}>
              <td data-testid="recommendationDate">{recommendation.date.toLocaleDateString("en-US")}</td>
              <td data-testid="recommendationPrice">{recommendation.price}</td>
          </tr>
        ))}
        </tbody>
    </table>
  </div>
    );
};

export default StockPriceRecommendations;