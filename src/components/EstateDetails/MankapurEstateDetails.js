"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import Banner from "../common/Banner";
import FamilyTreeStructure from "../FamilyTreeStructure";
import LanguageContext from "@/context/languageContext";
import ImageModal from "../common/ImageModel";
import {
  mankapurFamilyData,
  mankapurFamilyDataHindi,
} from "@/data/mankapurFamilyData";

export default function MankapurEstateDetails() {
  const { language } = useContext(LanguageContext);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (src) => {
    setSelectedImage(src);
    setModalOpen(true);
  };
  return (
    <div>
      <Banner
        title={language === "english" ? "Mankapur Estate" : "मनकापुर रियासत"}
      />

      {/* Main Content */}
      <main className="container mx-auto px-5 md:px-20 py-5 md:py-10">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Image */}
          <div className="md:col-span-1 ">
            <Image
              src="/assets/img/mankapur/mankapur1.jpg"
              alt="majhauli-img"
              width={600}
              height={400}
              className="rounded-lg shadow-lg border-3 border-gray-300 cursor-pointer"
              onClick={() =>
                openModal({
                  url: "/assets/img/mankapur/mankapur1.jpg",
                  estate: "Gate of Mankapur Fort",
                  estateHindi: "मनकापुर किले का प्रवेश द्वार",
                })
              }
            />
            <div className="flex items-center justify-center">
              <h2>
                {language === "english"
                  ? "Gate of Mankapur Fort"
                  : "मनकापुर किले का प्रवेश द्वार"}{" "}
              </h2>
            </div>
            <br />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23905.538677421067!2d82.20614949333229!3d27.04344762892043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39975619d581012f%3A0x439de32bbf7d69ab!2sMankapur%2C%20Uttar%20Pradesh%20271302!5e0!3m2!1sen!2sin!4v1753365606014!5m2!1sen!2sin"
              width="100%"
              height="300"
              className="w-full rounded-md border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Bio */}
          {language === "english" ? (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
              <p className="font-serif">
                Raja Dutt Singh of Gonda seized the Bandhalgoti rai of Mankapur
                and gave it to his younger son, Kunwar Ajmat Singh who was still
                an infant at the time.
              </p>
              <p className="font-serif"></p>
              <p className="font-serif"></p>
            </div>
          ) : (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
              <p className="font-serif">
                गोंडा के राजा दत्त सिंह ने मनकापुर के बंधालगोटी राय को अपने
                अधिकार में ले लिया और उसे अपने छोटे पुत्र कुंवर अजमत सिंह को दे
                दिया, जो उस समय शिशु अवस्था में थे।
              </p>
              <p className="font-serif"></p>
              <p className="font-serif"></p>
            </div>
          )}
        </div>

        <FamilyTreeStructure
          familyData={
            language === "english"
              ? mankapurFamilyData
              : mankapurFamilyDataHindi
          }
        />
      </main>

      {/* Modal */}
      <ImageModal
        isOpen={isModalOpen}
        imageSrc={selectedImage}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
