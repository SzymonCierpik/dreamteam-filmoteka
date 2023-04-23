import './JS/loader.js';
import './JS/renderingPopularMovies.js';
import './JS/renderingMoviesByKey.js';

// Dark Mode

const body = document.querySelector('body');
const icon = document.querySelector('.fa-regular');
const switchBtn = document.querySelector('#toggle__checkbox');

switchBtn.addEventListener('click', () => {
  body.classList.toggle('dark__theme');
  icon.classList.toggle('fa-sun');
  icon.classList.toggle('fa-moon');
});

// Dark Mode End
