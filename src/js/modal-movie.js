import { renderMarkup } from './modal-markup';
import axios from 'axios';

export async function fetchMovieById(id) {
  const API_URL = 'https://api.themoviedb.org/3/movie/';
  const API_KEY = 'b118f38ec77100db6763b4cc83604589';
  const FETCH_URL = `${API_URL}` + `${id}` + '?api_key=' + `${API_KEY}`;
  let response = await axios.get(FETCH_URL);
  return response;
}

export const movieModal = document.querySelector('.movie-info-content');

const refs = {
  openModalBtn: document.querySelector('.films-cards-set'),
  closeModalBtn: document.querySelector('.modal__cross-btn'),
  modal: document.querySelector('.backdrop'),
};


refs.closeModalBtn.addEventListener('click', toggleModal);

export function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}

function closeMdl() {
  refs.modal.classList.add('is-hidden');
}

const closeByClick = event => {
  if (event.target === refs.modal) {
    toggleModal();
  }
};

const closeByKey = event => {
  if (event.key !== 'Escape') {
    false;
  } else {
    closeMdl();
  }
};

refs.modal.addEventListener('click', closeByClick);
window.addEventListener('keydown', closeByKey);
