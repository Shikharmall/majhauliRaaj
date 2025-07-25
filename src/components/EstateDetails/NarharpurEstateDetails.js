"use client";
import React, { useContext } from "react";
import Image from "next/image";
import Banner from "../Banner";
import FamilyTreeStructure from "../FamilyTreeStructure";
import LanguageContext from "@/context/languageContext";

const familyData = {
  name: "Raja Rai Mall",
  isKing: true,
  children: [
    {
      name: "",
      isInfinite: true,
      children: [
        {
          name: "Raja Hari Prasad Mall",
          isExtra: "(Martyr - 1857's war)",
          isKing: true,
        },
      ],
    },
  ],
};

const familyDataHindi = {
  name: "राजा राय मल्ल",
  isKing: true,
  children: [
    {
      name: "",
      isInfinite: true,
      children: [
        {
          name: "राजा हरि प्रसाद मल्ल",
          isExtra: "(शहीद - 1857 की क्रांति)",
          isKing: true,
        },
      ],
    },
  ],
};

export default function NarharpurEstateDetails() {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      <Banner
        title={language === "english" ? "Narharpur Estate" : "नरहरपुर रियासत"}
      />

      {/* Main Content */}
      <main className="container mx-auto px-20 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Image */}
          <div className="md:col-span-1 ">
            <Image
              src="/assets/img/narharpur/narharpur4.png"
              alt="majhauli-img"
              width={600}
              height={400}
              className="rounded-lg shadow-lg border-3 border-gray-300"
            />
            <div className="flex items-center justify-center">
              <h2>Ruins of Raja Narharpur's Haveli</h2>
            </div>
            <br />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20235.785202233685!2d83.50170764273523!3d26.28712166670223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39917f0059e3646d%3A0xb834233bb298d5c4!2sVillage%20narharpur!5e0!3m2!1sen!2sin!4v1753365164437!5m2!1sen!2sin"
              width="100%"
              height="300"
              className="w-full rounded-md border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Bio */}
          <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
            <p className="font-serif">
              The founder of the family was Jagat Bahadur Shahi, who was a
              wealthy landlord living in Dumaria with his family, consisting of
              three wives and many daughters, but was still longing for a son
              who could succeed him. One day, another zamindar who originally
              belonged to Gorakhpur in Uttar Pradesh shifted with his family to
              a village called Navendrapur (which is half a km from Dumaria).
              The latter had five sons, the youngest of whom was, Ranadhwaj
              Singh who was adopted by Jagat Bahadur Shahi at a very young age
              but the adoption became legal only after Ranadhwaj turned 18 in
              1921. After being adopted he was named Shattru Mardan Shahi. He
              was single handedly responsible for making Dumaria into what it
              later became. He owned about 5000 acres of land, a considerable
              amount in those times.
            </p>
            <p className="font-serif"></p>
            <p className="font-serif"></p>
          </div>
        </div>

        <FamilyTreeStructure
          familyData={language === "english" ? familyData : familyDataHindi}
        />
      </main>
    </div>
  );
}
