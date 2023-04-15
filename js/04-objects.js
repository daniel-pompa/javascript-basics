// Objects
const product = {
  name: 'PC Workstation',
  price: 2300,
  available: true,
};

console.log(product);
console.table(product);

// Access the properties of an object
console.log(product.name);
console.log(product.price);
console.log(product.available);

// Destructuring
const { name, price, available } = product;
console.log(name);
console.log(price);
console.log(available);

// Object Literal Enhancement
const username = 'Daniel';
const email = 'daniel.pompa@gmail.com';

const user = {
  username,
  email,
};

console.table(user);
