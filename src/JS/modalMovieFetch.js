// import './open-and-close-modal';
// import { renderModal } from './modalMarkup';

// const backdrop = document.createElement('div');
// backdrop.classList.add('backdrop');

// // pobranie id filmu z atrybutu "data-id" klikniętego elementu
// const movieId = e.target.closest('.films-cards-set').getAttribute('data-id');
// fetchMovieById(movieId)
//   .then(movieData => {
//     backdrop.innerHTML = renderModal(movieData);

//     // dodanie elementu backdrop do ciała dokumentu
//     document.body.appendChild(backdrop);

//     // blokowanie scrollowania strony
//     const currentScrollY = window.scrollY;
//     document.body.style.top = `-${currentScrollY}px`;
//     document.body.style.position = 'fixed';

//     // odblokowanie scrollowania strony
//     document.body.style.position = '';
//     document.body.style.top = '';
//     window.scrollTo(0, currentScrollY);
//     closeModal();
//   })
//   .catch(error => {
//     console.error(error);
//   });

// const fetchMovieById = id => {
//   const API_URL = 'https://api.themoviedb.org/3/';
//   const API_KEY = 'b118f38ec77100db6763b4cc83604589';

//   return fetch(API_URL)
//     .then(response => {
//       if (!response.ok) {
//         if (response.status === 429) {
//           // Too Many Requests
//           console.error('Error: Too many requests to API.');
//         } else {
//           console.error(
//             'Error: Failed to fetch data from API. Status code:',
//             response.status
//           );
//         }
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .catch(error => {
//       throw new Error(error);
//     });
// };

// export { openModal };
