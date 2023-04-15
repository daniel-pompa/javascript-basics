/**
 * Flow control structures
 * Conditionals
 * > Greater than
 * < Less than
 * >= Greater than or equal to
 * <= Less than or equal to
 */
const balance = 13000;
const withdraw = 25500;

if (balance > withdraw) {
  // Condition is met
  console.log(`Saldo disponible: ${balance}€`);
  console.log(`Cantidad a retirar: ${withdraw}€`);
  console.log('Puede realizar la operación');
} else {
  console.log(`Saldo disponible: ${balance}€`);
  console.log(`Cantidad a retirar: ${withdraw}€`);
  console.log('No puede realizar la operación');
}
