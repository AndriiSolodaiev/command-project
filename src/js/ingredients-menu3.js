(() => {
  const refs = {
    openModalBtn: document.querySelector("[products-modal3-open]"),
    closeModalBtn: document.querySelector("[products-modal3-close]"),
    modal: document.querySelector("[products-modal3]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();