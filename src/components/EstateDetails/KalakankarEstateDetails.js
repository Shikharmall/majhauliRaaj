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
          name: "Rai Hom Mall (1)",
          isExtra: "( Est. Kalakankar Estate)",
          isKing: true,
          children: [
            {
              name: "Rai Purandar Mall (2)",
              isKing: true,
              children: [
                {
                  name: "Rai Gopal Mall (3)",
                  isKing: true,
                  children: [
                    {
                      name: "Rai Radho",
                    },
                    {
                      name: "Babu Ram (4)",
                      isKing: true,
                      children: [
                        {
                          name: "Rai Askaran (5)",
                          isKing: true,
                          children: [
                            {
                              name: "Rudra Pratap (6)",
                              isKing: true,
                              children: [
                                {
                                  name: "Todal Mall (7)",
                                  isExtra: "(Todar Mall)",
                                  isKing: true,
                                  children: [
                                    {
                                      name: "Dharu Shah (8)",
                                      isKing: true,
                                      children: [
                                        {
                                          name: "Barsal Rai (9)",
                                          isKing: true,
                                          children: [
                                            {
                                              name: "Rai Jai Singh (10)",
                                              isKing: true,
                                              children: [
                                                {
                                                  name: "Rai Shyam Singh (11)",
                                                  isKing: true,
                                                  children: [
                                                    {
                                                      name: "Rai Sangram Singh",
                                                    },
                                                    {
                                                      name: "Mau Singh (12)",
                                                      isKing: true,
                                                      children: [
                                                        {
                                                          name: "Rai Kamal Singh (13)",
                                                          isKing: true,
                                                          children: [
                                                            {
                                                              name: "Lal Balwant Singh (14)",
                                                              isKing: true,
                                                              children: [
                                                                {
                                                                  name: "Lal Bairi Sal (15)",
                                                                  isKing: true,
                                                                  children: [
                                                                    {
                                                                      name: "Rai Hanumant Singh (16)",
                                                                      isKing: true,
                                                                      children:
                                                                        [
                                                                          {
                                                                            name: "Laal Pratap Singh (17)",
                                                                            isKing: true,
                                                                            children:
                                                                              [
                                                                                {
                                                                                  name: "Raja Rampal Singh (18)",
                                                                                  isKing: true,
                                                                                  children:
                                                                                    [
                                                                                      {
                                                                                        name: "Raja Ramesh Singh (19)",
                                                                                        isKing: true,
                                                                                        children:
                                                                                          [
                                                                                            {
                                                                                              name: "Raja AVADESH SINGH (20)",
                                                                                              isKing: true,
                                                                                              children:
                                                                                                [
                                                                                                  {
                                                                                                    name: "Raja DINESH SINGH (21)",
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
  isExtra: "(63 पीढ़ियाँ - मझौली राज)",
  isKing: true,
  children: [
    {
      name: "बाबू रूप मल्ल",
      isExtra: "(राजा पृथ्वी मल्ल?)",
      isKing: true,
      children: [
        {
          name: "राय होम मल्ल (1)",
          isExtra: "(कलाकंकर रियासत की स्थापना)",
          isKing: true,
          children: [
            {
              name: "राय पुरंदर मल्ल (2)",
              isKing: true,
              children: [
                {
                  name: "राय गोपाल मल्ल (3)",
                  isKing: true,
                  children: [
                    {
                      name: "राय राधो",
                    },
                    {
                      name: "बाबू राम (4)",
                      isKing: true,
                      children: [
                        {
                          name: "राय अस्करण (5)",
                          isKing: true,
                          children: [
                            {
                              name: "रूद्र प्रताप (6)",
                              isKing: true,
                              children: [
                                {
                                  name: "तोड़ल मल्ल (7)",
                                  isExtra: "(तोडर मल्ल)",
                                  isKing: true,
                                  children: [
                                    {
                                      name: "धरु शाह (8)",
                                      isKing: true,
                                      children: [
                                        {
                                          name: "बरसाल राय (9)",
                                          isKing: true,
                                          children: [
                                            {
                                              name: "राय जय सिंह (10)",
                                              isKing: true,
                                              children: [
                                                {
                                                  name: "राय श्याम सिंह (11)",
                                                  isKing: true,
                                                  children: [
                                                    {
                                                      name: "राय संग्राम सिंह",
                                                    },
                                                    {
                                                      name: "मऊ सिंह (12)",
                                                      isKing: true,
                                                      children: [
                                                        {
                                                          name: "राय कमल सिंह (13)",
                                                          isKing: true,
                                                          children: [
                                                            {
                                                              name: "लाल बलवंत सिंह (14)",
                                                              isKing: true,
                                                              children: [
                                                                {
                                                                  name: "लाल बैरी साल (15)",
                                                                  isKing: true,
                                                                  children: [
                                                                    {
                                                                      name: "राय हनुमंत सिंह (16)",
                                                                      isKing: true,
                                                                      children:
                                                                        [
                                                                          {
                                                                            name: "लाल प्रताप सिंह (17)",
                                                                            isKing: true,
                                                                            children:
                                                                              [
                                                                                {
                                                                                  name: "राजा रामपाल सिंह (18)",
                                                                                  isKing: true,
                                                                                  children:
                                                                                    [
                                                                                      {
                                                                                        name: "राजा रमेश सिंह (19)",
                                                                                        isKing: true,
                                                                                        children:
                                                                                          [
                                                                                            {
                                                                                              name: "राजा अवधेश सिंह (20)",
                                                                                              isKing: true,
                                                                                              children:
                                                                                                [
                                                                                                  {
                                                                                                    name: "राजा दिनेश सिंह (21)",
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
                          name: "राय खेमकरण",
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
                The Kalakankar Estate, historically also known as
                <strong> Rampur Dharupur</strong>, was a significant taluqdari
                estate located on the banks of the sacred Ganges River in
                present-day Pratapgarh district, Uttar Pradesh. The estate
                played a pivotal role not just in regional politics but also in
                the broader cultural and spiritual life of Awadh. Its scenic
                location by the river enhanced its prominence, both
                strategically and spiritually, as riverside estates were often
                considered auspicious and vital for trade and pilgrimages.
              </p>
              <p className="font-serif">
                The founding of the Kalakankar royal lineage is traced back to
                <strong> Raja Hom Mall</strong>, a younger son of
                <strong> Babu Roop Mall </strong> (Raja Prithvi Mall?) of
                Majhauli, a powerful Bisen Rajput king in the Gorakhpur region.
                This lineage indicates a direct connection between the Majhauli
                Raj of eastern Uttar Pradesh and the establishment of
                Kalakankar, reinforcing the widespread influence of the Bisen
                dynasty across the eastern and central Gangetic plain.
              </p>
              <p className="font-serif">
                The movement of Raja Hom Mall from Majhauli (in Gorakhpur) to
                the fertile lands of Pratapgarh was likely influenced by
                political expansion, settlement rights, or internal succession
                divisions common in Rajput clans. Over time, his descendants
                solidified their rule, gained recognition under both regional
                Nawabs and eventually the British Raj, and laid the groundwork
                for what would later become the influential Kalakankar Raj.
              </p>
            </div>
          ) : (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
              <p className="font-serif">
                <strong>कलाकंकर एस्टेट</strong>, जिसे ऐतिहासिक रूप से{" "}
                <strong>रामपुर धरुपुर</strong> के नाम से भी जाना जाता है, एक
                प्रमुख तालुकेदारी रियासत थी जो वर्तमान उत्तर प्रदेश के प्रतापगढ़
                ज़िले में पवित्र गंगा नदी के तट पर स्थित थी। यह रियासत न केवल
                क्षेत्रीय राजनीति में, बल्कि अवध की सांस्कृतिक और आध्यात्मिक
                जीवन में भी एक महत्वपूर्ण भूमिका निभाती थी। नदी के किनारे इसकी
                स्थिति ने इसे रणनीतिक रूप से और धार्मिक दृष्टि से महत्वपूर्ण बना
                दिया था, क्योंकि नदी किनारे स्थित रियासतों को प्राचीन काल से ही
                शुभ, व्यापारिक और तीर्थ यात्रा के लिए उपयुक्त माना जाता था।
              </p>
              <p className="font-serif">
                कलाकंकर राजवंश की स्थापना का श्रेय
                <strong> राजा होम मल्ल</strong> को जाता है, जो
                <strong> बाबू रूप मल्ल</strong> (राजा पृथ्वी मल्ल?) के छोटे
                पुत्र थे। बाबू रूप मल्ल गोरखपुर क्षेत्र की शक्तिशाली
                <strong> बिसेन राजपूत</strong> वंश परंपरा से संबंध रखते थे। यह
                वंशावली पूर्वी उत्तर प्रदेश के मझौली राज और कलाकंकर की स्थापना
                के बीच प्रत्यक्ष संबंध को दर्शाती है, और बिसेन वंश के पूर्वी व
                मध्य गंगा मैदान में फैले व्यापक प्रभाव को प्रमाणित करती है।
              </p>
              <p className="font-serif">
                राजा होम मल्ल का गोरखपुर के मझौली से प्रतापगढ़ की उपजाऊ भूमि की
                ओर आगमन संभवतः राजनीतिक विस्तार, बंटवारे या राजपूत परिवारों में
                सामान्य रूप से होने वाले उत्तराधिकार विवादों के कारण हुआ होगा।
                समय के साथ, उनके वंशजों ने अपने शासन को मजबूत किया, क्षेत्रीय
                नवाबों तथा अंततः ब्रिटिश राज से मान्यता प्राप्त की, और इस प्रकार
                <strong> कलाकंकर राज्य</strong> की प्रभावशाली नींव रखी।
              </p>
            </div>
          )}
        </div>

        {/* 1857-Revolt */}

        <div className="flex items-center gap-4 my-5">
          <div className="h-px flex-grow bg-gray-300"></div>
          <span className="text-gray-500 text-2xl whitespace-nowrap">
            {language === "english" ? "1857 Revolt" : "1857 का विद्रोह"}
          </span>
          <div className="h-px flex-grow bg-gray-300"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 my-3">
          {/* Bio */}
          {language === "english" ? (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
              <p className="font-serif">
                <strong>Raja Hanumant Singh of Dharupur (Kalakankar) </strong>
                initially extended protection to British fugitives from Salone
                during the revolt of 1857, sheltering them in his fort,
                including Deputy Commissioner Captain Barrow. But when Barrow,
                on the eve of his departure, hoped for the Raja&apos;s support
                in suppressing the rebellion, Hanumant Singh gave a powerful and
                unforgettable reply:
                <strong>
                  <em>
                    &quot;Sahib, your countrymen came into this country and
                    drove out our king. You sent your officers round the
                    districts to examine the titles to the estates. At one blow
                    you took from me lands which from time immemorial had been
                    in my family. I submitted. Suddenly misfortune fell upon
                    you. The people of the land rose against you. You came to me
                    whom you had despoiled. I have saved you. But now, now I
                    march at the head of my retainers to Lakhnau to try and
                    drive you from the country.&quot;
                  </em>
                </strong>
              </p>
              <p className="font-serif">
                His words reflected the deep personal and political grievances
                he held against British rule. Despite this defiant stance,
                Hanumant Singh did not ultimately join the battlefield against
                the British. He is remembered as a
                <strong> &quot;true-hearted Rajput&quot;</strong> who, although
                embittered by British policies and dispossession, chose not to
                fight his new overlords. This restraint may have stemmed from
                caution or strategic calculation in the face of overwhelming
                British power. Like many regional leaders of the time, his
                initial cooperation gave way to disillusionment, yet without
                full transformation into armed resistance.
              </p>
              <p className="font-serif mt-4">
                Hanumant Singh belonged to a class of traditional nobles whose
                motivations were complex—rooted in loss of estate, prestige, and
                autonomy. Along with figures like Rana Beni Madho and Muhammad
                Hassan, he resented British dominance but did not fully commit
                to the collective cause of restoring Awadh or resisting colonial
                control. He notably did not rally behind Begum Hazrat Mahal, who
                was leading the charge in Lucknow, nor did he place his
                resources at her disposal. His story is emblematic of how many
                local leaders joined or supported the revolt more out of
                personal grievance than a broader nationalistic vision.
              </p>
            </div>
          ) : (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
              <p className="font-serif">
                <strong>धरुपुर (कलाकांकर) के राजा हनुमंत सिंह</strong> ने 1857
                के विद्रोह के दौरान सलोन से भागे हुए ब्रिटिश अधिकारियों को अपने
                किले में शरण दी थी, जिनमें डिप्टी कमिश्नर कैप्टन बैरो भी शामिल
                थे। लेकिन जब कैप्टन बैरो ने विद्रोह को दबाने में राजा से सहयोग
                की आशा की, तो राजा हनुमंत सिंह ने एक साहसिक और ऐतिहासिक उत्तर
                दिया:
                <p className="font-serif mx-5 md:mx-10">
                  <strong>
                    <em>
                      &quot;साहिब, तुम्हारे देशवासियों ने इस देश में आकर हमारे
                      राजा को बेदखल कर दिया। तुमने अपने अफसरों को ज़िलों में
                      भेजा और जमींदारियों की जाँच करवाई। एक ही झटके में तुमने
                      मुझसे वे ज़मीने छीन लीं जो अनादिकाल से मेरे परिवार के पास
                      थीं। मैंने सब सहन किया। अचानक तुम पर विपत्ति आई। देश की
                      जनता तुम्हारे विरुद्ध उठ खड़ी हुई। तुम उस आदमी के पास आए
                      जिसे तुमने लूटा था। मैंने तुम्हें बचाया। लेकिन अब, अब मैं
                      अपने अनुयायियों के साथ लखनऊ की ओर कूच कर रहा हूँ, ताकि
                      तुम्हें इस देश से निकाल सकूँ।&quot;
                    </em>
                  </strong>
                </p>
              </p>

              <p className="font-serif">
                उनके इन शब्दों में ब्रिटिश शासन के प्रति गहरा व्यक्तिगत और
                राजनीतिक आक्रोश झलकता है। इस चुनौतीपूर्ण घोषणा के बावजूद, राजा
                हनुमंत सिंह ने अंततः ब्रिटिशों के विरुद्ध युद्ध नहीं किया।
                उन्हें एक
                <strong> &quot;सच्चे राजपूत&quot;</strong> के रूप में याद किया
                जाता है, जिन्होंने ब्रिटिश अन्याय के बावजूद प्रत्यक्ष युद्ध में
                शामिल न होकर संयम दिखाया। यह संभवतः व्यावहारिक सोच या ब्रिटिश
                शक्ति के सामने रणनीतिक विवशता का परिणाम था। कई अन्य क्षेत्रीय
                नेताओं की तरह, उनका शुरूआती सहयोग धीरे-धीरे मोहभंग में बदल गया,
                लेकिन यह विरोध पूर्ण विद्रोह का रूप नहीं ले सका।
              </p>

              <p className="font-serif mt-4">
                हनुमंत सिंह उन पारंपरिक राजाओं की श्रेणी में आते हैं जिनके
                उद्देश्यों में व्यक्तिगत क्षति, प्रतिष्ठा की हानि और स्वायत्तता
                की रक्षा प्रमुख थी। राणा बेनी माधव और मुहम्मद हसन जैसे अन्य
                नेताओं की तरह उन्होंने भी ब्रिटिश आधिपत्य का विरोध किया, लेकिन
                अवध की बहाली या ब्रिटिश शासन के विरुद्ध एकजुट संघर्ष में पूर्ण
                रूप से शामिल नहीं हुए। उन्होंने लखनऊ में नेतृत्व कर रही बेगम
                हज़रत महल का साथ नहीं दिया और न ही अपने संसाधन उनके अधीन किए।
                उनकी कहानी इस बात का प्रतीक है कि कैसे उस समय के कई स्थानीय नेता
                राष्ट्रीय हितों से अधिक अपनी व्यक्तिगत पीड़ा और स्वार्थ के कारण
                विद्रोह से जुड़े।
              </p>
            </div>
          )}

          {/* right Image */}
          <div className="md:col-span-1">
            <div className="border-1 border-gray-300 p-2 flex flex-col items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Image
                  src="/assets/img/kalakankar/proof1.png"
                  alt="kalakankar-img"
                  width={200}
                  height={50}
                  className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                  onClick={() =>
                    openModal({ url: "/assets/img/kalakankar/proof1.png" })
                  }
                />
                <Image
                  src="/assets/img/kalakankar/proof2.png"
                  alt="kalakankar-img"
                  width={200}
                  height={50}
                  className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                  onClick={() =>
                    openModal({ url: "/assets/img/kalakankar/proof2.png" })
                  }
                />
                <Image
                  src="/assets/img/kalakankar/proof3.png"
                  alt="kalakankar-img"
                  width={200}
                  height={50}
                  className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                  onClick={() =>
                    openModal({ url: "/assets/img/kalakankar/proof3.png" })
                  }
                />
                <Image
                  src="/assets/img/kalakankar/proof4.png"
                  alt="kalakankar-img"
                  width={200}
                  height={50}
                  className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                  onClick={() =>
                    openModal({ url: "/assets/img/kalakankar/proof4.png" })
                  }
                />
              </div>

              <p>
                {language === "english"
                  ? "Mention of Raja Hanumant Singh of Dharupur (Kalakankar) in “The Sepoy Mutiny and the Revolt of 1857” by R.C. Majumdar"
                  : "“1857 की क्रांति और सिपाही विद्रोह” पुस्तक (लेखक: आर. सी. मजूमदार) में धरुपुर (कलाकांकर) के राजा हनुमंत सिंह का उल्लेख मिलता है।"}
              </p>
            </div>
          </div>
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
