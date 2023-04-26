const teamModal = document.querySelector('.backdrop--flex');
const teamModalOpenLink = document.querySelector('.footer__font');

teamModalOpenLink.addEventListener('click', e => {
  e.preventDefault();
  teamModal.classList.remove('is-hidden');
});
