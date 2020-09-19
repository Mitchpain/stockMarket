import React from 'react';

function Result(props) {

  const stockRecommendations = (props.stockRecommendations);
  const hasRecommendations = stockRecommendations?.length > 0;
  return (
    <div>
      {hasRecommendations &&
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
    </table>}
  </div>
  );
};

export default Result;