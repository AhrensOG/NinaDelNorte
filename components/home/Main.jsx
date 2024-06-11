import { GreatVibesFont } from "@/fonts";
import Image from "next/image";
import React from "react";

const Main = () => {
  return (
    <div className="pt-[108px] sm:pt-[146px] w-full h-screen">
      <div className=" grid place-items-center w-full h-full bg-[url('/LeafBgImage.svg')] bg-bottom bg-cover">
        <div className="max-w-screen-lg w-full h-full p-2 grid place-items-center">
          <div className="space-y-12 text-center">
            <h2 className="text-2xl sm:text-4xl uppercase text-center font-medium text-lightBrown drop-shadow-md">
              Alfajores con aroma <br /> del norte
            </h2>
            <h4
              className={`${GreatVibesFont.className} text-2xl text-darkBlue`}
            >
              Disfruta la dulzura de la Naturaleza{" "}
            </h4>
          </div>
          {/* - SM SCREEN */}
          <div className="grid place-items-center sm:hidden">
            <div className="relative">
              <Image
                src={"/AlfajorImage.svg"}
                width={365}
                height={275}
                alt="Alfajor Nina Del Norte"
              />
              <Image
                src={"/TucanImage.svg"}
                width={65}
                height={65}
                alt="Tucan Image"
                className="absolute top-10 right-2 xs:top-12"
              />
            </div>
          </div>

          {/* + SM SCREEN */}
          <div className="hidden place-items-center sm:grid">
            <div className="relative">
              <Image
                src={"/AlfajorImage.svg"}
                width={500}
                height={289}
                alt="Alfajor Nina Del Norte"
              />
              <Image
                src={"/TucanImage.svg"}
                width={100}
                height={100}
                alt="Tucan Image"
                className="absolute top-10 right-2 xs:top-14"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
