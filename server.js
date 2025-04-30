const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

// Placeholder endpoint for portfolio value
app.post('/api/portfolio/value', (req, res) => {
  const { holdings, prices } = req.body;
  if (!holdings || !prices) {
    return res.status(400).json({ error: 'holdings and prices are required' });
  }
  let totalValue = 0;
  for (const asset in holdings) {
    if (prices[asset]) {
      totalValue += holdings[asset] * prices[asset];
    }
  }
  res.json({ totalValue });
});

// Placeholder endpoint for running strategy
app.post('/api/strategy/run', (req, res) => {
  const { strategyCode } = req.body;
  // In real implementation, evaluate or send strategyCode to backend engine
  res.json({ message: 'Strategy execution not implemented', strategyCode });
});

app.listen(port, () => {
  console.log('Server running on port ' + port);
});
