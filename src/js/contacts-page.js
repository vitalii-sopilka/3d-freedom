(() => {
  const refs = {
    // openVideoBtn: document.querySelector(".play-button"),
    closeVideoBtn: document.querySelector('.play-button'),
    imgThumb: document.querySelector('.contact-hero__img-thumb'),
  };

  //   refs.openVideoBtn.addEventListener("click", toggleModal);
  refs.closeVideoBtn.addEventListener('click', toggleVideo);

  function toggleVideo() {
    refs.imgThumb.classList.toggle('is-hidden');
  }
})();
