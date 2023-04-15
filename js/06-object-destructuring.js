// Destructuring with two or more objects
const product = {
  name: 'PC Workstation',
  price: 2300,
  available: true,
};

console.table(product);

const customer = {
  name: 'Daniel',
  email: 'daniel.pompa@gmail.com',
  premium: false,
};

console.table(customer);

const { name, price, available } = product;
const { name: customerName, email, premium } = customer;

console.log(name, price, available);
console.log(customerName, email, premium);
