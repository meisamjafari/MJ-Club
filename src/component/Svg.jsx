import React from "react";
import Container from "./Container";
export default function Svg() {
  return (
    <Container>
      <div className="flex justify-around w-full my-16 [&>div>img]:h-30 [&>div]:flex  [&>div]:flex-col [&>div]:items-center [&>div>span]:text-xl [&>div>span]:mt-6 ">
        <div>
          <img src="/svg/delivery-truck-min.png" alt="" />
          <span>ضمانت اصالت کالا</span>
        </div>
        <div>
          <img src="./svg/phone-call-min.png" alt="" />
          <span>7 روز ضمانت بازگشت</span>
        </div>
        <div>
          <img src="./svg/shield-min.png" alt="" />
          <span>خرید امن شتاب</span>
        </div>
        <div>
          <img src="./svg/wallet-min.png" alt="" />
          <span>پشتیبانی عالی</span>
        </div>
      </div>
    </Container>
  );
}
