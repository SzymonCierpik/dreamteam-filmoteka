import { createGalleryId } from './createGalleryForMoviesById';
import { getArrayofFilms } from './getMoviesById';

const gallery = document.querySelector('.films-cards-set');

array = ['868759', '868759', '868759', '868759']; // dane z localStorage

window.onload = () => {
  getArrayofFilms(array).then(data => {
    gallery.insertAdjacentHTML('beforeend', createGalleryId(data));
  });
};
