import React from "react";
import Container from "./Container";
import SwiperSlider from "./SwiperSlider";

const images = [
  "/landingPic/1.jpg",
  "/landingPic/2.jpg",
  "/landingPic/3.jpg",
  "/landingPic/4.jpg",
];

const  slidesPerView = 1

export default function Landing() {
  return (
    <Container>
      <div className="flex gap-28 my-18 w-full ">
        <div className="basis-3/5 bg-amber-400 h-116 w-60   ">
          <SwiperSlider  slidesPerView={ slidesPerView} images={images} />
        </div>
        <div className="basis-2/5 bg-amber-950 h-116  ">
          <a href="">
            <img className="w-full h-full" src="/landingPic/5.jpg" alt="" />
          </a>
        </div>
      </div>
    </Container>
  );
}
