"use client";
import Navbar from "@/components/navbar/Navbar";
import Main from "@/components/home/Main";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import History from "@/components/history/History";
import Products from "@/components/products/Products";
import Contact from "@/components/contact/Contact";
import News from "@/components/news/News";

export default function Home() {
  const [showSide, setShowSide] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("bg-lightGray");

  const [home, setHome] = useState(true);
  const [history, setHistory] = useState(false);
  const [products, setProducts] = useState(false);
  const [contact, setContact] = useState(false);
  const [news, setNews] = useState(false);

  const mainRef = useRef(null);
  const historyRef = useRef(null);

  const handleMenu = (setValue, value, closeSide = false) => {
    setHome(false);
    setHistory(false);
    setProducts(false);
    setContact(false);
    setNews(false);

    setValue(value);
    closeSide ? setShowSide(false) : null;
  };

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
      <Navbar
        showSide={showSide}
        home={home}
        history={backgroundColor === "bg-lightBrown" ? true : false}
        products={products}
        contact={contact}
        news={news}
        setShowSide={setShowSide}
        setHome={setHome}
        setHistory={setHistory}
        setProducts={setProducts}
        setContact={setContact}
        setNews={setNews}
        handleMenu={handleMenu}
      />
      <div ref={mainRef} className="h-screen">
        <AnimatePresence>
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.15 }}
            className="w-full"
          >
            <Main />
          </motion.div>
        </AnimatePresence>
      </div>
      <div ref={historyRef} className="h-screen">
        <AnimatePresence>
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.15 }}
            className="w-full"
          >
            <History />
          </motion.div>
        </AnimatePresence>
      </div>
      <AnimatePresence>
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.15 }}
          className="w-full"
        >
          <Products />
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.15 }}
          className="w-full"
        >
          <Contact />
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        {news ? (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.15 }}
            className="w-full"
          >
            <News />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </main>
  );
}
