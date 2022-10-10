(() => {
  const refs = {
    openModalBtn: document.querySelector("[modal-franchise-open]"),
    closeModalBtn: document.querySelector("[modal-franchise-close]"),
    modal: document.querySelector("[franchise-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();