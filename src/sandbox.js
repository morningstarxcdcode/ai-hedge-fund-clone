// Sandbox environment for testing trading strategies without real money

export class Sandbox {
  constructor() {
    this.cash = 100000;
    this.holdings = {};
    this.tradeHistory = [];
  }

  buy(asset, quantity, price) {
    const cost = quantity * price;
    if (this.cash >= cost) {
      this.cash -= cost;
      this.holdings[asset] = (this.holdings[asset] || 0) + quantity;
      this.tradeHistory.push({ asset, action: 'buy', quantity, price, timestamp: Date.now() });
      return true;
    }
    return false;
  }

  sell(asset, quantity, price) {
    if ((this.holdings[asset] || 0) >= quantity) {
      this.holdings[asset] -= quantity;
      this.cash += quantity * price;
      this.tradeHistory.push({ asset, action: 'sell', quantity, price, timestamp: Date.now() });
      return true;
    }
    return false;
  }

  getPortfolioValue(prices) {
    let total = this.cash;
    for (const asset in this.holdings) {
      total += (prices[asset] || 0) * this.holdings[asset];
    }
    return total;
  }

  getTradeHistory() {
    return this.tradeHistory;
  }
}
