// DOM selectors
const heading = document.querySelector('.heading');
console.log(heading);
console.log(heading.textContent);
console.log(heading.tagName);
console.log(heading.classList);
console.log(heading.id);

const links = document.querySelectorAll('.nav a');

console.log(links);

links.forEach(element => console.log(element.textContent));
