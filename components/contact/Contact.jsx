import { GreatVibesFont } from "@/fonts";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import Image from "next/image";
import React, { useState } from "react";
import { Toaster, toast } from "sonner";
import Footer from "../footer/Footer";

const SERVICE = process.env.NEXT_PUBLIC_SERVICE;
const TEMPLATE = process.env.NEXT_PUBLIC_TEMPLATE;
const USER = process.env.NEXT_PUBLIC_USER;

const Contact = () => {
  const [userType, setUserType] = useState("");
  const [showSelect, setShowSelect] = useState(false);
  const initialValues = {
    name: "",
    type: "",
    phone: "",
    email: "",
    message: "",
  };

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: (values) => {
      if (
        values.name === "" ||
        values.type === "" ||
        values.phone === "" ||
        values.email === "" ||
        values.message === ""
      ) {
        return toast.info("¡Recuerda completar todos los campos!");
      } else {
        emailjs.send(SERVICE, TEMPLATE, values, USER).then(
          (result) => {
            setUserType(false);
            toast.success("¡Nos pondremos en contacto muy pronto!");
            document.getElementById("form").reset();
          },
          (error) => {
            toast.error("¡Ops! Ocurrio un error. Intenta mas tarte");
          }
        );
      }
    },
  });

  const handleSelectChange = (value) => {
    setShowSelect(false);
    setUserType(value);
    formik.setFieldValue("type", value);
  };

  return (
    <div id="contact" className="pt-[108px] sm:pt-[146px] w-full h-full">
      <Toaster
        richColors
        duration={3000}
        position="bottom-right"
        className="absolute"
      />
      {/* <div className="grid sm:hidden place-items-center w-full pt-10">
        <div className="w-full h-full px-2 grid place-items-center gap-12">
          <div className="space-y-6">
            <h2
              className={`${GreatVibesFont.className} text-4xl sm:text-6xl text-center font-medium text-lightBrown drop-shadow-md`}
            >
              Contactanos
            </h2>
          </div>

          <div className="w-full grid place-items-center bg-[url('/LeafBgImage.svg')] bg-top">
            <div className="max-w-screen-lg w-full grid place-items-center">
              <div className="max-w-screen-sm w-full flex flex-col justify-center items-center gap-4 relative sm:pb-10 pb-4">
                <form
                  id="form"
                  onSubmit={formik.handleSubmit}
                  className="w-full max-w-[350px] min-w-[304px] flex flex-col justify-center items-center gap-2"
                >
                  <input
                    type="text"
                    name="name"
                    onChange={formik.handleChange}
                    className="w-full py-1 px-2 border border-lightBrown rounded-lg outline-none text-lg bg-lightGray shadow-lg"
                    placeholder="Nombre y Apellido"
                  />
                  <select
                    name="type"
                    onChange={handleSelectChange}
                    className="w-full py-1 px-2 border border-lightBrown rounded-lg outline-none text-lg bg-lightGray shadow-lg"
                  >
                    <option value="" disabled selected>
                      Seleccione tipo de usuario
                    </option>
                    <option value="Revendedor">Revendedor</option>
                    <option value="Mayorista">Mayorista</option>
                  </select>
                  <input
                    type="number"
                    name="phone"
                    onChange={formik.handleChange}
                    className="w-full py-1 px-2 border border-lightBrown rounded-lg outline-none text-lg bg-lightGray shadow-lg [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    placeholder="Teléfono"
                  />
                  <input
                    type="email"
                    name="email"
                    onChange={formik.handleChange}
                    className="w-full py-1 px-2 border border-lightBrown rounded-lg outline-none text-lg bg-lightGray shadow-lg"
                    placeholder="E-mail"
                  />
                  <textarea
                    type="text"
                    name="message"
                    onChange={formik.handleChange}
                    rows={4}
                    className="w-full py-1 px-2 border border-lightBrown rounded-lg outline-none text-lg bg-lightGray shadow-lg resize-none"
                    placeholder="Mensaje"
                  />
                  <button
                    type="submit"
                    className="uppercase text-lg border border-lightBrown w-full py-1 px-2 rounded-lg bg-lightGray"
                  >
                    Enviar
                  </button>
                </form>
                <Image
                  src={"/TucanAlfajorImage.svg"}
                  width={100}
                  height={124}
                  alt="TucanAlfajorImage"
                  className="sm:hidden"
                />
                <Image
                  src={"/TucanAlfajorImage.svg"}
                  width={100}
                  height={124}
                  alt="TucanAlfajorImage"
                  className="hidden sm:block sm:absolute bottom-10 right-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="grid place-items-center w-full pt-10">
        <div className="w-full h-full px-2 grid place-items-center gap-12">
          <div className="space-y-6">
            <h2
              className={`${GreatVibesFont.className} text-4xl sm:text-6xl text-center font-medium text-lightBrown drop-shadow-md`}
            >
              Contactanos
            </h2>
          </div>

          <div className="w-full grid place-items-center bg-[url('/LeafBgImage.svg')] bg-top">
            <div className="max-w-screen-lg w-full grid place-items-center">
              <div className="max-w-screen-sm w-full flex flex-col justify-center items-center gap-4 relative sm:pb-10 pb-4">
                <form
                  id="form"
                  onSubmit={formik.handleSubmit}
                  className="w-full max-w-[350px] min-w-[304px] flex flex-col justify-center items-center gap-2"
                >
                  <input
                    type="text"
                    name="name"
                    onChange={formik.handleChange}
                    className="w-full py-1 px-2 sm:py-2 border border-lightBrown rounded-lg outline-none text-lg bg-lightGray shadow-lg"
                    placeholder="Nombre y Apellido"
                  />
                  <div className="w-full gap-2 flex flex-row justify-center items-center">
                    <input
                      type="number"
                      name="phone"
                      onChange={formik.handleChange}
                      className="w-full py-1 px-2 sm:py-2 border border-lightBrown rounded-lg outline-none text-lg bg-lightGray shadow-lg [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      placeholder="Teléfono"
                    />
                    <input
                      type="email"
                      name="email"
                      onChange={formik.handleChange}
                      className="w-full py-1 px-2 sm:py-2 border border-lightBrown rounded-lg outline-none text-lg bg-lightGray shadow-lg"
                      placeholder="E-mail"
                    />
                  </div>
                  <div className="w-full relative">
                    <span
                      onClick={() => setShowSelect(!showSelect)}
                      className={`${
                        showSelect ? "rounded-b-none" : ""
                      } w-full cursor-pointer py-1 px-2 sm:py-2 border border-lightBrown rounded-lg outline-none text-lg bg-lightGray shadow-lg text-black/40 font-medium flex justify-between items-center`}
                    >
                      {userType || "Seleccione el tipo de usuario"}
                      {showSelect ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="size-6 text-lightBrown"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 15.75 7.5-7.5 7.5 7.5"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="size-6 text-lightBrown"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      )}
                    </span>
                    {showSelect && (
                      <div className="bg-lightGray flex flex-col justify-center items-start py-1 px-2 sm:py-2 border border-t-0 border-lightBrown rounded-lg rounded-t-none text-lg shadow-lg text-black/40 font-medium absolute w-full">
                        <span
                          onClick={() => handleSelectChange("Revendedor")}
                          className="cursor-pointer hover:text-lightBrown duration-500"
                        >
                          Revendedor
                        </span>
                        <span
                          onClick={() => handleSelectChange("Mayorista")}
                          className="cursor-pointer hover:text-lightBrown duration-500"
                        >
                          Mayorista
                        </span>
                      </div>
                    )}
                  </div>
                  <textarea
                    type="text"
                    name="message"
                    onChange={formik.handleChange}
                    rows={4}
                    className="w-full py-1 px-2 sm:py-2 border border-lightBrown rounded-lg outline-none text-lg bg-lightGray shadow-lg resize-none"
                    placeholder="Mensaje"
                  />
                  <button
                    type="submit"
                    className="uppercase text-lg border border-lightBrown w-full py-1 px-2 sm:py-2 rounded-lg bg-lightGray"
                  >
                    Enviar
                  </button>
                </form>
                <Image
                  src={"/TucanAlfajorImage.svg"}
                  width={100}
                  height={124}
                  alt="TucanAlfajorImage"
                  className="sm:hidden"
                />
                <Image
                  src={"/TucanAlfajorImage.svg"}
                  width={120}
                  height={124}
                  alt="TucanAlfajorImage"
                  className="hidden sm:block sm:absolute bottom-10 right-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
