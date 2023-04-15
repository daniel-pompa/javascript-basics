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
