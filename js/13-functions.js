// Function Expression
const greeting = function (message = 'Hola mundo!', name = '') {
  console.log(`${message} ${name}`);
};

greeting();
greeting('Hola', 'Gael');

const add = function (number1 = 0, number2 = 0) {
  return number1 + number2;
};

const result = add(31, 20);
console.log(result);
