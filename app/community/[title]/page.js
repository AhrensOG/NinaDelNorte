"use client";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import SocialNetworkButtons from "@/components/socialButtons/SocialNetworkButtons";
import { AlegreyaFont } from "@/fonts";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const CommunityDetail = ({ params }) => {
  const posts = [
    {
      title: "Figma ipsum component variant main layer Strikethrough",
      img1: "/communityDetail1.svg",
      img2: "/communityDetail2.svg",
      img3: "/communityDetail3.svg",
      description:
        "Effect create layout vertical effect frame follower. Hand duplicate outline text bold. Vertical reesizing edit invite frame bold strikethrough.Figma ipsum component variant main layer. Strikethrough effect create layout vertical effect frame follower. Hand duplicate outline text bold. Vertical reesizing edit invite frame bold strikethrough.Figma ipsum component variant main layer. Strikethrough effect create layout vertical effect frame follower. Hand duplicate outline text bold. Vertical reesizing edit invite frame bold strikethrough.Figma bold strikethrough.Figma ipsum component variant main layer. Strikethrough effect.",
    },
  ];

  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        toast.success("Link copiado!");
      })
      .catch((err) => {
        toast.error("No se pudo copiar el Link!");
      });
  };
  return (
    <main>
      <Navbar />
      <div className="pt-[108px] sm:pt-[150px] w-full h-full">
        <div className="grid place-items-center w-full h-full gap-8 p-2">
          {posts.map((p) => {
            if (decodeURIComponent(params.title) === p.title) {
              return (
                <div className="space-y-12 text-center max-w-screen-lg w-full p-2 sm:p-4 rounded-lg">
                  <h2
                    className={`${AlegreyaFont.className} text-2xl text-darkBlue font-bold sm:text-5xl`}
                  >
                    {p.title}
                  </h2>
                  <Image
                    src={p.img1}
                    width={1024}
                    height={500}
                    alt="FirstImage"
                  />
                  <p className="text-justify text-xs xs:text-sm sm:text-lg">
                    {p.description}
                  </p>
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                    <div className="relative sm:w-[450px] sm:h-[400px] w-[280px] h-[230px]">
                      <Image
                        className="object-cover"
                        src={p.img2}
                        fill
                        alt="Alfajor Nina Del Norte"
                      />
                    </div>
                    <div className="relative sm:w-[450px] sm:h-[400px] w-[280px] h-[230px]">
                      <Image
                        className="object-cover"
                        src={p.img3}
                        fill
                        alt="Tucan Image"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-2 sm:gap-8">
                    <button
                      className="border-2 p-4 rounded-full"
                      onClick={handleCopyLink}
                    >
                      <Image
                        src={"/ShareIcon.svg"}
                        width={35}
                        height={35}
                        alt="Share Icon"
                      />
                    </button>
                    <Link
                      href={
                        "https://www.instagram.com/ninadelnortealfajores?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                      }
                      target="_blank"
                      className="border-2 p-1 rounded-full"
                    >
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
        </div>
      </div>
      <SocialNetworkButtons />
      <Footer />
    </main>
  );
};

export default CommunityDetail;
