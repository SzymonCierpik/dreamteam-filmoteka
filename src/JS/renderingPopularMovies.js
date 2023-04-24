import { getPopular } from './getPopularMovies';
import { createGallery } from './createGallery';
import { createPagination } from './pagination';
/* import { scrollOnTop } from './scroll-on-top';
import { showHideLoader } from './loader';
import refs from './refs'; */

const gallery = document.querySelector('.films-cards-set');

getPopular().then(data => {
  gallery.insertAdjacentHTML('beforeend', createGallery(data.results));

  const pagination = createPagination(data.total_results, data.total_pages);
  pagination.on('afterMove', ({ page }) => {
    gallery.innerHTML = '';
    getPopular(page).then(data => {
      createGallery(data.results);
    });
  });
});
