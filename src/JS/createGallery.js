import { getMovies, getPopularMovies, getGenresMovies } from './getGenres.js';

const inputForm = document.querySelector('[data-input]');
const buttonForm = document.querySelector('[data-search]');
const gallery = document.querySelector('.films-cards-set');
const alert = document.querySelector('#wrongSearch');
let query = '';

const handleChange = e => (query = e.target.value.trim());

const genresMovieIds = () => {
  getGenresMovies();
  const genreIdsJson = sessionStorage.getItem('genresIds');
  const genreIdsParse = JSON.parse(genreIdsJson);
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
  let page;
  page = 1;
  clearGallery();
  alert.innerHTML = '';
};

export const createGallery = data => {
  const movies = data
    .map(movie => {
      let src;
      const genresTitle = createGenreArray(movie.genre_ids);
      if (movie.poster_path === null) {
        src = `https://www.more-kino.info/drama/hide-2/hide-2.jpg`;
      } else {
        src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
      }
      const stringVote = String(movie.vote_average).slice(0, 3);

      return `
        <div class="film-card" data-id="${movie.id}">
        <div>
        <img class="film-img" src="${src}" alt="${
        movie.title
      }" loading="lazy" /> 
        <div class="info">
        <p class="info-title">${movie.original_title}</p>
        <p class="info-text">${genresTitle} | ${movie.release_date.substring(
        0,
        4
      )} <span class="info-rating">${stringVote}</span></p>
        </div>
        </div>
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
