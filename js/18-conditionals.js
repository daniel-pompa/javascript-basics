// Comparison and strict operator
const number1 = 20;
const number2 = '20';

console.log(typeof number1);
console.log(typeof number2);

// == Compare by value
if (number1 == number2) {
  console.log(`${number1} y ${number2} son iguales`);
} else {
  console.log(`${number1} y ${number2} no son iguales`);
}

// === Compare by value and data type
if (number1 === number2) {
  console.log(`${number1} y ${number2} son iguales`);
} else {
  console.log(`${number1} y ${number2} no son iguales`);
}

if (number1 === Number(number2)) {
  console.log(`${number1} y ${number2} son iguales`);
} else {
  console.log(`${number1} y ${number2} no son iguales`);
}

const username = 'daniel';
const password = 'usertar';

function start() {
  console.log('Comprobando usuario y contraseña, espere por favor...');

  setTimeout(() => {
    authentication();
  }, 2000);
}

function success(user) {
  console.log(`Usuario autenticado: ${user}`);
}

function error() {
  console.log('Nombre de usuario y/o contraseña incorrecto');
}

function authentication() {
  if (username === 'daniel' && password === 'usertar') {
    success('daniel');
  } else {
    error();
  }
}

start();
