import React from "react";
import Container from "./Container";
import { CiSearch } from "react-icons/ci";


function TopBar() {
  return (
    <Container>
      <div className="flex h-20 w-full items-center ">
        <div className="basis-1/4 h-full ">
          <img
            className="h-full w-auto object-contain"
            src="images/logo.jpg"
            alt=""
          />
        </div>
        <div className="basis-2/4 flex gap-5 outline-0 border-0">
         <div className="bg-gray-300  h-10 flex   "> <select className="p-2 w-26 " name="product-cat" id="">
            <option className=""  value="">All</option>
            <option value="">پروتئین</option>
          </select></div>
          <div className="bg-gray-300 w-xl h-10 flex   ">
            <input className="basis-7/8 outline-0 text-l p-4" type="text" placeholder="به دنبال کالای خاصی هستید؟" />
            <CiSearch className="w-8  h-auto mr-6 cursor-pointer active:scale-85 transition-all "/>
          </div>
        </div>
        <div className="basis-1/4 gap-5 flex justify-end ">
          <button className="h-10 bg-gray-300 px-4 cursor-pointer   hover:bg-gray-400 translate-all duration-200">ورود/عضویت</button>
          <button className="h-10 bg-gray-300 px-4 cursor-pointer hover:bg-gray-400 translate-all duration-200">سبد خرید</button>
        </div>
      </div>
    </Container>
  );
}

export default TopBar;
