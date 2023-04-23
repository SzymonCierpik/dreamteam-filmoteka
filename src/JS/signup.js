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

// Email Validtion
function checkEmail() {
  const emaiPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emaiPattern)) {
    return emailField.classList.add('invalid'); //adding invalid class if email value do not mathced with email pattern
  }
  emailField.classList.remove('invalid'); //removing invalid class if email value matched with emaiPattern
}

// User Name Validtion
function checkUserName() {
  let nameLength = userNameInput.value.length;
  let isInRange = 4 <= nameLength && nameLength <= 20;
  if (!isInRange) {
    return userNameField.classList.add('invalid'); //adding invalid class if user name value isn`t in range
  }
  userNameField.classList.remove('invalid'); //removing invalid class if user name value is in range
}

// Hide and show password
const eyeIcons = document.querySelectorAll('.show-hide');

eyeIcons.forEach(eyeIcon => {
  eyeIcon.addEventListener('click', () => {
    const pInput = eyeIcon.parentElement.querySelector('input'); //getting parent element of eye icon and selecting the password input
    if (pInput.type === 'password') {
      eyeIcon.classList.replace('bx-hide', 'bx-show');
      return (pInput.type = 'text');
    }
    eyeIcon.classList.replace('bx-show', 'bx-hide');
    pInput.type = 'password';
  });
});

// Password Validation
function createPass() {
  const passPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!passInput.value.match(passPattern)) {
    return passField.classList.add('invalid'); //adding invalid class if password input value do not match with passPattern
  }
  passField.classList.remove('invalid'); //removing invalid class if password input value matched with passPattern
}

// Confirm Password Validtion
function confirmPass() {
  if (passInput.value !== cPassInput.value || cPassInput.value === '') {
    return cPassField.classList.add('invalid');
  }
  cPassField.classList.remove('invalid');
}

// Calling Funtion on Form Sumbit
singupForm.addEventListener('submit', e => {
  e.preventDefault(); //preventing form submitting
  checkEmail();
  createPass();
  confirmPass();
  checkUserName();

  //calling function on key up
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
    location.href = singupForm.getAttribute('action');
  }
});
