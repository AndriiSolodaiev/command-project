(() => {
  const refs = {
    openModalBtn: document.querySelector("[buy-now-menu-open-mobile]"),
    closeModalBtn: document.querySelector("[buy-now-menu-close-mobile]"),
    modal: document.querySelector("[buy-now-menu-mobile]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();