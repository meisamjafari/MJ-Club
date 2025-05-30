import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

// eslint-disable-next-line react-refresh/only-export-components
export default ({ slidesPerView ,images = [] }) => {
  return (
    <Swiper
      className="h-full w-full"
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
      effect="fade"
      loop={true}
      slidesPerView={ slidesPerView}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {images.map((src, index) => {
        return (
          <SwiperSlide key={index}>
            {console.log(src)}
            <img src={src} alt={`slide - ${index}`} className="w-full h-full" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
