import { getByKey } from './getMoviesByKey';
import { createGallery } from './createGallery';
import { createPagination } from './pagination';

import { fetchMovieById, toggleModal, movieModal } from './modalMovie';
import { renderMarkup } from './modalMarkup';
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

/* function getMoviesById(e) {
  e.preventDefault();
  query = inputForm.value.trim();
  console.log(query);
  let page = 1;
  return;
} */

/* getByKey(query, page)
    .then(data => {
      if (data.total_pages === 0) {
        Notiflix.Notify.info(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      } else {
        Notiflix.Notify.info(`Hooray! We found ${data.total_results} images.`);
      }
      gallery.innerHTML = createGallery(data.results);

      const pagination = createPagination(data.total_results, data.total_pages);

      pagination.on('afterMove', ({ page }) => {
        gallery.innerHTML = '';
        getByKey(query, page).then(data => {
          createGallery(data.results);
        });
      });
    })
    .catch(error => console.log(error));
}
 */
buttonForm.addEventListener('click', getMoviesById);
