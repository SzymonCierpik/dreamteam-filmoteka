const openSignUpBtn = document.querySelector('.auth-menu__signup-button');
const openLoginBtn = document.querySelector('.auth-menu__login-button');
const authMenu = document.querySelector('.menu');
const signUpAndLoginMenu = document.querySelector('.auth-menu');
export const logoutMenu = document.querySelector('.auth-menu-logout');
const userNameDisplay = document.querySelector('.auth-menu-logout__user-name');
const authMenuOpenBtn = document.querySelector('.auth-menu-open-btn');
export const signUpModal = document.querySelector('.singup-backdrop');
export const loginModal = document.querySelector('.login-backdrop');

import { isLoggedIn, userName } from './firebase-app';

export function toggleIsHidden() {
  authMenu.classList.toggle('is-hidden');
}

authMenuOpenBtn.addEventListener('click', e => {
  e.preventDefault();

  if (authMenu.classList.contains('is-hidden')) {
    toggleIsHidden();

    if (isLoggedIn) {
      logoutMenu.classList.toggle('menu-is-hidden');
      userNameDisplay.innerHTML = userName;
    } else {
      signUpAndLoginMenu.classList.toggle('menu-is-hidden');
    }
  } else {
    if (isLoggedIn) {
      logoutMenu.classList.toggle('menu-is-hidden');
      userNameDisplay.innerHTML = userName;
    } else {
      signUpAndLoginMenu.classList.toggle('menu-is-hidden');
    }
    setTimeout(toggleIsHidden, 300);
  }
});

function onBackDropClickSignUp(event) {
  if (event.currentTarget === event.target) {
    signUpModal.classList.add('is-hidden');
    signUpModal.removeEventListener('click', onBackDropClickSignUp);
  }
}

function onEscKeyPressSignUp(event) {
  if (event.code !== 'Escape') {
    return;
  } else {
    signUpModal.classList.add('is-hidden');
    window.removeEventListener('keydown', onEscKeyPressSignUp);
  }
}

function addListenersToSignUp() {
  signUpAndLoginMenu.classList.toggle('menu-is-hidden');
  setTimeout(toggleIsHidden, 300);
  signUpModal.classList.remove('is-hidden');
  signUpModal.addEventListener('click', onBackDropClickSignUp);
  window.addEventListener('keydown', onEscKeyPressSignUp);
}

openSignUpBtn.addEventListener('click', addListenersToSignUp);

function onBackDropClickLogin(event) {
  if (event.currentTarget === event.target) {
    loginModal.classList.add('is-hidden');
    loginModal.removeEventListener('click', onBackDropClickLogin);
  }
}

function onEscKeyPressLogin(event) {
  if (event.code !== 'Escape') {
    return;
  } else {
    loginModal.classList.add('is-hidden');
    window.removeEventListener('keydown', onEscKeyPressLogin);
  }
}

function addListenersToLogin() {
  signUpAndLoginMenu.classList.toggle('menu-is-hidden');
  setTimeout(toggleIsHidden, 300);
  loginModal.classList.remove('is-hidden');
  loginModal.addEventListener('click', onBackDropClickLogin);
  window.addEventListener('keydown', onEscKeyPressLogin);
}

openLoginBtn.addEventListener('click', addListenersToLogin);
