// Placeholder for caching layer integration using Redis

import redis from 'redis';

const client = redis.createClient();

client.on('error', (err) => {
  console.error('Redis Client Error', err);
});

export async function connectCache() {
  await client.connect();
  console.log('Connected to Redis cache');
}

export async function setCache(key, value, expirationInSeconds = 3600) {
  await client.set(key, JSON.stringify(value), {
    EX: expirationInSeconds,
  });
}

export async function getCache(key) {
  const data = await client.get(key);
  return data ? JSON.parse(data) : null;
}
