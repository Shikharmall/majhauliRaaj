"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import Banner from "../Banner";
import FamilyTreeStructure from "../FamilyTreeStructure";
import LanguageContext from "@/context/languageContext";
import ImageModal from "../ImageModel";
import myLoader from "../../utils/myLoader";
import {
  bhingaFamilyData,
  bhingaFamilyDataHindi,
} from "@/data/bhingaFamilyData";

export default function BhingaEstateDetails() {
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
        title={language === "english" ? "Bhinga Estate" : "भिंगा रियासत"}
      />

      {/* Main Content */}
      <main className="container mx-auto px-5 md:px-20 py-5 md:py-10">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Image */}
          <div className="md:col-span-1 ">
            <Image
              src="/assets/img/bhinga/bhinga1.jpg"
              alt="majhauli-img"
              width={600}
              height={400}
              loader={myLoader}
              className="rounded-lg shadow-lg border-3 border-gray-300 cursor-pointer"
              onClick={() =>
                openModal({
                  url: "/assets/img/bhinga/bhinga1.jpg",
                  estate: "Fort of Bhinga Estate",
                  estateHindi: "भिंगा रियासत का किला",
                })
              }
            />
            <div className="flex items-center justify-center">
              <h2>
                {language === "english"
                  ? "Fort of Bhinga Estate"
                  : "भिंगा रियासत का किला"}
              </h2>
            </div>
            <br />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14129.781230779357!2d81.92524194743521!3d27.703534016951988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399834b862bee2d1%3A0x86869b712e431d80!2sBhinga%2C%20Uttar%20Pradesh%20271831!5e0!3m2!1sen!2sin!4v1753388737057!5m2!1sen!2sin"
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
                The Taluqa originally belonged to the
                <strong> Janwar Rajputs</strong>, being founded by a cadet of
                Ikauna. <strong>Lalit Singh Janwar</strong>, about the end of
                the 17th century found himself hard pressed by the lawless
                Banjaras of the forest and called in his brother-in-law,
                <strong> Kunwar Bhawani Singh</strong> (second son of Raja Ram
                Singh of Gonda), who expelled the insurgents and took possession
                of the estate.
              </p>
              <p className="font-serif"></p>
              <p className="font-serif"></p>
            </div>
          ) : (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
              <p className="font-serif">
                तालुका मूल रूप से <strong>जनवर राजपूतों</strong> का था, जिसकी
                स्थापना इकौना के एक छोटे वंशज ने की थी।
                <strong> ललित सिंह जनवर</strong>, 17वीं शताब्दी के अंत में, जंगल
                के विध्वंसकारी बंजारों से बहुत परेशान हो गए थे और उन्होंने अपने
                बहनोई,
                <strong> कुंवर भवानी सिंह</strong> (गोंडा के राजा राम सिंह के
                दूसरे पुत्र) को बुलाया, जिन्होंने विद्रोहियों को खदेड़ दिया और
                सम्पत्ति पर अधिकार कर लिया।
              </p>
              <p className="font-serif"></p>
              <p className="font-serif"></p>
            </div>
          )}
        </div>

        <FamilyTreeStructure
          familyData={
            language === "english" ? bhingaFamilyData : bhingaFamilyDataHindi
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
