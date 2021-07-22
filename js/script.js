
  var swiper = new Swiper(".team-card", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });


/* navbar animation */
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-nav');
const menuMobile = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
}
menu.addEventListener('click', menuMobile);



