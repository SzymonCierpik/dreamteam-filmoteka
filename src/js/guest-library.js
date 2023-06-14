export let guestLibrary;

export function getGuestLibrary() {
  try {
    let guestData = localStorage.getItem('guest');
    guestLibrary = JSON.parse(guestData);
  } catch (error) {
    console.log(error);
  }
}

export function addToWatchedForGuest(movieId) {
  try {
    if (!guestLibrary.watched.includes(movieId)) {
      guestLibrary.watched.push(movieId);
      localStorage.setItem('guest', JSON.stringify(guestLibrary));
      getGuestLibrary();
    }
  } catch (error) {
    console.log(error);
  }
}

export function addToQueueForGuest(movieId) {
  try {
    if (!guestLibrary.queue.includes(movieId)) {
      guestLibrary.queue.push(movieId);
      localStorage.setItem('guest', JSON.stringify(guestLibrary));
      getGuestLibrary();
    }
  } catch (error) {
    console.log(error);
  }
}
