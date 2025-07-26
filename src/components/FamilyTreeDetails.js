"use client";
import React, { useContext } from "react";
import Banner from "./Banner";
import FamilyTreeStructure from "./FamilyTreeStructure";
import LanguageContext from "@/context/languageContext";

const familyData = {
  name: "Raja Raghuvansh Mall",
  isKing: true,
  children: [
    {
      name: "Raja Ratna Mall",
      isKing: true,
      children: [
        {
          name: "Raja Ram Mall",
          isKing: true,
          children: [
            {
              name: "Raja Nrip Mall",
              isKing: true,
              children: [
                {
                  name: "Raja Harishchandra Mall",
                  isKing: true,
                  children: [
                    {
                      name: "Maharaja Dev Mall",
                      isKing: true,
                      children: [
                        {
                          name: "Raja Prasad Mall",
                          isKing: true,
                          children: [
                            {
                              name: "Maharaja Bheem Mall",
                              isKing: true,
                              children: [
                                {
                                  name: "Raja Narayan Mall",
                                  isKing: true,
                                  children: [
                                    {
                                      name: "Raja Roop Mall",
                                      isKing: true,
                                      children: [
                                        {
                                          name: "Raja Vikramaditya Mall",
                                          isKing: true,
                                          children: [
                                            {
                                              name: "Raja Bodh Mall",
                                              isKing: true,
                                              children: [
                                                {
                                                  name: "Bhavani Mall",
                                                  children: [
                                                    {
                                                      name: "Bheem Mall II",
                                                      children: [],
                                                    },
                                                  ],
                                                },
                                                {
                                                  name: "Lakshmi Mall",
                                                  children: [
                                                    {
                                                      name: "Raja Shiv Mall",
                                                      isKing: true,
                                                      children: [
                                                        {
                                                          name: "Raja Ajit Mall(Rani Dilraaj kuwaari)",
                                                          isKing: true,
                                                          children: [
                                                            {
                                                              name: "Tej Mall(adopted son of Babu Sarvajeet Mall)",
                                                              children: [],
                                                            },
                                                          ],
                                                        },
                                                      ],
                                                    },
                                                    {
                                                      name: "Babu Krishna Prasad Mall",
                                                      children: [
                                                        {
                                                          name: "Babu Sarvajeet Mall",
                                                          children: [
                                                            {
                                                              name: "Tej Mall",
                                                              children: [],
                                                            },
                                                          ],
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                },
                                                {
                                                  name: "Anand Mall",
                                                  children: [
                                                    {
                                                      name: "Govind Mall",
                                                      children: [
                                                        {
                                                          name: "Prithvi Mall",
                                                          children: [
                                                            {
                                                              name: "Pratap Mall",
                                                              children: [],
                                                            },
                                                            {
                                                              name: "Juba Mall",
                                                              children: [],
                                                            },
                                                            {
                                                              name: "Haripal Mall",
                                                              children: [],
                                                            },
                                                            {
                                                              name: "Kaniyha Mall",
                                                              children: [],
                                                            },
                                                          ],
                                                        },
                                                      ],
                                                    },
                                                    {
                                                      name: "Indra Mall",
                                                      children: [],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                        {
                                          name: "Babu Madhav Mall II (Ancestors of Mahen)",
                                          children: [],
                                        },
                                      ],
                                    },
                                    {
                                      name: "Raja Chatur Mall",
                                      isKing: true,
                                      children: [],
                                    },
                                    {
                                      name: "Babu Chattar Shahi",
                                      children: [],
                                    },
                                  ],
                                },
                                {
                                  name: "Babu Ram Shahi",
                                  children: [],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: "Raja Madhav Mall (Madhuban Estate)",
                          isKing: true,
                          children: [
                            {
                              name: "Raja Nath Mall",
                              isKing: true,
                              children: [],
                            },
                            {
                              name: "Ajit Mall(Fateh Bahadur Mall)",
                              children: [],
                            },
                          ],
                        },
                        {
                          name: "Raja Rai Mall(Narharpur Estate)",
                          isKing: true,
                          children: [],
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "Raja Pratap Mall(Gonda)",
                  isKing: true,
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Raja Roop Mall",
      isKing: true,
      children: [],
    },
  ],
};

const familyDataHindi = {
  name: "राजा रघुवंश मल्ल",
  isKing: true,
  children: [
    {
      name: "राजा रत्न मल्ल",
      isKing: true,
      children: [
        {
          name: "राजा राम मल्ल",
          isKing: true,
          children: [
            {
              name: "राजा नृप मल्ल",
              isKing: true,
              children: [
                {
                  name: "राजा हरिश्चंद्र मल्ल",
                  isKing: true,
                  children: [
                    {
                      name: "महाराजा देव मल्ल",
                      isKing: true,
                      children: [
                        {
                          name: "राजा प्रसाद मल्ल",
                          isKing: true,
                          children: [
                            {
                              name: "महाराजा भीम मल्ल",
                              isKing: true,
                              children: [
                                {
                                  name: "राजा नारायण मल्ल",
                                  isKing: true,
                                  children: [
                                    {
                                      name: "राजा रूप मल्ल",
                                      isKing: true,
                                      children: [
                                        {
                                          name: "राजा विक्रमादित्य मल्ल",
                                          isKing: true,
                                          children: [
                                            {
                                              name: "राजा बोध मल्ल",
                                              isKing: true,
                                              children: [
                                                {
                                                  name: "भावानी मल्ल",
                                                  children: [
                                                    {
                                                      name: "भीम मल्ल द्वितीय",
                                                      children: [],
                                                    },
                                                  ],
                                                },
                                                {
                                                  name: "लक्ष्मी मल्ल",
                                                  children: [
                                                    {
                                                      name: "राजा शिव मल्ल",
                                                      isKing: true,
                                                      children: [
                                                        {
                                                          name: "राजा अजीत मल्ल (रानी दिलराज कुवाँरी)",
                                                          isKing: true,
                                                          children: [
                                                            {
                                                              name: "तेज मल्ल (बाबू सर्वजीत मल्ल के दत्तक पुत्र)",
                                                              children: [],
                                                            },
                                                          ],
                                                        },
                                                      ],
                                                    },
                                                    {
                                                      name: "बाबू कृष्ण प्रसाद मल्ल",
                                                      children: [
                                                        {
                                                          name: "बाबू सर्वजीत मल्ल",
                                                          children: [
                                                            {
                                                              name: "तेज मल्ल",
                                                              children: [],
                                                            },
                                                          ],
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                },
                                                {
                                                  name: "आनंद मल्ल",
                                                  children: [
                                                    {
                                                      name: "गोविंद मल्ल",
                                                      children: [
                                                        {
                                                          name: "पृथ्वी मल्ल",
                                                          children: [
                                                            {
                                                              name: "प्रताप मल्ल",
                                                              children: [],
                                                            },
                                                            {
                                                              name: "जुबा मल्ल",
                                                              children: [],
                                                            },
                                                            {
                                                              name: "हरिपाल मल्ल",
                                                              children: [],
                                                            },
                                                            {
                                                              name: "कनिहा मल्ल",
                                                              children: [],
                                                            },
                                                          ],
                                                        },
                                                      ],
                                                    },
                                                    {
                                                      name: "इंद्र मल्ल",
                                                      children: [],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                        {
                                          name: "बाबू माधव मल्ल द्वितीय (महेन के पूर्वज)",
                                          children: [],
                                        },
                                      ],
                                    },
                                    {
                                      name: "राजा चतुर मल्ल",
                                      isKing: true,
                                      children: [],
                                    },
                                    {
                                      name: "बाबू चत्तर शाही",
                                      children: [],
                                    },
                                  ],
                                },
                                {
                                  name: "बाबू राम शाही",
                                  children: [],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: "राजा माधव मल्ल (मधुबन एस्टेट)",
                          isKing: true,
                          children: [
                            {
                              name: "राजा नाथ मल्ल",
                              isKing: true,
                              children: [],
                            },
                            {
                              name: "अजीत मल्ल (फ़तेह बहादुर मल्ल)",
                              children: [],
                            },
                          ],
                        },
                        {
                          name: "राजा राय मल्ल (नरहरपुर एस्टेट)",
                          isKing: true,
                          children: [],
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "राजा प्रताप मल्ल (गोंडा)",
                  isKing: true,
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "राजा रूप मल्ल",
      isKing: true,
      children: [],
    },
  ],
};

export default function FamilyTreeDetails() {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      <Banner
        title={
          language === "english" ? "Royal Family Tree" : "राजपरिवार वंशवृक्ष"
        }
      />
      <FamilyTreeStructure
        familyData={language === "english" ? familyData : familyDataHindi}
      />
    </div>
  );
}
