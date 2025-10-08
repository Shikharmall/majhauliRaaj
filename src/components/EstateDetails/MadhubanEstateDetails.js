"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import Banner from "../common/Banner";
import FamilyTreeStructure from "../common/FamilyTreeStructure";
import LanguageContext from "@/context/languageContext";
import ImageModal from "../common/ImageModel";

const familyData = {
  name: "Raja Madhav Mall",
  isKing: true,
  children: [
    {
      name: "Raja Nath Mall",
      isKing: true,
      children: [
        {
          name: "Ajit Mall",
          children: [
            {
              name: "Vijay Mall",
              children: [
                {
                  name: "Ganga Mall",
                  isExtra: "(Poti)",
                },
                {
                  name: "Sultan Mall",
                  isExtra: "(KhiriKot, Gangeveer, Nevada, Nathupur)",
                },
                {
                  name: "Naval Mall",
                },
                {
                  name: "Madhav Mall",
                  isExtra: "(Usri, Ahirauli)",
                },
                {
                  name: "Brindavan Mall",
                },
                {
                  name: "Vikram Mall",
                  isExtra: "(Lalaanpur)",
                },
                {
                  name: "Vishnu Dayal Mall",
                  children: [
                    {
                      name: "Dhaval Mall",
                      isExtra: "(Bahrampur)",
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
      name: "Raja Ajay Mall",
      isExtra: "(Raja Fateh Bahadur Mall)",
      isKing: true,
      children: [
        {
          name: "Harihar Mall",
          children: [
            {
              name: "Nag Mall",
            },
            {
              name: "Karan Mall",
              isExtra: "(Karanpura)",
            },
            {
              name: "Narhar Mall",
            },
            {
              name: "Banwari Mall",
              isExtra: "(Jogiya, Gorakhpur)",
            },
            {
              name: "Bisha Mall",
              children: [
                {
                  name: "Sesar Mall",
                  children: [
                    {
                      name: "Harash Mall",
                      children: [
                        {
                          name: "Chapali Mall",
                          children: [
                            {
                              name: "Gambhir Mall",
                              children: [
                                {
                                  name: "Dulaar Mall",
                                  isExtra: "(Lakhnaur)",
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
                  name: "Vihari Mall",
                  children: [
                    {
                      name: "Narseva Mall",
                      children: [
                        {
                          name: "Nandan Mall",
                        },
                        {
                          name: "Kaval Mall",
                          children: [
                            {
                              name: "Jawaahar Mall",
                              isExtra: "(Jalauli-Kothgharana)",
                            },
                            {
                              name: "Uttam Mall",
                              children: [
                                {
                                  name: "Bacchan Mall",
                                  children: [
                                    {
                                      name: "Nanua Mall",
                                      isExtra: "(Ufrauli)",
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              name: "Dhaamu Mall",
                              children: [
                                {
                                  name: "Anand Mall",
                                  children: [],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: "Baban Mall",
                          children: [],
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "Mohan Mall",
                },
              ],
            },
            {
              name: "Ratti Mall",
              isExtra: "(Lakuragraam)",
              children: [],
            },
          ],
        },
      ],
    },
  ],
};

const familyDataHindi = {
  name: "राजा माधव मल्ल",
  isKing: true,
  children: [
    {
      name: "राजा नत्थ मल्ल",
      isKing: true,
      children: [
        {
          name: "अजीत मल्ल",
          children: [
            {
              name: "विजय मल्ल",
              children: [
                {
                  name: "गंगा मल्ल",
                  isExtra: "(पोती)",
                },
                {
                  name: "सुल्तान मल्ल",
                  isExtra: "(खीरीकोट, गंगेवीर, नेवादा, नाथुपुर)",
                },
                {
                  name: "नवल मल्ल",
                },
                {
                  name: "माधव मल्ल",
                  isExtra: "(उसरी, अहरौली)",
                },
                {
                  name: "वृंदावन मल्ल",
                },
                {
                  name: "विक्रम मल्ल",
                  isExtra: "(ललानपुर)",
                },
                {
                  name: "विष्णु दयाल मल्ल",
                  children: [
                    {
                      name: "धवल मल्ल",
                      isExtra: "(बहरामपुर)",
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
      name: "राजा अजय मल्ल",
      isExtra: "(राजा फतेह बहादुर मल्ल)",
      isKing: true,
      children: [
        {
          name: "हरिहर मल्ल",
          children: [
            {
              name: "नाग मल्ल",
            },
            {
              name: "करण मल्ल",
              isExtra: "(करणपुरा)",
            },
            {
              name: "नरहर मल्ल",
            },
            {
              name: "बनवारी मल्ल",
              isExtra: "(जोगिया, गोरखपुर)",
            },
            {
              name: "बिशा मल्ल",
              children: [
                {
                  name: "सेसर मल्ल",
                  children: [
                    {
                      name: "हरष मल्ल",
                      children: [
                        {
                          name: "चपली मल्ल",
                          children: [
                            {
                              name: "गंभीर मल्ल",
                              children: [
                                {
                                  name: "दुलार मल्ल",
                                  isExtra: "(लखनौर)",
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
                  name: "विहारी मल्ल",
                  children: [
                    {
                      name: "नरसेवा मल्ल",
                      children: [
                        {
                          name: "नंदन मल्ल",
                        },
                        {
                          name: "कवल मल्ल",
                          children: [
                            {
                              name: "जवाहर मल्ल",
                              isExtra: "(जजौली - कोठघराना)",
                            },
                            {
                              name: "उत्तम मल्ल",
                              children: [
                                {
                                  name: "बच्चन मल्ल",
                                  children: [
                                    {
                                      name: "ननुआ मल्ल",
                                      isExtra: "(उफरौली)",
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              name: "धामू मल्ल",
                              children: [
                                {
                                  name: "आनंद मल्ल",
                                  children: [],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: "बबन मल्ल",
                          children: [],
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "मोहन मल्ल",
                },
              ],
            },
            {
              name: "रट्टी मल्ल",
              isExtra: "(लाकुराग्राम)",
              children: [],
            },
          ],
        },
      ],
    },
  ],
};

export default function MadhubanEstateDetails() {
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
        title={language === "english" ? "Madhuban Estate" : "मधुबन रियासत"}
      />

      {/* Main Content */}
      <main className="container mx-auto px-5 md:px-20 py-5 md:py-10">
        {/* intro */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Image */}
          <div className="md:col-span-1 ">
            <Image
              src="/assets/img/madhuban/madhuban1.jpg"
              alt="madhuban-img"
              width={600}
              height={400}
              className="rounded-lg shadow-lg border-3 border-gray-300 cursor-pointer"
              onClick={() =>
                openModal({
                  url: "/assets/img/madhuban/madhuban1.jpg",
                  estate: "Ruins of Raja Fateh Bahadur Mall's Haveli",
                  estateHindi: "राजा फतेह बहादुर मल्ल की हवेली के अवशेष",
                })
              }
            />
            <div className="flex items-center justify-center">
              <h2>
                {language === "english"
                  ? "Ruins of Raja Fateh Bahadur Mall's Haveli"
                  : "राजा फतेह बहादुर मल्ल की हवेली के अवशेष"}
              </h2>
            </div>
            <br />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14323.669579911992!2d83.67328034658887!3d26.1668195922816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39922eb427a6b111%3A0x15404933bf53d77f!2sMadhuban%2C%20Uttar%20Pradesh%20221603!5e0!3m2!1sen!2sin!4v1753207345187!5m2!1sen!2sin"
              width="100%"
              height="300"
              className="w-full rounded-md border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <br />

            <div className="md:col-span-1">
              <div className="border-1 border-gray-300 p-2 flex flex-col items-center">
                <div className="flex flex-col md:flex-row justify-center">
                  <Image
                    src="/assets/img/madhuban/proof2.jpg"
                    alt="madhuban-img"
                    width={200}
                    height={50}
                    className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                    onClick={() =>
                      openModal({
                        url: "/assets/img/madhuban/proof2.jpg",
                        // estate: "(Page 1)",
                        // estateHindi: "(पृष्ठ 1)",
                      })
                    }
                  />
                </div>
                <p>
                  {language === "english"
                    ? "Mention of Raja Madhav Mall in Visen Vansh Vatika"
                    : "विसेन वंश वाटिका में राजा माधव मल्ल का उल्लेख मिलता है।"}
                </p>
              </div>
            </div>

          </div>

          {/* Bio */}
          {language === "english" ? (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
              <p className="font-serif">
                Raja Madhav Mall was a prominent Rajput ruler from the Vishen
                (also called Bisen) dynasty, historically linked to the Majhauli
                Raj estate in eastern Uttar Pradesh. He was the second son of
                Raja Dev Mall, the 95th ruler of the Majhauli line.
              </p>
              <p className="font-serif">
                In the mid-16th century, Raja Madhav Mall established the region
                known as Madhuban (in present-day Mau district, Uttar Pradesh),
                which became an influential settlement for his descendants. This
                area is now the Madhuban tehsil, comprising numerous villages
                and a significant population.
              </p>
              <p className="font-serif">
                Raja Madhav Mall had two sons: Raja Nath Mall and Raja Ajay
                Bahadur Mall (also known as Fateh Bahadur Mall). Their
                descendants took on the surname &quot;Mall&quot;, and many settled across
                eastern UP — especially in Madhuban, Mau, Gorakhpur and Deoria,
                and villages like Hasanpur, Bahrampur, Jajoli, Ahirauli, and
                Parshurampur. The villages these descendants resides are
              </p>
              <p className="font-serif">
                Lakhnaur, Jaauli-Kothgharana, Bhelurr, Ufrauli, Lakuragram,
                Karanpura, Jogiya(Gorakhpur), Poti, Khirikhot, Gangeveer,
                Nevada, Nathupur, Usari, Ahirauli, Laalanpur, Bahrampur.
              </p>
              <p className="font-serif font-bold">
                <strong>
                  <em> Debunked Myth (due to lack of evidence) written by Lal Khadag Bahadur Mall</em>
                </strong>
              </p>
              {/* <p className="font-serif">
                Lal Khadag Bahadur Mall, in his book <span className="font-bold"><em>&quot;Vishen Vansh Vatika&quot;</em></span> (written in 1887 AD), mentioned the name of Maharaja Madhav Mall but did not include his children, Raja Nath Bahadur Mall and Babu Fateh Bahadur Mall. He described the Malls of Madhuban as descendants of Mayyur Bhat through his Kurmi wife. He also noted that Raja Natth Mall, mentioned in <em>&quot;Turk-e-Jahangiri&quot;</em>, was mistakenly referred to as Raja Bhim Mall due to a translation error caused by the shifting of a single dot. However, since Raja Nath Mall is mentioned twice in <em>&quot;Turk-e-Jahangiri&quot;</em>, this claim was not valid. Furthermore, this myth was criticized by many historians and kings of that time and was later debunked.
                It was also perpetuated by the British in their census records.
              </p> */}
              <div className="relative p-6 bg-white font-serif">
                {/* Debunked Watermark */}
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                   text-gray-600 text-5xl font-bold opacity-20 select-none pointer-events-none 
                   rotate-[-45deg]">
                  DEBUNKED
                </span>

                {/* Main content */}
                <p className="font-serif leading-relaxed text-base">
                  Lal Khadag Bahadur Mall, in his book
                  <span className="font-bold"><em>&quot;Vishen Vansh Vatika&quot;</em></span> (written in 1887 AD),
                  mentioned Maharaja Madhav Mall but did not include his sons,
                  Raja Nath Bahadur Mall and Babu Fateh Bahadur Mall.
                  He described the Malls of Madhuban as descendants of Mayyur Bhat through his Kurmi wife.
                  He also noted that Raja Nath Mall, mentioned in
                  <em>&quot;Turk-e-Jahangiri&quot;</em>, was mistakenly referred to as Raja Bhim Mall
                  due to a translation error caused by the misplacement of a single dot.
                </p>


                <div className="mt-6 mb-6 text-center border-1 border-[#eee]">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-6">
                    <div className="flex flex-col items-center">
                      <p className="text-lg font-semibold">Raja Nath Mall</p>
                      <p className="text-3xl mt-2">راجا ناتھ ملّ</p>
                    </div>

                    <div className="hidden md:block w-px h-16 bg-gray-300 opacity-50"></div>

                    <div className="flex flex-col items-center">
                      <p className="text-lg font-semibold">Raja Bhim Mall</p>
                      <p className="text-3xl mt-2">راجا بھیم ملّ</p>
                    </div>
                  </div>
                  {/* <p className="font-serif text-lg font-semibold">Raja Nath Mall</p>
                  <p className="text-3xl font-serif mb-4">راجا ناتھ ملّ</p>

                  <p className="font-serif text-lg font-semibold">Raja Bhim Mall</p>
                  <p className="text-3xl font-serif">راجا بھیم ملّ</p> */}
                  <p>
                    There is a significant difference in the way their names are written in Persian.
                  </p>
                </div>

                <p className="font-serif leading-relaxed text-base">
                  However, since Raja Nath Mall is mentioned thrice in
                  <em>&quot;Turk-e-Jahangiri&quot;</em>, the claim that the name Raja Bhim Mall was a misprint is not valid.
                  Furthermore, this myth was criticized by several historians and kshatriyas of that time
                  and was later debunked. It was also perpetuated by the British in their census records.
                </p>


                {/* <p className="font-serif">
                  Lal Khadag Bahadur Mall, in his book <span className="font-bold"><em>&quot;Vishen Vansh Vatika&quot;</em></span> (written in 1887 AD), mentioned the name of Maharaja Madhav Mall but did not include his children, Raja Nath Bahadur Mall and Babu Fateh Bahadur Mall. He described the Malls of Madhuban as descendants of Mayyur Bhat through his Kurmi wife. He also noted that Raja Natth Mall, mentioned in <em>&quot;Turk-e-Jahangiri&quot;</em>, was mistakenly referred to as Raja Bhim Mall due to a translation error caused by the shifting of a single dot.

                  <span className="">
                    Raja Nath Mall <br />
                    <span className="text-3xl">راجا ناتھ ملّ</span> <br />

                    Raja Bhim Mall <br />
                    <span className="text-3xl">راجا بھیم ملّ</span> <br />
                  </span>

                  Their is huge difference in wrtting their name in persian language

                  However, since Raja Nath Mall is mentioned thrice in <em>&quot;Turk-e-Jahangiri&quot;</em>, this claim was not valid. Furthermore, this myth was criticized by many historians and kings of that time and was later debunked.
                  It was also perpetuated by the British in their census records.
                </p> */}
              </div>

            </div>
          ) : (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
              <p className="font-serif">
                राजा माधव मल्ल एक प्रमुख राजपूत शासक थे, जो विशेन (या बीसेन) वंश
                से संबंधित थे और उनका ऐतिहासिक संबंध उत्तर प्रदेश के पूर्वी भाग
                में स्थित मझौली राज रियासत से था। वे राजा देव मल्ल के द्वितीय
                पुत्र थे, जो मझौली वंश के 95वें शासक माने जाते हैं।
              </p>
              <p className="font-serif">
                16वीं शताब्दी के मध्य में, राजा माधव मल्ल ने मधुबन नामक क्षेत्र
                की स्थापना की (जो वर्तमान में उत्तर प्रदेश के मऊ ज़िले में स्थित
                है)। यह क्षेत्र उनके वंशजों के लिए एक प्रभावशाली बस्ती बन गया और
                आज यह मधुबन तहसील के रूप में जाना जाता है, जिसमें अनेक गाँव और
                बड़ी जनसंख्या शामिल है।
              </p>
              <p className="font-serif">
                राजा माधव मल्ल के दो पुत्र थे: राजा नत्थ मल्ल और राजा अजय बहादुर
                मल्ल (जिन्हें फतेह बहादुर मल्ल के नाम से भी जाना जाता है)। इनके
                वंशजों ने &quot;मल्ल&quot; उपनाम को अपनाया और वे पूर्वी उत्तर प्रदेश के
                विभिन्न क्षेत्रों में बस गए — विशेष रूप से मधुबन, मऊ, गोरखपुर,
                देवरिया और हसनपुर, बहारामपुर, जाजौली, अहरौली और परशुरामपुर जैसे
                गाँवों में।
              </p>
              <p className="font-serif font-bold">
                <strong>
                  <em>लाल खड़ग बहादुर मल्ल द्वारा लिखा गया (प्रमाणों के अभाव में) खंडित मिथक</em>
                </strong>
              </p>
              <div className="relative p-6 bg-white font-serif">
                {/* Debunked Watermark */}
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                   text-gray-600 text-5xl font-bold opacity-20 select-none pointer-events-none 
                   rotate-[-45deg]">
                  खण्डित
                </span>

                {/* Main content */}
                <p className="font-serif">
                  लाल खड़क बहादुर मल्ल ने अपनी पुस्तक <span className="font-bold"><em>&quot;विशेन वंश वाटिका&quot;</em></span> (1887 ई.) में महाराजा माधव मल्ल का नाम लिखा है, लेकिन उनके पुत्र, राजा नाथ बहादुर मल्ल और बाबू फतेह बहादुर मल्ल का उल्लेख नहीं किया। उन्होंने मधुबन के मल्लों को मय्युर भट्ट की कुर्मी पत्नी से उत्पन्न वंशज बताया। उन्होंने यह भी उल्लेख किया कि <em>&quot;तुर्क-ए-जाहाँगीरी&quot;</em> में लिखे राजा नत्थ मल्ल को अनुवाद की गलती के कारण राजा भीम मल्ल कहा गया, क्योंकि केवल एक बिंदु के स्थान परिवर्तन से यह भ्रम हुआ। हालांकि, चूँकि राजा नाथ मल्ल का नाम <em>&quot;तुर्क-ए-जाहाँगीरी&quot;</em> में दो बार आया है, यह दावा सही नहीं था। इसके अलावा, इस मिथक की उस समय के कई इतिहासकारों और राजाओं ने आलोचना की और बाद में इसे खारिज कर दिया गया।
                  यह मिथक ब्रिटिशों द्वारा उनकी जनगणना रिकॉर्ड में भी फैलाया गया।
                </p>
              </div>
              {/* <p className="font-serif">
                लाल खड़क बहादुर मल्ल ने अपनी पुस्तक <span className="font-bold"><em>&quot;विशेन वंश वाटिका&quot;</em></span> (1887 ई.) में महाराजा माधव मल्ल का नाम लिखा है, लेकिन उनके पुत्र, राजा नाथ बहादुर मल्ल और बाबू फतेह बहादुर मल्ल का उल्लेख नहीं किया। उन्होंने मधुबन के मल्लों को मय्युर भट्ट की कुर्मी पत्नी से उत्पन्न वंशज बताया। उन्होंने यह भी उल्लेख किया कि <em>&quot;तुर्क-ए-जाहाँगीरी&quot;</em> में लिखे राजा नत्थ मल्ल को अनुवाद की गलती के कारण राजा भीम मल्ल कहा गया, क्योंकि केवल एक बिंदु के स्थान परिवर्तन से यह भ्रम हुआ। हालांकि, चूँकि राजा नाथ मल्ल का नाम <em>&quot;तुर्क-ए-जाहाँगीरी&quot;</em> में दो बार आया है, यह दावा सही नहीं था। इसके अलावा, इस मिथक की उस समय के कई इतिहासकारों और राजाओं ने आलोचना की और बाद में इसे खारिज कर दिया गया।
                यह मिथक ब्रिटिशों द्वारा उनकी जनगणना रिकॉर्ड में भी फैलाया गया।
              </p> */}
            </div>
          )}
        </div>

        {/* Mughal Period */}

        <div className="flex items-center gap-4 my-5">
          <div className="h-px flex-grow bg-gray-300"></div>
          <span className="text-gray-500 text-2xl whitespace-nowrap">
            {language === "english" ? "MUGHAL PERIOD" : "मुग़ल काल"}
          </span>
          <div className="h-px flex-grow bg-gray-300"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 my-3">
          {/* left Image */}
          <div className="md:col-span-1">
            <div className="border-1 border-gray-300 p-2 flex flex-col items-center">
              <div className="flex flex-col md:flex-row justify-center">
                <Image
                  src="/assets/img/majhauli/proof3.png"
                  alt="majhauli-img"
                  width={200}
                  height={50}
                  className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                  onClick={() =>
                    openModal({
                      url: "/assets/img/majhauli/proof3.png",
                      // estate: "(Page 1)",
                      // estateHindi: "(पृष्ठ 1)",
                    })
                  }
                />
                <Image
                  src="/assets/img/majhauli/proof4.png"
                  alt="majhauli-img"
                  width={200}
                  height={50}
                  className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                  onClick={() =>
                    openModal({
                      url: "/assets/img/majhauli/proof4.png",
                      // estate: "(Page 2)",
                      // estateHindi: "(पृष्ठ 2)",
                    })
                  }
                />
              </div>

              <p>
                {language === "english"
                  ? "Mention of Raja Nath Mall of Majhauli in Tuzuk-i-Jahangiri"
                  : "तुझुक-ए-जहांगीरी में मझौली के राजा नत्थ मल्ल का उल्लेख मिलता है।"}
              </p>
            </div>
          </div>

          {/* Bio */}
          {language === "english" ? (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
              <p className="font-serif">
                The first written record of any king of Majhauli appears in the
                <strong>
                  <em> Tuzuk-i-Jahangiri </em>
                </strong>
                , where Raja Nath Mall is mentioned twice, with a gap of ten
                years between the two references. The first mention is dated the
                21st of second Jumada(corresponding to 14th October, 1606), and
                the second appears on the 5th of Amurdad (corresponding to 25th
                July, 1615).
              </p>
              {/* october, 1606 // 25 July */}
              <p className="font-serif">
                The first reference appears on the page titled
                <strong> Remarkable Letter of Aziz Koka</strong>, where it
                states:
              </p>
              <p className="font-serif mx-5 md:mx-10">
                <em>
                  &quot;I gave 5,000 rupees to Nathu Mal(?), Raja of
                  Manjholi.&quot;
                </em>
              </p>
              <p className="font-serif mt-4">
                The second reference appears on the page titled
                <strong> Hindu Raja Turns Musulman</strong>, where it states:
              </p>
              <p className="font-serif mx-5 md:mx-10">
                <em>
                  &quot;On the 5th Amurdad, to the mansab of Raja Nathmal, which
                  was 1,500 personal and 1,100 horse, an addition of 500
                  personal and 100 horse was made.&quot;
                </em>
              </p>
            </div>
          ) : (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
              <p className="font-serif">
                मझौली के किसी भी राजा का पहला लिखित उल्लेख
                <strong>
                  <em> तुजुक-ए-जहाँगीरी &nbsp;</em>
                </strong>
                में मिलता है, जहाँ राजा नत्थ मल का दो बार उल्लेख हुआ है — दोनों
                के बीच दस वर्षों का अंतर है। पहला उल्लेख दूसरी जमादि (22वीं
                तारीख) के दिनांक (14 अक्टूबर, 1606) का है, और दूसरा अमुर्दाद की
                5वीं तारीख (25 जुलाई, 1615) का है।
              </p>
              <p className="font-serif">
                पहला उल्लेख
                <strong> अज़ीज़ कोका का उल्लेखनीय पत्र </strong>
                शीर्षक वाले पृष्ठ पर मिलता है, जहाँ लिखा है:
              </p>
              <p className="font-serif mx-5 md:mx-10">
                <em>
                  &quot;मैंने नाथू मल(?), मंझोली के राजा को 5,000 रुपये
                  दिए।&quot;
                </em>
              </p>
              <p className="font-serif mt-4">
                दूसरा उल्लेख
                <strong> हिंदू राजा मुसलमान बना </strong>
                शीर्षक वाले पृष्ठ पर मिलता है, जहाँ लिखा है:
              </p>
              <p className="font-serif mx-5 md:mx-10">
                <em>
                  &quot;5वीं अमुर्दाद को, राजा नत्थमल की मनसबदारी जो 1,500
                  व्यक्तिगत और 1,100 घुड़सवार थी, उसमें 500 व्यक्तिगत और 100
                  घुड़सवार की वृद्धि की गई।&quot;
                </em>
              </p>
            </div>
          )}
        </div>


        {/* Battle of Tonsa */}

        <div className="flex items-center gap-4 my-5">
          <div className="h-px flex-grow bg-gray-300"></div>
          <span className="text-gray-500 text-2xl whitespace-nowrap">
            {language === "english" ? "BATTLE OF TONSA" : "जंग-ए-टौंस"}
          </span>
          <div className="h-px flex-grow bg-gray-300"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 my-3">
          {/* Bio */}
          {language === "english" ? (
            <>
              <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
                <p className="font-serif">
                  The Battle of Jang-e-Tauns, fought in the early 17th century, was a decisive
                  conflict in the region of present-day Mau district. Raja Natth Bahadur Mall
                  Vishen of Natthupur and his brother Raja Ajay Bahadur Mall Vishen displayed
                  exceptional skill in warfare. Together, they defeated Prince Khurram Khan,
                  the future Mughal emperor, and magnanimously spared his life. In recognition
                  of his valor in this victory, Raja Ajay Bahadur Mall was honored with the
                  title &quot;Fatah Bahadur Mall.&quot; Years later, after Emperor Jahangir&apos;s death on
                  6 February 1628, Khurram Khan ascended the Mughal throne as Shah Jahan.
                  Determined to avenge his earlier defeat, he launched campaigns against the
                  states that had opposed him at Jang-e-Tauns. His armies destroyed forts at
                  Madhuban, Kakaradih, and Fatehpur before advancing on Natthupur.
                </p>
                <p className="font-serif">
                  During this campaign, the rulers of Natthupur were traveling in South India,
                  leaving the fort vulnerable. At this critical moment, Chief Minister Shaheed
                  Mohan Pandey took command of the defenses. Demonstrating extraordinary courage
                  and loyalty, he rallied the remaining soldiers to resist the Mughal forces.
                  Though a contingent of soldiers from a particular caste fled in fear, Mohan
                  Pandey continued the fight alone. The Mughals captured him and demanded
                  information about the king and the treasury. Out of devotion to his state,
                  he refused to divulge anything, enduring a week of torture before being
                  martyred by being burned alive.
                </p>
                <p className="font-serif mt-4">
                  Before dying, Mohan Pandey pronounced a curse on the fleeing soldiers and their
                  descendants, declaring that none of them or their lineage would prosper in or
                  around Natthupur. His samadhi (memorial) stands in the western garden of
                  Natthupur village, where descendants of Raja Natth Bahadur Mall Vishen continue
                  to honor his memory. The Battle of Jang-e-Tauns and the heroic defense led by
                  Mohan Pandey remain enduring symbols of bravery, loyalty, and the high price
                  of freedom in regional history.
                </p>
                <p className="font-serif mt-4 font-bold">
                  This account originated as a local folk tale, preserving the memory of the
                  battle and Mohan Pandey&apos;s heroism. Later, after extensive research, <em>Shri Mahtab
                    Narayan Mall</em> documented this event in the book <em>&quot;Visen Vansh Darpan&quot;</em>.
                </p>
              </div>
              {/* <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
                <p className="font-serif">
                  Great patriot Shaheed Mohan Pandey was born in the 16th century in the Madhuban tehsil area of present-day Mau district. He served as the chief minister to of Raja Madhav Mall Vishen of Madhuban estate and his son Raja Natth Bahadur Mall Vishen of Natthupur estate. Raja Natth Bahadur Mall Vishen and his brother Raja Ajay Bahadur Mall Vishen were such skilled warriors that they defeated Khurram Khan in the Battle of Jang-e-Tauns and spared his life. After this victory, Raja Ajay came to be known as Fatah Bahadur Mall.
                </p>
                <p className="font-serif">
                  Years later, after Emperor Jahangir's death, on 6 February 1628 Khurram Khan became the ruler of Agra and took the title Shah Jahan. Consumed by a desire for revenge, he soon attacked the states that had opposed him in Jang-e-Tauns. Shah Jahan's forces destroyed forts at Madhuban, Kakaradih and Fatehpur and advanced on Natthupur. The rulers of Natthupur were traveling in South India at the time. In their absence, Chief Minister Mohan Pandey bravely rallied the defenders. Upon seeing a contingent of soldiers from a particular caste flee and join the Mughals, the Mughals captured Mohan Pandey and demanded information about the king and the treasury. Out of devotion to his state, he refused to divulge anything. After torturing him for a week without gaining any information, the Mughal soldiers burned Mohan Pandey alive.
                </p>
                <p className="font-serif mt-4">
                  Before dying, the heroic martyr pronounced a curse on the fleeing soldiers and their descendants: if any of them or their lineage ever built a house in or around the Natthupur palace, they would come to no good and be destroyed with their families. His samadhi (memorial) stands in the western garden of Natthupur village, where descendants of Raja Natth Bahadur Mall Vishen still perform his worship. It is said that no member of the cursed caste's descendants has a home in that village.
                </p>
              </div> */}
            </>
          ) : (
            <>
              <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
                <p className="font-serif">
                  जंग-ए-टौंस की लड़ाई, जो 17वीं सदी के प्रारंभ में लड़ी गई थी, वर्तमान
                  मऊ जिले के क्षेत्र में एक निर्णायक संघर्ष थी। नत्थुपुर के राजा नत्थ बहादुर
                  मल्ल विशेन और उनके भाई राजा अजय बहादुर मल्ल विशेन ने युद्धकला में
                  अद्वितीय कौशल दिखाया। दोनों ने मिलकर खुर्रम खां, जो भविष्य में मुग़ल
                  सम्राट बने, को पराजित किया और उनकी जान बचा दी। इस विजय के सम्मान में
                  राजा अजय बहादुर मल्ल को &quot;फतह बहादुर मल्ल&quot; की उपाधि दी गई।
                  काफी वर्षों बाद, शहंशाह जहाँगीर की मृत्यु के पश्चात् 6 फरवरी 1628 को
                  खुर्रम खां ने आगरा का शासन संभाला और शाहजहाँ के नाम से राज्याभिषेक
                  किया। अपनी पिछली हार का बदला लेने के लिए उन्होंने उन राज्यों पर
                  अभियान चलाया जिन्होंने जंग-ए-टौंस में उनका विरोध किया था। उनकी सेनाओं
                  ने मधुबन, ककराडीह और फतहपुर के किलों को ध्वस्त किया और नत्थुपुर
                  की ओर बढ़ीं।
                </p>
                <p className="font-serif">
                  इस अभियान के दौरान नत्थुपुर के शासक दक्षिण भारत की यात्रा पर थे,
                  जिससे किला असुरक्षित रह गया। इस कठिन समय में महामंत्री शहीद मोहन पाण्डेय
                  ने किले की रक्षा की कमान संभाली। उन्होंने अद्भुत साहस और निष्ठा दिखाते
                  हुए शेष सैनिकों को मुग़ल सेना का मुकाबला करने के लिए प्रेरित किया।
                  हालांकि एक विशेष जाति के कुछ सैनिक भय के कारण भाग गए, मोहन पाण्डेय
                  अकेले लड़ते रहे। मुग़लों ने उन्हें बंदी बना लिया और राजा तथा खजाने
                  के बारे में जानकारी मांगी। अपने राज्य के प्रति भक्ति के कारण उन्होंने
                  कुछ भी नहीं बताया और लगातार एक सप्ताह तक कष्ट सहने के बाद उन्हें
                  जिंदा जला दिया गया।
                </p>
                <p className="font-serif mt-4">
                  शहीद होने से पहले मोहन पाण्डेय ने भाग गए सैनिकों और उनके वंश पर
                  श्राप दिया कि यदि उनका या उनके वंश का कोई भी सदस्य नत्थुपुर या
                  उसके आस-पास घर बनाएगा तो उसका कल्याण नहीं होगा और वह सपरिवार
                  नष्ट हो जाएगा। उनका ब्रह्मस्थान नत्थुपुर गाँव के पश्चिमी बागीचे
                  में स्थित है, जहाँ राजा नत्थ बहादुर मल्ल विशेन के वंशज उनकी पूजा
                  करते हैं। जंग-ए-टौंस और मोहन पाण्डेय के वीरतापूर्ण संघर्ष की
                  स्मृति आज भी बहादुरी, निष्ठा और स्वतंत्रता के उच्च मूल्य का प्रतीक
                  मानी जाती है।
                </p>
                <p className="font-serif mt-4 font-bold">
                  यह घटना मूल रूप से स्थानीय लोककथा के रूप में प्रचलित थी, जिसने
                  जंग और मोहन पाण्डेय की वीरता की स्मृति को संरक्षित किया। बाद में,
                  विस्तृत शोध के पश्चात <em>महताब नारायण मल्ल</em> ने इसे पुस्तक
                  <em>&quot;विशेन वंश दर्पण&quot;</em> में प्रकाशित किया।
                </p>
              </div>
              {/* <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
              <p className="font-serif">
                मझौली के किसी भी राजा का पहला लिखित उल्लेख
                <strong>
                  <em> तुजुक-ए-जहाँगीरी &nbsp;</em>
                </strong>
                में मिलता है, जहाँ राजा नत्थ मल का दो बार उल्लेख हुआ है — दोनों
                के बीच दस वर्षों का अंतर है। पहला उल्लेख दूसरी जमादि (22वीं
                तारीख) के दिनांक (14 अक्टूबर, 1606) का है, और दूसरा अमुर्दाद की
                5वीं तारीख (25 जुलाई, 1615) का है।
              </p>
              <p className="font-serif">
                पहला उल्लेख
                <strong> अज़ीज़ कोका का उल्लेखनीय पत्र </strong>
                शीर्षक वाले पृष्ठ पर मिलता है, जहाँ लिखा है:
              </p>
              <p className="font-serif mx-5 md:mx-10">
                <em>
                  &quot;मैंने नाथू मल(?), मंझोली के राजा को 5,000 रुपये
                  दिए।&quot;
                </em>
              </p>
              <p className="font-serif mt-4">
                दूसरा उल्लेख
                <strong> हिंदू राजा मुसलमान बना </strong>
                शीर्षक वाले पृष्ठ पर मिलता है, जहाँ लिखा है:
              </p>
              <p className="font-serif mx-5 md:mx-10">
                <em>
                  &quot;5वीं अमुर्दाद को, राजा नत्थमल की मनसबदारी जो 1,500
                  व्यक्तिगत और 1,100 घुड़सवार थी, उसमें 500 व्यक्तिगत और 100
                  घुड़सवार की वृद्धि की गई।&quot;
                </em>
              </p>
            </div> */}
            </>
          )}

          {/* right Image */}
          <div className="md:col-span-1">
            <div className="border-1 border-gray-300 p-2 flex flex-col items-center">
              <div className="flex flex-col md:flex-row justify-center">
                <Image
                  src="/assets/img/madhuban/mohanPandey.jpg"
                  alt="majhauli-img"
                  width={200}
                  height={50}
                  className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                  onClick={() =>
                    openModal({ url: "/assets/img/madhuban/mohanPandey.jpg" })
                  }
                />
              </div>

              <p>
                {language === "english"
                  ? "Martyrs' Memorial of Mohan Pandey, Commander-in-Chief of Raja Nath Mall's Army"
                  : "शहीद स्मारक : मोहन पांडेय, राजा नाथ मल्ल की सेना के प्रधान सेनापति।"}
              </p>
            </div>
          </div>
        </div>


        {/* Post Independence Period */}

        <div className="flex items-center gap-4 my-5">
          <div className="h-px flex-grow bg-gray-300"></div>
          <span className="text-gray-500 text-2xl whitespace-nowrap">
            {language === "english"
              ? "POST INDEPENDENCE PERIOD"
              : "स्वतंत्रता प्राप्ति के बाद का काल"}
          </span>
          <div className="h-px flex-grow bg-gray-300"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 my-3">
          {/* left Image */}
          <div className="md:col-span-1">
            <div className="border-1 border-gray-300 p-2 flex flex-col items-center">
              <div className="flex justify-center">
                <Image
                  src="/assets/img/madhuban/letter.jpg"
                  alt="madhuban-img"
                  width={200}
                  height={50}
                  className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                  onClick={() =>
                    openModal({
                      url: "/assets/img/madhuban/letter.jpg",
                      // estate: "Letter of Raja Awadesh Mall to Madhuban People",
                      // estateHindi:
                      //   "राजा अवधेश मल्ल का मधुबन की प्रजा के नाम पत्र।",
                    })
                  }
                />
              </div>

              <p>
                {language === "english"
                  ? "Letter of Raja Awadesh Mall to Madhuban People"
                  : "राजा अवधेश मल्ल का मधुबन की प्रजा के नाम पत्र।"}
              </p>
            </div>
          </div>

          {/* Bio */}
          {language === "english" ? (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
              <p className="font-serif">
                A letter was written by Raja Awadesh Mall, King of Majhauli Raj
                to the people of Madhuban during the Uttar Pradesh Legislative
                Assembly elections. In it, he introduces himself as a candidate
                from the Congress Party and expresses deep gratitude for the
                continued loyalty, sympathy, and support he has received from
                the people, who are described as part of the larger Majhauli
                royal family.
              </p>
              <p className="font-serif">
                He acknowledges the changing political landscape—particularly
                that the Congress Party is no longer in power—and openly states
                that the usual support in terms of transportation, workers, and
                finances is now limited. Therefore, he earnestly seeks
                assistance from the people in the form of financial, human, and
                logistical support. The letter becomes especially emotional and
                personal as he requests a public meeting in Madhuban, where he
                hopes to meet everyone and seek their blessings and guidance.
              </p>
              <p className="font-serif mt-4">
                Overall, the letter is not only a political communication but
                also reflects the tone of a family elder reaching out to his
                extended kin, filled with tradition, humility, and a sense of
                shared responsibility in the democratic process.
              </p>
            </div>
          ) : (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
              <p className="font-serif">
                यह पत्र राजा अवधेश मल्ल, जो मझौली राज के शासक थे, द्वारा उत्तर
                प्रदेश विधान सभा चुनावों के दौरान मधुबन की जनता को लिखा गया था।
                इसमें उन्होंने स्वयं को कांग्रेस पार्टी के उम्मीदवार के रूप में
                प्रस्तुत किया और मधुबनवासियों से प्राप्त निरंतर निष्ठा,
                सहानुभूति और समर्थन के लिए गहरी कृतज्ञता व्यक्त की। उन्होंने
                मधुबन की जनता को मझौली राजपरिवार का अभिन्न अंग बताया।
              </p>
              <p className="font-serif">
                उन्होंने बदलते राजनीतिक परिदृश्य को स्वीकार करते हुए यह स्पष्ट
                किया कि कांग्रेस पार्टी अब सत्ता में नहीं है और पहले की तरह
                परिवहन, कार्यकर्ता तथा आर्थिक सहायता जैसे संसाधन अब सीमित हैं।
                इसलिए उन्होंने जनता से वित्तीय, मानवीय और साधनात्मक रूप में
                सहयोग की अपील की। यह पत्र उस समय और अधिक भावनात्मक व आत्मीय बन
                जाता है जब वह मधुबन में एक सार्वजनिक बैठक आयोजित करने का आग्रह
                करते हैं, जहाँ वे सभी से मिलकर आशीर्वाद और मार्गदर्शन प्राप्त
                करना चाहते हैं।
              </p>
              <p className="font-serif mt-4">
                कुल मिलाकर, यह पत्र केवल एक राजनीतिक संदेश नहीं है, बल्कि यह एक
                परिवार के बुजुर्ग द्वारा अपने विस्तारित परिजनों से किया गया
                आत्मीय संवाद भी है, जिसमें परंपरा, विनम्रता और लोकतांत्रिक
                प्रक्रिया में साझा जिम्मेदारी की भावना समाहित है।
              </p>
            </div>
          )}
        </div>

        <FamilyTreeStructure
          familyData={language === "english" ? familyData : familyDataHindi}
        />

        {/* Personal Details Table */}
        {/* <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Personal Details</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <tbody>
                <tr>
                  <th className="border px-4 py-2 text-left">Name</th>
                  <td className="border px-4 py-2">
                    Brij Bhushan Sharan Singh
                  </td>
                </tr>
                <tr>
                  <th className="border px-4 py-2 text-left">Father’s Name</th>
                  <td className="border px-4 py-2">
                    Shri Jagdamba Sharan Singh
                  </td>
                </tr>
                <tr>
                  <th className="border px-4 py-2 text-left">Date of Birth</th>
                  <td className="border px-4 py-2">08 January 1957</td>
                </tr>
                <tr>
                  <th className="border px-4 py-2 text-left">Place of Birth</th>
                  <td className="border px-4 py-2">Gonda, Uttar Pradesh</td>
                </tr>
                <tr>
                  <th className="border px-4 py-2 text-left">Marital Status</th>
                  <td className="border px-4 py-2">Married</td>
                </tr>
                <tr>
                  <th className="border px-4 py-2 text-left">Spouse</th>
                  <td className="border px-4 py-2">Ketki Devi Singh</td>
                </tr>
                <tr>
                  <th className="border px-4 py-2 text-left">Children</th>
                  <td className="border px-4 py-2">2 sons and 1 daughter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> */}

        {/* Positions Held Table */}
        {/* <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Positions Held</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2 text-left">Year</th>
                  <th className="border px-4 py-2 text-left">Position</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">1991</td>
                  <td className="border px-4 py-2">
                    Elected to 10th Lok Sabha (Gonda)
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">1999</td>
                  <td className="border px-4 py-2">
                    Elected to 13th Lok Sabha (Balrampur)
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">2004</td>
                  <td className="border px-4 py-2">
                    Elected to 14th Lok Sabha (Kaiserganj)
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">2009</td>
                  <td className="border px-4 py-2">
                    Re-elected to 15th Lok Sabha (Kaiserganj)
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">2014</td>
                  <td className="border px-4 py-2">
                    Re-elected to 16th Lok Sabha (Kaiserganj)
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">2019</td>
                  <td className="border px-4 py-2">
                    Re-elected to 17th Lok Sabha (Kaiserganj)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> */}
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
