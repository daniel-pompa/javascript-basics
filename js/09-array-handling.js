// Array manipulation
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
