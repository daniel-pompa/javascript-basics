// Joining two or more objects
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

const newObject = {
  product: { ...product },
  customer: { ...customer }
};

console.log(newObject);
