"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import Banner from "../Banner";
import FamilyTreeStructure from "../FamilyTreeStructure";
import LanguageContext from "@/context/languageContext";
import ImageModal from "../ImageModel";

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
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (src) => {
    setSelectedImage(src);
    setModalOpen(true);
  };

  return (
    <div>
      <Banner
        title={language === "english" ? "Narharpur Estate" : "नरहरपुर रियासत"}
      />

      {/* Main Content */}
      <main className="container mx-auto px-5 md:px-20 py-5 md:py-10">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Image */}
          <div className="md:col-span-1">
            <Image
              src="/assets/img/narharpur/narharpur4.png"
              alt="Narharpur Estate"
              width={600}
              height={400}
              className="rounded-lg shadow-lg border-3 border-gray-300 cursor-pointer"
              onClick={() =>
                openModal({
                  url: "/assets/img/narharpur/narharpur4.png",
                  estate: "Ruins of Raja Narharpur's Haveli",
                  estateHindi: "राजा नरहरपुर की हवेली के अवशेष",
                })
              }
            />
            <div className="flex items-center justify-center mt-2">
              <h2>
                {language === "english"
                  ? "Ruins of Raja Narharpur's Haveli"
                  : "राजा नरहरपुर की हवेली के अवशेष"}{" "}
              </h2>
            </div>
            <br />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20235.785202233685!2d83.50170764273523!3d26.28712166670223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39917f0059e3646d%3A0xb834233bb298d5c4!2sVillage%20narharpur!5e0!3m2!1sen!2sin!4v1753365164437!5m2!1sen!2sin"
              width="100%"
              height="300"
              className="w-full rounded-md border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Bio */}
          {language === "english" ? (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed font-serif">
              <p>
                Narharpur Estate, also known as Chillupar State, was a
                historical princely estate located near the Sarayu River in
                present-day Gorakhpur region of Uttar Pradesh. It was ruled by
                Raja Hariprasad Mall, a valiant freedom fighter who played a
                significant role in the 1857 War of Independence. Raja
                Hariprasad Mall resisted British colonial forces by capturing
                army rations and weapons, and allied with revolutionary leaders
                like Babu Kunwar Singh and Bandhu Singh. In retaliation, the
                British bombarded the Narharpur fort with cannons from across
                the Sarayu, leading to its destruction and the martyrdom of
                Hariprasad Mall along with thousands of his followers. Unlike
                neighboring estates that surrendered, Narharpur chose resistance
                and sacrifice. Though his legacy is still remembered
                locally—especially through the establishment of a martyr&apos;s
                memorial at the site—formal recognition of the estate&apos;s
                ruins and its significance in India&apos;s freedom struggle
                remains limited.
              </p>
              <p></p>
              <p></p>
            </div>
          ) : (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed font-serif">
              <p>
                नरहरपुर एस्टेट, जिसे छिल्लूपार राज्य भी कहा जाता है, एक ऐतिहासिक
                रियासत थी जो वर्तमान उत्तर प्रदेश के गोरखपुर क्षेत्र में सरयू
                नदी के किनारे स्थित थी। इसके शासक राजा हरिप्रसाद मल्ल थे, जो
                1857 की स्वतंत्रता संग्राम में एक वीर स्वतंत्रता सेनानी के रूप
                में प्रसिद्ध हुए। उन्होंने ब्रिटिश सेना के राशन और हथियारों को
                जब्त कर अंग्रेजों के विरुद्ध विद्रोह किया और बाबू कुंवर सिंह तथा
                बंधु सिंह जैसे क्रांतिकारियों के साथ मिलकर संघर्ष में भाग लिया।
                इस विद्रोह के प्रतिशोध में अंग्रेजों ने सरयू नदी के पार से
                नरहरपुर किले पर तोपों से हमला कर दिया, जिससे किला ध्वस्त हो गया
                और राजा हरिप्रसाद मल्ल अपने हजारों अनुयायियों सहित वीरगति को
                प्राप्त हुए। जहां आसपास की रियासतों ने अंग्रेजों के सामने
                आत्मसमर्पण कर दिया, वहीं नरहरपुर ने विद्रोह और बलिदान का मार्ग
                चुना। आज भी स्थानीय स्तर पर उनकी स्मृति जीवित है और बलिदानी स्थल
                पर एक शहीद स्मारक स्थापित किया गया है, लेकिन इस एस्टेट के
                खंडहरों और उसके ऐतिहासिक योगदान को अब तक औपचारिक मान्यता नहीं
                मिल पाई है।
              </p>
              <p></p>
              <p></p>
            </div>
          )}
        </div>

        <FamilyTreeStructure
          familyData={language === "english" ? familyData : familyDataHindi}
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
