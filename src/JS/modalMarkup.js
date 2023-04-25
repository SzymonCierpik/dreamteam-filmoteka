

function renderMarkup({
  popularity,
  poster_path,
  genres,
  overview,
  original_title,
  vote_average,
  vote_count,
}) {
  let poster = URL_IMG + poster_path;
  if (!poster_path) {
    poster = 'https://live.staticflickr.com/65535/52673964597_7ac974f3b4_k.jpg';
  }
  const markup=

  `<div class="movie-info-content">
      <img class="movie-detail__image" src="https://image.tmdb.org/t/p/w500//${
        e.poster_path
      }" />
      <div class="modal__content">
        <h2 class="modal__title">${e.original_title}</h2>
        <ul class="modal__list">
          <li class="modal__item">
            <p class="modal__item--label">Vote / Votes</p>
            <div class="modal__item--vote">
              <p class="modal__item--value modal__item--value--vote">
                <vote_average>${e.vote_average.toFixed(1)}</vote_average>/<vote__count>${e.vote_count}</vote__count>
              </p></div></li>
              <li class="modal__item">
                <p class="modal__item--label">Popularity</p>
                <p class="modal__item--value">${e.popularity.toFixed(1)}</p>
              </li>
              <li class="modal__item">
                <p class="modal__item--label">Original Title</p>
                <p class="modal__item--value big">${e.original_title}</p>
              </li>
              <li class="modal__item">
                <p class="modal__item--label">Genre</p>
                <p class="modal__item--value">${genres}</p>
</li>
</ul>
<div class="modal__overview">
<h3 class="modal__overview--about">ABOUT</h3>
<p class="modal__overview--overview">${e.overview}</p>
</div>
<div class="modal__buttons">
<button id="watched" class="modal__button modal__button--watched">Add to watched</button>
<button id="queue" class="modal__button modal__button--queue">Add to queue</button>
</div>
</div>
</div>
</div>
</div>`
return backdrop.innerHTML('beforeend', markup);

}
 
  
  export { renderModal }; 