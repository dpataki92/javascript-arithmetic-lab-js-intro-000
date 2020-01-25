function add (a,b) {
  return a + b;
}

function subtract (a,b) {
  return a - b;
}

function multiply (a,b) {
  return a * b;
}

function divide (a,b) {
  return a / b;
}

function increment (a) {
  a+=1;
  return a;
}

function decrement (a) {
  a-=1;
  return a;
}

function makeInt (string) {
  var result = parseInt(string, 10);
  return result;
}

function preserveDecimal (string) {
  var result = parseFloat(string);
  return result;
}
