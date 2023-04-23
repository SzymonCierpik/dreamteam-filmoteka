const alert = document.querySelector('#wrongSearch');
const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'b118f38ec77100db6763b4cc83604589'; // Should be changed to the correct one
const inputForm = document.querySelector('[data-input]');

/* export const getMovies = async page => {
  const query = inputForm.value.trim();
  const endPoint =
    API_URL +
    `search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`;
  const response = await fetch(endPoint);
  const data = await response.json();
  if (data.results.length < 1) {
    alert.innerHTML =
      'Search result not successful. Enter the correct movie name and search again';
    return {};
  }
  return data;
};

export const getPopularMovies = async page => {
  const endPoint =
    API_URL +
    `trending/movie/week?api_key=${API_KEY}&language=en-US&page=${page}`;
  const response = await fetch(endPoint);
  const data = await response.json();
  return data;
}; */

export const getGenresMovies = async () => {
  const endPoint = API_URL + `genre/movie/list?api_key=${API_KEY}`;
  const response = await fetch(endPoint);
  const data = await response.json();
  genresDataStorage(data);
  return data;
};

const genresDataStorage = data => {
  const genreMovieIds = data.genres;
  sessionStorage.setItem('genresIds', JSON.stringify(genreMovieIds));
};
