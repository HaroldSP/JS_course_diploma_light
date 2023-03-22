/* eslint-disable prefer-const */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

'strict';

// core version + navigation, pagination, Autoplay modules:
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

const initSwiper = () => {
  // init Swiper:
  const swiper = new Swiper('.services-elements', {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1,
    spaceBetween: 70,
    loop: true,
    autoplay: {
      // delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    navigation: {
      nextEl: '.arrow-right',
      prevEl: '.arrow-left'
    }
  });

  return swiper;
};

let SwiperInstance;

export const swiperFuncServices = () => {
  if (SwiperInstance) {
    SwiperInstance.destroy(true, true);
  }

  SwiperInstance = initSwiper();
};
