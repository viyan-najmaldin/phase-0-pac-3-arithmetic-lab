const a = 5;
function add() {
  return a + a;
}
console.log(add());

function subtract() {
  return a - 2;
}
console.log(subtract());

function multiply() {
  return a * 2;
}
console.log(multiply());

function divide() {
  return a / 2;
}
console.log(divide());

function add(a, b) {
  return a + b;
}
console.log(add(2, 5));

function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

console.log(subtract(2, 3));
console.log(multiply(2, 3));
console.log(divide(2, 3));

function increment(num) {
  num += 1;
  return num;
}

function decrement(num) {
  return (num -= 1);
}

console.log(increment(30));
console.log(decrement(6));

function makeInt(n) {
  return parseInt(n, 10);
}

makeInt(500);

function preserveDecimal(n) {
  return parseFloat(n, 10);
}
console.log(preserveDecimal("134.55"));
console.log(preserveDecimal("woowww"));
