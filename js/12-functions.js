// Function Declaration
function greeting(message = 'Hola mundo!', name = '') {
  console.log(`${message} ${name}`);
}

greeting();
greeting('Hola', 'Gael');

function add(number1 = 0, number2 = 0) {
  const result = 0;
  console.log(`${number1} + ${number2} =`, result);
}

add(49);
add(49, 41);

function subtract(number1 = 0, number2 = 0) {
  const result = number1 - number2;
  console.log(`${number1} - ${number2} =`, result);
}

subtract(100, 2);

function multiply(number1 = 0, number2 = 0) {
  const result = number1 * number2;
  console.log(`${number1} x ${number2} =`, result);
}

multiply(9, 9);

function divide(number1 = 0, number2 = 0) {
  const result = number1 / number2;
  console.log(`${number1} / ${number2} =`, result.toFixed(2));
}

divide(897, 9);

function squareRoot(number = 0) {
  console.log(`Square root of ${number} =`, Math.sqrt(number));
}

squareRoot(98);

function returnArray(name, age, email) {
  return [name, age, email];
}
console.log(returnArray('Daniel', 48, 'daniel.pompa@gmail.com'));

const [name, age, email] = returnArray('Daniel', 48, 'daniel.pompa@gmail.com');
console.log(name);
console.log(age);
console.log(email);

function returnObject(product, price, available = false) {
  return { product, price, available };
}
console.log(returnObject('Tablet', 789, true));

const { product, price, available } = returnObject('Tablet', 789, true);
console.log(product);
console.log(price);
console.log(available);
