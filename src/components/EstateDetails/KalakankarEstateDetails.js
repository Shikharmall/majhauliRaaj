"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import Banner from "../Banner";
import FamilyTreeStructure from "../FamilyTreeStructure";
import LanguageContext from "@/context/languageContext";
import ImageModal from "../ImageModel";

const familyData = {
  name: "Raja Raghuvansh Mall",
  isExtra: "(63 generations - Majhauli Raj)",
  isKing: true,
  children: [
    {
      name: "Babu Roop Mall",
      isExtra: "(Raja Prithvi Mall?)",
      isKing: true,
      children: [
        {
          name: "Rai Hom Mall",
          isExtra: "(Kala Kankar)",
          isKing: true,
          children: [
            {
              name: "Rai Purandar Mall",
              isKing: true,
              children: [
                {
                  name: "Rai Gopal Mall",
                  isKing: true,
                  children: [
                    {
                      name: "Rai Radho",
                    },
                    {
                      name: "Babu Ram",
                      isKing: true,
                      children: [
                        {
                          name: "Rai Askaran",
                          isKing: true,
                          children: [
                            {
                              name: "Rudra Pratap",
                              isKing: true,
                              children: [
                                {
                                  name: "Todal(Todar Mall)",
                                  isKing: true,
                                  children: [
                                    {
                                      name: "Dharu Shah",
                                      isKing: true,
                                      children: [
                                        {
                                          name: "Barsal Rai",
                                          isKing: true,
                                          children: [
                                            {
                                              name: "Rai Jai Singh",
                                              isKing: true,
                                              children: [
                                                {
                                                  name: "Rai Shyam Singh",
                                                  isKing: true,
                                                  children: [
                                                    {
                                                      name: "Rai Sangram Singh",
                                                    },
                                                    {
                                                      name: "Mau Singh",
                                                      isKing: true,
                                                      children: [
                                                        {
                                                          name: "Rai Kamal Singh",
                                                          isKing: true,
                                                          children: [
                                                            {
                                                              name: "Lal Balwant Singh",
                                                              isKing: true,
                                                              children: [
                                                                {
                                                                  name: "Lal Bairi Sal",
                                                                  isKing: true,
                                                                  children: [
                                                                    {
                                                                      name: "Rai Hanumant Singh",
                                                                      isKing: true,
                                                                      children:
                                                                        [
                                                                          {
                                                                            name: "Laal Pratap Singh",
                                                                            isKing: true,
                                                                            children:
                                                                              [
                                                                                {
                                                                                  name: "Raja Rampal Singh",
                                                                                  isKing: true,
                                                                                  children:
                                                                                    [
                                                                                      {
                                                                                        name: "Raja Ramesh Singh",
                                                                                        isKing: true,
                                                                                        children:
                                                                                          [
                                                                                            {
                                                                                              name: "Raja AVADESH SINGH",
                                                                                              isKing: true,
                                                                                              children:
                                                                                                [
                                                                                                  {
                                                                                                    name: "Raja DINESH SINGH",
                                                                                                    isExtra:
                                                                                                      "(Former Foreign Minister)",
                                                                                                    isKing: true,
                                                                                                    children:
                                                                                                      [],
                                                                                                  },
                                                                                                ],
                                                                                            },
                                                                                            {
                                                                                              name: "Brijesh Singh",
                                                                                            },
                                                                                            {
                                                                                              name: "Suresh Singh",
                                                                                            },
                                                                                          ],
                                                                                      },
                                                                                    ],
                                                                                },
                                                                              ],
                                                                          },
                                                                          {
                                                                            name: "Lakshman Singh",
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
                        },
                        {
                          name: "Rai Kashi",
                        },
                        {
                          name: "Rai Khemkaran",
                        },
                      ],
                    },
                    {
                      name: "Rai Rajneesh",
                      children: [],
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
  name: "राजा रघुवंश मल्ल",
  isExtra: "(63 पीढ़ी - मझौली राज)",
  isKing: true,
  children: [
    {
      name: "बाबू रूप मल्ल",
      isExtra: "(राजा पृथ्वी मल्ल?)",
      isKing: true,
      children: [
        {
          name: "राय होम मल्ल",
          isExtra: "(कलाकांकर)",
          isKing: true,
          children: [
            {
              name: "राय पुरंदर मल्ल",
              isKing: true,
              children: [
                {
                  name: "राय गोपाल मल्ल",
                  isKing: true,
                  children: [
                    {
                      name: "राय राधो",
                    },
                    {
                      name: "बाबू राम",
                      isKing: true,
                      children: [
                        {
                          name: "राय अस्करण",
                          isKing: true,
                          children: [
                            {
                              name: "रुद्र प्रताप",
                              isKing: true,
                              children: [
                                {
                                  name: "तोड़ल (टोडर मल्ल)",
                                  isKing: true,
                                  children: [
                                    {
                                      name: "धरु शाह",
                                      isKing: true,
                                      children: [
                                        {
                                          name: "बरसाल राय",
                                          isKing: true,
                                          children: [
                                            {
                                              name: "राय जय सिंह",
                                              isKing: true,
                                              children: [
                                                {
                                                  name: "राय श्याम सिंह",
                                                  isKing: true,
                                                  children: [
                                                    {
                                                      name: "राय संग्राम सिंह",
                                                    },
                                                    {
                                                      name: "मऊ सिंह",
                                                      isKing: true,
                                                      children: [
                                                        {
                                                          name: "राय कमल सिंह",
                                                          isKing: true,
                                                          children: [
                                                            {
                                                              name: "लाल बलवंत सिंह",
                                                              isKing: true,
                                                              children: [
                                                                {
                                                                  name: "लाल बैरी साल",
                                                                  isKing: true,
                                                                  children: [
                                                                    {
                                                                      name: "राय हनुमंत सिंह",
                                                                      isKing: true,
                                                                      children:
                                                                        [
                                                                          {
                                                                            name: "लाल प्रताप सिंह",
                                                                            isKing: true,
                                                                            children:
                                                                              [
                                                                                {
                                                                                  name: "राजा रामपाल सिंह",
                                                                                  isKing: true,
                                                                                  children:
                                                                                    [
                                                                                      {
                                                                                        name: "राजा रमेश सिंह",
                                                                                        isKing: true,
                                                                                        children:
                                                                                          [
                                                                                            {
                                                                                              name: "राजा अवधेश सिंह",
                                                                                              isKing: true,
                                                                                              children:
                                                                                                [
                                                                                                  {
                                                                                                    name: "राजा दिनेश सिंह",
                                                                                                    isExtra:
                                                                                                      "(पूर्व विदेश मंत्री)",
                                                                                                    isKing: true,
                                                                                                    children:
                                                                                                      [],
                                                                                                  },
                                                                                                ],
                                                                                            },
                                                                                            {
                                                                                              name: "बृजेश सिंह",
                                                                                            },
                                                                                            {
                                                                                              name: "सुरेश सिंह",
                                                                                            },
                                                                                          ],
                                                                                      },
                                                                                    ],
                                                                                },
                                                                              ],
                                                                          },
                                                                          {
                                                                            name: "लक्ष्मण सिंह",
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
                        },
                        {
                          name: "राय काशी",
                        },
                        {
                          name: "राय खेमकरन",
                        },
                      ],
                    },
                    {
                      name: "राय रजनीश",
                      children: [],
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

export default function KalakankarEstateDetails() {
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
        title={language === "english" ? "Kalakankar Estate" : "कालाकंकर रियासत"}
      />

      {/* Main Content */}
      <main className="container mx-auto px-5 md:px-20 py-5 md:py-10">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Image */}
          <div className="md:col-span-1 ">
            <Image
              src="/assets/img/kalakankar/kalakankar1.jpeg"
              alt="kalakankar-img"
              width={600}
              height={400}
              className="rounded-lg shadow-lg border-3 border-gray-300 cursor-pointer"
              onClick={() =>
                openModal({
                  url: "/assets/img/kalakankar/kalakankar1.jpeg",
                  estate: "Kalakankar Fort",
                  estateHindi: "कलाकांकर किला",
                })
              }
            />
            <div className="flex items-center justify-center">
              <h2>
                {language === "english" ? "Kalakankar Fort" : "कलाकांकर किला"}
              </h2>
            </div>
            <br />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14369.46722136209!2d81.3450168463899!3d25.791470207595832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399b186f0960f8b5%3A0xd944f342d54729d!2sKalakankar%2C%20Uttar%20Pradesh%20229408!5e0!3m2!1sen!2sin!4v1753358403077!5m2!1sen!2sin"
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
                The estate was also known as <strong>Rampur Dharupur</strong>.
                The founder of the family was Raja Hom Mall, a younger son of
                Babu Roop Mall(Raja Prithvi Mall?) of Majhauli in Gorakhpur.
              </p>
              <p className="font-serif"></p>
              <p className="font-serif"></p>
            </div>
          ) : (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
              <p className="font-serif">
                यह रियासत <strong>रामपुर धरुपुर</strong> के नाम से भी जानी जाती थी। इस परिवार के
                संस्थापक राजा होम मल्ल थे, जो गोरखपुर के मझौली के बाबू रूप मल्ल
                (राजा पृथ्वी मल्ल?) के छोटे पुत्र थे।
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
