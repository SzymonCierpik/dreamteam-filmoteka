const gallery = document.querySelector('.films-cards-set');
const alert = document.querySelector('#wrongSearch');

export const createGalleryId = data => {
  const movies = data
    .map(movie => {
     /*  console.log(movie.id); */
      let src;
      /* console.log(movie.id); */
      if (movie.poster_path === null) {
        src = `https://www.more-kino.info/drama/hide-2/hide-2.jpg`;
      } else {
        src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
      }

      return `
        <div class="film-card">
        <a href=https://image.tmdb.org/t/p/original/${movie.poster_path}>
        <img class="film-img" src="${src}" alt="${movie.title}" loading="lazy" /> 
        <div class="info">
        <p class="info-title">${movie.original_title}</p>
        <p class="info-text">${movie.genres.map(genre => genre.name).join(" , ")} | ${movie.release_date.substring(0,4)} <span class="info-rating">${movie.vote_average}</span></p>
        </div>
        </a>
        </div>
        `;
    })
    .join(' ');
  gallery.insertAdjacentHTML('beforeend', movies);
};

/* function clearGallery() {
  gallery.innerHTML = '';
} */
