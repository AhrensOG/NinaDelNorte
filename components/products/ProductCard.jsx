import { AlegreyaFont } from "@/fonts";
import Image from "next/image";
import React from "react";

const ProductCard = ({ title, img, bgImg = "grape", description }) => {
  return (
    <div
      className={`max-w-[320px] min-w-[304px] w-full h-[320px] bg-lightGray flex flex-col justify-start items-center border-2 border-lightBrown rounded-xl py-4 px-3 gap-2`}
    >
      <h4 className={`${AlegreyaFont.className} text-2xl font-medium`}>
        {title}
      </h4>
      <div
        className={`${
          bgImg === "grape"
            ? "bg-[url('/grapeBg.png')]"
            : bgImg === "maracuya"
            ? "bg-[url('/maracuyaBg.png')]"
            : bgImg === "strawberry"
            ? "bg-[url('/strawberryBg.png')]"
            : bgImg === "coffee"
            ? "bg-[url('/coffeeBg.png')]"
            : ""
        } bg-contain bg-center w-full grid place-items-center`}
      >
        <Image src={img} width={160} height={160} alt="Alfajor de Vino" />
      </div>
      <p className="text-center">{description}</p>
    </div>
  );
};

export default ProductCard;
