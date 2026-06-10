const { add, sub, mul, div } = require('../calculator');

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
});