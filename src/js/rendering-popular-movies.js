import { getPopular } from './get-popular-movies';
import { createGallery } from './create-gallery';
import { createPagination } from './pagination';
import { fetchMovieById, toggleModal, movieModal } from './modal-movie';
import { renderMarkup } from './modal-markup';
import { addLisenersToButtons } from './firebase-app';

const gallery = document.querySelector('.films-cards-set');

getPopular().then(data => {
  gallery.insertAdjacentHTML('beforeend', createGallery(data.results));

  const filmCardsArray = document.querySelectorAll('.film-card');
  filmCardsArray.forEach(filmCard => {
    filmCard.addEventListener('click', event => {
      const movieId = event.currentTarget.dataset.id;
      fetchMovieById(movieId)
        .then(response => {
          return response.data;
        })
        .then(movieData => {
          movieModal.innerHTML = renderMarkup(movieData);
          toggleModal();
          addLisenersToButtons();
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
      gallery.insertAdjacentHTML('beforeend', createGallery(data.results));

      const filmCardsArray = document.querySelectorAll('.film-card');
      filmCardsArray.forEach(filmCard => {
        filmCard.addEventListener('click', event => {
          const movieId = event.currentTarget.dataset.id;
          fetchMovieById(movieId)
            .then(response => {
              return response.data;
            })
            .then(movieData => {
              movieModal.innerHTML = renderMarkup(movieData);
              toggleModal();
              addLisenersToButtons();
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
