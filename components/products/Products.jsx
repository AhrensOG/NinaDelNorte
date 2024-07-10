import { GreatVibesFont } from "@/fonts";
import React from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";

const Products = () => {
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 500;
  };

  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 500;
  };
  return (
    <div id="products" className="pt-[108px] sm:pt-[58px] w-full h-screen">
      <div className=" grid place-items-center w-full h-full">
        <div className="w-full h-full px-2 grid place-items-center gap-4">
          <div className="space-y-6 max-w-screen-lg w-full">
            <h2
              className={`${GreatVibesFont.className} text-5xl sm:text-6xl text-center font-medium text-lightBrown drop-shadow-md`}
            >
              Alfajores Nina
            </h2>
            <p className={`text-base text-center`}>
              Nos enorgullecemos de elaborar alfajores de la más alta calidad,
              con una amplia gama de sabores para satisfacer todos los paladares
            </p>
          </div>

          <div className="w-full h-full grid place-items-center bg-[url('/LeafBgImage.svg')] bg-top">
            <div className="group max-w-screen-lg h-full grid place-items-center relative">
              {/* LEFT ARROW */}
              <button className="text-lightBrown size-10 absolute z-10 top-1/2 -left-10 cursor-pointer group-hover:opacity-100 opacity-0 transition duration-100 hidden sm:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="text-lightBrown size-8"
                  onClick={scrollLeft}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              {/* RIGHT ARROW */}
              <button className="text-lightBrown size-8 absolute z-10 top-1/2 -right-10 cursor-pointer group-hover:opacity-100 opacity-0 transition duration-300 hidden sm:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="text-lightBrown size-8"
                  onClick={scrollRight}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
              <div
                id="content"
                className="relative max-w-screen-lg w-full flex justify-start items-center overflow-x-scroll scrollbar-hide overflow-y-hidden gap-4 scroll-smooth"
              >
                <Link href={"/product"}>
                  <ProductCard
                    title={"Alfajor de Vino"}
                    img={"/AlfajorVino.svg"}
                    bgImg={"grape"}
                    description={
                      "Alfajor  relleno de mermelada  de  vino tinto con baño de repostería semiamargo. "
                    }
                  />
                </Link>
                <Link href={"/product"}>
                  <ProductCard
                    title={"Alfajor de Maracuya"}
                    img={"/AlfajorMaracuya.svg"}
                    bgImg={"maracuya"}
                    description={
                      "Alfajor  relleno de baño de repostería fantasía blanco y maracuyá cubierto de repostería semiamargo. "
                    }
                  />
                </Link>
                <Link href={"/product"}>
                  <ProductCard
                    title={"Alfajor de Frutilla"}
                    img={"/AlfajorFrutilla.svg"}
                    bgImg={"strawberry"}
                    description={
                      "Alfajor  relleno de mermelada de frutilla con baño de repostería semiamargo."
                    }
                  />
                </Link>
                <Link href={"/product"}>
                  <ProductCard
                    title={"Alfajor de Café"}
                    img={"/AlfajorFrutilla.svg"}
                    bgImg={"coffee"}
                    description={
                      "Alfajor  relleno de mermelada sabor café con baño de repostería semiamargo."
                    }
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
