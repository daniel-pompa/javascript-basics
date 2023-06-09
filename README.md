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

### Functions

```js
// Function Declaration
function greeting(message = 'Hello world!', name = '') {
  console.log(`${message} ${name}`);
}

greeting();
greeting('Hello', 'Gael');

// Function Expression
const greeting = function (message = 'Hello world!', name = '') {
  console.log(`${message} ${name}`);
};

greeting();
greeting('Hello', 'Gael');
```

#### Find the maximum

The maxOfTwoNumbers function takes two numbers as arguments and returns the maximum.

```js
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

maxOfTwoNumbers(48, 40);

// Expected output: 48
```

#### Find the minimun

The minOfTwoNumbers function takes two numbers as arguments and returns the minimum.

```js
const minOfTwoNumbers = (a, b) => {
  if (a < b) {
    return a;
  } else {
    return b;
  }
};

minOfTwoNumbers(48, 40);

// Expected output: 40
```

#### Find longest word

The findLongestWord function takes an array of words and returns the longest one. If there are two with the same length, it should return the first occurrence.

```js
const words = ['Java', 'JavaScript', 'C++', 'HTML5', 'Python', 'CSS3'];

function findLongestWord(array) {
  let longestWord = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i].length > longestWord.length) {
      longestWord = array[i];
    }
  }
  console.log(longestWord);
  return longestWord;
}

findLongestWord(words);

// Expected output: JavaScript
```

#### Calculating a Sum

Calculating a sum is as simple as iterating over an array and adding up each of the elements.

Semantically [reduce](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) is the best method to perform this operation.

The sumArray function takes an array of numbers as a parameter, and calculates the sum of all its numbers.

```js
const numbers = [48, 40, 1, 29, 31, 20, 23, 26, 2, 19];

function sumArray(array) {
  if (array.length === 0) {
    return 0;
  }
  const sum = array.reduce(function (a, b) {
    return a + b;
  });
  return sum;
}

sumArray(numbers);

// Expected output: 239
```

#### Calculate average

The averageNumbers function takes an array of numbers and calculate the average of the numbers.

```js
const averageNumbersArray = [3, 6, 7, 5, 10, 4, 1, 9];

function averageNumbers(array) {
  if (array.length === 0) {
    return;
  }
  const sum = array.reduce(function (a, b) {
    return a + b;
  });

  const average = sum / array.length;

  return average.toFixed(1);
}

averageNumbers(averageNumbersArray);

// Expected output: 5.6
```

#### Count the number of times it is repeated

The howManyTimes function takes an array of words as one argument, and a word to search for as the other. The function returns the number of times that word appears in the array.

```js
const technologies = [
  'JavaScript',
  'MongoDB',
  'Node.js',
  'Express',
  'React',
  'JavaScript',
  'TypeScript',
  'truth',
  'JavaScript',
  'Python',
  'JavaScript',
];

function howManyTimes(array, word) {
  if (array.length === 0) {
    return false;
  }
  let counter = 0;
  array.forEach(function (e) {
    if (e === word) {
      counter++;
    }
  });
  return counter;
}

howManyTimes(technologies, 'JavaScript');

// Expected output: 4
```

### Array methods

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

const numbers = [10, 20, 30, 40];

// Useful array methods that do not modify the original array
// https://doesitmutate.xyz/
let newArray;
let result;

technologies.forEach((element, i) => console.log(`[${i}] ${element}`));

// Creates a new array with all the elements that fulfill the condition implemented by the given function
newArray = technologies.filter(
  element => element !== 'HTML5' && element !== 'CSS3'
);
console.log(newArray);

newArray = numbers.filter(element => element > 15);
console.log(newArray);

// Creates a new array with the results of the specified function call applied to each of its elements
newArray = technologies.map(element =>
  element === 'HTML5' ? 'GraphQL' : element
);
console.log(newArray);

// Check if an element exists in the array
result = technologies.includes('React');
console.log(result);

// Checks if at least one element of the array meets the condition
result = numbers.some(number => number > 15);
console.log(result);

// Returns the value of the first element of the array that meets the condition
result = numbers.find(number => number > 15);
console.log(result);

// Determines if all elements in the array meet a condition
result = numbers.every(number => number > 15);
console.log(result);

// Executes a reducer function on each element of an array, returning a single value as a result
result = numbers.reduce((total, number) => number + total, 0);
console.log(result);
```

### Fetch API

```js
const url = 'https://jsonplaceholder.typicode.com/comments';

const consultAPI = () => {
  fetch(url)
    .then(response => response.json())
    .then(result => {
      result.forEach(comment => {
        console.log(comment);
      });
    });
};
```

```js
import API_KEY_GIPHY from './configuration.js';

const request = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY_GIPHY}`
);

request
  .then(res => res.json())
  .then(({ data }) => {
    const { url } = data.images.original;
    const image = document.createElement('img');
    image.src = url;
    document.body.append(image);
  })
  .catch(console.error);
```

### Fetch API async - await

```js
const url = 'https://jsonplaceholder.typicode.com/users';

const consultAPI = async () => {
  const response = await fetch(url);
  const result = await response.json();
  result.forEach(comment => {
    console.log(comment);
  });
};

consultAPI();
```

```js
import API_KEY_GIPHY from './configuration.js';

const getGif = async () => {
  try {
    const apiKey = API_KEY_GIPHY;
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await response.json();
    const { url } = data.images.original;
    const image = document.createElement('img');
    image.src = url;
    document.body.append(image);
  } catch (error) {
    console.error(error);
  }
};

getGif();
```

### Fetch API async - await (Multiple calls)

```js
const url1 = 'https://jsonplaceholder.typicode.com/users';
const url2 = 'https://jsonplaceholder.typicode.com/posts';

const consultAPI = async () => {
  const [response1, response2] = await Promise.all([fetch(url1), fetch(url2)]);
  const result1 = await response1.json();
  const result2 = await response2.json();
  console.log(result1);
  console.log(result2);
};

consultAPI();
```
