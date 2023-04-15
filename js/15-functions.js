// Returns the maximum value of two numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(`El número mayor es: ${maxOfTwoNumbers(48, 40)}`);

// Returns the minimum value of two numbers
const minOfTwoNumbers = (a, b) => {
  if (a < b) {
    return a;
  } else {
    return b;
  }
};

console.log(`El número menor es: ${minOfTwoNumbers(48, 40)}`);

// Find longest word
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

// Calculating a sum
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

console.log(`La suma de los números del array es: ${sumArray(numbers)}`);

// Calculate the average
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

console.log(
  `La media de los números del array es: ${averageNumbers(averageNumbersArray)}`
);

// Count the number of times a word is repeated in an array
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

console.log(howManyTimes(technologies, 'JavaScript'));
