import { describe, it, expect } from 'vitest';
import { formatearPrecio } from './formatearPrecio';

describe('formatearPrecio', () => {
  it('4500 → "$ 4.500"', () => {
    expect(formatearPrecio(123456789)).toBe('$ 123.456.789');
  });
});