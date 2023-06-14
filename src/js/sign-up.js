export const singupForm = document.querySelector('.singup-form'),
  emailField = singupForm.querySelector('.email-field'),
  emailInput = document.querySelector('.email'),
  userNameField = singupForm.querySelector('.user-name-field'),
  userNameInput = document.querySelector('.user-name'),
  passField = singupForm.querySelector('.create-password'),
  passInput = document.querySelector('.password'),
  cPassField = singupForm.querySelector('.confirm-password'),
  cPassInput = document.querySelector('.cPassword'),
  singupError = document.querySelector('.singup-info-error');

import { signUpModal } from './auth-menu';

function checkEmail() {
  const emaiPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emaiPattern)) {
    return emailField.classList.add('invalid');
  }
  emailField.classList.remove('invalid');
}

function checkUserName() {
  let nameLength = userNameInput.value.length;
  let isInRange = 4 <= nameLength && nameLength <= 20;
  if (!isInRange) {
    return userNameField.classList.add('invalid');
  }
  userNameField.classList.remove('invalid');
}

const eyeIcons = document.querySelectorAll('.show-hide');

eyeIcons.forEach(eyeIcon => {
  eyeIcon.addEventListener('click', () => {
    const pInput = eyeIcon.parentElement.querySelector('input');
    if (pInput.type === 'password') {
      eyeIcon.classList.replace('bx-hide', 'bx-show');
      return (pInput.type = 'text');
    }
    eyeIcon.classList.replace('bx-show', 'bx-hide');
    pInput.type = 'password';
  });
});

function createPass() {
  const passPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!passInput.value.match(passPattern)) {
    return passField.classList.add('invalid');
  }
  passField.classList.remove('invalid');
}

function confirmPass() {
  if (passInput.value !== cPassInput.value || cPassInput.value === '') {
    return cPassField.classList.add('invalid');
  }
  cPassField.classList.remove('invalid');
}

singupForm.addEventListener('submit', e => {
  e.preventDefault();
  checkEmail();
  createPass();
  confirmPass();
  checkUserName();

  emailInput.addEventListener('keyup', checkEmail);
  passInput.addEventListener('keyup', createPass);
  cPassInput.addEventListener('keyup', confirmPass);
  userNameInput.addEventListener('keyup', checkUserName);

  if (
    !emailField.classList.contains('invalid') &&
    !passField.classList.contains('invalid') &&
    !cPassField.classList.contains('invalid') &&
    !userNameField.classList.contains('invalid')
  ) {
    signUpModal.classList.add('is-hidden');
  }
});
