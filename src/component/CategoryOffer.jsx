import React from "react";
import Container from "./Container";
import { ChevronLeft } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";

import OfferCart from "./OfferCart";

export default function CategoryOffer() {
  return (
    <Container>
      <div className="w-full mb-20">
        <div className="w-full border-b-2 border-gray-300 mb-10 flex justify-between ">
          <span className=" bg-amber-400 px-5 py-3 text-2xl text-white ">
            کراتین ها
          </span>
          <div className="flex  px-5 py-3 ">
            <span>مشاهده همه</span>
            <ChevronLeft />
          </div>
        </div>
        <div className="w-full ">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={15}
            slidesPerView={5}
            navigation
          >
            <SwiperSlide>
              <OfferCart />
            </SwiperSlide>
            <SwiperSlide>
              <OfferCart />
            </SwiperSlide>
            <SwiperSlide>
              <OfferCart />
            </SwiperSlide>
            <SwiperSlide>
              <OfferCart />
            </SwiperSlide>
            <SwiperSlide>
              <OfferCart />
            </SwiperSlide>
            <SwiperSlide>
              <OfferCart />
            </SwiperSlide>
            <SwiperSlide>
              <OfferCart />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Container>
  );
}
