import { createGalleryId } from './createGalleryForMoviesById';
import { getArrayofFilms } from './getMoviesById';

import { isLoggedIn, library, getUserLibrary } from './firebase-app';
import { getGuestLibrary, guestLibrary } from './guestLibrary';

const gallery = document.querySelector('.films-cards-set');

const libraryWatchedBtn = document.querySelector('[data-watched]');
console.log(libraryWatchedBtn);

libraryWatchedBtn.addEventListener('click', () => {
  if (isLoggedIn) {
    getUserLibrary().then(response => {
      library = response;
      gallery.innerHTML = '';
      getArrayofFilms(library.watched).then(data => {
        gallery.insertAdjacentHTML('beforeend', createGalleryId(data));
      });
    });
  } else {
    getGuestLibrary();
    gallery.innerHTML = '';
    getArrayofFilms(guestLibrary.watched).then(data => {
      gallery.insertAdjacentHTML('beforeend', createGalleryId(data));
    });
  }
});

const libraryQueueBtn = document.querySelector('[data-queue]');
console.log(libraryQueueBtn);

libraryQueueBtn.addEventListener('click', () => {
  if (isLoggedIn) {
    getUserLibrary().then(response => {
      library = response;
      gallery.innerHTML = '';
      getArrayofFilms(library.queue).then(data => {
        gallery.insertAdjacentHTML('beforeend', createGalleryId(data));
      });
    });
  } else {
    getGuestLibrary();
    gallery.innerHTML = '';
    getArrayofFilms(guestLibrary.queue).then(data => {
      gallery.insertAdjacentHTML('beforeend', createGalleryId(data));
    });
  }
});

window.onload = () => {
  getArrayofFilms().then(data => {
    gallery.insertAdjacentHTML('beforeend', createGalleryId(data));
  });
};
