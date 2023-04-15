// Array destructuring
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
