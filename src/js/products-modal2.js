(() => {
  const refs = {
    openModalBtn: document.querySelector("[products-modal2-open]"),
    closeModalBtn: document.querySelector("[products-modal2-close]"),
    modal: document.querySelector("[products-modal2]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();