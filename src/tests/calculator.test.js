const { add, sub, mul, div, modulo, power, squareRoot } = require('../calculator');

describe('Calculator basic operations', () => {
  test('2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('10 - 4 = 6', () => {
    expect(sub(10, 4)).toBe(6);
  });

  test('45 * 2 = 90', () => {
    expect(mul(45, 2)).toBe(90);
  });

  test('20 / 5 = 4', () => {
    expect(div(20, 5)).toBe(4);
  });

  test('division by zero throws', () => {
    expect(() => div(1, 0)).toThrow('Division by zero');
  });

  // Additional edge cases
  test('works with negative numbers', () => {
    expect(add(-2, -3)).toBe(-5);
    expect(sub(-2, 3)).toBe(-5);
  });

  test('works with floating point numbers', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3, 5);
    expect(div(0.3, 0.1)).toBeCloseTo(3);
  });

  // New tests for extended operations
  test('modulo: 10 % 3 = 1', () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test('modulo by zero throws', () => {
    expect(() => modulo(1, 0)).toThrow('Modulo by zero');
  });

  test('power: 2^8 = 256', () => {
    expect(power(2, 8)).toBe(256);
  });

  test('power with negative exponent', () => {
    expect(power(2, -3)).toBeCloseTo(0.125);
  });

  test('squareRoot: sqrt(16) = 4', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('squareRoot of non-perfect square', () => {
    expect(squareRoot(2)).toBeCloseTo(Math.sqrt(2), 10);
  });

  test('squareRoot of negative number throws', () => {
    expect(() => squareRoot(-1)).toThrow('Cannot compute square root of a negative number');
  });
});