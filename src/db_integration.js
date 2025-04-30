// Placeholder for time-series database integration (TimescaleDB or InfluxDB)

// Connect to TimescaleDB (PostgreSQL extension) example using node-postgres
import { Client } from 'pg';

const client = new Client({
  user: 'youruser',
  host: 'localhost',
  database: 'timeseriesdb',
  password: 'yourpassword',
  port: 5432,
});

export async function connectDB() {
  try {
    await client.connect();
    console.log('Connected to TimescaleDB');
  } catch (err) {
    console.error('Database connection error', err.stack);
  }
}

export async function insertTimeSeriesData(table, data) {
  // Example insert function, data should be an array of {timestamp, value}
  for (const point of data) {
    await client.query(
      `INSERT INTO ${table} (time, value) VALUES ($1, $2)`,
      [point.timestamp, point.value]
    );
  }
}

export async function queryTimeSeriesData(table, startTime, endTime) {
  const res = await client.query(
    `SELECT * FROM ${table} WHERE time >= $1 AND time <= $2 ORDER BY time ASC`,
    [startTime, endTime]
  );
  return res.rows;
}
