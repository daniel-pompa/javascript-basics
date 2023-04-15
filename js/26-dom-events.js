// DOM Events - Submit
const form = document.querySelector('#form');
form.addEventListener('submit', e => {
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const password = document.querySelector('#password').value;

  if (name === '' || password === '') {
    console.log('Todos los campos son obligatorios');
  } else {
    console.log(name);
    console.log(password);
    console.log('Formulario enviado');
  }
});
