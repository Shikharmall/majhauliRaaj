"use client";

import Image from "next/image";
import { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export default function SwiperSlider() {
  useEffect(() => {
    new Swiper(".swiper", {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  const images = [
    "/assets/img/majhauli/majhauliraj3.jpg",
    "/assets/img/majhauli/majhauliraj1.jpg",
    // "/assets/img/map1.png",
    "/assets/img/majhauli/majhauliraj4.jpg",
  ];

  return (
    <div className="swiper relative w-full overflow-hidden md:h-[600px]">
      {" "}
      {/* h-[400px] */}
      <div className="swiper-wrapper">
        {images.map((src, idx) => (
          <div key={idx} className="swiper-slide relative w-full">
            {" "}
            {/* h-[400px] */}
            <Image
              src={src}
              alt={`slide-${idx}`}
              width={1280} // full HD width
              height={600} // adjust height accordingly
              className="w-full h-auto object-cover"
              priority={idx === 0}
            />
          </div>
        ))}
      </div>
      {/* <div className="absolute top-50 left-130 z-1">
        <Image
          src={'/assets/img/majhauli/logo.png'}
          alt="img"
          width={500} // full HD width
          height={60} // adjust height accordingly
          //className="w-full h-auto object-cover"
        />
      </div> */}
      {/* <div className="swiper-pagination absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 " /> */}
      <div className="swiper-button-prev absolute left-2 top-1/2 -translate-y-1/2 z-10" />
      <div className="swiper-button-next absolute right-2 top-1/2 -translate-y-1/2 z-10" />
      <style jsx global>{`
        .swiper-button-next::after,
        .swiper-button-prev::after {
          color: #fff !important;
          background-color: #f47217;
          padding: 10px;
          border-radius: 5px;
          font-size: 25px;
        }
      `}</style>
    </div>
  );
}
