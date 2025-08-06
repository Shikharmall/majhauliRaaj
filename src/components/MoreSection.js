"use client";

import LanguageContext from "@/context/languageContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { motion } from "framer-motion";

export default function MoreSection() {
  const { language } = useContext(LanguageContext);

  const items = [
    {
      icon: <i className="fa-solid fa-location-dot text-3xl text-blue-600"></i>,
      title: "Majhauli Estate",
      titleHindi: "मझौली राज",
      description: "Raja Vishwa Sen",
      descriptionHindi: "राजा विश्वसेन",
      src: "/assets/img/royalFlagC.png",
      href: "estates/majhauliEstate",
    },
    {
      icon: <i className="fa-solid fa-location-dot text-3xl text-blue-600"></i>,
      title: "Kalakankar Estate",
      titleHindi: "कालाकंकर रियासत",
      description: "Raja Hom Mall",
      descriptionHindi: "राजा होम मल",
      src: "/assets/img/royalFlagC.png",
      href: "estates/kalakankarEstate",
    },
    {
      icon: <i className="fa-solid fa-location-dot text-3xl text-blue-600"></i>,
      title: "Bhadri Estate",
      titleHindi: "भदरी रियासत",
      description: "Rai Sabal Shah",
      descriptionHindi: "राय सबल शाह",
      src: "/assets/img/royalFlagC.png",
      href: "estates/bhadriEstate",
    },
    {
      icon: <i className="fa-solid fa-location-dot text-3xl text-blue-600"></i>,
      title: "Gonda Estate",
      titleHindi: "गोंडा रियासत",
      description: "Raja Pratap Mall",
      descriptionHindi: "राजा प्रताप मल",
      src: "/assets/img/gonda/gonda_coa.png",
      href: "estates/gondaEstate",
    },
    {
      icon: <i className="fa-solid fa-location-dot text-3xl text-blue-600"></i>,
      title: "Mankapur Estate",
      titleHindi: "मनकापुर रियासत",
      description: "Raja Ajmat Singhji",
      descriptionHindi: "राजा अजमत सिंहजी",
      src: "/assets/img/mankapur/mankapur_coa.png",
      href: "estates/mankapurEstate",
    },
    {
      icon: <i className="fa-solid fa-location-dot text-3xl text-blue-600"></i>,
      title: "Bhinga Estate",
      titleHindi: "भिंगा रियासत",
      description: "Raja Bhawani Singh",
      descriptionHindi: "राजा भवानी सिंह",
      src: "/assets/img/bhinga/bhinga_coa.png",
      href: "/estates/bhingaEstate",
    },
    {
      icon: <i className="fa-solid fa-location-dot text-3xl text-blue-600"></i>,
      title: "Madhuban Estate",
      titleHindi: "मधुबन रियासत",
      description: "Raja Madhav Mall",
      descriptionHindi: "राजा माधव मल",
      src: "/assets/img/royalFlagC.png",
      href: "estates/madhubanEstate",
    },
    {
      icon: <i className="fa-solid fa-location-dot text-3xl text-blue-600"></i>,
      title: "Narharpur Estate",
      titleHindi: "नरहरपुर रियासत",
      description: "Raja Rai Mall",
      descriptionHindi: "राजा राय मल",
      src: "/assets/img/royalFlagC.png",
      href: "estates/narharpurEstate",
    },
    {
      icon: <i className="fa-solid fa-location-dot text-3xl text-blue-600"></i>,
      title: "Dumaria Zamindari",
      titleHindi: "डुमरिया ज़मींदारी",
      description: "Jagat Bahadur Shahi",
      descriptionHindi: "जगत बहादुर शाही",
      src: "/assets/img/royalFlagC.png",
      href: "/estates/dumariaEstate",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-center text-3xl md:text-4xl mb-12 font-serif"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {language === "english" ? (
            <>
              Explore our <strong className="text-[#f47217]">Royal</strong>{" "}
              Legacy
            </>
          ) : (
            <>
              हमारी <strong className="text-[#f47217]">शाही</strong> विरासत का
              परिचय
            </>
          )}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-3 justify-items-center items-center gap-4"
        >
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.8 + idx * 0.1,
                // type: "spring",
                // stiffness: 300,
              }}
              // whileHover={{ scale: 1.05 }}
              // transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={item.href}
                className="flex flex-col items-center text-center transition p-3 rounded-xl w-50 h-50 m-1"
              >
                <Image
                  src={item.src}
                  alt="flag"
                  width={100}
                  height={100}
                  className="w-24 h-24 object-contain"
                />
                <div className="name mt-2">
                  <h1 className="text-lg font-serif">
                    {language === "english" ? item?.title : item?.titleHindi}
                  </h1>
                  <p className="text-gray-600 mt-1 text-sm">
                    {language === "english"
                      ? item?.description
                      : item?.descriptionHindi}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
