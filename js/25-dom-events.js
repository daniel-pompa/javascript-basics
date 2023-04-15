// DOM Events - Inputs
function passwordFunction() {
  inputPassword.type = 'text';

  setTimeout(() => {
    inputPassword.type = 'password';
  }, 100);
}

const inputName = document.querySelector('.name');
inputName.addEventListener('input', e => console.log(e.target.value));

const inputPassword = document.querySelector('.password');
inputPassword.addEventListener('input', passwordFunction);
