import axios from 'axios';

const alert = document.querySelector('#wrongSearch');
const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'b118f38ec77100db6763b4cc83604589';

export async function getPopular(page = 1) {
  const url =
    API_URL +
    `trending/movie/week?api_key=${API_KEY}&language=en-US&page=${page}`;
  return await axios
    .get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => console.log(error));
}
