"use client";
import Navbar from "@/components/navbar/Navbar";
import Main from "@/components/home/Main";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import History from "@/components/history/History";
import Products from "@/components/products/Products";
import Contact from "@/components/contact/Contact";

export default function Home() {
  const [showSide, setShowSide] = useState(false);

  const [home, setHome] = useState(true);
  const [history, setHistory] = useState(false);
  const [products, setProducts] = useState(false);
  const [contact, setContact] = useState(false);
  const [news, setNews] = useState(false);

  const handleMenu = (setValue, value, closeSide = false) => {
    setHome(false);
    setHistory(false);
    setProducts(false);
    setContact(false);
    setNews(false);

    setValue(value);
    closeSide ? setShowSide(false) : null;
  };
  return (
    <main
      className={`${
        history ? "bg-lightBrown transition duration-300" : null
      }`}
    >
      <Navbar
        showSide={showSide}
        home={home}
        history={history}
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
      <AnimatePresence>
        {home ? (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.15 }}
            className="w-full"
          >
            <Main />
          </motion.div>
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {history ? (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.15 }}
            className="w-full"
          >
            <History />
          </motion.div>
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {products ? (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.15 }}
            className="w-full"
          >
            <Products />
          </motion.div>
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {contact ? (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.15 }}
            className="w-full"
          >
            <Contact />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </main>
  );
}
