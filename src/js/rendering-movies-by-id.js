import { createGalleryId } from './create-gallery-for-movies-by-id';
import { getArrayofFilms } from './get-movies-by-id';

import { isLoggedIn, getUserLibrary } from './firebase-app';
import { getGuestLibrary, guestLibrary } from './guest-library';

import { addLisenersToButtons } from './firebase-app';

import { toggleModal } from './modal-movie';

import { fetchMovieById } from './modal-movie';

import { renderMarkup } from './modal-markup';

import { movieModal } from './modal-movie';

const gallery = document.querySelector('.films-cards-set');

export let library;

const john = document.querySelector('.empty__library');

const libraryWatchedBtn = document.querySelector('[data-watched]');

libraryWatchedBtn.addEventListener('click', () => {
  if (isLoggedIn) {
    getUserLibrary().then(response => {
      library = response;
      gallery.innerHTML = '';
      john.classList.add('john-is-hidden');
      getArrayofFilms(library.watched).then(data => {
        gallery.insertAdjacentHTML('beforeend', createGalleryId(data));
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
  } else {
    getGuestLibrary();
    gallery.innerHTML = '';
    john.classList.add('john-is-hidden');
    getArrayofFilms(guestLibrary.watched).then(data => {
      gallery.insertAdjacentHTML('beforeend', createGalleryId(data));
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
  }
});

const libraryQueueBtn = document.querySelector('[data-queue]');

libraryQueueBtn.addEventListener('click', () => {
  if (isLoggedIn) {
    getUserLibrary().then(response => {
      library = response;
      gallery.innerHTML = '';
      john.classList.add('john-is-hidden');
      getArrayofFilms(library.queue).then(data => {
        gallery.insertAdjacentHTML('beforeend', createGalleryId(data));
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
  } else {
    getGuestLibrary();
    gallery.innerHTML = '';
    john.classList.add('john-is-hidden');
    getArrayofFilms(guestLibrary.queue).then(data => {
      gallery.insertAdjacentHTML('beforeend', createGalleryId(data));
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
  }
});
