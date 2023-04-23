export const loginForm = document.querySelector('.login-form'),
  eField = loginForm.querySelector('.email'),
  eInput = eField.querySelector('input'),
  pField = loginForm.querySelector('.password'),
  pInput = pField.querySelector('input'),
  loginError = document.querySelector('.login-info-error');

import { loginModal } from './auth-menu';
////Form Validtion
loginForm.addEventListener('submit', e => {
  e.preventDefault(); //preventing from form submitting
  //if email and password is blank then add shake class in it else call specified function
  eInput.value == ''
    ? eField.classList.add('shake', 'error')
    : checkLoginEmail();
  pInput.value == ''
    ? pField.classList.add('shake', 'error')
    : checkLoginPass();
  setTimeout(() => {
    //remove shake class after 500ms
    eField.classList.remove('shake');
    pField.classList.remove('shake');
  }, 500);

  eInput.addEventListener('keyup', checkLoginEmail); //calling checkEmail function on email input keyup
  pInput.addEventListener('keyup', checkLoginPass); //calling checkPassword function on pass input keyup

  function checkLoginEmail() {
    //checkEmail function
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for validate email
    if (!eInput.value.match(pattern)) {
      //if pattern not matched then add error and remove valid class
      eField.classList.add('error');
      eField.classList.remove('valid');
      let errorTxt = eField.querySelector('.error-txt');
      //if email value is not empty then show please enter valid email else show Email can't be blank
      eInput.value != ''
        ? (errorTxt.innerText = 'Enter a valid email address')
        : (errorTxt.innerText = "Email can't be blank");
    } else {
      //if pattern matched then remove error and add valid class
      eField.classList.remove('error');
      eField.classList.add('valid');
    }
  }

  function checkLoginPass() {
    //checkPass function
    if (pInput.value == '') {
      //if pass is empty then add error and remove valid class
      pField.classList.add('error');
      pField.classList.remove('valid');
    } else {
      //if pass is empty then remove error and add valid class
      pField.classList.remove('error');
      pField.classList.add('valid');
    }
  }
  //if eField and pField doesn't contains error class that mean user filled details properly

  if (
    !eField.classList.contains('error') &&
    !pField.classList.contains('error')
  ) {
    loginModal.classList.add('is-hidden');
  }
});
