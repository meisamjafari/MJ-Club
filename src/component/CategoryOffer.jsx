import React, { useEffect, useState } from "react";

import Container from "./Container";
import { ChevronLeft } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";
import OfferCart from "./OfferCart";
import { getProducts } from "../services/Api";

export default function CategoryOffer(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((result) => {
      setProducts(result);
    });
  }, []);
  let categoryName = "";
  switch (props.category) {
    case "کراتین ها":
      categoryName = "creatine";
      break;

    case "پروتئین ها":
      categoryName = "Protein";
      break;
  }

  return (
    <Container>
      <div className="w-full mb-20">
        <div className="w-full border-b-2 border-gray-300 mb-10 flex justify-between ">
          <span className=" bg-amber-400 px-5 py-3 text-2xl text-white ">
            {props.category}
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
            {products
              .filter((item) => item.category == categoryName)
              .map((item) => (
                <SwiperSlide key={item.id}>
                  <Link to={`/ProductInfo/${item.id}`}>
                    <OfferCart {...item} />
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </Container>
  );
}
