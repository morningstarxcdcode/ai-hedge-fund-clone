import React, { useState, useEffect } from 'react';

function Dashboard() {
  const [portfolio, setPortfolio] = useState({
    holdings: { AAPL: 50, MSFT: 30 },
    prices: { AAPL: 150, MSFT: 250 },
  });

  // Placeholder for real-time updates
  useEffect(() => {
    // Fetch real-time data and update portfolio state here
  }, []);

  const totalValue = Object.keys(portfolio.holdings).reduce((acc, asset) => {
    return acc + (portfolio.holdings[asset] * (portfolio.prices[asset] || 0));
  }, 0);

  return (
    <div>
      <h1>AI Hedge Fund Dashboard</h1>
      <h2>Portfolio Value: ${totalValue.toFixed(2)}</h2>
      <table>
        <thead>
          <tr>
            <th>Asset</th>
            <th>Holdings</th>
            <th>Price</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(portfolio.holdings).map(asset => (
            <tr key={asset}>
              <td>{asset}</td>
              <td>{portfolio.holdings[asset]}</td>
              <td>${portfolio.prices[asset]}</td>
              <td>${(portfolio.holdings[asset] * portfolio.prices[asset]).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
