var swiper = new Swiper('.mySwiper', {
    slidesPerView: 2,
    slidesPerColumn: 1,
    breakpoints:{
      0: {
          slidesPerView: 2,
      },
      1025: {
          slidesPerView: 4,
      },
      1441: {
          slidesPerView: 4,
      },
  },
});