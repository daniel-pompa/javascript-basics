// Scope of variables
const price = 300;

function myFunction() {
  const price = 600;
  console.log(price);
}

console.log(price);

myFunction();
