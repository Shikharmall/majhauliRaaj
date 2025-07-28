"use client";
import React, { useContext } from "react";
import Image from "next/image";
import Banner from "../Banner";
import FamilyTreeStructure from "../FamilyTreeStructure";
import LanguageContext from "@/context/languageContext";

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
  return (
    <div>
      <Banner
        title={language === "english" ? "Madhuban Estate" : "मधुबन रियासत"}
      />

      {/* Main Content */}
      <main className="container mx-auto px-5 md:px-20 py-5 md:py-10">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Image */}
          <div className="md:col-span-1 ">
            <Image
              src="/assets/img/madhuban/madhuban1.jpg"
              alt="madhuban-img"
              width={600}
              height={400}
              className="rounded-lg shadow-lg border-3 border-gray-300"
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
                Raja Madhav Malla had two sons: Raja Nath Malla and Raja Ajay
                Bahadur Malla (also known as Fateh Bahadur Malla). Their
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
    </div>
  );
}
