const body = document.querySelector('body');
const icon = document.querySelector('.fa-regular');
const switchBtn = document.querySelector('#toggle__checkbox');
const footer = document.querySelector('.footer');

switchBtn.addEventListener('click', () => {
  body.classList.toggle('dark__theme');
  icon.classList.toggle('fa-sun');
  icon.classList.toggle('fa-moon');
  footer.classList.toggle('dark__theme');
});
