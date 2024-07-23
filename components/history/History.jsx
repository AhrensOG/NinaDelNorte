import { GreatVibesFont } from "@/fonts";
import Image from "next/image";
import React from "react";

const History = () => {
  return (
    <div id="history" className="pt-[108px] sm:pt-[146px] w-full md:h-screen">
      <div className=" grid place-items-center w-full h-full bg-[url('/LeafBgImage.svg')] bg-bottom bg-cover pb-20">
        <div className="max-w-screen-lg w-full h-full p-2 grid place-items-center sm:flex sm:flex-row-reverse sm:justify-center sm:items-center gap-4">
          <div className="flex flex-col justify-center items-center gap-1">
            <h2
              className={`${GreatVibesFont.className} text-5xl text-white sm:text-start text-center w-full`}
            >
              Historia
            </h2>
            <p className="text-sm text-justify text-white font-light max-w-[375px] sm:max-w-none md:text-base lg:text-lg">
              En el norte de Argentina, en la localidad de Colonia Benítez,
              provincia de Chaco, nació en el año 2018 “Nina del Norte Alfajores
              Artesanales”. <br />
              <br />
              <strong>¿Por qué Nina del Norte?</strong> <br />
              <br />
              En memoria de mi querida abuela italiana, quien me transmitió recetas de 
              generaciones para fusionar y preparar los alfajores con productos regionales 
              de nuestro entorno natural, en especial del Impenetrable Chaqueño, así como 
              también ofrecer la mejor calidad en sabores variados con infinidad de 
              propiedades y beneficios: harina de algarroba, guayaba, mango, vino, café y otras regiones.
              .<br />
              <br />
              Como emprendedora y madre de tres hermosos hijos, busco junto a mi equipo
               perfeccionarnos y crear nuevos productos que disfruten las familias del mundo.
                Soy Marisel Torres y estamos a disposición para crear y hacer de los alfajores 
                más que un producto delicioso.
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
