const libraryWatchedBtn = document.querySelector('[data-watched]');

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
