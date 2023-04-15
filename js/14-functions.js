// Arrow Functions
const number1 = 10;
const number2 = 8;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (a / b).toFixed(2);
const squareRoot = n => Math.sqrt(n);

console.log(`${number1} + ${number2} = ${add(number1, number2)}`);
console.log(`${number1} - ${number2} = ${subtract(number1, number2)}`);
console.log(`${number1} x ${number2} = ${multiply(number1, number2)}`);
console.log(`${number1} / ${number2} = ${divide(number1, number2)}`);
console.log(`Raíz cuadrada de ${number2} = ${squareRoot(number2)}`);
