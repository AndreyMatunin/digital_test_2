'use strict'

const swiper = new Swiper('#swiper__years', {
  direction: 'horizontal',
  loop: false,

  pagination: {
    el: '.swiper-pagination-current',
    type: 'fraction',

    renderFraction: function (currentClass, totalClass) {
      return '0 <span class="' + currentClass + '"></span>' +
        ' / 0 ' +
        '<span class="' + totalClass + '"></span>';
    }
  },

  navigation: {
    nextEl: '#btn-next',
    prevEl: '#btn-prev',
  },

  observer: true,
  observeSlideChildren: true,
  observeParents: true,

  slidesPerView: 1,
  spaceBetween: 80,
  slidesPerColumn: 1,
});

const botSwiper = new Swiper('#bottom__swiper', {
  direction: 'horizontal',
  loop: false,

  navigation: {
    nextEl: '#btn-round__next',
    prevEl: '#btn-round__prev',
  },

  observer: true,
  observeSlideChildren: true,
  observeParents: true,
  slidesPerView: 3,
  spaceBetween: 150,
});

const paginateButtonsClickListener = () => {
  const currentSlideIndex = swiper.activeIndex;

  const bottomSlides = document.querySelectorAll('#bottom__swiper .swiper-slide');
  bottomSlides.forEach(function (slide) {
    const index = slide.getAttribute('data-index');
    if (+index === currentSlideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
  botSwiper.slideTo(0);
}

const btnNext = document.getElementById('btn-next');
const btnPrev = document.getElementById('btn-prev');

btnNext.addEventListener('click', paginateButtonsClickListener);
btnPrev.addEventListener('click', paginateButtonsClickListener);




