// import * as basicLightbox from 'basiclightbox';
// import 'basiclightbox/dist/basicLightbox.min.css';

// const videoLink = document.querySelector('.footer__font');

// videoLink.addEventListener('click', showModal);
// function showModal(e) {
//   e.preventDefault();
//   const instance = basicLightbox.create(
//     `
//   <iframe src="https://player.vimeo.com/video/820849980?h=af82c37f95&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="filmoteka"></iframe>
//   `,
//     {
//       onClose: instance => {
//         videoLink.removeEventListener('keydown', keydownListener);
//       },
//     }
//   );

//   instance.show();

//   const keydownListener = e => {
//     if (e.code === 'Escape') {
//       instance.close();
//     }
//   };
//   videoLink.addEventListener('keydown', keydownListener);
// }
