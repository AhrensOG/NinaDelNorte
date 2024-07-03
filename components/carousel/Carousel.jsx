import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Carousel = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div id="contact" className="py-20 w-full flex justify-center">
      <div className="w-full max-w-screen-lg flex justify-center">
        <Slider {...settings} className="mx-[-75px] w-full">
          <div className="px-[75px]">
            <div className="mx-auto">
              <Image
                src="/image_logo 1.svg"
                alt="Imagen 1"
                width={150}
                height={150}
                className="mx-auto"
              />
            </div>
          </div>
          <div className="px-[75px]">
            <div className="mx-auto">
              <Image
                src="/image_logo 2.svg"
                alt="Imagen 2"
                width={150}
                height={150}
                className="mx-auto"
              />
            </div>
          </div>
          <div className="px-[75px]">
            <div className="mx-auto">
              <Image
                src="/image_logo 3.svg"
                alt="Imagen 3"
                width={150}
                height={150}
                className="mx-auto"
              />
            </div>
          </div>
          <div className="px-[75px]">
            <div className="mx-auto">
              <Image
                src="/image_logo 4.svg"
                alt="Imagen 4"
                width={150}
                height={150}
                className="mx-auto"
              />
            </div>
          </div>
          <div className="px-[75px]">
            <div className="mx-auto">
              <Image
                src="/image_logo 3.svg"
                alt="Imagen 5"
                width={150}
                height={150}
                className="mx-auto"
              />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
