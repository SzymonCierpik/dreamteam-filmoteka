function onCloseModal() {
    document.body.classList.remove('is-hidden');
  
    modal.innerHTML = '';
   
  }
  
  function onBackDropClick(event) {
    if (event.currentTarget === event.target) {
      onCloseModal();
    }
  }
  
  function onEscKeyPress(event) {
    if (event.code !== 'Escape') {
      return;
    }
  
    window.removeEventListener('keydown', onEscKeyPress);
    onCloseModal();
  }

// Trzeba nazwy guzikow odpowiednie przepisac ja dalem tutaj przykladowe

closeModalBtn.addEventListener('click', onCloseModal);
divBackdrop.addEventListener('click', onBackDropClick);