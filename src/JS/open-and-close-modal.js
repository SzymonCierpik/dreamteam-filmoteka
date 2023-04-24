function toggleModal() {
  modal.classList.toggle("is-hidden");
  modal.classList.toggle("modal-animation")
}



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
openModalBtn.addEventListener("click", toggleModal);
closeModalBtn.addEventListener('click', onCloseModal);
divBackdrop.addEventListener('click', onBackDropClick);