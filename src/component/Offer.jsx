import React from "react";
import Container from "./Container";

export default function Offer() {
  return (
    
      <Container>
        <div className="w-full flex gap-12 my-28">
          <div className="flex flex-col items-center">
            <img className="hover:scale-110 cursor-pointer transition-all duration-500 " src="/offerPic/Healthy-logo-orginal.jpg" alt="" />
            <span className="text-xl mt-6 hover:text-amber-400 transition-all cursor-pointer">خوراکی های رژیمی</span>
          </div>
          <div className="flex flex-col items-center">
            <img className="hover:scale-110 cursor-pointer transition-all duration-500 " src="/offerPic/PRotein-logo-orginal.jpg" alt="" />
            <span className="text-xl mt-6 hover:text-amber-400 transition-all cursor-pointer"> پروتئین وی</span>
          </div>
          <div className="flex flex-col items-center">
            <img className="hover:scale-110 cursor-pointer transition-all duration-500 " src="/offerPic/Sports-acc-logo-1-orginal.jpg" alt="" />
            <span className="text-xl mt-6 hover:text-amber-400 transition-all cursor-pointer">تجهیزات ورزشی</span>
          </div>
          <div className="flex flex-col items-center">
            <img className="hover:scale-110 cursor-pointer transition-all duration-500 " src="/offerPic/VITAMINS-logo-orginal-1.jpg" alt="" />
            <span className="text-xl mt-6 hover:text-amber-400 transition-all cursor-pointer">ویتامین و مینرال</span>
          </div>
          <div className="flex flex-col items-center">
            <img className="hover:scale-110 cursor-pointer transition-all duration-500 " src="/offerPic/فروش-ویژه.jpg" alt="" />
            <span className="text-xl mt-6 hover:text-amber-400 transition-all cursor-pointer">محصولات تخفیف خورده</span>
          </div>
        </div>
      </Container>
    
  );
}
