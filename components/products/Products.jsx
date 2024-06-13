import { GreatVibesFont } from "@/fonts";
import React from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div id="products" className="pt-[108px] sm:pt-[148px] w-full h-screen">
      <div className=" grid place-items-center w-full h-full">
        <div className="w-full h-full px-2 grid place-items-center gap-4">
          <div className="space-y-6 max-w-screen-lg w-full">
            <h2
              className={`${GreatVibesFont.className} text-4xl sm:text-6xl text-center font-medium text-lightBrown drop-shadow-md`}
            >
              Alfajores Nina
            </h2>
            <p className={`text-sm text-center`}>
              Nos enorgullecemos de elaborar alfajores de la más alta calidad,
              con una amplia gama de sabores para satisfacer todos los paladares
            </p>
          </div>

          <div className="w-full h-full grid place-items-center bg-[url('/LeafBgImage.svg')] bg-top">
            <div className="max-w-screen-lg w-full flex justify-start items-center overflow-x-scroll overflow-y-hidden gap-4">
              <ProductCard
                title={"Alfajor de Vino"}
                img={"/AlfajorVino.svg"}
                description={
                  "Alfajor  relleno de mermelada  de  vino tinto con baño de repostería semiamargo. "
                }
              />
              <ProductCard
                title={"Alfajor de Maracuya"}
                img={"/AlfajorMaracuya.svg"}
                description={
                  "Alfajor  relleno de baño de repostería fantasía blanco y maracuyá cubierto de repostería semiamargo. "
                }
              />
              <ProductCard
                title={"Alfajor de Frutilla"}
                img={"/AlfajorFrutilla.svg"}
                description={
                  "Alfajor  relleno de mermelada de frutilla con baño de repostería semiamargo."
                }
              />
              <ProductCard
                title={"Alfajor de Café"}
                img={"/AlfajorFrutilla.svg"}
                description={
                  "Alfajor  relleno de mermelada sabor café con baño de repostería semiamargo."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
