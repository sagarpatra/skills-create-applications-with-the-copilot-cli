// Calculator module
// Supported operations:
//  - Addition: add(x, y)
//  - Subtraction: sub(x, y)
//  - Multiplication: mul(x, y)
//  - Division: div(x, y)   (throws on division by zero)

function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

function mul(x, y) {
  return x * y;
}

function div(x, y) {
  if (y === 0) {
    throw new Error('Division by zero');
  }
  return x / y;
}

function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero');
  }
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot compute square root of a negative number');
  }
  return Math.sqrt(n);
}

module.exports = { add, sub, mul, div, modulo, power, squareRoot };