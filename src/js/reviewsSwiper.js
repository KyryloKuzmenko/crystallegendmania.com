import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let reviewsSwiper = null;

function initReviewsSwiper() {
  const breakpoint = 1200;
  const isMobile = window.innerWidth < breakpoint;

  if (isMobile && !reviewsSwiper) {
    reviewsSwiper = new Swiper('.reviews-swiper', {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 20,
      mousewheel: true,
      loop: true,
    });
  }

  if (!isMobile && reviewsSwiper) {
    reviewsSwiper.destroy(true, true);
    reviewsSwiper = null;
  }
}

window.addEventListener('load', initReviewsSwiper);