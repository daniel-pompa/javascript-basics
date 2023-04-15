![JavaScript logo](./images/javascript-logo.svg)

# JavaScript basics

Repository with exercises to understand basic JavaScript concepts.

## What is JavaScript?

JavaScript is a lightweight, interpreted, object-oriented language with first-class functions. Known as the programming language for Web pages, but it is also used in many non-browser environments. It is a scripting language that is dynamic, multi-paradigm, prototype-based and supports object-oriented, imperative and functional programming styles.

JavaScript runs on the client side of the web, and can be used to program how web pages behave when an event occurs. JavaScript is a powerful scripting language and easy to learn, widely used to control the behavior of web pages.

## Learning goals

In this exercises you will apply:

- Manipulation and destructuring of objects
- Manipulation and destructuring of arrays
- Array iteration techniques
- Using functions to manipulate and transform arrays
- Manipulate HTML with JavaScript
- DOM selectors and events
- Generate HTML code with JavaScript
- Imports and Exports
- Fetch API and Promises
- Fetch API with Async Await

### Object manipulation

```js
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
```

### Object destructuring

```js
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
```

### Array manipulation

```js
const technologies = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'MongoDB',
  'Express',
  'React',
  'Node.js',
];

// Add elements to the array
const newArray1 = ['GraphQL', ...technologies];
const newArray2 = [...technologies, 'GraphQL'];

// Delete elements from the array
const newArray3 = technologies.filter(element => element !== 'HTML5');

// Replace array elements
const newArray4 = technologies.map(element =>
  element === 'HTML5' ? 'GraphQL' : element
);

console.table(technologies);
console.table(newArray1);
console.table(newArray2);
console.table(newArray3);
console.table(newArray4);
```

### Array destructuring

```js
const technologies = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'MongoDB',
  'Express',
  'React',
  'Node.js',
];

const [, , , mongodb, express, react, node] = technologies;
console.log(mongodb, express, react, node);
```

### Array iterators

```js
const technologies = ['JavaScript', 'MongoDB', 'Express', 'React', 'Node.js'];

// Access each element
technologies.forEach(element => {
  console.log(element);
});

// Create a new array
const mapArray = technologies.map(element => element);
console.log(mapArray);
```
