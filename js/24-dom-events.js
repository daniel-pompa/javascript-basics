// DOM Events - Click
const heading = document.querySelector('.heading');
heading.addEventListener('click', () => {
  heading.textContent = 'Manipulando el DOM con JavaScript';
});

const links = document.querySelectorAll('.nav a');
links.forEach(e => {
  e.addEventListener('click', () => {
    console.log('Click en un enlace');
  });
});
