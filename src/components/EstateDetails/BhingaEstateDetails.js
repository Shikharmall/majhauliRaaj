"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import Banner from "../Banner";
import FamilyTreeStructure from "../FamilyTreeStructure";
import LanguageContext from "@/context/languageContext";
import ImageModal from "../ImageModel";

const familyData = {
  name: "Raja BHAWANI SINGH",
  isKing: true,
  children: [
    {
      name: "Raja SARV DAMAN SINGH",
      isKing: true,
      children: [
        {
          name: "Raja SHEO SINGH",
          isKing: true,
          children: [
            {
              name: "Raja JAGAT SINGH",
              isKing: true,
              children: [
                {
                  name: "Raja SARABJIT SINGH",
                  isKing: true,
                  children: [
                    {
                      name: "Raja KRISHNA DUTT SINGH",
                      isKing: true,
                      children: [
                        {
                          name: "Raja Saheb Udai Pratap Singh",
                          isKing: true,
                          children: [
                            {
                              name: "Kunwar Surendra Bikram Singh",
                            },
                            {
                              name: "Raja Saheb Rajendra Bahadur Singh",
                              isKing: true,
                              children: [
                                {
                                  name: "Raja Saheb Virendra Kant Singh",
                                  isKing: true,
                                  children: [
                                    {
                                      name: "Yuvaraj Alekshandra Kant Singh,",
                                      children: [
                                        {
                                          name: "Raja Saheb Chandra Mani Kant Singh",
                                          isKing: true,
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
                          name: "Kumari (name unknown) [Rani Sahiba of Malhajini]",
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
  name: "राजा भवानी सिंह",
  isKing: true,
  children: [
    {
      name: "राजा सर्वदमन सिंह",
      isKing: true,
      children: [
        {
          name: "राजा शिव सिंह",
          isKing: true,
          children: [
            {
              name: "राजा जगत सिंह",
              isKing: true,
              children: [
                {
                  name: "राजा सरबजीत सिंह",
                  isKing: true,
                  children: [
                    {
                      name: "राजा कृष्णदत्त सिंह",
                      isKing: true,
                      children: [
                        {
                          name: "राजा साहब उदय प्रताप सिंह",
                          isKing: true,
                          children: [
                            {
                              name: "कुँवर सुरेन्द्र बिक्रम सिंह",
                            },
                            {
                              name: "राजा साहब राजेन्द्र बहादुर सिंह",
                              isKing: true,
                              children: [
                                {
                                  name: "राजा साहब वीरेन्द्र कांत सिंह",
                                  isKing: true,
                                  children: [
                                    {
                                      name: "युवराज अलेक्ज़ेंडर कांत सिंह",
                                      children: [
                                        {
                                          name: "राजा साहब चन्द्रमणि कांत सिंह",
                                          isKing: true,
                                        },
                                        {
                                          name: "रानी भूरत्ना प्रभा कुमारी",
                                        },
                                      ],
                                    },
                                    {
                                      name: "कुँवर चामेन्द्र कांत सिंह",
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
                                  name: "राजकुमार जयेन्द्र सिंह (लक्ष्मणपुर)",
                                  children: [],
                                },
                              ],
                            },
                            {
                              name: "कुँवर मनमहेंद्र बिक्रम सिंह",
                              children: [
                                {
                                  name: "महारानी बृजराज कँवर",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: "कुमारी (नाम अज्ञात) [रानी साहिबा, मल्हजनी]",
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
                The Taluq was granted to Kunwar Bhawani Singh, second son of
                Raja Ram Singh of Gonda.
              </p>
              <p className="font-serif"></p>
              <p className="font-serif"></p>
            </div>
          ) : (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
              <p className="font-serif">
                यह तालुका राजा राम सिंह (गोंडा) के द्वितीय पुत्र कुंवर भवानी
                सिंह को प्रदान किया गया था।
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
