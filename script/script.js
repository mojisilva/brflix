var swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView:5,
  slidesPerGroup:5,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  } ,
});