// Import modules
import { fetchStockData, fetchTweets, fetchEconomicIndicator } from './data_fetcher.js';
import { calculateRSI, calculateMACD, calculateBollingerBands } from './feature_engineering.js';
import { analyzeSentiment } from './utils/sentiment_analysis.js';
import { EnsembleModel } from './models/ensemble_model.js';
import { LSTMModel } from './models/deep_learning_model.js';

// Example usage of data fetching and feature engineering
async function runAnalysis() {
  // Fetch stock data
  const stockData = await fetchStockData('AAPL');
  if (!stockData) {
    console.error('Failed to fetch stock data');
    return;
  }

  // Extract closing prices from stock data (example for Alpha Vantage TIME_SERIES_INTRADAY)
  const timeSeries = stockData['Time Series (5min)'];
  const closingPrices = Object.values(timeSeries).map(entry => parseFloat(entry['4. close'])).reverse();

  // Calculate technical indicators
  const rsi = calculateRSI(closingPrices);
  const macd = calculateMACD(closingPrices);
  const bollinger = calculateBollingerBands(closingPrices);

  console.log('RSI:', rsi);
  console.log('MACD:', macd);
  console.log('Bollinger Bands:', bollinger);

  // Fetch tweets for sentiment analysis
  const tweetsData = await fetchTweets('AAPL');
  if (tweetsData && tweetsData.data) {
    const sentiments = tweetsData.data.map(tweet => analyzeSentiment(tweet.text));
    console.log('Tweet Sentiments:', sentiments);
  }

  // Initialize and train ensemble model (placeholder)
  const ensemble = new EnsembleModel();
  // Training and prediction logic to be implemented

  // Initialize and train LSTM model (placeholder)
  // Data preprocessing for LSTM input needed
  // const lstm = new LSTMModel([10, 1]);
  // await lstm.train(trainX, trainY);

  // Further integration and UI updates to be implemented
}

import { rebalancePortfolio, calculateVaR, calculateSharpeRatio } from './portfolio_management.js';
import { backtestStrategy, monteCarloSimulation } from './backtesting.js';
import { explainPrediction, generateTradeReport } from './explainability.js';

async function runAdvancedFeatures() {
  // Example portfolio holdings and prices
  const holdings = { AAPL: 50, MSFT: 30 };
  const prices = { AAPL: 150, MSFT: 250 };
  const targetAllocations = { AAPL: 0.6, MSFT: 0.4 };

  // Rebalance portfolio
  const newHoldings = rebalancePortfolio(holdings, targetAllocations, prices);
  console.log('Rebalanced Portfolio Holdings:', newHoldings);

  // Calculate risk metrics
  const returns = [0.01, -0.02, 0.015, -0.005, 0.02]; // Example returns
  const var95 = calculateVaR(returns, 0.95);
  const sharpe = calculateSharpeRatio(returns);
  console.log('Value at Risk (95%):', var95);
  console.log('Sharpe Ratio:', sharpe);

  // Backtest a simple strategy
  const pricesHistory = [100, 102, 101, 105, 107, 110];
  const signals = ['hold', 'buy', 'hold', 'hold', 'sell', 'hold'];
  const portfolioValues = backtestStrategy(pricesHistory, signals);
  console.log('Backtest Portfolio Values:', portfolioValues);

  // Monte Carlo simulation
  const monteCarloResults = monteCarloSimulation(100000, 0.07, 0.15, 252, 1000);
  console.log('Monte Carlo Simulation Results:', monteCarloResults);

  // Explainability example
  const dummyModel = null; // Placeholder
  const dummyInput = {};
  const explanation = explainPrediction(dummyModel, dummyInput);
  console.log('Model Explanation:', explanation);

  // Generate trade report
  const trades = [
    { asset: 'AAPL', action: 'buy', quantity: 10, price: 150, timestamp: Date.now(), reason: 'Momentum' },
    { asset: 'MSFT', action: 'sell', quantity: 5, price: 250, timestamp: Date.now(), reason: 'Risk Management' },
  ];
  const report = generateTradeReport(trades);
  console.log('Trade Report:', report);
}

runAnalysis();
runAdvancedFeatures();
