"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import Banner from "../Banner";
import FamilyTreeStructure from "../FamilyTreeStructure";
import LanguageContext from "@/context/languageContext";
import ImageModal from "../ImageModel";

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
                openModal({ url: "/assets/img/madhuban/madhuban1.jpg" })
              }
            />
            <div className="flex items-center justify-center">
              <h2>
                {language === "english"
                  ? "Ruins of Raja Fateh Bahadur Mall's Haveli"
                  : "राजा फतेह बहादुर मल्ल की हवेली के अवशेष"}{" "}
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
                descendants took on the surname “Mall”, and many settled across
                eastern UP — especially in Madhuban, Mau, Gorakhpur and Deoria,
                and villages like Hasanpur, Bahrampur, Jajoli, Ahirauli, and
                Parshurampur.
              </p>
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
                वंशजों ने “मल्ल” उपनाम को अपनाया और वे पूर्वी उत्तर प्रदेश के
                विभिन्न क्षेत्रों में बस गए — विशेष रूप से मधुबन, मऊ, गोरखपुर,
                देवरिया और हसनपुर, बहारामपुर, जाजौली, अहरौली और परशुरामपुर जैसे
                गाँवों में।
              </p>
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
              <div className="flex justify-center">
                <Image
                  src="/assets/img/majhauli/proof3.png"
                  alt="majhauli-img"
                  width={200}
                  height={50}
                  className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                  onClick={() =>
                    openModal({ url: "/assets/img/majhauli/proof3.png" })
                  }
                />
                <Image
                  src="/assets/img/majhauli/proof4.png"
                  alt="majhauli-img"
                  width={200}
                  height={50}
                  className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                  onClick={() =>
                    openModal({ url: "/assets/img/majhauli/proof4.png" })
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
              </p>{" "}
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
                    openModal({ url: "/assets/img/madhuban/letter.jpg" })
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
