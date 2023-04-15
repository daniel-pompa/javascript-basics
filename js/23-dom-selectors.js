// Handling HTML elements with JavaScript
const heading = document.querySelector('.heading');
heading.textContent = 'Manipulando el DOM con JavaScript';
console.log(heading.textContent);

const inputName = document.querySelector('#name');
inputName.value = 'Valor por defecto';

const links = document.querySelectorAll('.nav a');
links.forEach(element => (element.textContent = 'Enlace'));
