const teamModal = document.querySelector('.backdrop--flex');
const teamModalOpenLink = document.querySelector('.footer__font');

teamModalOpenLink.addEventListener('click', e => {
  e.preventDefault();
  teamModal.classList.remove('is-hidden');
});

teamModal.addEventListener('click', event => {
  if (event.currentTarget === event.target) {
    teamModal.classList.add('is-hidden');
  }
});

window.addEventListener('keydown', event => {
  if (event.key !== 'Escape') {
    false;
  } else {
    teamModal.classList.add('is-hidden');
  }
});
