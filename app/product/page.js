"use client";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { GreatVibesFont } from "@/fonts";
import Image from "next/image";
import React from "react";
import { Toaster } from "sonner";

const ProductDetail = () => {
  const posts = [
    {
      title: "Alfajor de Café",
      subtitle:
        "El de café es otro de mis alfajores donde decidí incorporarlo porque es otro de los sabores que a la gente le gusta mucho quien no se toma un café o acompañar aun café?",
      img1: "/cafeDetail1.svg",
      img2: "/cafeDetail2.svg",
      description:
        "              Figma ipsum component variant main layer. Strikethrough effectcreate layout vertical effect frame follower. Hand duplicate outline text bold. Vertical reesizing edit invite frame bold strikethrough.Figma ipsum component variant main layer. Strikethrough effect create layout vertical t bold. Vertical reesizing edit invite frame bold strikethrough.Figma ipsum component variant main layer.",
    },
  ];
  return (
    <main>
      <Toaster richColors={true} duration={2000} />
      <Navbar />
      <div className="pt-[108px] sm:pt-[150px] w-full h-full pb-10">
        <div className="grid place-items-center w-full h-full gap-8">
          {posts.map((p) => {
            if (true) {
              return (
                <div className="text-center w-full rounded-lg grid place-items-center">
                  <div className="space-y-6 flex flex-col justify-center items-center max-w-screen-lg pb-10 p-2 sm:px-0">
                    <h1
                      className={`${GreatVibesFont.className} text-black/50 bg-white text-4xl p-2 rounded-md max-w-80 w-full sm:text-5xl`}
                    >
                      {p.title}
                    </h1>
                    <p
                      className={`${GreatVibesFont.className} text-2xl sm:text-3xl max-w-screen-sm`}
                    >
                      {p.subtitle}
                    </p>
                  </div>
                  <div className="w-full grid place-items-center bg-[url('/LeafBgImage.svg')] bg-no-repeat bg-top p-6">
                    <Image
                      src={p.img1}
                      width={600}
                      height={320}
                      alt="Product Image"
                    />
                  </div>
                  <div className="max-w-screen-lg bg-white rounded-md p-4 gap-4 mx-2 sm:mx-0 flex flex-col justify-center items-center sm:flex-row-reverse">
                    <p className="text-justify w-full md:text-lg">
                      {p.description}
                    </p>
                    <Image
                      src={p.img2}
                      width={299}
                      height={250}
                      alt="Product Image"
                    />
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ProductDetail;
