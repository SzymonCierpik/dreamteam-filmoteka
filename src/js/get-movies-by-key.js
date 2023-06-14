import axios from 'axios';
const alert = document.querySelector('#wrongSearch');
const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'b118f38ec77100db6763b4cc83604589';

export async function getByKey(query, page) {
  const url =
    API_URL +
    `/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}`;
    const response = await fetch(url);
  const data = await response.json();
  if (data.results.length < 1) {
    alert.innerHTML =
      'Search result not successful. Enter the correct movie name and search again';
    return {};
  }

  return await axios
    .get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => console.log(error));
}
