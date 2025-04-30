// Security utilities

import crypto from 'crypto';

// Generate a random 2FA secret (placeholder)
export function generate2FASecret() {
  return crypto.randomBytes(20).toString('hex');
}

// Verify 2FA token (placeholder)
export function verify2FAToken(secret, token) {
  // Implement TOTP verification using libraries like speakeasy
  return true; // Placeholder always returns true
}

// Encrypt sensitive data
export function encryptData(data, key) {
  const cipher = crypto.createCipher('aes-256-cbc', key);
  let encrypted = cipher.update(data, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

// Decrypt sensitive data
export function decryptData(encryptedData, key) {
  const decipher = crypto.createDecipher('aes-256-cbc', key);
  let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}
