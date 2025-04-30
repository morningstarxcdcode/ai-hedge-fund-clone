// Portfolio management utilities

// Calculate portfolio value given asset holdings and prices
export function calculatePortfolioValue(holdings, prices) {
  let totalValue = 0;
  for (const asset in holdings) {
    if (prices[asset]) {
      totalValue += holdings[asset] * prices[asset];
    }
  }
  return totalValue;
}

// Dynamic portfolio rebalancing based on target allocations
export function rebalancePortfolio(currentHoldings, targetAllocations, prices) {
  const portfolioValue = calculatePortfolioValue(currentHoldings, prices);
  const newHoldings = {};
  for (const asset in targetAllocations) {
    const targetValue = portfolioValue * targetAllocations[asset];
    newHoldings[asset] = targetValue / prices[asset];
  }
  return newHoldings;
}

// Calculate Value at Risk (VaR) using historical simulation
export function calculateVaR(returns, confidenceLevel = 0.95) {
  const sortedReturns = returns.slice().sort((a, b) => a - b);
  const index = Math.floor((1 - confidenceLevel) * sortedReturns.length);
  return Math.abs(sortedReturns[index]);
}

// Calculate Sharpe Ratio
export function calculateSharpeRatio(returns, riskFreeRate = 0) {
  const avgReturn = returns.reduce((a, b) => a + b, 0) / returns.length;
  const stdDev = Math.sqrt(returns.map(r => Math.pow(r - avgReturn, 2)).reduce((a, b) => a + b, 0) / returns.length);
  return (avgReturn - riskFreeRate) / stdDev;
}

// Placeholder for stop-loss and take-profit mechanisms
export function applyStopLossTakeProfit(holdings, prices, stopLossThreshold, takeProfitThreshold) {
  // Implement logic to sell assets if price drops below stopLossThreshold or rises above takeProfitThreshold
  // This is a placeholder function
  return holdings;
}
