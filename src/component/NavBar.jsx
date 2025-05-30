import React from "react";
import Container from "./Container";

export default function NavBar() {
  return (
    <div className="w-full bg-black flex justify-center h-auto">
      <Container>
        <ul className="flex w-full gap-8 font text-white h-16 items-center text-xl [&>li]:cursor-pointer [&>li]:hover:text-gray-300 [&>li]:translate-text  [&>li]:duration-100 [&>li]:active:scale-95 transition-all ">
          <li>دسته بندی محصولات</li>
          <li>برندها</li>
          <li>تماس با ما</li>
          <li>دریافت برنامه تمرینی</li>
          <li>سوالات متداول</li>
          <li>پیگیری سفارشات</li>
          <li>مجله</li>
        </ul>
      </Container>
    </div>
  );
}
