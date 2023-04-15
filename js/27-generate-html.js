// Generating HTML
const form = document.querySelector('#form');
form.addEventListener('submit', e => {
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const password = document.querySelector('#password').value;

  const previousAlert = document.querySelector('.alert');
  if (previousAlert) {
    previousAlert.remove();
  }

  const alert = document.createElement('DIV');
  alert.classList.add('alert');
  alert.style.borderRadius = '5px';

  if (name === '' || password === '') {
    alert.textContent = 'Todos los campos son obligatorios';
    alert.classList.add('error');
  } else {
    alert.textContent = 'Formulario enviado correctamente';
    alert.classList.add('success');
  }

  form.appendChild(alert);
});
