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
    "/assets/img/majhauliraaj1.png",
    "/assets/img/majhauliraaj3.png",
    "/assets/img/majhauliraaj4.png",
  ];

  return (
    <div className="swiper relative w-full h-[600px] overflow-hidden">
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
