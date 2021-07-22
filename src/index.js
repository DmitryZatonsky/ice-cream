import './sass/main.scss';

// mobile menu
(() => {
  const refs = {
    openMenuBtn: document.querySelector('.burger__button'),
    closeMenuBtn: document.querySelector('.menu-close'),
    menu: document.querySelector('.mobile-menu'),
    
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();
// about menu
(() => {
  const refs = {
    openModalBtn: document.querySelector('.about-open-button'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
