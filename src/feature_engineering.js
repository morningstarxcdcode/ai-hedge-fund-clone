import { RSI, MACD, BollingerBands } from 'technicalindicators';

// Calculate RSI
export function calculateRSI(closingPrices, period = 14) {
  return RSI.calculate({ values: closingPrices, period });
}

// Calculate MACD
export function calculateMACD(closingPrices, fastPeriod = 12, slowPeriod = 26, signalPeriod = 9) {
  return MACD.calculate({
    values: closingPrices,
    fastPeriod,
    slowPeriod,
    signalPeriod,
    SimpleMAOscillator: false,
    SimpleMASignal: false,
  });
}

// Calculate Bollinger Bands
export function calculateBollingerBands(closingPrices, period = 20, stdDev = 2) {
  return BollingerBands.calculate({
    values: closingPrices,
    period,
    stdDev,
  });
}
