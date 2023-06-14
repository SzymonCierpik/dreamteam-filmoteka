export const loginForm = document.querySelector('.login-form'),
  eField = loginForm.querySelector('.email'),
  eInput = eField.querySelector('input'),
  pField = loginForm.querySelector('.password'),
  pInput = pField.querySelector('input'),
  loginError = document.querySelector('.login-info-error');

import { loginModal } from './auth-menu';

loginForm.addEventListener('submit', e => {
  e.preventDefault();
  eInput.value == ''
    ? eField.classList.add('shake', 'error')
    : checkLoginEmail();
  pInput.value == ''
    ? pField.classList.add('shake', 'error')
    : checkLoginPass();
  setTimeout(() => {
    eField.classList.remove('shake');
    pField.classList.remove('shake');
  }, 500);

  eInput.addEventListener('keyup', checkLoginEmail);
  pInput.addEventListener('keyup', checkLoginPass);

  function checkLoginEmail() {
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!eInput.value.match(pattern)) {
      eField.classList.add('error');
      eField.classList.remove('valid');
      let errorTxt = eField.querySelector('.error-txt');

      eInput.value != ''
        ? (errorTxt.innerText = 'Enter a valid email address')
        : (errorTxt.innerText = "Email can't be blank");
    } else {
      eField.classList.remove('error');
      eField.classList.add('valid');
    }
  }

  function checkLoginPass() {
    if (pInput.value == '') {
      pField.classList.add('error');
      pField.classList.remove('valid');
    } else {
      pField.classList.remove('error');
      pField.classList.add('valid');
    }
  }

  if (
    !eField.classList.contains('error') &&
    !pField.classList.contains('error')
  ) {
    loginModal.classList.add('is-hidden');
  }
});
