"use client";
import React, { useContext } from "react";
import Image from "next/image";
import Banner from "../Banner";
import FamilyTreeStructure from "../FamilyTreeStructure";
import LanguageContext from "@/context/languageContext";

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
                                      name: "राजा नाथ मल्ल",
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
  return (
    <div>
      <Banner
        title={language === "english" ? "Majhauli Estate" : "मझौली राज"}
      />

      {/* Main Content */}
      <main className="container mx-auto px-5 md:px-20 py-5 md:py-10">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Image */}
          <div className="md:col-span-1 ">
            <Image
              src="/assets/img/majhauli/majhauliraj7.jpeg"
              alt="majhauli-img"
              width={600}
              height={400}
              className="rounded-lg shadow-lg border-3 border-gray-300"
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
                One branch of this dynasty comes from a founder named Mayyur who
                has been variously described as a Brahmin, Bhumihar or even a
                Bhat. He had come from Kashi to Kushinara had children with four
                wives: One Brahmin, one Malla princess (name may be
                Suryaprabha), one more Bhumihar, as well as one Rajput. His son
                from his Bhumihar wife named King Bir Sen (Estimated 600 BCE )
                founder of Baghochia Dynasty and his descendants established
                Bans Gaon Estate (Dileepnagar Estate), Hathwa Raj and Tamkuhi
                raj and started Bhumihar branch . One son from his Malla
                princess name King Vishwasen founder of Vishwasen Rajput dynasty
                and his descendant (probably 86th generation) King Bhim Dev
                stablished Majhuli Raj, One son from his Brahmin wife went on to
                become the ancestor of the Misra Brahmins; and the son from his
                Kurmi wife went on to found the Kakradih estate.
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
              <p className="font-serif">
                चूंकि मझौली राज के राजा मल्ल महाजनपद के राजा विश्वसेन के वंशज
                थे, इसलिए वे आज भी अपने नाम के साथ विश्वेन/बिसेन (जो कि
                विश्वसेन का संक्षिप्त रूप है) उपनाम का प्रयोग करते हैं। वे
                सूर्यवंशी राजपूत माने जाते हैं और स्वयं को भगवान लक्ष्मण के
                पुत्र चंद्रकेतु (जिन्हें उस समय की कुश्ती और युद्ध-कला में
                प्रवीण होने के कारण मल्ल की उपाधि मिली थी) की संतान मानते हैं।
                बाद में मझौली राज के कई राजाओं ने भारत के उत्तरी भागों में कई
                रियासतों की स्थापना की जैसे — मनकापुर (एस्टेट), भदरी (एस्टेट),
                राजा माधव मल्ल (मधुबन), कालाकांकर (एस्टेट) आदि।
              </p>
            </div>
          )}
        </div>

        <FamilyTreeStructure
          familyData={language === "english" ? familyData1 : familyData1Hindi}
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
        <FamilyTreeStructure
          familyData={language === "english" ? familyData : familyDataHindi}
        />
      </main>
    </div>
  );
}
