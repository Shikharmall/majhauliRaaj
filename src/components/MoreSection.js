// components/WelcomeSection.tsx
"use client";

import Image from "next/image";
import { useEffect } from "react";
export default function MoreSection() {
  const items = [
    {
      icon: <i className="fa-solid fa-location-dot text-3xl text-blue-600"></i>,
      title: "Majhauli Estate",
      description: "Raja Vishwa Sen",
      src: "/assets/img/royalFlagC.png",
      href: "#",
    },
    {
      icon: <i className="fa-solid fa-location-dot text-3xl text-blue-600"></i>,
      title: "Kalakankar Estate",
      description: "Raja Roop Mall",
      src: "/assets/img/royalFlagC.png",
      href: "#",
    },
    {
      icon: <i className="fa-solid fa-location-dot text-3xl text-blue-600"></i>,
      title: "Badri Estate",
      description: "Rai Sabal Shah",
      src: "/assets/img/royalFlagC.png",
      href: "#",
    },
    {
      icon: <i className="fa-solid fa-location-dot text-3xl text-blue-600"></i>,
      title: "Gonda Estate",
      description: "Organizations run by me",
      src: "/assets/img/gonda_coa.png",
      href: "#",
    },
    {
      icon: <i className="fa-solid fa-location-dot text-3xl text-blue-600"></i>,
      title: "Narharpur Estate",
      description: "Raja Rai Mall",
      src: "/assets/img/royalFlagC.png",
      href: "#",
    },
    {
      icon: <i className="fa-solid fa-location-dot text-3xl text-blue-600"></i>,
      title: "Madhuban Estate",
      description: "Raja Madhav Mall",
      src: "/assets/img/royalFlagC.png",
      href: "/madhubanEstate",
    },
    {
      icon: <i className="fa-solid fa-location-dot text-3xl text-blue-600"></i>,
      title: "Mankapur Estate",
      description: "Raja Madhav Mall",
      src: "/assets/img/mankapur_coa.png",
      href: "#",
    },
    {
      icon: <i className="fa-solid fa-location-dot text-3xl text-blue-600"></i>,
      title: "Bhinga Estate",
      description: "Raja Madhav Mall",
      src: "/assets/img/bhinga_coa.png",
      href: "#",
    },
    {
      icon: <i className="fa-solid fa-location-dot text-3xl text-blue-600"></i>,
      title: "Dumaria Estate",
      description: "Raja Madhav Mall",
      src: "/assets/img/royalFlagC.png",
      href: "#",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className="text-center text-3xl md:text-4xl mb-12 font-serif"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Welcome to <strong className="text-[#f47217]">Our</strong> Estates
        </h2>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-red-500 justify-items-center items-center" //gap-6
        >
          {items.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="flex flex-col items-center text-center transition p-3 rounded-xl w-50 h-50 bg-white m-1" //bg-gray-100 hover:bg-blue-50 shadow
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              {/* <div className="text-blue-600 mb-4">{item.icon}</div> */}
              <Image
                src={item.src}
                alt="flag"
                width={100}
                height={100}
                //className="w-full h-full" //rounded-full p-3 shadow-lg border-3 border-gray-300
              />
              <div className="name">
                <h1 className="text-xl font-serif">{item.title}</h1>
                <p className="text-gray-600 mt-1 text-sm">{item.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
