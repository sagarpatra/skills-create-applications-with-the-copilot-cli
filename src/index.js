#!/usr/bin/env node

// Node.js CLI Calculator
// Supported operations:
//  - Addition: + or add
//  - Subtraction: - or sub
//  - Multiplication: * or x or mul
//  - Division: / or div

// Usage examples:
//  node src/index.js add 2 3
//  node src/index.js 2 + 3
//  node src/index.js 10 / 2

const args = process.argv.slice(2);

function usage() {
  console.log('Usage: node src/index.js <operator> <a> <b>');
  console.log('Operators: + add, - sub, * x mul, / div');
  console.log('Examples:');
  console.log('  node src/index.js add 2 3');
  console.log('  node src/index.js 2 + 3');
}

if (args.length !== 3) {
  usage();
  process.exit(args.length === 0 ? 0 : 1);
}

let op = args[0];
let a, b;

// Accept either form: <operator> <a> <b>  OR  <a> <operator> <b>
const asNumber = (s) => {
  const n = Number(s);
  return Number.isFinite(n) ? n : NaN;
};

if (!isNaN(asNumber(op))) {
  // form: <a> <operator> <b>
  a = asNumber(args[0]);
  op = args[1];
  b = asNumber(args[2]);
} else {
  // form: <operator> <a> <b>
  a = asNumber(args[1]);
  b = asNumber(args[2]);
}

if (Number.isNaN(a) || Number.isNaN(b)) {
  console.error('Error: both operands must be valid numbers');
  process.exit(2);
}

function add(x, y) { return x + y; }
function sub(x, y) { return x - y; }
function mul(x, y) { return x * y; }
function div(x, y) {
  if (y === 0) {
    throw new Error('Division by zero');
  }
  return x / y;
}

let result;
try {
  switch ((op || '').toString().toLowerCase()) {
    case '+':
    case 'add':
      result = add(a, b);
      break;
    case '-':
    case 'sub':
      result = sub(a, b);
      break;
    case '*':
    case 'x':
    case 'mul':
      result = mul(a, b);
      break;
    case '/':
    case 'div':
    case '÷':
      result = div(a, b);
      break;
    default:
      console.error('Unknown operator:', op);
      usage();
      process.exit(3);
  }
} catch (err) {
  console.error('Error:', err.message);
  process.exit(4);
}

// Print result (no extra formatting)
console.log(result);
