(() => {
  const refs = {
    openMenuBtn: document.querySelector('.js-open-menu'),
    closeMenuBtn: document.querySelector('.js-close-menu'),
    menu: document.querySelector('.menu'),
    body: document.querySelector('body'),
    menuList: document.querySelector('.menu__list'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
    refs.menuList.addEventListener('click', removeMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
    refs.body.classList.toggle('no-scroll');
  }

    function removeMenu() {
    refs.menu.classList.add('is-hidden');
   
  }
})();
