import * as tf from '@tensorflow/tfjs';

// LSTM model for time series forecasting
export class LSTMModel {
  constructor(inputShape) {
    this.model = tf.sequential();
    this.model.add(tf.layers.lstm({ units: 50, returnSequences: true, inputShape }));
    this.model.add(tf.layers.lstm({ units: 50 }));
    this.model.add(tf.layers.dense({ units: 1 }));

    this.model.compile({
      optimizer: 'adam',
      loss: 'meanSquaredError',
    });
  }

  async train(trainX, trainY, epochs = 50, batchSize = 32) {
    return await this.model.fit(trainX, trainY, {
      epochs,
      batchSize,
      shuffle: true,
    });
  }

  predict(inputX) {
    return this.model.predict(inputX);
  }
}
