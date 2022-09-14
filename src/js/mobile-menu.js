(() => {
  const refs = {
    openMenuBtn: document.querySelector('.js-open-menu'),
    closeMenuBtn: document.querySelector('.js-close-menu'),

    openMenuBtn: document.querySelector('.header__mob-menu-open-button'),

    menu: document.querySelector('.js-menu-container'),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('scroll');

    refs.openMenuBtn.classList.toggle('header__mob-menu-open-button');

  }
})();



