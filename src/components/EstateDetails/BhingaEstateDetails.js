"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import Banner from "../Banner";
import FamilyTreeStructure from "../FamilyTreeStructure";
import LanguageContext from "@/context/languageContext";
import ImageModal from "../ImageModel";
import myLoader from "../../utils/myLoader";

const familyData = {
  name: "Raja BHAWANI SINGH (1)",
  isExtra: "(II'nd son of Raja Ram Singh of Gonda)",
  isKing: true,
  children: [
    {
      name: "Raja SARV DAMAN SINGH (2)",
      isKing: true,
      children: [
        {
          name: "Raja SHEO SINGH (3)",
          isKing: true,
          children: [
            {
              name: "Raja JAGAT SINGH (4)",
              isKing: true,
              children: [
                {
                  name: "Raja SARABJIT SINGH (5)",
                  isKing: true,
                  children: [
                    {
                      name: "Raja KRISHNA DUTT SINGH (6)",
                      isKing: true,
                      children: [
                        {
                          name: "Raja Saheb Udai Pratap Singh (7)",
                          isKing: true,
                          children: [
                            {
                              name: "Kunwar Surendra Bikram Singh",
                            },
                            {
                              name: "Raja Saheb Rajendra Bahadur Singh (8)",
                              isKing: true,
                              children: [
                                {
                                  name: "Raja Saheb Virendra Kant Singh (9)",
                                  isKing: true,
                                  children: [
                                    {
                                      name: "Yuvaraj Alekshandra Kant Singh",
                                      children: [
                                        {
                                          name: "Raja Saheb Chandra Mani Kant Singh (10)",
                                          isKing: true,
                                          children: [
                                            {
                                              name: "Rajkumari Gayatri Kumari",
                                            },
                                            {
                                              name: "Raja Saheb RUDRAMANI KANT SINGH (11)",
                                              isKing: true,
                                            },
                                            {
                                              name: "Rajkumar Alekshandra Singh",
                                            },
                                            {
                                              name: "Rajkumar Marighnamani Kant Singh",
                                            },
                                          ],
                                        },
                                        { name: "Rani Bhuratna Prabha Kumari" },
                                      ],
                                    },
                                    {
                                      name: "Kunwar Chamendra Kant Singh",
                                    },
                                  ],
                                },
                                {
                                  name: "Rajkumar Yogendra Kant Singh",
                                  children: [
                                    {
                                      name: "Kunwar Yopendra Kant Singh",
                                    },
                                    {
                                      name: "Kunwar Sataindra Kant Singh",
                                    },
                                  ],
                                },
                                {
                                  name: "Rajkumar Jayendra Singh of Lachmanpur",
                                  children: [],
                                },
                              ],
                            },
                            {
                              name: "Kunwar Man Mahendra Bikram Singh",
                              children: [
                                {
                                  name: "Maharani Brijraj Kunwar",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: "Kumari (name unknown)",
                          isExtra: "(Rani Sahiba of Malhajini)",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const familyDataHindi = {
  name: "राजा भवानि सिंह (1)",
  isExtra: "(गोंडा के राजा राम सिंह के द्वितीय पुत्र)",
  isKing: true,
  children: [
    {
      name: "राजा सर्वदमन सिंह (2)",
      isKing: true,
      children: [
        {
          name: "राजा शिव सिंह (3)",
          isKing: true,
          children: [
            {
              name: "राजा जगत सिंह (4)",
              isKing: true,
              children: [
                {
                  name: "राजा सरबजीत सिंह (5)",
                  isKing: true,
                  children: [
                    {
                      name: "राजा कृष्णदत्त सिंह (6)",
                      isKing: true,
                      children: [
                        {
                          name: "राजा साहब उदय प्रताप सिंह (7)",
                          isKing: true,
                          children: [
                            {
                              name: "कुँवर सुरेन्द्र विक्रम सिंह",
                            },
                            {
                              name: "राजा साहब राजेन्द्र बहादुर सिंह (8)",
                              isKing: true,
                              children: [
                                {
                                  name: "राजा साहब वीरेंद्र कांत सिंह (9)",
                                  isKing: true,
                                  children: [
                                    {
                                      name: "युवराज अलेक्ज़ेंडर कांत सिंह",
                                      children: [
                                        {
                                          name: "राजा साहब चंद्रमणि कांत सिंह (10)",
                                          isKing: true,
                                          children: [
                                            {
                                              name: "राजकुमारी गायत्री कुमारी",
                                            },
                                            {
                                              name: "राजा साहब रुद्रमणि कांत सिंह (11)",
                                              isKing: true,
                                            },
                                            {
                                              name: "राजकुमार अलेक्ज़ेंडर सिंह",
                                            },
                                            {
                                              name: "राजकुमार मारीघ्नमणि कांत सिंह",
                                            },
                                          ],
                                        },
                                        {
                                          name: "रानी भूरत्न प्रभा कुमारी",
                                        },
                                      ],
                                    },
                                    {
                                      name: "कुँवर चमेंद्र कांत सिंह",
                                    },
                                  ],
                                },
                                {
                                  name: "राजकुमार योगेन्द्र कांत सिंह",
                                  children: [
                                    {
                                      name: "कुँवर योपेन्द्र कांत सिंह",
                                    },
                                    {
                                      name: "कुँवर सतैन्द्र कांत सिंह",
                                    },
                                  ],
                                },
                                {
                                  name: "राजकुमार जयेंद्र सिंह (लछमनपुर)",
                                  children: [],
                                },
                              ],
                            },
                            {
                              name: "कुँवर मन महेन्द्र विक्रम सिंह",
                              children: [
                                {
                                  name: "महारानी बृजराज कँवर",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: "कुमारी (नाम अज्ञात)",
                          isExtra: "(रानी साहिबा मल्हाजिनी)",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

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
