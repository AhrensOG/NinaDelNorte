import { GreatVibesFont } from "@/fonts";
import Image from "next/image";
import React from "react";

const History = () => {
  return (
    <div className="pt-[108px] sm:pt-[146px] w-full h-screen overflow-y-auto">
      <div className=" grid place-items-center w-full h-full bg-[url('/LeafBgImage.svg')] bg-bottom bg-cover pb-20">
        <div className="max-w-screen-lg w-full h-full p-2 grid place-items-center sm:flex sm:flex-row-reverse sm:justify-center sm:items-center gap-4">
          <div className="flex flex-col justify-center items-center gap-1">
            <h2
              className={`${GreatVibesFont.className} text-4xl text-white sm:text-start text-center w-full`}
            >
              Historia
            </h2>
            <p className="text-xs text-justify text-white font-light max-w-[375px] sm:max-w-none md:text-base lg:text-lg">
              En argentina, se encuentra la localidad de Colonia Benítez, en la
              provincia de Chaco, es donde vio nacer mi emprendimiento. Soy
              Marisel Torres y comencé en el rubro de la pastelería hace unos
              años por necesidad, Una vez dentro del rubro, descubrí mi amor por
              esta actividad. Así, me perfeccioné y me especialicé en la
              materia. <br /> <br /> En el año 2018, comencé con la elaboración
              de mi propia línea de alfajores, bautizada Nina en homenaje a mi
              abuela paterna, Incorporé en ellos sabores poco convencionales,
              utilizando productos locales para sus particulares rellenos.
            </p>
          </div>

          <Image
            src={"/HistoryImage.svg"}
            width={375}
            height={324}
            alt="Alfajor Nina Del Norte"
          />
        </div>
      </div>
    </div>
  );
};

export default History;
