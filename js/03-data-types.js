/* Structures and data types
Undefined, Boolean, Number, String, Function, Symbol, BigInt, Object, Null */

// Undefined
let customer;
console.log(typeof customer);

// Boolean
const logicalData = true;
console.log(typeof logicalData);

// Number
const number1 = 20;
const number2 = 10.5;
const number3 = -10;
const number4 = '31';
console.log(typeof number1);
console.log(typeof number2);
console.log(typeof number3);
console.log(typeof Number(number4));

// Strings
const name = 'Daniel';
const number5 = 20;
console.log(typeof name);
console.log(typeof String(number5));

// BigInt
const bigInt = BigInt(9856145631432732145588458632799n);
console.log(typeof bigInt);

const number6 = 98;
console.log(number6 + Number(bigInt));

// Symbol
const firstSymbol = Symbol(20);
const secondSymbol = Symbol(20);
console.log(firstSymbol === secondSymbol);
console.log(firstSymbol.valueOf());

// Null
const email = null;
console.log(typeof email);
