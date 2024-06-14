"use client";
import Navbar from "@/components/navbar/Navbar";
import Main from "@/components/home/Main";
import { useEffect, useRef, useState } from "react";
import History from "@/components/history/History";
import Products from "@/components/products/Products";
import Contact from "@/components/contact/Contact";
import News from "@/components/news/News";

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
          window.scrollY > window.innerHeight - 50 &&
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
      <div ref={mainRef} className="h-screen">
        <Main />
      </div>
      <div ref={historyRef} className="h-screen">
        <History />
      </div>
      <Products />
      <News />
      <Contact />
    </main>
  );
}
