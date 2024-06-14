import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = ({ historyBg }) => {
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
    <AnimatePresence>
      <motion.nav
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.25 }}
        className={`w-full p-2 fixed top-0 left-0 grid place-items-center z-40 transition duration-500 ${
          historyBg ? "bg-lightBrown" : "bg-lightGray"
        }`}
      >
        {/* MOBILE DESIGN */}
        <div className="w-full flex justify-between items-center sm:hidden">
          <div className="flex flex-col justify-center items-center">
            <Image
              src={"/MiniArgFlag.svg"}
              width={30}
              height={30}
              alt="Argentina Flag"
            />
            <span className="text-xs font-light text-center">
              Industria <br /> Argentina
            </span>
          </div>
          <div>
            <Image
              src={"/MiniLogo.svg"}
              width={107}
              height={92}
              alt="NinaLogo"
            />
          </div>
          <div>
            <button onClick={() => setShowSide(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* DESKTOP DESIGN */}
        <div className="w-full hidden sm:flex justify-between items-center max-w-screen-lg">
          <div>
            <Link href={"/"}>
              <Image
                src={"/Logo.svg"}
                width={170}
                height={130}
                alt="NinaLogo"
              />
            </Link>
          </div>
          <div className="flex justify-between items-center w-full max-w-screen-sm px-4 gap-1">
            <Link href={"/#main"}>
              <button
                onClick={() => handleMenu(setHome, true)}
                className={`${
                  home ? "underline underline-offset-4" : ""
                } uppercase`}
              >
                Inicio
              </button>
            </Link>

            <Link href={"/#history"}>
              <button
                onClick={() => handleMenu(setHistory, true)}
                className={`${
                  historyBg ? "underline underline-offset-4" : ""
                } uppercase`}
              >
                Historia
              </button>
            </Link>

            <Link href={"/#products"}>
              <button
                onClick={() => handleMenu(setProducts, true)}
                className={`${
                  products ? "underline underline-offset-4" : ""
                } uppercase`}
              >
                Productos
              </button>
            </Link>

            <Link href={"/#news"}>
              <button
                onClick={() => handleMenu(setNews, true)}
                className={`${
                  news ? "underline underline-offset-4" : ""
                } uppercase`}
              >
                Noticias
              </button>
            </Link>

            <Link href={"/#contact"}>
              <button
                onClick={() => handleMenu(setContact, true)}
                className={`${
                  contact ? "underline underline-offset-4" : ""
                } uppercase`}
              >
                Contacto
              </button>
            </Link>
          </div>
          <div className="flex justify-center items-center gap-0.5 min-w-28">
            <Image
              src={"/ArgFlag.svg"}
              width={55}
              height={55}
              alt="Argentina Flag"
            />
            <span className="text-xs font-light text-center ">
              Industria <br /> Argentina
            </span>
          </div>
        </div>

        {/* SIDEBAR */}
        <AnimatePresence>
          {showSide ? (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25 }}
              className={`sm:hidden fixed top-0 right-0 h-screen w-2/3 bg-gradient-to-b from-lightBrown via-lightBrown to-[#F6F7F0]`}
            >
              <div className="w-full space-y-6">
                <div className="w-full flex justify-end p-4">
                  <button onClick={() => setShowSide(false)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-8 w-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="w-full flex flex-col justify-center items-start px-6 gap-8 text-xl">
                  <Link href={"/#main"}>
                    <button
                      onClick={() => handleMenu(setHome, true, true)}
                      className={`${
                        home ? "underline underline-offset-4" : ""
                      } uppercase`}
                    >
                      Inicio
                    </button>
                  </Link>
                  <Link href={"/#history"}>
                    <button
                      onClick={() => handleMenu(setHistory, true, true)}
                      className={`${
                        historyBg ? "underline underline-offset-4" : ""
                      } uppercase`}
                    >
                      Historia
                    </button>
                  </Link>
                  <Link href={"/#products"}>
                    <button
                      onClick={() => handleMenu(setProducts, true, true)}
                      className={`${
                        products ? "underline underline-offset-4" : ""
                      } uppercase`}
                    >
                      Productos
                    </button>
                  </Link>
                  <Link href={"/#contact"}>
                    <button
                      onClick={() => handleMenu(setContact, true, true)}
                      className={`${
                        contact ? "underline underline-offset-4" : ""
                      } uppercase`}
                    >
                      Contacto
                    </button>
                  </Link>
                  <Link href={"/#news"}>
                    <button
                      onClick={() => handleMenu(setNews, true, true)}
                      className={`${
                        news ? "underline underline-offset-4" : ""
                      } uppercase`}
                    >
                      Noticias
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.nav>
    </AnimatePresence>
  );
};

export default Navbar;
