import { GreatVibesFont } from "@/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const News = () => {
  return (
    <div id="news" className="pt-[108px] sm:pt-[146px] w-full h-full">
      <div className=" grid place-items-center w-full h-full bg-bottom bg-cover pb-20">
        <div className="max-w-screen-lg w-full h-full p-2 grid place-items-center gap-8">
          <div className="space-y-12 text-center">
            <h2
              className={`${GreatVibesFont.className} text-5xl text-lightBrown`}
            >
              Novedades
            </h2>
          </div>
          <div className="w-full h-full flex flex-col justify-center items-center gap-4">
            <Card
              title={"Premio al mejor alfajor"}
              img={"/News1.svg"}
              description={
                "Figma ipsum component variant main layer. Strikethrough effect create layout vertical effect frame follower..."
              }
            />
            <Card
              title={"Suplemento elsa organizo un evento de alfajores"}
              img={"/News2.svg"}
              description={
                "Figma ipsum component variant main layer. Strikethrough effect create layout vertical effect frame follower..."
              }
              reverse={true}
            />
            <Card
              title={"Nina alfajores en la radio fm"}
              img={"/News3.svg"}
              description={
                "Figma ipsum component variant main layer. Strikethrough effect create layout vertical effect frame follower..."
              }
              reverse={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;

const Card = ({ title, description, img, reverse = false }) => {
  return (
    <div className="grid place-items-center">
      <div
        className={`relative flex ${
          reverse ? "flex-row-reverse" : null
        } justify-center items-start gap-2 bg-white shadow-lg rounded-lg min-h-[212px] sm:h-[380px] h-full`}
      >
        <div className="w-full min-w-[165px] max-w-[300px] max-h-[380px] min-h-[210px] h-full relative">
          <Image
            src={img}
            fill
            alt="Alfajor Nina Del Norte"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col h-full text-center p-2 sm:py-6 space-y-2">
          <h3 className="text-xs xs:text-base sm:text-3xl">{title}</h3>
          <p className="text-xs text-justify xs:text-sm sm:text-2xl h-full flex flex-col gap-2 items-center justify-center">
            {description}
            <Link href={`/news/${title}`}>
              <button className="text-lightBrown underline underline-offset-4">
                Ver
              </button>
            </Link> 
          </p>
        </div>
      </div>
    </div>
  );
};
