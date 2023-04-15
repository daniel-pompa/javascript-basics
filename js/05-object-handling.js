// Object handling
const product = {
  name: 'PC Workstation',
  price: 2300,
  available: true,
};

// Modify the properties of an object
product.name = 'PC Basic';
product.price = 700;
product.available = false;

// Add properties to an object
product.image = 'image.jpg';
console.table(product);

// Delete properties of an object
delete product.image;
console.table(product);

// Object that can't be modified
const person = {
  name: 'Daniel',
  surnames: 'Pompa Pareja',
  age: 48,
  email: 'daniel.pompa@gmail.com',
};

Object.freeze(person);

person.name = 'Óscar';
person.age = 44;
person.email = 'oscar.pompa@gmail.com';
person.phone = '648 11 99 47';
delete person.email;

console.table(person);

// Allow modification of existing properties, but not delete or add new properties
const student = {
  name: 'Carmen',
  surnames: 'Ciambrino Baz',
  email: 'carmen.ciambrino@gmail.com',
};

Object.seal(student);

student.name = 'Emma';
student.email = 'emma.ciambrino@gmail.com';
student.phone = '669 97 90 20';
delete student.email;

console.table(student);
