import { getPopular } from './getPopularMovies';
import { createGallery } from './createGallery';
import { createPagination } from './pagination';
import { fetchMovieById, toggleModal, movieModal } from './modalMovie';
import { renderMarkup } from './modalMarkup';
/* import { scrollOnTop } from './scroll-on-top';
import { showHideLoader } from './loader';
import refs from './refs'; */

const gallery = document.querySelector('.films-cards-set');

getPopular().then(data => {
  gallery.insertAdjacentHTML('beforeend', createGallery(data.results));

  const filmCardsArray = document.querySelectorAll('.film-card');
  filmCardsArray.forEach(filmCard => {
    filmCard.addEventListener('click', event => {
      console.log(event.currentTarget.dataset.id);
      console.log(event.currentTarget);
      const movieId = event.currentTarget.dataset.id;
      fetchMovieById(movieId)
        .then(response => {
          console.log(response.data);
          return response.data;
        })
        .then(movieData => {
          console.log(movieData);
          movieModal.innerHTML = renderMarkup(movieData);
          toggleModal();
        })
        .catch(error => {
          throw new Error(error);
        });
    });
  });

  const pagination = createPagination(data.total_results, data.total_pages);
  pagination.on('afterMove', ({ page }) => {
    gallery.innerHTML = '';
    getPopular(page).then(data => {
      createGallery(data.results);

      const filmCardsArray = document.querySelectorAll('.film-card');
      filmCardsArray.forEach(filmCard => {
        filmCard.addEventListener('click', event => {
          console.log(event.currentTarget.dataset.id);
          console.log(event.currentTarget);
          const movieId = event.currentTarget.dataset.id;
          fetchMovieById(movieId)
            .then(response => {
              console.log(response.data);
              return response.data;
            })
            .then(movieData => {
              console.log(movieData);
              movieModal.innerHTML = renderMarkup(movieData);
              toggleModal();
            })
            .catch(error => {
              throw new Error(error);
            });
        });
      });
    });
  });
});

window.onload = function () {
  if (!window.location.hash) {
    window.location = window.location + '#loaded';
    window.location.reload();
  }
};
