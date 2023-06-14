import { getByKey } from './get-movies-by-key';
import { createGallery } from './create-gallery';
import { createPagination } from './pagination';
import { fetchMovieById, toggleModal, movieModal } from './modal-movie';
import { renderMarkup } from './modal-markup';
import { addLisenersToButtons } from './firebase-app';

const buttonForm = document.querySelector('[data-search]');
const gallery = document.querySelector('.films-cards-set');
const inputForm = document.querySelector('[data-input]');
const container = document.querySelector('#pagination');

let query;

function getMoviesById(e) {
  e.preventDefault();
  query = inputForm.value.trim();
  let page = 1;
  getByKey(query, page).then(data => {
    if (!data.results < 1) {
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
        getByKey(query, page).then(data => {
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
    }

    if (data.total_pages <= 1) {
      container.classList.add('is-hidden');
    }
    return;
  });
}

buttonForm.addEventListener('click', getMoviesById);
