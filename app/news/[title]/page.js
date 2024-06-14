"use client";
import Navbar from "@/components/navbar/Navbar";
import { AlegreyaFont } from "@/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Detail = ({ params }) => {
  const posts = [
    {
      title: "Premio al mejor alfajor",
      img1: "/News1.svg",
      img2: "/DetailNews1.svg",
      description:
        "Figma ipsum component variant main layer. Strikethrough effect create layout vertical effect frame follower. Hand duplicate outline text bold. Vertical reesizing edit invite frame bold strikethrough.Figma ipsum component variant main layer. Strikethrough effect create layout vertical effect frame follower. Hand duplicate outline text bold. Vertical reesizing edit invite frame bold strikethrough.Figma ipsum component variant main layer. Strikethrough effect create layout vertical effect frame follower. Hand duplicate outline text bold. Vertical reesizing edit invite frame bold strikethrough.Figma ipsum component variant main layer. Strikethrough effect create layout vertical effect frame follower. Hand duplicate outline text bold. Vertical reesizing edit invite frame bold strikethrough.Figma ipsum component variant main layer. Strikethrough effect create layout .",
    },
    {
      title: "Suplemento elsa organizo un evento de alfajores",
      img1: "/News2.svg",
      img2: "/DetailNews1.svg",
      description:
        "Figma ipsum component variant main layer. Strikethrough effect create layout vertical effect frame follower. Hand duplicate outline text bold. Vertical reesizing edit invite frame bold strikethrough.Figma ipsum component variant main layer. Strikethrough effect create layout vertical effect frame follower. Hand duplicate outline text bold. Vertical reesizing edit invite frame bold strikethrough.Figma ipsum component variant main layer. Strikethrough effect create layout vertical effect frame follower. Hand duplicate outline text bold. Vertical reesizing edit invite frame bold strikethrough.Figma ipsum component variant main layer. Strikethrough effect create layout vertical effect frame follower. Hand duplicate outline text bold. Vertical reesizing edit invite frame bold strikethrough.Figma ipsum component variant main layer. Strikethrough effect create layout .",
    },
    {
      title: "Nina alfajores en la radio fm",
      img1: "/News3.svg",
      img2: "/DetailNews1.svg",
      description:
        "Figma ipsum component variant main layer. Strikethrough effect create layout vertical effect frame follower. Hand duplicate outline text bold. Vertical reesizing edit invite frame bold strikethrough.Figma ipsum component variant main layer. Strikethrough effect create layout vertical effect frame follower. Hand duplicate outline text bold. Vertical reesizing edit invite frame bold strikethrough.Figma ipsum component variant main layer. Strikethrough effect create layout vertical effect frame follower. Hand duplicate outline text bold. Vertical reesizing edit invite frame bold strikethrough.Figma ipsum component variant main layer. Strikethrough effect create layout vertical effect frame follower. Hand duplicate outline text bold. Vertical reesizing edit invite frame bold strikethrough.Figma ipsum component variant main layer. Strikethrough effect create layout .",
    },
  ];

  return (
    <main>
      <Navbar />
      <div className="pt-[108px] sm:pt-[150px] w-full h-full">
        <div className="grid place-items-center w-full h-full gap-8">
          {posts.map((p) => {
            if (decodeURIComponent(params.title) === p.title) {
              return (
                <div className="space-y-12 text-center max-w-screen-lg w-full border-2 border-lightBrown p-2 sm:p-4 rounded-lg">
                  <h2
                    className={`${AlegreyaFont.className} text-2xl text-darkBlue`}
                  >
                    {p.title}
                  </h2>
                  <p className="text-justify text-xs xs:text-sm sm:text-lg">
                    {p.description}
                  </p>
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                    <div className="relative sm:w-[450px] sm:h-[400px] w-[260px] h-[200px]">
                      <Image
                        className="object-cover"
                        src={p.img1}
                        fill
                        alt="Alfajor Nina Del Norte"
                      />
                    </div>
                    <div className="relative sm:w-[450px] sm:h-[400px] w-[260px] h-[200px]">
                      <Image
                        className="object-cover"
                        src={p.img2}
                        fill
                        alt="Tucan Image"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-2 sm:gap-8">
                    <Link href={"/"} className="border-2 p-4 rounded-full">
                      <Image
                        src={"/ShareIcon.svg"}
                        width={35}
                        height={35}
                        alt="Share Icon"
                      />
                    </Link>
                    <Link href={"/"} className="border-2 p-1 rounded-full">
                      <Image
                        src={"/BlackInstagramIcon.svg"}
                        width={60}
                        height={60}
                        alt="Instagram Icon"
                      />
                    </Link>
                  </div>
                </div>
              );
            }
          })}

          <h3 className="xs:text-lg sm:text-2xl uppercase font-light w-full text-start max-w-screen-lg">
            Otras Noticias
          </h3>
          <div className="w-full grid place-items-center relative">
            <div className="flex flex-col justify-center items-start w-full max-w-screen-lg gap-2 overflow-x-scroll z-10">
              <div className="flex max-w-screen-lg gap-4 p-2">
                <Card
                  title={"Premio al mejor alfajor"}
                  description={
                    "Figma ipsum component variant main layer. Strikethrough effect create layout vertical effect frame follower. Hand duplicate outline text bold. Vertical reesizing edit invite frame bold strikethrough."
                  }
                  img={"/News1.svg"}
                />
                <Card
                  title={"Suplemento elsa organizo un evento de alfajores"}
                  description={
                    "Figma ipsum component variant main layer. Strikethrough effect create layout vertical effect frame follower. Hand duplicate outline text bold. Vertical reesizing edit invite frame bold strikethrough."
                  }
                  img={"/News2.svg"}
                />
                <Card
                  title={"Nina alfajores en la radio fm"}
                  description={
                    "Figma ipsum component variant main layer. Strikethrough effect create layout vertical effect frame follower. Hand duplicate outline text bold. Vertical reesizing edit invite frame bold strikethrough."
                  }
                  img={"/News3.svg"}
                />
              </div>
            </div>
            <div className="w-full bg-[url('/LeafBgImage.svg')] h-[90%] bg-cover bg-top absolute bottom-0 z-0" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Detail;

const Card = ({ title, img, description }) => {
  return (
    <div className="max-w-[250px] flex flex-col justify-center items-start gap-1 shadow-lg bg-lightGray">
      <div className="relative w-[250px] h-[180px]">
        <Image src={img} fill alt="News 2" className="object-cover" />
      </div>
      <Link href={`/news/${title}`}>
        <h3
          className={`${AlegreyaFont.className} font-medium text-sm text-center p-2`}
        >
          {title}
        </h3>
      </Link>
      <span
        className={`${AlegreyaFont.className} font-medium text-xs text-justify p-2`}
      >
        <Link href={`/news/${title}`}>{description}</Link>
      </span>
    </div>
  );
};
