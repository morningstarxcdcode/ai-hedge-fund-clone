import natural from 'natural';
import Sentiment from 'sentiment';

const sentiment = new Sentiment();

// Basic sentiment analysis using the Sentiment library
export function analyzeSentiment(text) {
  return sentiment.analyze(text);
}

// Tokenize text using natural library
export function tokenizeText(text) {
  const tokenizer = new natural.WordTokenizer();
  return tokenizer.tokenize(text);
}
