import axios from 'axios';
const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'b118f38ec77100db6763b4cc83604589';

export async function getArrayofFilms(array) {
  const arrayOfMovies = array.map(async movie_id => {
    return await axios
      .get(`${API_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`)
      .then(response => {
        return response.data;
      })
      .catch(error => console.log(error));
  });

  const resultData = await Promise.all(arrayOfMovies);

  return resultData;
}
