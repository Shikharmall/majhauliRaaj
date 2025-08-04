"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import Banner from "../Banner";
import FamilyTreeStructure from "../FamilyTreeStructure";
import LanguageContext from "@/context/languageContext";
import ImageModal from "../ImageModel";

const familyData = {
  name: "Raja Prithvi Mall?",
  isKing: true,
  children: [
    {
      name: "Raja PRATAP MALL",
      isKing: true,
      children: [
        {
          name: "Raja SHAH MALL",
          isKing: true,
          children: [
            {
              name: "Raja KUSUM MALL",
              isKing: true,
              children: [
                {
                  name: "Raja MAN SINGH",
                  isKing: true,
                  children: [
                    {
                      name: "Raja MAN SINGH",
                      isKing: true,
                      children: [
                        {
                          name: "Raja LAKSHMAN SINGH",
                          isKing: true,
                          children: [
                            {
                              name: "Raja NIRVAHAN SINGH",
                              isKing: true,
                              children: [
                                {
                                  name: "Raja AMAR SINGH",
                                  isKing: true,
                                  children: [
                                    {
                                      name: "Raja RAM SINGH",
                                      isKing: true,
                                      children: [
                                        {
                                          name: "Raja Dutt Singh",
                                          isKing: true,
                                          children: [
                                            {
                                              name: "Raja Udit Singh",
                                              isKing: true,
                                              children: [
                                                {
                                                  name: "Raja Mangal Singh",
                                                  isKing: true,
                                                  children: [
                                                    {
                                                      name: "Raja Sheo Prasad Singh",
                                                      isKing: true,
                                                      children: [
                                                        {
                                                          name: "Raja Jai Singh",
                                                          isKing: true,
                                                          children: [
                                                            {
                                                              name: "Raja GUMAN SINGH",
                                                              isExtra:
                                                                "(I'st son of KANWAR(NAME UNKNOWN) SINGH)",
                                                              isKing: true,
                                                              children: [
                                                                {
                                                                  name: "Raja DEVI BAKSH SINGH",
                                                                  isKing: true,
                                                                  isExtra: `(Son of II'nd son of KANWAR(NAME UNKNOWN) SINGH)`,
                                                                  children: [
                                                                    {
                                                                      name: "property being given to the Zamindar of Balrampur after 1857",
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
                                                      name: "Maharani Ser Kunwar",
                                                    },
                                                  ],
                                                },
                                                {
                                                  name: "Kanwar Pahlwan Singh",
                                                  children: [
                                                    {
                                                      name: "Kanwar(name unknown) Singh",
                                                      children: [
                                                        {
                                                          name: "Raja Guman Singh",
                                                        },
                                                        {
                                                          name: "Kunwar Daljit Singh",
                                                          children: [
                                                            {
                                                              name: "Raja Devi Baksh Singh",
                                                            },
                                                          ],
                                                        },
                                                      ],
                                                    },
                                                    {
                                                      name: "Kanwar Hindupat Singh",
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                            {
                                              name: "Raja Ajmat Singh",
                                              isKing: true,
                                              isExtra:
                                                "(Received the estate of Mankapur from his father.)",
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      name: "Raja Bhawani Singh",
                                      isKing: true,
                                      isExtra:
                                        "(Received the estate of Bhinga from his brother.)",
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
      name: "Raja Hom Mall?",
      isKing: true,
    },
  ],
};

const familyDataHindi = {
  name: "राजा पृथ्वी मल्ल?",
  isKing: true,
  children: [
    {
      name: "राजा प्रताप मल्ल",
      isKing: true,
      children: [
        {
          name: "राजा शाह मल्ल",
          isKing: true,
          children: [
            {
              name: "राजा कुसुम मल्ल",
              isKing: true,
              children: [
                {
                  name: "राजा मान सिंह",
                  isKing: true,
                  children: [
                    {
                      name: "राजा मान सिंह",
                      isKing: true,
                      children: [
                        {
                          name: "राजा लक्ष्मण सिंह",
                          isKing: true,
                          children: [
                            {
                              name: "राजा निर्वहन सिंह",
                              isKing: true,
                              children: [
                                {
                                  name: "राजा अमर सिंह",
                                  isKing: true,
                                  children: [
                                    {
                                      name: "राजा राम सिंह",
                                      isKing: true,
                                      children: [
                                        {
                                          name: "राजा दत्त सिंह",
                                          isKing: true,
                                          children: [
                                            {
                                              name: "राजा उदित सिंह",
                                              isKing: true,
                                              children: [
                                                {
                                                  name: "राजा मंगल सिंह",
                                                  isKing: true,
                                                  children: [
                                                    {
                                                      name: "राजा श्यो प्रसाद सिंह",
                                                      isKing: true,
                                                      children: [
                                                        {
                                                          name: "राजा जय सिंह",
                                                          isKing: true,
                                                          children: [
                                                            {
                                                              name: "राजा गुमान सिंह",
                                                              isExtra:
                                                                "(कुँवर (नाम अज्ञात) सिंह के प्रथम पुत्र)",
                                                              isKing: true,
                                                              children: [
                                                                {
                                                                  name: "राजा देवी बक्श सिंह",
                                                                  isKing: true,
                                                                  isExtra:
                                                                    "(कुँवर (नाम अज्ञात) सिंह के द्वितीय पुत्र के पुत्र)",
                                                                  children: [
                                                                    {
                                                                      name: "1857 के बाद संपत्ति बलरामपुर के ज़मींदार को दे दी गई",
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
                                                      name: "महारानी सेर कुँवर",
                                                    },
                                                  ],
                                                },
                                                {
                                                  name: "कुँवर पहलवान सिंह",
                                                  children: [
                                                    {
                                                      name: "कुँवर (नाम अज्ञात) सिंह",
                                                      children: [
                                                        {
                                                          name: "राजा गुमान सिंह",
                                                        },
                                                        {
                                                          name: "कुँवर दलजीत सिंह",
                                                          children: [
                                                            {
                                                              name: "राजा देवी बक्श सिंह",
                                                            },
                                                          ],
                                                        },
                                                      ],
                                                    },
                                                    {
                                                      name: "कुँवर हिंदुपत सिंह",
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                            {
                                              name: "राजा अजमत सिंह",
                                              isKing: true,
                                              isExtra:
                                                "(अपने पिता से मनकापुर की जागीर प्राप्त की)",
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      name: "राजा भवानी सिंह",
                                      isKing: true,
                                      isExtra:
                                        "(अपने भाई से भिंगा की जागीर प्राप्त की)",
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
      name: "राजा होम मल्ल?",
      isKing: true,
    },
  ],
};

export default function GondaEstateDetails() {
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
        title={language === "english" ? "Gonda Estate" : "गोंडा एस्टेट"}
      />

      {/* Main Content */}
      <main className="container mx-auto px-5 md:px-20 py-5 md:py-10">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Image */}
          <div className="md:col-span-1 ">
            <Image
              src="/assets/img/gonda/gonda1.jpg"
              alt="img"
              width={600}
              height={400}
              className="rounded-lg shadow-lg border-3 border-gray-300 cursor-pointer"
              onClick={() =>
                openModal({
                  url: "/assets/img/gonda/gonda1.jpg",
                  estate: "Ruins of Raja Devi Baksh Singh's Haveli",
                  estateHindi: "राजा देवी बख्श सिंह की हवेली के अवशेष",
                })
              }
            />
            <div className="flex items-center justify-center">
              <h2>
                {language === "english"
                  ? "Ruins of Raja Devi Baksh Singh's Haveli"
                  : "राजा देवी बख्श सिंह की हवेली के अवशेष"}
              </h2>
            </div>
            <br />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56807.578406148205!2d81.92802445521721!3d27.141383793755423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999ee0495e5b7a9%3A0xc927d6261ff536ca!2sGonda%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1753383010416!5m2!1sen!2sin"
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
                The ancestor of the Bisen Dynasty of Gonda, Bhinga, Kalakankar
                etc was Raja Prithvi Mall of Majhauli in Gorakhpur. Gonda was
                founded by Man Mall, the first to use the surname of Singh, who
                was given the title of Raja in 1618 by the Mughal Emperor. He
                was also the ancestor of the Rulers of Bhinga and Mankapur.
              </p>
              <p className="font-serif"></p>
              <p className="font-serif"></p>
            </div>
          ) : (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
              <p className="font-serif">
                गोंडा, भिनगा, कलाकंकर आदि की बिसेन वंशावली के पूर्वज{" "}
                <strong>गोरखपुर के मझौली</strong> निवासी{" "}
                <strong>राजा पृथ्वी मल्ल</strong> थे।
                <strong>गोंडा</strong> की स्थापना <strong>मान मल्ल</strong> ने
                की थी, जो सिंह उपनाम का प्रयोग करने वाले पहले व्यक्ति थे और
                जिन्हें 1618 में मुगल सम्राट द्वारा <strong>राजा</strong> की
                उपाधि प्रदान की गई थी। वे <strong>भिनगा</strong> और{" "}
                <strong>मनकापुर</strong> के शासकों के भी पूर्वज थे।
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
