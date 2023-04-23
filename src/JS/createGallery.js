import { getMovies, getPopularMovies, getGenresMovies } from './getGenres.js';

const inputForm = document.querySelector('[data-input]');
const buttonForm = document.querySelector('[data-search]');
const gallery = document.querySelector('.films-cards-set');
const alert = document.querySelector('#wrongSearch');
let query = '';

const handleChange = e => (query = e.target.value.trim());

const genresMovieIds = () => {
  getGenresMovies();
  // console.log('alert: ', alert);
  const genreIdsJson = sessionStorage.getItem('genresIds');
  // console.log(genreIdsJson);
  const genreIdsParse = JSON.parse(genreIdsJson);
  // console.log(genreIdsParse);
  return genreIdsParse;
};
const genreMovie = genresMovieIds();

const createGenreArray = genre_Ids => {
  let newArray = [];
  genre_Ids.map(genreId => {
    newArray.push(genreMovie.find(genre => genre.id === genreId));
  });
  return newArray
    .map(genre => genre.name)
    .splice(0, 3)
    .join(', ');
};

const handleClick = async e => {
  e.preventDefault();
  page = 1;
  clearGallery();
  alert.innerHTML = '';
};

export const createGallery = data => {
  const movies = data
    .map(movie => {
      const genresTitle = createGenreArray(movie.genre_ids);
      if (movie.poster_path === null) {
        src = `https://www.more-kino.info/drama/hide-2/hide-2.jpg`;
      } else {
        src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
      }

      return `
        <div class="film-card">
        <a href=https://image.tmdb.org/t/p/original/${movie.poster_path}>
        <img class="film-img" src="${src}" alt="${movie.title}" loading="lazy" /> 
        <div class="info">
        <p class="info-title">${movie.original_title}</p>
        <p class="info-text">${genresTitle} | ${movie.release_date} ${movie.vote_average}</p>
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
