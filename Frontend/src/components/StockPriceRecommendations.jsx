import React from 'react';

function StockPriceRecommendations(props) {
  const stockRecommendations = (props.stockRecommendations);
    return (
      <div  id="recommendations">
      <table>
        <thead>
        <tr>
            <th>Date</th>
            <th>Price</th>
        </tr>
        </thead>
        <tbody>
        {stockRecommendations.map((recommendation, index) => (
          <tr key={index} className={"recommendation-"+recommendation.recommendation}>
              <td>{recommendation.date.toLocaleDateString("en-US")}</td>
              <td>{recommendation.price}</td>
          </tr>
    ))}
        </tbody>
    </table>
  </div>
    );
};

export default StockPriceRecommendations;