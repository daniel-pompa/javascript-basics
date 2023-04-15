// Ternary conditional operator
const authenticated = true;

authenticated
  ? console.log('Usuario autenticado')
  : console.log('No autenticado');

// Double ternary conditional operator
const balance = 300;
const pay = 500;
const creditCard = true;

console.log(`Saldo: ${balance}`);
console.log(`Cuota: ${pay}`);
console.log(`Tarjeta de crédito: ${creditCard}`);

balance > pay
  ? console.log('Puedes pagar con tu saldo')
  : creditCard
  ? console.log('Puedes pagar con tarjeta de crédito')
  : console.log('No tienes saldo suficiente');
