import axios from 'axios';

const ALPHA_VANTAGE_API_KEY = 'YOUR_ALPHA_VANTAGE_API_KEY';
const TWITTER_BEARER_TOKEN = 'YOUR_TWITTER_BEARER_TOKEN';

// Fetch real-time stock data from Alpha Vantage
export async function fetchStockData(symbol) {
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${ALPHA_VANTAGE_API_KEY}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching stock data:', error);
    return null;
  }
}

// Fetch recent tweets for sentiment analysis
export async function fetchTweets(query, maxResults = 100) {
  const url = `https://api.twitter.com/2/tweets/search/recent?query=${encodeURIComponent(query)}&max_results=${maxResults}`;
  try {
    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${TWITTER_BEARER_TOKEN}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching tweets:', error);
    return null;
  }
}

// Fetch economic indicators from a public API (example: FRED API)
const FRED_API_KEY = 'YOUR_FRED_API_KEY';
export async function fetchEconomicIndicator(indicator) {
  const url = `https://api.stlouisfed.org/fred/series/observations?series_id=${indicator}&api_key=${FRED_API_KEY}&file_type=json`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching economic indicator:', error);
    return null;
  }
}
