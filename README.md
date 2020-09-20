# Stock Market Recommender
This is an interview assignment for LogMeIn

## Description
A frontend for a web application that can provides recommendations to a user to buy, sell or hold shares of a stock option. The algorithm used to generate the recommendations uses a correlation between social media posts and the stock price. The frontend is a clean and simple to use dashboard that can display all the information to the user to make the right decision.

## Getting Started
Clone the current repository   
Set your path to ./stockMarket/Frontend/  
Run  
```javascript
npm install
```
Once it's install run
```javascript
npm run start
```
You should be able to see the application in a browser at  
http://localhost:8080/  

To trigger the first analysis you need to enter a stock symbol in the designed input. Right now, only a few couple of stock symbol are valid. In an ideal world, the validation would be made by the backend. 
Valid stock symbols : kirk, trill, tsla, logm, zm, vslr

## Running the test
You can run the test with
```javascript
npm run test
```