import { GreatVibesFont } from "@/fonts";
import Image from "next/image";
import React from "react";

const News = () => {
  return (
    <div className="pt-[108px] sm:pt-[146px] w-full h-screen overflow-y-auto">
      <div className=" grid place-items-center w-full h-full bg-bottom bg-cover pb-20">
        <div className="max-w-screen-lg w-full h-full p-2 grid place-items-center gap-4">
          <div className="space-y-12 text-center">
            <h2
              className={`${GreatVibesFont.className} text-5xl text-lightBrown`}
            >
              Novedades
            </h2>
          </div>
          <Card
            title={"Premio al mejor alfajor"}
            img={"/News1.svg"}
            description={
              "Figma ipsum component variant main layer. Strikethrough effect create layout vertical effect frame follower. Hand duplicate outline text bold..."
            }
          />
          <Card
            title={"Premio al mejor alfajor"}
            img={"/News1.svg"}
            description={
              "Figma ipsum component variant main layer. Strikethrough effect create layout vertical effect frame follower. Hand duplicate outline text bold..."
            }
            reverse={true}
          />
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
        } justify-center items-start gap-2 bg-white shadow-lg rounded-lg min-h-[212px] h-full`}
      >
        <div className="w-full min-w-[165px] max-w-[300px]">
          <Image
            src={img}
            width={300}
            height={200}
            alt="Alfajor Nina Del Norte"
          />
        </div>

        <div className="flex flex-col h-full text-center p-2 sm:py-6 space-y-2">
          <h3 className="text-sm xs:text-base sm:text-3xl">{title}</h3>
          <p className="text-xs text-justify xs:text-sm sm:text-2xl h-full flex items-center">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
