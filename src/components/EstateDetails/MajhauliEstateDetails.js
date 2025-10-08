"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import Banner from "../common/Banner";
import FamilyTreeStructure from "../common/FamilyTreeStructure";
import LanguageContext from "@/context/languageContext";
import COLORS from "@/utils/color";
import ImageModal from "../common/ImageModel";

const familyData1 = {
  name: "Majhauli Raj",
  isExtra: "(Deoria)",
  children: [
    {
      name: "Majhauli Raj",
      isExtra: "(continues)",
      children: [
        {
          name: "Majhauli Raj",
          isExtra: "(continues)",
          children: [
            {
              name: "Majhauli Raj",
              isExtra: "(continues)",
              children: [],
            },
            {
              name: "Madhuban Estate",
              isExtra: "(Madhuban)",
              children: [],
            },
            {
              name: "Narharpur Estate",
              isExtra: "(Narharpur)",
              children: [],
            },
          ],
        },
        {
          name: "Gonda Estate",
          isExtra: "(Gonda)",
          children: [
            {
              name: "Gonda Estate",
              isExtra: "(continues)",
              children: [
                {
                  name: "Gonda Estate",
                  isExtra: "(continues)",
                  children: [],
                },
                {
                  name: "Bhinga Estate",
                  isExtra: "Oudh (Bahraich Dist.)",
                  children: [],
                },
              ],
            },
            {
              name: "Mankapur Estate",
              isExtra: "Uttar Pradesh (Gonda Dist.)",
              children: [],
            },
          ],
        },
      ],
    },
    {
      name: "Kala Kankar Estate",
      isExtra: "Oudh, Uttar Pradesh",
      children: [
        {
          name: "Kala Kankar Estate",
          isExtra: "(continues)",
          children: [],
        },
        {
          name: "Bhadri Estate",
          isExtra: "Oudh (Pratapgarh Dist.)",
          children: [],
        },
      ],
    },
  ],
};

const familyData1Hindi = {
  name: "मझौली राज",
  isExtra: "(देवरिया)",
  children: [
    {
      name: "मझौली राज",
      isExtra: "(जारी)",
      children: [
        {
          name: "मझौली राज",
          isExtra: "(जारी)",
          children: [
            {
              name: "मझौली राज",
              isExtra: "(जारी)",
              children: [],
            },
            {
              name: "मधुबन रियासत",
              isExtra: "(मधुबन)",
              children: [],
            },
            {
              name: "नरहरपुर रियासत",
              isExtra: "(नरहरपुर)",
              children: [],
            },
          ],
        },
        {
          name: "गोंडा रियासत",
          isExtra: "(गोंडा)",
          children: [
            {
              name: "गोंडा रियासत",
              isExtra: "(जारी)",
              children: [
                {
                  name: "गोंडा रियासत",
                  isExtra: "(जारी)",
                  children: [],
                },
                {
                  name: "भिंगा रियासत",
                  isExtra: "अवध (बहराइच ज़िला)",
                  children: [],
                },
              ],
            },
            {
              name: "मनकापुर रियासत",
              isExtra: "उत्तर प्रदेश (गोंडा ज़िला)",
              children: [],
            },
          ],
        },
      ],
    },
    {
      name: "कालाकांकर रियासत",
      isExtra: "अवध, उत्तर प्रदेश",
      children: [
        {
          name: "कालाकांकर रियासत",
          isExtra: "(जारी)",
          children: [],
        },
        {
          name: "भदरी रियासत",
          isExtra: "अवध (प्रतापगढ़ ज़िला)",
          children: [],
        },
      ],
    },
  ],
};

const familyData = {
  name: "Raja Vishwa Sen",
  isKing: true,
  children: [
    {
      name: "",
      isInfinite: true,
      children: [
        {
          name: "Raja Raghuvansh Mall",
          isKing: true,
          children: [
            {
              name: "Raja Ratan Mall",
              isExtra: "(Majhauli)",
              isKing: true,
              children: [
                {
                  name: "Raja Nrip Mall",
                  isKing: true,
                  children: [
                    {
                      name: "Raja Harishchandra Mall",
                      isExtra: "(Majhauli)",
                      isKing: true,
                      children: [
                        {
                          name: "Maharaja Dev Mall",
                          isKing: true,
                          children: [
                            {
                              name: "Raja Prasad Mall",
                              isExtra: "(Majhauli)",
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
                                                  isExtra:
                                                    "(after him something error)",
                                                  isKing: true,
                                                  children: [
                                                    {
                                                      name: "Raja Shiv Mall",
                                                      isKing: true,
                                                      children: [
                                                        {
                                                          name: "Raja Ajit Mall",
                                                          isKing: true,
                                                          children: [
                                                            {
                                                              name: "Raja Tej Mall",
                                                              isKing: true,
                                                              children: [
                                                                {
                                                                  name: "Raja Udaynarayan Mall",
                                                                  isKing: true,
                                                                  children: [
                                                                    {
                                                                      name: "",
                                                                      isInfinite: true,
                                                                      children:
                                                                        [
                                                                          {
                                                                            name: "Raja Kaushal Kishore Mall",
                                                                            isKing: true,
                                                                            children:
                                                                              [
                                                                                {
                                                                                  name: "Raani Shyaam Sundari Ku.",
                                                                                  isKing: true,
                                                                                  children:
                                                                                    [
                                                                                      {
                                                                                        name: "Raja Inderjeet Mall",
                                                                                        isKing: true,
                                                                                        children:
                                                                                          [
                                                                                            {
                                                                                              name: "Raja Balbhadra Mall",
                                                                                              isKing: true,
                                                                                              children:
                                                                                                [
                                                                                                  {
                                                                                                    name: "Raja Awadhesh Mall",
                                                                                                    isKing: true,
                                                                                                    children:
                                                                                                      [
                                                                                                        {
                                                                                                          name: "Majhauli Estate merge with Republic of India(1947)",
                                                                                                          children:
                                                                                                            [],
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
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              name: "Raja Madhav Mall",
                              isExtra: "(Madhuban)",
                              isKing: true,
                              children: [
                                {
                                  name: "Raja Nath Mall",
                                  isKing: true,
                                  children: [],
                                },
                              ],
                            },
                            {
                              name: "Raja RaiMall",
                              isExtra: "(Narharpur)",
                              isKing: true,
                              children: [
                                {
                                  name: "",
                                  isInfinite: true,
                                  children: [
                                    {
                                      name: "Raja Hari Prasad Mall",
                                      isExtra: "(Martyr - 1857)",
                                      isKing: true,
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
                    {
                      name: "Raja Ram Pratap Mall",
                      isExtra: "(Gonda)",
                      isKing: true,
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              name: "Babu Roop Mall",
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
                              isKing: true,
                              children: [
                                {
                                  name: "",
                                  isInfinite: true,
                                  children: [
                                    {
                                      name: "Rai SABAL SHAH",
                                      isKing: true,
                                      children: [
                                        {
                                          name: "Rai BIKRAM SHAH",
                                          isKing: true,
                                          children: [
                                            {
                                              name: "Rai CHHATAR SINGH",
                                              isKing: true,
                                              children: [
                                                {
                                                  name: "Rai RAM SINGH",
                                                  isKing: true,
                                                  children: [
                                                    {
                                                      name: "Rai GAHARWAR SINGH",
                                                      isKing: true,
                                                      children: [
                                                        {
                                                          name: "Rai DALJIT SINGH",
                                                          isKing: true,
                                                          children: [
                                                            {
                                                              name: "Rai ZALIM SINGH",
                                                              isKing: true,
                                                              children: [
                                                                {
                                                                  name: "Rai DALJIT SINGH",
                                                                  isKing: true,
                                                                  children: [
                                                                    {
                                                                      name: "Rai JAGMOHAN SINGH",
                                                                      isKing: true,
                                                                      children:
                                                                        [
                                                                          {
                                                                            name: "Rai BISHNATH SINGH",
                                                                            isKing: true,
                                                                            children:
                                                                              [
                                                                                {
                                                                                  name: "Rai JAGAT BAHADUR SINGH",
                                                                                  isKing: true,
                                                                                  children:
                                                                                    [
                                                                                      {
                                                                                        name: "Rai SARABJIT SINGH",
                                                                                        isKing: true,
                                                                                        children:
                                                                                          [
                                                                                            {
                                                                                              name: "Rai KRISHAN PRASAD SINGH",
                                                                                              isKing: true,
                                                                                              children:
                                                                                                [
                                                                                                  {
                                                                                                    name: "Raja BAJRANG BAHADUR SINGH",
                                                                                                    isKing: true,
                                                                                                    children:
                                                                                                      [
                                                                                                        {
                                                                                                          name: "Raja UDAI PRATAP SINGH",
                                                                                                          isKing: true,
                                                                                                          children:
                                                                                                            [],
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
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
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
                                                                      children:
                                                                        [
                                                                          {
                                                                            name: "Lal Berisaat",
                                                                            isKing: true,
                                                                            children:
                                                                              [
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
};

const familyDataHindi = {
  name: "राजा विश्व सेन",
  isKing: true,
  children: [
    {
      name: "",
      isInfinite: true,
      children: [
        {
          name: "राजा रघुवंश मल्ल",
          isKing: true,
          children: [
            {
              name: "राजा रतन मल्ल",
              isExtra: "(मझौली)",
              isKing: true,
              children: [
                {
                  name: "राजा नृप मल्ल",
                  isKing: true,
                  children: [
                    {
                      name: "राजा हरिश्चन्द्र मल्ल",
                      isExtra: "(मझौली)",
                      isKing: true,
                      children: [
                        {
                          name: "महाराजा देव मल्ल",
                          isKing: true,
                          children: [
                            {
                              name: "राजा प्रसाद मल्ल",
                              isExtra: "(मझौली)",
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
                                                  isExtra:
                                                    "(इसके बाद कुछ त्रुटि)",
                                                  isKing: true,
                                                  children: [
                                                    {
                                                      name: "राजा शिव मल्ल",
                                                      isKing: true,
                                                      children: [
                                                        {
                                                          name: "राजा अजीत मल्ल",
                                                          isKing: true,
                                                          children: [
                                                            {
                                                              name: "राजा तेज मल्ल",
                                                              isKing: true,
                                                              children: [
                                                                {
                                                                  name: "राजा उदयनारायण मल्ल",
                                                                  isKing: true,
                                                                  children: [
                                                                    {
                                                                      name: "",
                                                                      isInfinite: true,
                                                                      children:
                                                                        [
                                                                          {
                                                                            name: "राजा कौशल किशोर मल्ल",
                                                                            isKing: true,
                                                                            children:
                                                                              [
                                                                                {
                                                                                  name: "रानी श्याम सुंदरी कुमारी",
                                                                                  isKing: true,
                                                                                  children:
                                                                                    [
                                                                                      {
                                                                                        name: "राजा इन्द्रजीत मल्ल",
                                                                                        isKing: true,
                                                                                        children:
                                                                                          [
                                                                                            {
                                                                                              name: "राजा बलभद्र मल्ल",
                                                                                              isKing: true,
                                                                                              children:
                                                                                                [
                                                                                                  {
                                                                                                    name: "राजा अवधेश मल्ल",
                                                                                                    isKing: true,
                                                                                                    children:
                                                                                                      [
                                                                                                        {
                                                                                                          name: "मझौली रियासत का भारत गणराज्य में विलय (1947)",
                                                                                                          children:
                                                                                                            [],
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
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  name: "राजा माधव मल्ल",
                                  isExtra: "(मधुबन)",
                                  isKing: true,
                                  children: [
                                    {
                                      name: "राजा नत्थ मल्ल",
                                      isKing: true,
                                      children: [],
                                    },
                                  ],
                                },
                                {
                                  name: "राजा राय मल्ल",
                                  isExtra: "(नरहरपुर)",
                                  isKing: true,
                                  children: [
                                    {
                                      name: "",
                                      isInfinite: true,
                                      children: [
                                        {
                                          name: "राजा हरि प्रसाद मल्ल",
                                          isExtra: "(1857 के शहीद)",
                                          isKing: true,
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
                    },
                    {
                      name: "राजा राम प्रताप मल्ल",
                      isExtra: "(गोंडा)",
                      isKing: true,
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              name: "बाबू रूप मल्ल",
              isKing: true,
              children: [
                {
                  name: "राय होम मल्ल",
                  isExtra: "(कालाकांकर)",
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
                              isKing: true,
                              children: [
                                {
                                  name: "",
                                  isInfinite: true,
                                  children: [
                                    {
                                      name: "राय सबल शाह",
                                      isKing: true,
                                      children: [
                                        {
                                          name: "राय बिक्रम शाह",
                                          isKing: true,
                                          children: [
                                            {
                                              name: "राय छत्तर सिंह",
                                              isKing: true,
                                              children: [
                                                {
                                                  name: "राय राम सिंह",
                                                  isKing: true,
                                                  children: [
                                                    {
                                                      name: "राय गहरवार सिंह",
                                                      isKing: true,
                                                      children: [
                                                        {
                                                          name: "राय दलजीत सिंह",
                                                          isKing: true,
                                                          children: [
                                                            {
                                                              name: "राय ज़ालिम सिंह",
                                                              isKing: true,
                                                              children: [
                                                                {
                                                                  name: "राय दलजीत सिंह",
                                                                  isKing: true,
                                                                  children: [
                                                                    {
                                                                      name: "राय जगमोहन सिंह",
                                                                      isKing: true,
                                                                      children:
                                                                        [
                                                                          {
                                                                            name: "राय बिशनाथ सिंह",
                                                                            isKing: true,
                                                                            children:
                                                                              [
                                                                                {
                                                                                  name: "राय जगत बहादुर सिंह",
                                                                                  isKing: true,
                                                                                  children:
                                                                                    [
                                                                                      {
                                                                                        name: "राय सरबजीत सिंह",
                                                                                        isKing: true,
                                                                                        children:
                                                                                          [
                                                                                            {
                                                                                              name: "राय कृषण प्रसाद सिंह",
                                                                                              isKing: true,
                                                                                              children:
                                                                                                [
                                                                                                  {
                                                                                                    name: "राजा बजरंग बहादुर सिंह",
                                                                                                    isKing: true,
                                                                                                    children:
                                                                                                      [
                                                                                                        {
                                                                                                          name: "राजा उदय प्रताप सिंह",
                                                                                                          isKing: true,
                                                                                                          children:
                                                                                                            [],
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
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              name: "बाबू राम",
                              isKing: true,
                              children: [
                                {
                                  name: "राय अस्करन",
                                  isKing: true,
                                  children: [
                                    {
                                      name: "रूद्र प्रताप",
                                      isKing: true,
                                      children: [
                                        {
                                          name: "टोडल (टोडर मल्ल)",
                                          isKing: true,
                                          children: [
                                            {
                                              name: "धारू शाह",
                                              isKing: true,
                                              children: [
                                                {
                                                  name: "बरसल राय",
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
                                                                      children:
                                                                        [
                                                                          {
                                                                            name: "लाल बेरीसात",
                                                                            isKing: true,
                                                                            children:
                                                                              [
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
};

export default function MajhauliEstateDetails() {
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
        title={language === "english" ? "Majhauli Estate" : "मझौली राज"}
      />

      <main className="container mx-auto px-5 md:px-20 py-5 md:py-10">
        {/* Intoduction */}

        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Image */}
          <div className="md:col-span-1">
            <Image
              src="/assets/img/majhauli/majhauliraj7.jpeg"
              alt="majhauli-img"
              width={600}
              height={400}
              className="rounded-lg shadow-lg border-3 border-gray-300 cursor-pointer"
              onClick={() =>
                openModal({ url: "/assets/img/majhauli/majhauliraj7.jpeg" })
              }
            />
            <br />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7153.794212572512!2d83.95687574101336!3d26.29743542657846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993b53248562115%3A0xcf26bb1cd7634614!2sMajhauli%20Raj%2C%20Uttar%20Pradesh%20274506!5e0!3m2!1sen!2sin!4v1753097706026!5m2!1sen!2sin"
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
                Majhauli Raj was the seat of an eponymous Bisen/Visen feudal
                estate known as the Majhauli Raj, which is said to have been
                founded around 1100 to 1300 CE. King Vishwa Sen (Estimated
                Around 1000 to 1200 BCE), one of the sole king of Malla Desh or
                Malla Bhumi or Malla Rastra (Later known as Malla Mahajanpada),
                had ruled prior to Mahajanpad Era from Kushinagar as capital of
                eastern Koshala.Later one of descendant of King Vishwa Sen
                (i.e.most probably 86th generation) King Bhim Malla went to
                conquer the pargana of Salempur, Uttar Pradesh and Majhauli,
                where he founded a fort and established the Majhauli Raj around
                1100 to 1300 CE.
              </p>
              <p className="font-serif">
                As the kings of Majhauli Raj were descendants of King Vishwasen
                of Malla Mahajanpad, they stills put this name as a surname i.e.
                Vishen/Bisen short form of Vishwasen in their names. They are
                Suryavanshi Rajput and claim to be sons of God Laxmana from his
                one of the sons Chandraketu (had got title Malla for being
                extraordinary wrestler or fighter of that time) who was ruler of
                Malla Rastra or Malla Mahajanpada in ancient India. Later many
                kings who were of Majhauli Kingdom established many estates of
                names Manakpur (Estate), Bhadri (Estate), Raja Madhav Mall
                (Madhuban), Kalakankar (Estate) and many more in North India.
              </p>
              <>
                {/* <p className="font-serif font-bold">
                <strong>
                  <em> Debunked Origin Myth (due to lack of evidence) written by Lal Khadag Bahadur Mall</em>
                </strong>
              </p>
              <div className="relative p-6 bg-white font-serif">
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                   text-gray-600 text-5xl font-bold opacity-20 select-none pointer-events-none 
                   rotate-[-45deg]">
                  DEBUNKED
                </span>
                <p className="relative z-10">
                  One branch of this dynasty comes from a founder named Mayyur who
                  has been variously described as a Brahmin, Bhumihar or even a
                  Bhat. He had come from Kashi to Kushinara had children with four
                  wives: One Brahmin, one Malla princess (name may be
                  Suryaprabha), one more Bhumihar, as well as one Rajput. His son
                  from his Bhumihar wife named King Bir Sen (Estimated 600 BCE)
                  founder of Baghochia Dynasty and his descendants established
                  Bans Gaon Estate (Dileepnagar Estate), Hathwa Raj and Tamkuhi
                  raj and started Bhumihar branch. One son from his Malla
                  princess name King Vishwasen founder of Vishwasen Rajput dynasty
                  and his descendant (probably 86th generation) King Bhim Dev
                  stablished Majhuli Raj, One son from his Brahmin wife went on to
                  become the ancestor of the Misra Brahmins; and the son from his
                  Kurmi wife went on to found the Kakradih estate.
                </p>
              </div> */}
              </>
            </div>
          ) : (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
              <p className="font-serif">
                मझौली राज एक बिसेन (या विसेन) सामंतवादी रियासत का मुख्य केंद्र
                था, जिसकी स्थापना लगभग 1100 से 1300 ईस्वी के बीच मानी जाती है।
                राजा विश्वसेन (अनुमानित काल: 1000 से 1200 ईसा पूर्व) मल्ल देश
                (जिसे मल्ल भूमि या मल्ल राष्ट्र कहा जाता है, बाद में मल्ल
                महाजनपद) के एकमात्र प्रमुख शासकों में से एक थे। उन्होंने महाजनपद
                युग से पूर्व कुशीनगर (पूर्वी कोशल की राजधानी) से शासन किया था।
                बाद में उनके एक वंशज (संभवत: 86वीं पीढ़ी में) राजा भीम मल्ल ने
                उत्तर प्रदेश के सलेमपुर परगना और मझौली को जीत लिया, जहाँ
                उन्होंने एक किला बनवाया और लगभग 1100 से 1300 ईस्वी के बीच मझौली
                राज की स्थापना की।
              </p>
              <p className="font-serif">
                चूंकि मझौली राज के राजा मल्ल महाजनपद के राजा विश्वसेन के वंशज
                थे, इसलिए वे आज भी अपने नाम के साथ विश्वेन/बिसेन (जो कि विश्वसेन
                का संक्षिप्त रूप है) उपनाम का प्रयोग करते हैं। वे सूर्यवंशी
                राजपूत माने जाते हैं और स्वयं को भगवान लक्ष्मण के पुत्र
                चंद्रकेतु (जिन्हें उस समय की कुश्ती और युद्ध-कला में प्रवीण होने
                के कारण मल्ल की उपाधि मिली थी) की संतान मानते हैं। बाद में मझौली
                राज के कई राजाओं ने भारत के उत्तरी भागों में कई रियासतों की
                स्थापना की जैसे — मनकापुर (एस्टेट), भदरी (एस्टेट), राजा माधव
                मल्ल (मधुबन), कालाकांकर (एस्टेट) आदि।
              </p>
              <>
                {/* <p className="font-serif font-bold">
                <strong>
                  <em>लाल खड़ग बहादुर मल्ल द्वारा लिखा गया (प्रमाणों के अभाव में) खंडित मूल उत्पत्ति मिथक</em>
                </strong>
              </p>
              <div className="relative p-6 bg-white font-serif">
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                   text-gray-600 text-5xl font-bold opacity-20 select-none pointer-events-none 
                   rotate-[-45deg]">
                  खण्डित
                </span>
                <p className="relative z-10">
                  इस वंश की एक शाखा के संस्थापक का नाम मय्यूर था, जिन्हें कभी
                  ब्राह्मण, भूमिहार या भट्ट के रूप में वर्णित किया गया है। वह काशी
                  से कुशीनगर आए थे और उनकी चार पत्नियाँ थीं: एक ब्राह्मण, एक मल्ल
                  राजकुमारी (संभवत: नाम सूर्यप्रभा), एक भूमिहार, और एक राजपूत।
                  उनकी भूमिहार पत्नी से जन्मे पुत्र राजा वीरसेन (अनुमानित काल: 600
                  ईसा पूर्व) ने बघोचिया वंश की स्थापना की और उनके वंशजों ने
                  बांसगांव (दिलीपनगर) एस्टेट, हथुआ राज और तमकुही राज की स्थापना की
                  तथा भूमिहार शाखा की शुरुआत की। मल्ल राजकुमारी से जन्मे पुत्र
                  राजा विश्वसेन ने विश्वसेन राजपूत वंश की नींव रखी और उनके वंशज
                  (संभवत: 86वीं पीढ़ी में) राजा भीम देव ने मझौली राज की स्थापना
                  की। ब्राह्मण पत्नी से उत्पन्न पुत्र मिश्रा ब्राह्मणों के पूर्वज
                  बने और कुर्मी पत्नी से उत्पन्न पुत्र ने काकरडिह एस्टेट की
                  स्थापना की।
                </p>
              </div> */}
              </>
            </div>
          )}
        </div>

        {/* <div className="flex justify-center items-center">
          <div className="inline-block relative mb-4 mt-5">
            <h2
              className="text-2xl font-semibold font-serif"
              style={{ color: COLORS.primary }}
            >
              {language === "english" ? "MUGHAL PERIOD" : "मुग़ल काल"}
            </h2>
            <div
              className="absolute left-0 top-8 w-1/2 h-1"
              style={{ backgroundColor: COLORS.secondary }}
            ></div>
          </div>
        </div> */}

        {/* Mughal Period */}

        <div className="flex items-center gap-4 my-5">
          <div className="h-px flex-grow bg-gray-300"></div>
          <span className="text-gray-500 text-2xl whitespace-nowrap">
            {language === "english" ? "MUGHAL PERIOD" : "मुग़ल काल"}
          </span>
          <div className="h-px flex-grow bg-gray-300"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 my-3">
          {/* Left Image */}
          <div className="md:col-span-1">
            <div className="border-1 border-gray-300 p-2 flex flex-col items-center">
              <div className="flex flex-col md:flex-row justify-center">
                <Image
                  src="/assets/img/majhauli/proof1.png"
                  alt="majhauli-img"
                  width={200}
                  height={50}
                  className="border-1 border-gray-300 m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                  onClick={() =>
                    openModal({ url: "/assets/img/majhauli/proof1.png" })
                  }
                />
                <Image
                  src="/assets/img/majhauli/proof2.png"
                  alt="majhauli-img"
                  width={200}
                  height={50}
                  className="border-1 border-gray-300 m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                  onClick={() =>
                    openModal({ url: "/assets/img/majhauli/proof2.png" })
                  }
                />
              </div>
              <p>
                {language === "english"
                  ? "Majhauli miswritten as Mahauli and Maholi in Ain-I-Akbari"
                  : "मझौली का उल्लेख आईन-ए-अकबरी में गलत रूप से महौली के रूप में किया गया है।"}
              </p>
            </div>
          </div>

          {/* Bio */}
          {language === "english" ? (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
              <p className="font-serif">
                The first documented mention of Majhauli Raj appears in the
                <strong>
                  <em> Ain-i-Akbari </em>
                </strong>
                , written by Abul Fazl, the court historian of Emperor Akbar. In this imperial record, Majhauli was incorrectly spelled as &quot;Mahauli&quot; and &quot;Maholi&quot;, likely due to phonetic transliteration into Persian. Despite the spelling error, its inclusion highlights Majhauli&apos;s prominence during the Mughal era. At that time, Majhauli was a part of the Sarkar of Gorakhpur and consisted of two mahals, indicating its administrative importance within the region.
              </p>
              <p className="font-serif">
                Majhauli Raj held both military and architectural significance. The estate had two forts constructed from brick, which served defensive and strategic purposes. It also maintained a standing army of 2,000 infantry soldiers, showcasing its role in local security and possible participation in Mughal military campaigns. These details point to a strong and organized estate, capable of defending its territory and supporting the imperial administration when needed.
              </p>
              <p className="font-serif">
                Economically, Majhauli was a valuable asset to the empire. The Ain-i-Akbari records a revenue demand of 618,256 dams, calculated from 2,523 bighas of agricultural land. The dam was a copper coin widely used in Akbar&apos;s time, and such a high assessment reflects the estate&apos;s fertile land and productive output. The ruling family of Majhauli belonged to the Bisen Rajput clan, known for their loyalty, governance, and influence in eastern Uttar Pradesh.
              </p>
            </div>
          ) : (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
              <p className="font-serif">
                मझौली राज का पहला लिखित उल्लेख अबुल फज़ल द्वारा रचित प्रसिद्ध
                ग्रंथ आईन-ए-अकबरी में मिलता है। इस मुगल दस्तावेज़ में मझौली को
                गलती से “महौली” के रूप में लिखा गया है, जो फ़ारसी लिप्यंतरण की
                त्रुटि का परिणाम था। इस नाम की गलती के बावजूद, इसका उल्लेख इस
                बात का प्रमाण है कि मझौली मुग़ल काल में एक महत्वपूर्ण क्षेत्र
                था। उस समय यह गोरखपुर सरकार का हिस्सा था और इसमें दो महल
                (प्रशासनिक इकाइयाँ) शामिल थीं, जो इसके प्रशासनिक महत्व को
                दर्शाता है।
              </p>
              <p className="font-serif">
                मझौली राज सैन्य और स्थापत्य दोनों दृष्टियों से महत्वपूर्ण था। इस
                रियासत में ईंटों से बने दो किले थे, जो रक्षा और रणनीतिक
                उद्देश्यों के लिए बनाए गए थे। इसके अतिरिक्त, मझौली के पास 2,000
                पैदल सैनिकों की एक संगठित सेना भी थी, जो इसे स्थानीय सुरक्षा में
                सशक्त बनाती थी और संभवतः मुग़ल अभियानों में भी भाग लेती थी। यह
                व्यवस्था इस रियासत की ताकत, अनुशासन और उसके राजनीतिक योगदान को
                दर्शाती है।
              </p>
              <p className="font-serif">
                आर्थिक रूप से भी मझौली राज मुग़ल खजाने के लिए एक महत्वपूर्ण
                स्रोत था। आईन-ए-अकबरी के अनुसार, मझौली से 6,18,256 दाम (जो उस
                समय तांबे का सिक्का था) का राजस्व निर्धारित किया गया था, जो कि
                2,523 बीघा कृषि भूमि पर आधारित था। यह आँकड़ा मझौली की भूमि की
                उपजाऊता और उत्पादन क्षमता को दर्शाता है। इस रियासत पर शासन करने
                वाला बिसेन राजपूत वंश था, जो पूर्वी उत्तर प्रदेश में अपनी
                निष्ठा, शासन-कुशलता और प्रभाव के लिए प्रसिद्ध था।
              </p>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-6 my-3">
          {/* Bio */}
          {language === "english" ? (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
              <p className="font-serif">
                The first written record of any king of Majhauli appears in the
                <strong>
                  <em> Tuzuk-i-Jahangiri, </em>
                </strong>
                where Raja Nath Mall (who probably acted as regent for Maharaja Bhim Mall) is mentioned thrice: the first two references are ten years apart, and the third appears in the index. The first mention is dated the 21st of second Jumada(corresponding to 14th October, 1606), and the second appears on the 5th of Amurdad (corresponding to 25th July, 1615).
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
                में मिलता है, जहाँ राजा नत्थ मल (जो संभवतः महाराजा भीम मल्ल के प्रति अभिभर्तक (रिजेंट) के रूप में कार्यरत थे) का तीन बार उल्लेख हुआ है : पहले दो संदर्भों के बीच दस वर्षों का अंतर है, और तीसरा संदर्भ सूची (इंडेक्स) में दिखाई देता है। पहला उल्लेख दूसरी जमादि (22वीं
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
                  &quot;मैंने नत्थू मल(?), मंझोली के राजा को 5,000 रुपये
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

          {/* right Image */}
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
                {/* <Image
                  src="/assets/img/majhauli/proof5.png"
                  alt="majhauli-img"
                  width={200}
                  height={50}
                  className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                  onClick={() =>
                    openModal({ url: "/assets/img/majhauli/proof5.png" })
                  }
                /> */}
              </div>

              <p>
                {language === "english"
                  ? "Mention of Raja Nath Mall of Majhauli in Tuzuk-i-Jahangiri"
                  : "तुझुक-ए-जहांगीरी में मझौली के राजा नत्थ मल्ल का उल्लेख मिलता है।"}
              </p>
            </div>
          </div>
        </div>

        {/* Debunked Myth */}

        <div className="flex items-center gap-4 my-5">
          <div className="h-px flex-grow bg-gray-300"></div>
          <span className="text-gray-500 text-2xl whitespace-nowrap">
            {language === "english" ? "DEBUNKED ORIGIN MYTH" : "भ्रांत मूल उत्पत्ति मिथक"}
          </span>
          <div className="h-px flex-grow bg-gray-300"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 my-3">
          {/* Left Image */}
          <div className="md:col-span-1">
            <div className="border-1 border-gray-300 p-2 flex flex-col items-center">
              <div className="flex flex-col md:flex-row justify-center">
                <Image
                  src="/assets/img/debunked/debunked3.png"
                  alt="majhauli-img"
                  width={200}
                  height={50}
                  className="border-1 border-gray-300 m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                  onClick={() =>
                    openModal({ url: "/assets/img/debunked/debunked3.png" })
                  }
                />
                <Image
                  src="/assets/img/debunked/debunked4.png"
                  alt="majhauli-img"
                  width={200}
                  height={50}
                  className="border-1 border-gray-300 m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                  onClick={() =>
                    openModal({ url: "/assets/img/debunked/debunked4.png" })
                  }
                />
              </div>
              <p>
                {language === "english"
                  ? "The false origin of the Bisen Rajputs from Mayyur Bhat was written by W. Crooke in his book 'The Tribes and Castes of the North-Western Provinces and Oudh' in 1896."
                  : "बिसेन राजपूतों की मय्यूर भट से उत्पत्ति का झूठा दावा डब्ल्यू. क्रूक ने अपनी पुस्तक 'द ट्राइब्स एंड कास्ट्स ऑफ़ द नॉर्थ-वेस्टर्न प्रोविंसेस एंड अवध' में 1896 में लिखा।"}
              </p>
            </div>
          </div>

          {/* Bio */}
          {language === "english" ? (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
              <p className="font-serif">
                In year 1896, W. Crooke in his book <span className="font-bold">&quot;The Tribes and Castes of the North-Western Provinces and Oudh&quot;</span> wrote bisen of Majhauli as well as the Donwår (q. v.) claim descent from one Mayûra Bhatta, who is said to have been a descendant of Jamadagni Rishi of the race of Bhrigu. Regarding this personage the local tradition is very vague. Some say he came from Hastinapur and was the son of one Aswathama; others that he was an emigrant from Maharashtra or the Marhatta country. He read Sanskrit for a while at Benares, and became a proficient in astrology, Quitting that city at last under a divine impulse he settled at <span className="font-bold">Kakradih, a village in Pargana Sikandarpur, of Azamgarh (present day Madhuban, Mau, Uttar Pradesh)</span>. The whole of that Pargana came gradually under his authority.
              </p>
              <p className="font-serif">
                His domestic arrangements illustrate a period when the bonds of caste, as we know them, were unknown, He is said to have had three wives, first a Brahmani named Nägseni; the second Surajprabha, a Sürajbans Rajputni; the third Haikumari, a Gautam Bhuinhårin. By his wife Sürajprabha he had a son, Biswa or Bissu Sen, who was the ancestor of the Bisen sept of Chhatris; by Haikumari, Baikal or Bagmar Sahi, the ances-tor of the Bhuminhår families of Kuwari and Tamkûhi; by Någsen, Nages, Nagesar or Någsen; and by a Kurmin concubine Indra-dawwan Mal, from whom sprang the Mals of Azamgarh. He expelled the Bhars, and finally went on a pilgrimage to the Himalaya, where he died, There are thus a family of Misr Brahmans, and a large half Kurmi clan which claim common descent with the Majhauli Bisen family.
              </p>
              <p className="font-serif">
                However, this origin myth was not accepted due to lack of evidence.
              </p>
            </div>
          ) : (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
              <p className="font-serif">
                वर्ष 1896 में डब्ल्यू. क्रूक (W. Crooke) ने अपनी पुस्तक
                <span className="font-bold"> &quot;द ट्राइब्स एंड कास्ट्स ऑफ़ द नॉर्थ-वेस्टर्न प्रोविंसेस एंड अवध&quot; </span>
                में लिखा कि मझौली के बिसेन तथा डोनवार दोनों एक
                <span className="font-bold">मयूर भट्ट</span> नामक व्यक्ति से वंशज होने का दावा करते हैं,
                जो कहा जाता है कि ऋषि जमदग्नि (भृगुवंशी) के वंशज थे।
                इस व्यक्ति के संबंध में स्थानीय परंपराएँ बहुत अस्पष्ट हैं।
                कुछ लोग कहते हैं कि वह हस्तिनापुर से आए थे और अश्वत्थामा के पुत्र थे;
                अन्य लोग कहते हैं कि वह महाराष्ट्र या मराठा देश से प्रवासी थे।
                उन्होंने कुछ समय बनारस में संस्कृत का अध्ययन किया और ज्योतिष के विद्वान बने।
                अंततः एक दैवी प्रेरणा से उन्होंने बनारस त्याग दिया और
                <span className="font-bold"> काकरदिह नामक गाँव (परगना सिकंदरपुर, आजमगढ़ — वर्तमान मऊ जिले के मधुबन क्षेत्र में) </span>
                में आकर बस गए। धीरे-धीरे पूरा परगना उनके अधिकार में आ गया।
              </p>

              <p className="font-serif">
                उनके पारिवारिक प्रबंध उस काल को दर्शाते हैं जब जाति के बंधन आज की तरह कठोर नहीं थे।
                कहा जाता है कि उनकी तीन पत्नियाँ थीं — पहली ब्राह्मणी नागसेनी;
                दूसरी सूरजवंशी राजपूतनी सूरजप्रभा; और तीसरी गौतम भूँइहारिन हाइकुमारी।
                सूरजप्रभा से उनका पुत्र विश्व या बिस्सू सेन हुआ,
                जो छत्रिय बिसेन वंश का पूर्वज माना जाता है।
                हाइकुमारी से बैकल या बाघमार साही हुए, जो कुवारी और टमकुही के भूँइहार परिवारों के पूर्वज माने जाते हैं।
                नागसेनी से नागेस, नागेसर या नागसेन हुए;
                और एक कुरमी रखैल इंद्रदावन मल से आजमगढ़ के “मल” वंश की उत्पत्ति हुई।
                कहा जाता है कि उन्होंने भार जाति को परास्त किया और अंत में हिमालय की तीर्थ यात्रा पर चले गए, जहाँ उनका निधन हुआ।
                इस प्रकार मिश्र ब्राह्मणों का एक परिवार और आधा कुरमी कुल ऐसा है जो मझौली के बिसेन परिवार के समान वंशज होने का दावा करता है।
              </p>

              <p className="font-serif">
                हालांकि, इस कथा को प्रमाणों के अभाव के कारण स्वीकार नहीं किया गया और इसे एक मिथक माना गया।
              </p>
            </div>

          )}
        </div>

        <FamilyTreeStructure
          familyData={language === "english" ? familyData1 : familyData1Hindi}
        />

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
