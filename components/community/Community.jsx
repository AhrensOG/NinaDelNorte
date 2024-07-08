import Image from "next/image";
import React from "react";
import Footer from "../footer/Footer";
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { AutoPlay } from "@egjs/flicking-plugins";
import { AlegreyaFont } from "@/fonts";
import Link from "next/link";

const Community = () => {
  const plugins = [
    new AutoPlay({ duration: 5000, direction: "NEXT", stopOnHover: true }),
  ];
  return (
    <div id="contact" className="pt-[108px] sm:pt-[146px] w-full h-full">
      <div className="px-2 sm:px-0 grid place-items-center w-full">
        <div className="max-w-screen-lg w-full sm:space-y-16 md:space-y-24">
          <Flicking align="prev" circular={true} plugins={plugins}>
            <div className="relative w-full">
              <Image
                src={"/communityImg.svg"}
                width={1024}
                height={500}
                className="bg- bg-center"
                alt="Community BG"
              />
              <span className="absolute bottom-5 left-5 font-bold text-white bg-lightBrown/50 text-xs p-0.5 px-4 sm:p-2 sm:px-10 sm:text-base">
                Acciones Sociales
              </span>
            </div>
          </Flicking>
          <div className="flex flex-col gap-16 justify-center items-center w-full py-6">
            <Card
              date={"12 de jUNIO  2024"}
              title={"Figma ipsum component variant main layer Strikethrough"}
              img="/community1.svg"
              desc={
                "effect create layout vertical effect frame follower. Hand duplicate outline text bold. Vertical reesizing edit invite frame bold strikethrough.Figma ipsum component variant main layer. Strikethrough effect create layout vertical effect frame follower. Hand duplicate outline text bold. Vertical reesizing edit invite frame bold strikethrough.Figma ipsum component variant main layer. Strikethrough effect create layout vertical effect frame follower. Hand duplicate outline text bold. Vertical reesizing edit invite frame bold strikethrough.Figma bold strikethrough.Figma ipsum component variant main layer. Strikethrough effect."
              }
              link="Figma ipsum component variant main layer Strikethrough"
            />
            <Card
              date={"01 de jUNIO  2024"}
              title={"Figma ipsum component variant main layer Strikethrough"}
              img="/community2.svg"
              desc={
                "effect create layout vertical effect frame follower. Hand duplicate outline text bold. Vertical reesizing edit invite frame bold strikethrough.Figma ipsum component variant main layer. Strikethrough effect create layout vertical effect frame follower. Hand duplicate outline text bold. Vertical reesizing edit invite frame bold strikethrough.Figma ipsum component variant main layer. Strikethrough effect create layout vertical effect frame follower. Hand duplicate outline text bold. Vertical reesizing edit invite frame bold strikethrough.Figma bold strikethrough.Figma ipsum component variant main layer. Strikethrough effect."
              }
              link="Figma ipsum component variant main layer Strikethrough"
            />
            <Card
              date={"06 de Mayo  2024"}
              title={"Figma ipsum component variant main layer Strikethrough"}
              img="/community3.svg"
              desc={
                "effect create layout vertical effect frame follower. Hand duplicate outline text bold. Vertical reesizing edit invite frame bold strikethrough.Figma ipsum component variant main layer. Strikethrough effect create layout vertical effect frame follower. Hand duplicate outline text bold. Vertical reesizing edit invite frame bold strikethrough.Figma ipsum component variant main layer. Strikethrough effect create layout vertical effect frame follower. Hand duplicate outline text bold. Vertical reesizing edit invite frame bold strikethrough.Figma bold strikethrough.Figma ipsum component variant main layer. Strikethrough effect."
              }
              link="Figma ipsum component variant main layer Strikethrough"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Community;

const Card = ({ date, img = "/community1.svg", title, desc, link = "/#" }) => {
  return (
    <div className="w-full bg-white sm:bg-transparent rounded-md flex flex-col justify-center items-center md:items-start max-w-[300px] sm:max-h-[165px] sm:flex-row sm:max-w-full relative shadow-lg">
      <div className="w-full flex flex-col justify-center items-start sm:flex-col-reverse max-w-[300px] sm:max-h-[165px] overflow-hidden">
        <Link href={`/community/${link}`}>
          <Image src={img} width={300} height={200} alt="Community 1" />
        </Link>
        <span className="pl-2 pt-1 text-xs sm:text-base font-light sm:py-2 sm:absolute sm:pl-0 top-[-35px]">
          {date}
        </span>
      </div>
      <Link href={`/community/${link}`}>
        <div className="w-full p-2 flex flex-col justify-start gap-4">
          <h3
            className={`${AlegreyaFont.className} font-semibold xs:text-lg sm:text-xl`}
          >
            {title}
          </h3>
          <p className="text-sm xs:text-base sm:text-lg">
            {desc.length > 150 && desc.slice(0, 150)}...
          </p>
        </div>
      </Link>
    </div>
  );
};
