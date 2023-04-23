const openSignUpBtn = document.querySelector('.auth-menu__signup-button');
const openLoginBtn = document.querySelector('.auth-menu__login-button');
const authMenu = document.querySelector('.menu');
const signUpAndLoginMenu = document.querySelector('.auth-menu');
const logoutMenu = document.querySelector('.auth-menu-logout');
export const logoutBtn = document.querySelector(
  'auth-menu-logout__logout-button'
);
const userNameDisplay = document.querySelector('.auth-menu-logout__user-name');
const authMenuOpenBtn = document.querySelector('.auth-menu-open-btn');

import { isLoggedIn, userName } from './firebase-app';

function toggleIsHidden() {
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
