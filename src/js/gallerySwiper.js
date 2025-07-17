import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let platformsSwiper = null;

function initPlatformsSwiper() {
  platformsSwiper = new Swiper('.gallery-swiper', {
    spaceBetween: 30,
    slidesPerView: 'auto',
    loop: true,
    mousewheel: true,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-btn-right',
      prevEl: '.swiper-btn-left',
    },
    pagination: {
      el: '.gallery-pagination',
      clickable: true,
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },

    on: {
      init() {
        toggleTall(this);
      },
      slideChangeTransitionEnd() {
        toggleTall(this);
      },
      resize() {
        toggleTall(this);
      },
    },
  });

  function toggleTall(sw) {
    const desktop = window.innerWidth >= 1200;

    sw.slides.forEach(slide => {
      slide.classList.toggle(
        'tall',
        desktop && slide === sw.slides[sw.activeIndex]
      );
    });
  }
}

window.addEventListener('load', initPlatformsSwiper);
