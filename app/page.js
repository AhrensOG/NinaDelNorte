"use client";
import Navbar from "@/components/navbar/Navbar";
import Main from "@/components/home/Main";
import { useEffect, useRef, useState } from "react";
import History from "@/components/history/History";
import Products from "@/components/products/Products";
import Footer from "@/components/footer/Footer";
import Link from "next/link";
import { GreatVibesFont } from "@/fonts";
import Carousel from "@/components/carousel/Carousel";
import SocialNetworkButtons from "@/components/socialButtons/SocialNetworkButtons";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("bg-lightGray");

  const mainRef = useRef(null);
  const historyRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined" && historyRef.current) {
        const historyHalfwayPoint =
          historyRef.current.offsetTop + historyRef.current.clientHeight / 2;
        setScrollY(window.scrollY);
        if (
          window.scrollY > window.innerHeight - 250 &&
          window.scrollY < historyHalfwayPoint
        ) {
          setBackgroundColor("bg-lightBrown");
        } else if (window.scrollY >= historyHalfwayPoint) {
          setBackgroundColor("bg-lightGray");
        } else {
          setBackgroundColor("bg-lightGray");
        }
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <main className={`${backgroundColor} transition duration-500`}>
      <Navbar historyBg={backgroundColor === "bg-lightBrown" ? true : false} />
      <div ref={mainRef}>
        <Main />
      </div>
      <div ref={historyRef}>
        <History />
      </div>
      <Products />
      <div id="contact" className="pt-[108px] sm:pt-[146px] w-full grid place-items-center py-16 gap-10">
        <h2
          className={`text-6xl sm:text-7xl text-center font-medium ${GreatVibesFont.className} text-lightBrown rounded-md p-2`}
        >
          ¡Sumate como Revendedor!
        </h2>
        <Link href={"/contact"}>
          <button
            className={`text-xl xs:text-3xl sm:text-4xl text-darkBlue border-2 px-6 border-darkBlue rounded-md p-2`}
          >
            ¡SUMATE!
          </button>
        </Link>
      </div>
      {/* <Carousel /> */}
      <Footer />
      <SocialNetworkButtons />
    </main>
  );
}
