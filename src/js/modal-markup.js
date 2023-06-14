import { getMovies, getPopularMovies, getGenresMovies } from './get-genres.js';

function renderMarkup({
  title,
  original_title,
  overview,
  popularity,
  poster_path,
  id,
  vote_average,
  vote_count,
  genres,
}) {
  if (!poster_path) {
    poster = 'https://live.staticflickr.com/65535/52673964597_7ac974f3b4_k.jpg';
  }

  const markup = `
 

      <img
        class="movie-detail__image"
        src="https://image.tmdb.org/t/p/w500//${poster_path}" srcset="https://image.tmdb.org/t/p/original/${poster_path} 2x"
      />
      <div class="modal__content">
        <h2 class="modal__title">${title}</h2>
        <ul class="modal__list">
          <li class="modal__item">
            <p class="modal__item--label">Vote / Votes</p>
            <div class="modal__item--vote">
              <p class="modal__item--value modal__item--value--vote">
                <span class="modal__item--average">${vote_average.toFixed(
                  1
                )}</span>
                /<span class="modal__item--count">${vote_count}</span>
              </p>
            </div>
          </li>
          <li class="modal__item">
            <p class="modal__item--label">Popularity</p>
            <p class="modal__item--value">${popularity.toFixed(1)}</p>
          </li>
          <li class="modal__item">
            <p class="modal__item--label">Original Title</p>
            <p class="modal__item--value big">${original_title}</p>
          </li>
          <li class="modal__item">
            <p class="modal__item--label">Genre</p>
            <p class="modal__item--value">
  ${genres.map(genre => genre.name).join(', ')}
</p>
          </li>
        </ul>
        <div class="modal__overview">
          <h3 class="modal__overview--about">ABOUT</h3>
          <p class="modal__overview--overview">${overview}</p>
        </div>
        <div class="modal__buttons">
          <button id="watched" class="modal__button modal__button--watched" data-id="${id}">
            Add to watched
          </button>
          <button id="queue" class="modal__button modal__button--queue" data-id="${id}">
            Add to queue
          </button>
        </div>
      </div>
    </div>
  </div>
</div>`;
  return markup;
}

export { renderMarkup };
