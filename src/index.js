import { getMovies, getPopularMovies, getGenresMovies } from './js/getMovies';

// MOST POPULAR MOVIES - START //

window.onload = async () => {
  const data = await getPopularMovies();
  createGallery(data.results);
};
// DATA AND SCOPE SHOULD BE CONFIRMED

// MOST POPULAR MOVIES - END//

//INPUT - START//
const inputForm = document.querySelector('[data-input]');
const buttonForm = document.querySelector('[data-search]');
const gallery = document.querySelector('.films-cards-set');
const alert = document.querySelector('#wrongSearch');
let query = '';

const handleChange = e => (query = e.target.value.trim());

const genresMovieIds = async () => {
  getGenresMovies();
  console.log('alert: ', alert);
  const genreIdsJson = sessionStorage.getItem('genresIds');
  console.log(genreIdsJson);
  const genreIdsParse = JSON.parse(genreIdsJson);
  console.log(genreIdsParse);
  return genreIdsParse;
};
const genreMovie = genresMovieIds();
const genreId = async id => {
  const genreName = await genreMovie.filter(e => e.id === id);
  return genreName[0].name;
};

const createGenreArray = genreIds => {
  const genreArray = genreIds.slice(0, 3).map(id => genreId(id));
  return genreArray.join(',');
};

const handleClick = async e => {
  e.preventDefault();
  page = 1;
  clearGallery();
  alert.innerHTML = '';
  const dataMovie = await getMovies(page, query);
  createGallery(dataMovie.results);
};

const createGallery = data => {
  const movies = data
    .map(movie => {
      const genresTitle = createGenreArray(movie.genre_ids);
      return `
        <div class="film-card">
        <a href=https://image.tmdb.org/t/p/original/${movie.poster_path}>
        <img class="film-img" src="https://image.tmdb.org/t/p/w300/${movie.poster_path}" alt="${movie.title}" loading="lazy" /> 
        <div class="info">
        <p class="info-item">${movie.original_title}</p>
        <p class="info-item">${genresTitle}</p>
        <p class="info-item">${movie.release_date}</p>
        <p class="info-item">${movie.vote_average}</p>
        </div>
        </a>
        </div>
        `; // Class name and other should be update
    })
    .join(' ');
  gallery.insertAdjacentHTML('beforeend', movies);
};

buttonForm.addEventListener('click', handleClick);
handleChange && inputForm.addEventListener('input', handleChange);

function clearGallery() {
  gallery.innerHTML = '';
}

// INPUT - END//


// Dark Mode 

const body = document.querySelector("body");
const icon = document.querySelector(".fa-regular");
const switchBtn = document.querySelector("#toggle__checkbox");

switchBtn.addEventListener("click", () => {
  body.classList.toggle("dark__theme");
  icon.classList.toggle("fa-sun");
  icon.classList.toggle("fa-moon");
});

// Dark Mode End