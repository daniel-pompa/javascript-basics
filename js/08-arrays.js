// Arrays
const mixedTypeArray = ['JavaScript', 20, true, 'React'];
console.log(mixedTypeArray);

// Returns the length of the array
console.log(mixedTypeArray.length);

// Access an array element by it's position
console.log(mixedTypeArray[3]);

/* Array Methods in JavaScript */
// Join two or more arrays
// This method does not change the existing arrays, but returns a new array
const letters1 = ['a', 'b', 'c'];
const letters2 = ['d', 'e', 'f'];
const result1 = letters1.concat(letters2);
console.log(result1);

// Determines if an array includes a given element and returns a boolean
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers1.includes(9)); // true
console.log(numbers1.includes(0)); // false

// Joins all the elements of an array into a string and returns this string
const letters3 = ['a', 'b', 'c', 'd', 'e'];
console.log(letters3.join(''));
console.log(letters3.join('-'));

// Removes the last element of an array
const letters4 = ['g', 'a', 'e', 'l'];
console.log(letters4);
letters4.pop();
console.log(letters4);

// Removes the first element of an array
letters4.shift();
console.log(letters4);

// Adds one or more elements to the beginning of an array
letters4.unshift('g');
console.log(letters4);

// Adds one or more elements to the end of the array
letters4.push('l');
console.log(letters4);

// Inverts the order of the elements of an array
console.log(letters4.reverse());

// Returns a copy of a part of the array into a new array starting from start to end (end not included)
// The original array will not be modified
const technologies1 = [
  'Java',
  'JavaScript',
  'MongoDB',
  'Express',
  'React',
  'Node.js',
];
console.log(technologies1);
const result2 = technologies1.slice(2, 6);
console.log(result2);

// Changes the contents of an array by deleting existing elements and/or adding new elements
const technologies2 = ['Python', 'MongoDB', 'Express', 'Node.js'];
console.log(technologies2);
technologies2.splice(0, 1, 'Javascript');
console.log(technologies2);
technologies2.splice(3, 0, 'React');
console.log(technologies2);

// Searches for an element in an array and returns its position
// It starts by looking for the end of the array
// Returns -1 if the element is not found
console.log(technologies2.lastIndexOf('React'));

// Creates a new array with all sub-array elements concatenated recursively to the specified depth
const technologies3 = [
  'MongoDB',
  'Node.js',
  'Express',
  ['React', 'JavaScript'],
];
console.log(technologies3);
console.log(technologies3.flat());

// Determines if the passed value is an Array
console.log(Array.isArray(technologies3));

// Creates a new Array instance from an iterable object
console.log(Array.from('gael'));

// Creates a new array with all the elements that met the condition implemented by the given function
const technologies4 = [
  'Java',
  'javaScript',
  'TypeScript',
  'Python',
  'HTML5',
  'CSS3',
  'React',
  'JQuery',
  'Node.js',
  'Express',
  'Angular',
  'Spring Framework',
  'MongoDB',
  'MySQL',
  'PostgreSQL',
  'AWS',
  'Azure',
  'Heroku',
];

console.table(technologies4);

const result3 = technologies4.filter(
  e => e === 'MongoDB' || e === 'Express' || e === 'React' || e === 'Node.js'
);

console.log(result3);

// Executes the specified function once for each element of the array
const result4 = technologies4.forEach((tech, i) => {
  console.log(`[${i}] ${tech}`);
});

// Sorts the array elements and returns the sorted array
// The elements will be sorted in ascending order (from A to Z) by default
const numbers2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const letters5 = ['e', 'c', 'a', 'd', 'b'];

console.log(numbers2);
console.log(letters5);

// Sort in descending order
const result5 = numbers2.sort((a, b) => (a > b ? -1 : 1));
console.log(result5);

// Sort in ascending order
const result6 = letters5.sort((a, b) => (a > b ? 1 : -1));
console.log(letters5);

// Returns the value of the first element of the array that met the given function
const result7 = numbers2.find(element => element < 6);
console.log(result7);

// Checks if at least one element of the array met the condition implemented by the provided function
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const isGreaterThanFour = numbers3.some(element => element > 4);
console.log(isGreaterThanFour); // true
const isLessThanOne = numbers3.some(element => element < 1);
console.log(isLessThanOne); // false

// Iterates the array and returns a Boolean
// Determines if all elements in the array met a condition
const isGreaterThanFive = numbers3.every(element => element > 5);
console.log(isGreaterThanFive); // false
const isLessThanTen = numbers3.every(element => element < 10);
console.log(isLessThanTen); // true
