import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../component/Container";
import { getProducts } from "../services/Api";

export default function ProductInfo() {
  const{id}= useParams();


  const [products, setProduct] = useState([]);
  const [mainProduct, setMainProduct] = useState();

  useEffect(() => {
    getProducts().then((result) => {
      setProduct(result);
   
      
      const product = result.find((item) => item.id == id);
      setMainProduct(product);
    });
  }, [id]);


 if (!mainProduct) {
    return (
      <Container>
        <div className="text-center text-3xl py-20">در حال بارگذاری محصول...</div>
      </Container>
    );
  }

  return (
    <Container>
      <div>
        <div className="flex">
          <img className="w-1/3" src={mainProduct.image} alt="" />
          <div>
            <span className="text-5xl my-14 block "> {mainProduct.title}</span>
            <span className="text-2xl">{mainProduct.description}</span>
            <div className="text-6xl my-15 text-amber-600">
              <span>{mainProduct.price.toLocaleString()} </span>
              <span>تومان</span>
            </div>
            <button className="bg-emerald-400 p-5 text-3xl">
              افزودن به سبد
            </button>
          </div>
        </div>
        <div>
          <p className="text-5xl text-red-700 py-11">توضیحات</p>
          <p className="text-3xl">{mainProduct.description}</p>
        </div>
      </div>
    </Container>
  );
}
