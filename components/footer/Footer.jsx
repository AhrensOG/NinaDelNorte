import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-lightBrown flex flex-col-reverse sm:flex-row  justify-between items-center p-4 gap-8">
      <span className="text-white text-sm text-center block sm:hidden">
        2024 ALFAJORES NINA -Todos los derechos reservados
      </span>
      <div className="grid grid-cols-2 grid-rows-3 place-items-center gap-x-10 gap-y-2 max-w-[340px]">
        <Image
          src={"/LogoSenora.svg"}
          width={60}
          height={60}
          alt="LogoSeñora"
        />
        <Image
          src={"/LogoBienal.svg"}
          width={60}
          height={60}
          alt="LogoBienal"
        />
        <Image
          src={"/LogoCamara.svg"}
          width={60}
          height={60}
          alt="LogoCamara"
        />
        <Image
          src={"/LogoPuesto.svg"}
          width={60}
          height={60}
          alt="LogoPuesto"
        />
        <Image
          src={"/LogoCocina.svg"}
          width={60}
          height={60}
          alt="LogoCocina"
        />
        <div className="flex justify-center items-center gap-1">
          <Image
            src={"/MiniArgFlag.svg"}
            width={40}
            height={40}
            alt="Argentina Flag"
          />
          <span className="text-xs">
            Industria <br /> Argentina
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 max-w-[340px]">
        <Image src={"/SecondaryLogo.svg"} width={150} height={200} alt="Logo" />
        <div className="flex justify-center items-center gap-4">
          <span className="text-2xl ">Seguinos en</span>
          <Link
            href={
              "https://www.instagram.com/ninadelnortealfajores?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            }
            target="_blank"
          >
            <Image
              src={"/InstagramIcon.svg"}
              width={50}
              height={50}
              alt="Logo"
            />
          </Link>
        </div>
        <span className="text-white text-sm text-center hidden sm:block">
          2024 ALFAJORES NINA -Todos los derechos reservados
        </span>
      </div>
      <div className="flex flex-col justify-center items-start gap-4 max-w-[340px]">
        <h5 className="text-xl font-medium text-center sm:text-start w-full">
          Contacto
        </h5>
        <div className="flex jus items-center gap-2">
          <Image src={"/PhoneIcon.svg"} width={36} height={36} alt="Logo" />
          <span className="text-lg font-medium">+5493624877158</span>
        </div>
        <div className="flex jus items-center gap-2">
          <Image src={"/EmailIcon.svg"} width={36} height={36} alt="Logo" />
          <span className="text-lg font-medium break-all">ninaalfajores@gmail.com</span>
        </div>
        <div className="flex jus items-center gap-2">
          <Image src={"/LocationIcon.svg"} width={36} height={36} alt="Logo" />
          <span className="text-lg font-medium">
            Chacra 109 / PC 50 - Colonia Benitez <br /> Chaco 3505
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
