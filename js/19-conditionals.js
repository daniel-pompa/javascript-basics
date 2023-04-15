const balance = 300;
const pay = 500;
const creditCard = true;

console.log(`Saldo: ${balance}`);
console.log(`Cuota: ${pay}`);
console.log(`Tarjeta de crédito: ${creditCard}`);

/**
 * || At least one condition must be met
 * && All conditions must be met
 */

if (balance > pay) {
  console.log('Puedes pagar con tu saldo');
} else if (creditCard) {
  console.log('Puedes pagar con tu tarjeta');
} else {
  console.log('No tienes saldo suficiente');
}

if (balance > pay || creditCard) {
  if (balance > pay) {
    console.log('Puedes pagar con tu saldo');
  } else {
    console.log('Puedes pagar con tu tarjeta');
  }
} else {
  console.log('No tienes saldo suficiente');
}

if (balance > pay && creditCard) {
  console.log('Puedes pagar con tu saldo o crédito');
} else {
  console.log('No tienes saldo suficiente');
}
