import { GreatVibesFont } from "@/fonts";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import Image from "next/image";
import React from "react";
import { Toaster, toast } from "sonner";
import Footer from "../footer/Footer";

const SERVICE = process.env.NEXT_PUBLIC_SERVICE;
const TEMPLATE = process.env.NEXT_PUBLIC_TEMPLATE;
const USER = process.env.NEXT_PUBLIC_USER;

const Contact = () => {
  const initialValues = {
    name: "",
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
        values.phone === "" ||
        values.email === "" ||
        values.message === ""
      ) {
        return toast.info("¡Recuerda completar todos los campos!");
      } else {
        emailjs.send(SERVICE, TEMPLATE, values, USER).then(
          (result) => {
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

  return (
    <div className="pt-[108px] sm:pt-[146px] w-full h-screen overflow-y-auto">
      <Toaster
        richColors
        duration={3000}
        position="bottom-right"
        className="absolute"
      />
      <div className=" grid place-items-center w-full h-full bg-[url('/LeafBgImage.svg')] bg-bottom bg-cover">
        <div className="max-w-screen-lg w-full h-full p-2 grid place-items-center gap-4">
          <div className="space-y-6">
            <h2
              className={`${GreatVibesFont.className} text-4xl sm:text-6xl text-center font-medium text-lightBrown drop-shadow-md`}
            >
              Contactanos
            </h2>
          </div>

          <div className="max-w-screen-sm w-full flex flex-col justify-center items-center gap-4 relative sm:pb-10">
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
      <Footer />
    </div>
  );
};

export default Contact;
