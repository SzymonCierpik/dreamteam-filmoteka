import './open-and-close-modal';
import { renderMarkup } from './modalMarkup';
import axios from 'axios';

// funkcja otwierająca moda
// (() => {
const refs = {
  openModalBtn: document.querySelector('.films-cards-set'),
  closeModalBtn: document.querySelector('.modal__cross-btn'),
  modal: document.querySelector('.backdrop'),
};

const backdrop = document.querySelector('.backdrop');

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}
// })();
const openModal = e => {
  if (!e.currentTarget.classList.contains('film-card')) {
    // zakanczamy dzialanie funkcji, kliknelismy nie w karte
    return;
  }

  //   // kliknielismy w karte, dzialamy dalej

  //   // otrzymujemy id z data-id atrybutu, ktory zostal dodany wczesniej do karty
  const id = e.currentTarget.dataset.id;
  // pobranie id filmu z atrybutu "data-id" klikniętego elementu
  const movieId = e.currentTarget.closest('.film-card').getAttribute('data-id');

  fetchMovieById(movieId)
    .then(movieData => {
      backdrop.innerHTML = renderModal(movieData);

      // dodanie elementu backdrop do ciała dokumentu
      document.body.appendChild(backdrop);
    })
    .catch(error => {
      throw new Error(error);
    });

  // szukamy nasza liste w DOM
  const galleryListDOM = document.querySelector('.films-cards-set'); // tu powinna by klasa calej galerii/listy
};

async function fetchMovieById(id) {
  const API_URL = 'https://api.themoviedb.org/3/movie/';
  const API_KEY = 'b118f38ec77100db6763b4cc83604589';
  const FETCH_URL = `${API_URL}` + `${id}` + '?api_key=' + `${API_KEY}`;

  await axios.get(FETCH_URL).then(response => {
    console.log(response.data);
    return response.data;
  });
}

export { openModal };
