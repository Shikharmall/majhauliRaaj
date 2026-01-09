"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import Banner from "../common/Banner";
import FamilyTreeStructure from "../common/FamilyTreeStructure";
import LanguageContext from "@/context/languageContext";
import ImageModal from "../common/ImageModel";

const familyData = {
  name: "Chandraketu King of Mallya Desh.",
  isKing: true,
  children: [
    {
      name: "",
      isInfinite: true,
      children: [
        {
          name: "Malla Kingdom in Mahabharat",
          isKing: true,
          children: [
            {
              name: "",
              isInfinite: true,
              children: [
                {
                  name: "Mall Kings in Kushinara & Pava during Buddha time.",
                  isKing: true,
                  children: [
                    {
                      name: "",
                      isInfinite: true,
                      children: [
                        {
                          name: "Establishment of Majhauli Estate",
                          isKing: true,
                          children: [],
                        }
                      ],
                    },
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
};

const familyDataHindi = {
  name: "चन्द्रकेतु — मल्ल देश के राजा",
  isKing: true,
  children: [
    {
      name: "",
      isInfinite: true,
      children: [
        {
          name: "महाभारत काल में मल्ल राज्य",
          isKing: true,
          children: [
            {
              name: "",
              isInfinite: true,
              children: [
                {
                  name: "बुद्ध काल में कुशीनारा एवं पावा के मल्ल राजा",
                  isKing: true,
                  children: [
                    {
                      name: "",
                      isInfinite: true,
                      children: [
                        {
                          name: "मझौली राज्य की स्थापना",
                          isKing: true,
                          children: [],
                        }
                      ],
                    },
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
};

export default function MallMahajanpadaDetails() {
  const { language } = useContext(LanguageContext);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMaintenance, setIsMaintenance] = useState(false);

  const openModal = (src) => {
    setSelectedImage(src);
    setModalOpen(true);
  };

  return (
    <div>
      <Banner
        title={language === "english" ? "Mall Mahajanpada" : "मल्ल महाजनपद"}
        bgImage={'/assets/img/mallMahajanpada/warOverBuddhaRelics.jpg'}
      />

      {
        isMaintenance
          ?
          <div className="flex justify-center mb-10">
            <p>Page under maintenance</p>
          </div>
          :
          <>
            {/* Main Content */}
            <main className="container mx-auto px-5 md:px-20 py-5 md:py-10">

              {/* Ramayan Period */}
              <div className="grid md:grid-cols-3 gap-6 my-3">

                {/* left Image */}
                <div className="md:col-span-1">
                  <div className="border-1 border-gray-300 p-2 flex flex-col items-center">
                    <div className="flex flex-col md:flex-row justify-center">
                      <Image
                        src="/assets/img/mallMahajanpada/ramayana1.png"
                        alt="majhauli-img"
                        width={200}
                        height={50}
                        className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                        onClick={() =>
                          openModal({
                            url: "/assets/img/mallMahajanpada/ramayana1.png",
                            // estate: "(Page 1)",
                            // estateHindi: "(पृष्ठ 1)",
                          })
                        }
                      />
                      <Image
                        src="/assets/img/mallMahajanpada/ramayana2.png"
                        alt="majhauli-img"
                        width={200}
                        height={50}
                        className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                        onClick={() =>
                          openModal({
                            url: "/assets/img/mallMahajanpada/ramayana2.png",
                            // estate: "(Page 2)",
                            // estateHindi: "(पृष्ठ 2)",
                          })
                        }
                      />
                    </div>

                    <p>
                      {language === "english"
                        ? "Mention of Mall Country & King Chandraketu in Valmiki Ramayana"
                        : "वाल्मीकि रामायण में मल्ल देश और राजा चन्द्रकेतु का उल्लेख|"}
                    </p>
                  </div>
                </div>

                {/* Bio */}
                {language === "english" ? (
                  <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
                    <p className="font-serif">
                      The first written record of the Mall kingdom appears in the
                      <strong> <em> Valmiki Ramayana </em> </strong> (Uttarakandam, Section CXV),
                      where Raja Chandraketu, mentioned as the son of Lord Lakshmana,
                      was granted dominion over the country of Mallya (Mall) by Lord Rama.
                      There, Rama himself built a splendid capital for him, known as Chandrakanti —
                      a city described as &quot;highly picturesque and comparable to the city of the celestials.&quot;
                    </p>

                    <p className="font-serif">
                      The first reference states that Lord Rama said to Lakshmana:
                      &quot;O son of Sumitra, your two sons, Angada and Chandraketu, are virtuous and capable;
                      I shall establish them as rulers over their respective kingdoms.&quot;
                    </p>

                    <p className="font-serif mx-5 md:mx-10">
                      <em>
                        &quot;ततः सुमित्रानन्दनौ पुत्रौ तव लक्षण । <br />
                        अङ्गदं चन्द्रकेतुं च राज्ये स्थापयिता अहम् ॥&quot;
                      </em>
                    </p>

                    <p className="font-serif mt-4">
                      The second reference states that in the country of Mallya,
                      those two valiant sons — the best of the Raghus —
                      built a beautiful city named Chandrakanti,
                      which was like the abode of the gods (Lokapālas).
                    </p>

                    <p className="font-serif mx-5 md:mx-10">
                      <em>
                        &quot;मल्यदेशे च तौ वीरौ चन्द्रकान्तीनगरीं शुभाम् । <br />
                        निरमात् स रघुश्रेष्ठो लोकपालपुरोपमाम् ॥&quot;
                      </em>
                    </p>
                  </div>
                ) : (
                  <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
                    <p className="font-serif">
                      मल्ल राज्य का पहला लिखित उल्लेख <strong><em>वाल्मीकि रामायण</em></strong> (उत्तरकांड, खंड CXV) में मिलता है,
                      जहाँ राजा चन्द्रकेतु, जिन्हें भगवान लक्ष्मण का पुत्र बताया गया है, को भगवान राम द्वारा मल्ल्यदेश (मल्ल) पर राज्याभिषेक प्रदान किया गया।
                      वहाँ, राम ने उनके लिए एक भव्य राजधानी चन्द्रकान्ति बनवाई — एक ऐसा नगर जिसे &quot;अत्यंत रमणीय और देवताओं के नगर के समान&quot; बताया गया है।
                    </p>

                    <p className="font-serif">
                      पहला संदर्भ बताता है कि भगवान राम ने लक्ष्मण से कहा:
                      &quot;हे सुमित्रानंदन, तुम्हारे दो पुत्र अंगद और चन्द्रकेतु गुणी और सक्षम हैं;
                      मैं उन्हें उनके-अपने-अपने राज्यों का शासक बनाऊँगा।&quot;
                    </p>

                    <p className="font-serif mx-5 md:mx-10">
                      <em>
                        &quot;ततः सुमित्रानन्दनौ पुत्रौ तव लङ्क्ष्मण । <br />
                        अङ्गदं चन्द्रकेतुं च राज्ये स्थापयिता अहम् ॥&quot;
                      </em>
                    </p>

                    <p className="font-serif mt-4">
                      दूसरा संदर्भ बताता है कि मल्ल्यदेश में,
                      ये दोनों वीर — रघुश्रेष्ठों में श्रेष्ठ —
                      एक सुंदर नगर चन्द्रकान्ति का निर्माण करते हैं,
                      जो देवताओं (लोकपालों) के नगर के समान था।
                    </p>

                    <p className="font-serif mx-5 md:mx-10">
                      <em>
                        &quot;मल्यदेशे च तौ वीरौ चन्द्रकान्तीनगरीं शुभाम् । <br />
                        निरमात् स रघुश्रेष्ठो लोकपालपुरोपमाम् ॥&quot;
                      </em>
                    </p>
                  </div>
                )}
              </div>

              {/* Mahabharat Period */}
              <div className="flex items-center gap-4 my-5">
                <div className="h-px flex-grow bg-gray-300"></div>
                <span className="text-gray-500 text-2xl whitespace-nowrap">
                  {language === "english" ? "MAHABHARAT PERIOD" : "महाभारत काल"}
                </span>
                <div className="h-px flex-grow bg-gray-300"></div>
              </div>
              <div className="grid md:grid-cols-3 gap-6 my-3">
                {/* Bio */}
                {language === "english" ? (
                  <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
                    <p className="font-serif">
                    </p>
                    <p className="font-serif">
                    </p>
                    <p className="font-serif mt-4">
                    </p>
                    <p className="font-serif mt-4 font-bold">
                    </p>
                  </div>
                ) : (
                  <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
                    <p className="font-serif">
                    </p>
                    <p className="font-serif">
                    </p>
                    <p className="font-serif mt-4">
                    </p>
                    <p className="font-serif mt-4 font-bold">
                    </p>
                  </div>
                )}

                {/* right Image */}
                <div className="md:col-span-1">
                  <div className="border-1 border-gray-300 p-2 flex flex-col items-center">
                    <div className="flex flex-col md:flex-row justify-center">
                      <Image
                        src="/assets/img/mallMahajanpada/ramayana1.png"
                        alt="majhauli-img"
                        width={200}
                        height={50}
                        className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                        onClick={() =>
                          openModal({
                            url: "/assets/img/mallMahajanpada/ramayana1.png",
                            // estate: "(Page 1)",
                            // estateHindi: "(पृष्ठ 1)",
                          })
                        }
                      />
                      <Image
                        src="/assets/img/mallMahajanpada/ramayana2.png"
                        alt="majhauli-img"
                        width={200}
                        height={50}
                        className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                        onClick={() =>
                          openModal({
                            url: "/assets/img/mallMahajanpada/ramayana2.png",
                            // estate: "(Page 2)",
                            // estateHindi: "(पृष्ठ 2)",
                          })
                        }
                      />
                    </div>

                    <p>
                      {language === "english"
                        ? "Mention of Mall Country & King Chandraketu in Valmiki Ramayana"
                        : "वाल्मीकि रामायण में मल्ल देश और राजा चन्द्रकेतु का उल्लेख|"}
                    </p>
                  </div>

                  {/* <div className="border-1 border-gray-300 p-2 flex flex-col items-center">
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
                  </div> */}
                </div>
              </div>

              {/* Buddha Period */}
              <div className="flex items-center gap-4 my-5">
                <div className="h-px flex-grow bg-gray-300"></div>
                <span className="text-gray-500 text-2xl whitespace-nowrap">
                  {language === "english" ? "BUDDHA PERIOD" : "बुद्ध काल"}
                </span>
                <div className="h-px flex-grow bg-gray-300"></div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Left Image */}
                <div className="md:col-span-1 ">
                  <Image
                    src="/assets/img/mallMahajanpada/ganaSanghas.jpg"
                    alt="madhuban-img"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg border-3 border-gray-300 cursor-pointer"
                    onClick={() =>
                      openModal({
                        url: "/assets/img/mallMahajanpada/ganaSanghas.jpg",
                        estate: "Mall Mahajanpada",
                        estateHindi: "मल्ल महाजनपद",
                      })
                    }
                  />
                  <div className="flex items-center justify-center">
                    <h2>
                      {language === "english"
                        ? "Mall Mahajanpada"
                        : "मल्ल महाजनपद"}
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
                      Malla (Prakrit: 𑀫𑀮𑁆𑀮𑀈 Mallaī; Pali: Malla; Sanskrit: मल्ल​ Malla) was an ancient Indo-Aryan tribe of north-eastern South Asia whose existence is attested during the Iron Age. The population of Malla, the Mallakas, were divided into two branches, each organised into a gaṇasaṅgha (an aristocratic oligarchic republic), presently referred to as the Malla Republics, which were part of the larger Vajjika League.
                      The Mallakas lived in the region now covered by the Kushinagar district in India, although their precise borders are yet to be determined. The Mallakas&#39; neighbours to the east across the Sadānirā river were the Licchavikas, their neighbours to the west were the Sakyas, Koliyas, Moriyas, and Kauśalyas, the southern neighbours of the Mallakas were the Kālāmas and the Gaṅgā river, and the northern Mallaka borders were the Himālaya mountains. The territory of the Mallakas was a tract of land between the Vaidehas and the Kauśalyas.
                    </p>
                    <p className="font-serif">
                      The territories of the two Malla republics were divided by the river named Hiraññavatī in Pāli, and Hiraṇyavatī in Sanskrit, and the two Malla republics respectively had their capitals at Kusinārā, identified with the modern village of Kāsiā in Kushinagar, and at Pāvā (now known as Fazilnagar). Kusinārā was close to the Sakya capital of Kapilavatthu to its north-east, and Pāvā was close to the Licchavika capital of Vesālī.
                      The Mallakas are called Malla in Pāli texts, Mallai in Jain Prākrit texts, and Malla in Sanskrit texts.
                      The Mallakas were an Indo-Aryan tribe in the eastern Gangetic plain in the Greater Magadha cultural region. Similarly to the other populations of the Greater Magadha cultural area, Mallakas were initially not fully Brahmanised despite being an Indo-Aryan people, but, like the Vaidehas, they later became Brahmanised and adopted the Vāseṭṭha (in Pali) or Vaśiṣṭha (in Sanskrit) gotra. At some point in time, the Mallakas became divided into two separate republics with their respective capitals at Kusinārā and Pāvā, possibly due to internal trouble, and henceforth the relations between the two Mallaka republics remained uncordial. Both Mallaka republics nevertheless became members of the Licchavi-led Vajjika League, within which, unlike the Vaidehas, they maintained their own sovereign rights because they had not been conquered by the Licchavikas, and the Mallakas held friendly relations with the Licchavikas, the Vaidehas, and the Nāyikas who were the other members of this league.
                    </p>
                    <p className="font-serif">
                      However occasional tensions between the Mallakas and the Licchavikas did arise, such as in the case of the man named Bandhula, a Mallaka who, thanks to his education received in Takṣaśilā, had offered his services as a general to the Kauśalya king Pasenadi so as to maintain the good relations between the Mallakas and Kosala. Bandhula, along with his wife Mallikā, violated the Abhiseka-Pokkharaṇī sacred tank of the Licchavikas, which resulted in armed hostilities between the Kauśalyas and the Licchavikas. Bandhula was later treacherously murdered along with his sons by Pasenadi, and, in retaliation, some Mallakas helped Pasenadi&#39;s son Viḍūḍabha usurp the throne of Kosala to avenge the death of Bandhula, after which Pasenadi fled from Kosala and died in front of the gates of the Māgadhī capital of Rājagaha.
                      The Buddha arrived in Pāvā shortly after the Mallakas there had inaugurated their new santhāgāra, which they had named Ubbhataka. From Pāvā, the Buddha and his followers went to Kusinārā, and on the way they crossed two rivers, the first one being named Kakutthā in Pali and Kukustā in Sanskrit, and the second one being the Hiraññavatī which separated the two Mallaka republics. The Buddha spent his final days in the Malla republic of Kusinārā, and when he sent Ānanda to inform the Mallakas of Kusinārā of his impending death, Ānanda found the Mallaka Council holding a meeting about public affairs in their santhāgāra.
                      When Ānanda went again to the Mallakas of Kusinārā to inform them of the Buddha&#39;s passing, he found them this time holding a meeting to discuss the funeral ceremony of the Buddha in the santhāgāra. After the Buddha&#39;s cremation, his remains were honoured in the santhāgāra of Kusinārā for seven days, and it was in this santhāgāra that the Mallakas of Kusinārā received the envoys of Magadha, Licchavi, Shakya, Buli, Koliya, the Mallakas of Pāvā, and Moriya, who all went to Kusinārā to claim their shares of the Buddha&#39;s relics. The Licchavikas, the Mallakas, and the Sakyas were able to claim shares of the relics, but the other members of the Vajjika League, the Vaidehas and the Nāyikas, were not among the states claiming a share because they were dependencies of the Licchavikas without their own sovereignty, and therefore could not put forth their own claim while Licchavi could. The Mallakas of Pāvā were the first ones to arrive with an army to Kusinārā, and they put forth their claim to the relics in rude and hostile terms. In the end, each Malla republic obtained a share of the Buddha&#39;s relics and built their own stūpas and gave their own feasts to commemorate this event.
                      After the death of the 24th Jain Tīrthaṅkara, Mahāvīra, the Mallakas and the Licchavikas jointly instituted a festival of lights to commemorate his passing.
                    </p>
                  </div>
                ) : (
                  <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
                    <p className="font-serif">
                      मल्ल (प्राकृत: 𑀫𑀮𑁆𑀮𑀈 मल्लई; पालि: मल्ल; संस्कृत: मल्ल) उत्तर–पूर्वी दक्षिण एशिया की एक प्राचीन इंडो-आर्य जनजाति थी, जिसका अस्तित्व लौह युग के दौरान प्रमाणित होता है। मल्ल जनजाति के लोग मल्लक कहलाते थे। ये दो शाखाओं में विभक्त थे और प्रत्येक शाखा एक-एक गणसंघ (कुलीनतंत्रीय गणराज्य) के रूप में संगठित थी। इन्हें सामूहिक रूप से मल्ल गणराज्य कहा जाता है, जो व्यापक वज्जिका संघ का हिस्सा थे।

                      मल्लक वर्तमान भारत के कुशीनगर ज़िले के क्षेत्र में निवास करते थे, हालांकि उनकी सटीक सीमाएँ अभी तक निश्चित नहीं की जा सकी हैं। सदानीरा नदी के पार पूर्व दिशा में उनके पड़ोसी लिच्छविक थे। पश्चिम में उनके पड़ोसी शाक्य, कोलिय, मोरिय और कौशल्य थे। मल्लकों के दक्षिण में कालाम जनपद तथा गंगा नदी स्थित थी, जबकि उत्तर में उनकी सीमा हिमालय पर्वत से लगती थी। मल्लकों का क्षेत्र विदेह और कौशल के बीच स्थित भू-भाग में फैला हुआ था।
                    </p>
                    <p className="font-serif">
                      दोनों मल्ल गणराज्यों के क्षेत्र पालि में हिरञ्ञवती तथा संस्कृत में हिरण्यवती नामक नदी द्वारा विभाजित थे। इन दोनों मल्ल गणराज्यों की राजधानियाँ क्रमशः कुशीनारा और पावा थीं। कुशीनारा की पहचान वर्तमान कुशीनगर ज़िले के कसिया गाँव से की जाती है, जबकि पावा को आज फाज़िलनगर के नाम से जाना जाता है। कुशीनारा अपने उत्तर–पूर्व में स्थित शाक्य राजधानी कपिलवत्तु के निकट था, और पावा लिच्छविकों की राजधानी वैशाली के समीप स्थित था।

                      पालि ग्रंथों में मल्लकों को मल्ल, जैन प्राकृत ग्रंथों में मल्लई, तथा संस्कृत ग्रंथों में मल्ल कहा गया है।

                      मल्लक व्यापक मगध सांस्कृतिक क्षेत्र के अंतर्गत आने वाले पूर्वी गंगा मैदान की एक इंडो-आर्य जनजाति थे। व्यापक मगध क्षेत्र की अन्य जनसंख्याओं की तरह, इंडो-आर्य होने के बावजूद प्रारंभ में मल्लक पूर्णतः ब्राह्मणीकरण से प्रभावित नहीं थे। किंतु बाद में, विदेहों की भाँति, वे ब्राह्मणीकरण की प्रक्रिया से गुज़रे और उन्होंने वासेट्ठ (पालि) अथवा वशिष्ठ (संस्कृत) गोत्र को अपनाया।

                      किसी समय मल्लक आंतरिक कारणों से दो पृथक गणराज्यों—कुशीनारा और पावा—में विभाजित हो गए, जिसके बाद दोनों मल्ल गणराज्यों के बीच संबंध सौहार्दपूर्ण नहीं रहे। इसके बावजूद, दोनों मल्ल गणराज्य लिच्छवियों के नेतृत्व वाले वज्जिका संघ के सदस्य बने। इस संघ के भीतर, विदेहों के विपरीत, मल्लकों ने अपने संप्रभु अधिकार बनाए रखे, क्योंकि वे लिच्छवियों द्वारा पराजित नहीं किए गए थे। मल्लकों के लिच्छविकों, विदेहों तथा नायिकों (जो इस संघ के अन्य सदस्य थे) के साथ मैत्रीपूर्ण संबंध बने रहे।
                    </p>
                    <p className="font-serif">
                      हालाँकि मल्लकों और लिच्छविकों के बीच कभी-कभी तनाव उत्पन्न हो जाता था। इसका एक उदाहरण बंधुल नामक व्यक्ति का है, जो एक मल्लक था और जिसने तक्षशिला में शिक्षा प्राप्त की थी। मल्लकों और कौशल के बीच अच्छे संबंध बनाए रखने के उद्देश्य से उसने कौशल नरेश प्रसेनजित (पसेनदि) के यहाँ सेनापति के रूप में अपनी सेवाएँ प्रदान की थीं। बंधुल ने अपनी पत्नी मल्लिका के साथ लिच्छविकों के पवित्र जलाशय अभिषेक-पोखरणी का उल्लंघन किया, जिसके परिणामस्वरूप कौशल और लिच्छविकों के बीच सशस्त्र संघर्ष आरंभ हो गया। बाद में प्रसेनजित ने छलपूर्वक बंधुल तथा उसके पुत्रों की हत्या करवा दी। इसके प्रतिशोधस्वरूप कुछ मल्लकों ने प्रसेनजित के पुत्र विडूडभ (विदूड़भ) को कौशल का सिंहासन हथियाने में सहायता की, ताकि बंधुल की मृत्यु का बदला लिया जा सके। इसके बाद प्रसेनजित कौशल से भाग गया और मगध की राजधानी राजगृह के द्वार पर उसकी मृत्यु हो गई।

                      मल्लकों द्वारा अपने नए संथागार (सभा-भवन), जिसका नाम उब्भट्ठक रखा गया था, के उद्घाटन के कुछ समय बाद ही बुद्ध पावा पहुँचे। पावा से बुद्ध अपने अनुयायियों के साथ कुशीनारा गए। मार्ग में उन्होंने दो नदियाँ पार कीं—पहली का नाम पालि में ककुत्था और संस्कृत में कुकुस्ता था, तथा दूसरी हिरञ्ञवती नदी थी, जो दोनों मल्ल गणराज्यों की सीमा बनाती थी। बुद्ध ने अपने अंतिम दिन कुशीनारा के मल्ल गणराज्य में बिताए। जब उन्होंने अपने आसन्न महापरिनिर्वाण की सूचना देने के लिए आनंद को कुशीनारा के मल्लकों के पास भेजा, तब आनंद ने मल्ल परिषद् को उनके संथागार में सार्वजनिक कार्यों पर विचार-विमर्श करते हुए पाया।

                      बुद्ध के महापरिनिर्वाण की सूचना देने के लिए जब आनंद पुनः कुशीनारा के मल्लकों के पास गया, तब उसने उन्हें संथागार में बुद्ध के अंतिम संस्कार की व्यवस्था पर चर्चा करते हुए पाया। बुद्ध के दाह-संस्कार के बाद उनके अवशेषों को सात दिनों तक कुशीनारा के संथागार में सम्मानपूर्वक रखा गया। इसी संथागार में कुशीनारा के मल्लकों ने मगध, लिच्छवि, शाक्य, बुलि, कोलिय, पावा के मल्लक तथा मोरिय राज्यों से आए दूतों का स्वागत किया, जो सभी बुद्ध के अवशेषों में से अपना-अपना हिस्सा माँगने के लिए कुशीनारा पहुँचे थे।

                      लिच्छविक, मल्लक और शाक्य अपने-अपने हिस्से का दावा करने में सफल रहे, किंतु वज्जिका संघ के अन्य सदस्य—विदेह और नायिक—अपने-अपने दावे प्रस्तुत नहीं कर सके, क्योंकि वे लिच्छविकों के अधीन थे और उनके पास स्वतंत्र संप्रभुता नहीं थी। पावा के मल्लक सबसे पहले सेना के साथ कुशीनारा पहुँचे और उन्होंने अवशेषों पर अपना दावा कठोर तथा शत्रुतापूर्ण शब्दों में प्रस्तुत किया। अंततः दोनों मल्ल गणराज्यों को बुद्ध के अवशेषों में से हिस्सा प्राप्त हुआ। उन्होंने अपने-अपने स्तूप बनवाए और इस स्मरणीय घटना के उपलक्ष्य में अपने-अपने भोजों का आयोजन किया।

                      चौबीसवें जैन तीर्थंकर महावीर के निर्वाण के बाद मल्लकों और लिच्छविकों ने संयुक्त रूप से उनके स्मरण में दीपोत्सव (प्रकाशोत्सव) की परंपरा की स्थापना की।
                    </p>

                  </div>
                )}
              </div>

              {/* Majhauli Estate */}
              <div className="flex items-center gap-4 my-5">
                <div className="h-px flex-grow bg-gray-300"></div>
                <span className="text-gray-500 text-2xl whitespace-nowrap">
                  {language === "english" ? "MAJHAULI ESTATE" : "मझौली रियासत"}
                </span>
                <div className="h-px flex-grow bg-gray-300"></div>
              </div>
              <div className="grid md:grid-cols-3 gap-6 my-3">
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
                  </div>
                )}

                {/* right Image */}
                <div className="md:col-span-1">
                  <Image
                    src="/assets/img/majhauli/majhauliraj13.jpg"
                    alt="madhuban-img"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg border-3 border-gray-300 cursor-pointer"
                    onClick={() =>
                      openModal({
                        url: "/assets/img/majhauli/majhauliraj13.jpg",
                        estate: "Majhauli Fort Entrance",
                        estateHindi: "मझौली किला प्रवेशद्वार",
                      })
                    }
                  />
                  <div className="flex items-center justify-center">
                    <h2>
                      {language === "english"
                        ? "Majhauli Fort Entrance"
                        : "मझौली किला प्रवेशद्वार"}
                    </h2>
                  </div>
                  {/* <div className="border-1 border-gray-300 p-2 flex flex-col items-center">
                    <div className="flex flex-col md:flex-row justify-center">
                      <Image
                        src="/assets/img/majhauli/majhauliraj13.jpg"
                        alt="majhauli-img"
                        width={200}
                        height={50}
                        className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                        onClick={() =>
                          openModal({ url: "/assets/img/majhauli/majhauliraj13.jpg" })
                        }
                      />
                    </div>

                    <p>
                      {language === "english"
                        ? "Majhauli Fort Entrance"
                        : "मझौली किला प्रवेशद्वार"}
                    </p>
                  </div> */}
                </div>
              </div>

              {/* Post Independence Period */}
              {/* <div className="flex items-center gap-4 my-5">
                <div className="h-px flex-grow bg-gray-300"></div>
                <span className="text-gray-500 text-2xl whitespace-nowrap">
                  {language === "english"
                    ? "POST INDEPENDENCE PERIOD"
                    : "स्वतंत्रता प्राप्ति के बाद का काल"}
                </span>
                <div className="h-px flex-grow bg-gray-300"></div>
              </div>
              <div className="grid md:grid-cols-3 gap-6 my-3">
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
              </div> */}

              <FamilyTreeStructure
                familyData={language === "english" ? familyData : familyDataHindi}
              />

            </main>
          </>
      }

      {/* Modal */}
      <ImageModal
        isOpen={isModalOpen}
        imageSrc={selectedImage}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
