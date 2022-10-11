(() => {
  const refs = {
    openModalBtn: document.querySelector("[buy-now-menu-open]"),
    closeModalBtn: document.querySelector("[buy-now-menu-close]"),
    modal: document.querySelector("[buy-now-menu]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();