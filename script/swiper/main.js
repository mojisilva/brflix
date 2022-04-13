var swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerGroup:5,
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  } ,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1,
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 5,
      slidesPerGroup: 2,
    },
    1000: {
      slidesPerView: 5,
      spaceBetween: 5,
      slidesPerGroup: 5,
    },
  },
});
