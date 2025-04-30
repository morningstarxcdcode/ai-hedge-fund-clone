// Backtesting engine and Monte Carlo simulations

// Backtest a strategy on historical price data
export function backtestStrategy(prices, signals) {
  let cash = 100000; // Starting cash
  let holdings = 0;
  let portfolioValueHistory = [];

  for (let i = 0; i < prices.length; i++) {
    if (signals[i] === 'buy' && cash >= prices[i]) {
      holdings += 1;
      cash -= prices[i];
    } else if (signals[i] === 'sell' && holdings > 0) {
      holdings -= 1;
      cash += prices[i];
    }
    const portfolioValue = cash + holdings * prices[i];
    portfolioValueHistory.push(portfolioValue);
  }

  return portfolioValueHistory;
}

// Monte Carlo simulation for portfolio returns
export function monteCarloSimulation(initialInvestment, meanReturn, volatility, periods, simulations) {
  const results = [];

  for (let i = 0; i < simulations; i++) {
    let value = initialInvestment;
    for (let j = 0; j < periods; j++) {
      const randomShock = Math.random() * volatility * 2 - volatility;
      value = value * (1 + meanReturn + randomShock);
    }
    results.push(value);
  }

  return results;
}
