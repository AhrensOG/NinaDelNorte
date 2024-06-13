import { GreatVibesFont } from "@/fonts";
import Image from "next/image";
import React from "react";

const Main = () => {
  return (
    <div id="main" className="pt-[108px] sm:pt-[150px] w-full h-screen">
      <div className="grid place-items-center w-full h-full">
        <div className="w-full h-full px-2 grid place-items-center">
          <div className="space-y-12 text-center max-w-screen-lg w-full">
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
          <div className="grid place-items-center sm:hidden h-full bg-[url('/LeafBgImage.svg')] bg-top max-w-screen-lg w-full">
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
          <div className="hidden sm:grid h-full w-full place-items-center bg-[url('/LeafBgImage.svg')] bg-top py-10">
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