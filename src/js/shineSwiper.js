import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let shineSwiper = null;

function initShineSwiper() {
  const breakpoint = 1200;
  const isMobile = window.innerWidth < breakpoint;

  if (isMobile && !shineSwiper) {
    shineSwiper = new Swiper('.shine-swiper', {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 20,
      mousewheel: true,
      loop: true,
    });
  }

  if (!isMobile && shineSwiper) {
    shineSwiper.destroy(true, true);
    shineSwiper = null;
  }
}

window.addEventListener('load', initShineSwiper);