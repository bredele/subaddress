import test from 'node:test';
import assert from 'node:assert';
import subaddress from './index.js';

test('should remove subaddress from email', () => {
  assert.strictEqual(subaddress('hello+world@example.com'), 'hello@example.com');
  assert.strictEqual(subaddress('user+test@domain.org'), 'user@domain.org');
  assert.strictEqual(subaddress('john+123+456@test.com'), 'john@test.com');
});

test('should return email unchanged when no subaddress', () => {
  assert.strictEqual(subaddress('john@example.com'), 'john@example.com');
  assert.strictEqual(subaddress('user@domain.org'), 'user@domain.org');
});

test('should handle edge cases', () => {
  assert.strictEqual(subaddress('+only-plus@example.com'), '@example.com');
  assert.strictEqual(subaddress('user+@example.com'), 'user@example.com');
});
