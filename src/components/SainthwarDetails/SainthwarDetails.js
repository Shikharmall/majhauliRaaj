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

export default function SainthwarDetails() {
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
        title={language === "english" ? "Sainthwar" : "सैंथवार"}
        bgImage={'/assets/img/sainthwarBanner.jpg'}
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
                      a city described as “highly picturesque and comparable to the city of the celestials.”
                    </p>

                    <p className="font-serif">
                      The first reference states that Lord Rama said to Lakshmana:
                      “O son of Sumitra, your two sons, Angada and Chandraketu, are virtuous and capable;
                      I shall establish them as rulers over their respective kingdoms.”
                    </p>

                    <p className="font-serif mx-5 md:mx-10">
                      <em>
                        "ततः सुमित्रानन्दनौ पुत्रौ तव लक्षण । <br />
                        अङ्गदं चन्द्रकेतुं च राज्ये स्थापयिता अहम् ॥"
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
                        "मल्यदेशे च तौ वीरौ चन्द्रकान्तीनगरीं शुभाम् । <br />
                        निरमात् स रघुश्रेष्ठो लोकपालपुरोपमाम् ॥"
                      </em>
                    </p>
                  </div>
                ) : (
                  <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
                    <p className="font-serif">
                      मल्ल राज्य का पहला लिखित उल्लेख <strong><em>वाल्मीकि रामायण</em></strong> (उत्तरकांड, खंड CXV) में मिलता है,
                      जहाँ राजा चन्द्रकेतु, जिन्हें भगवान लक्ष्मण का पुत्र बताया गया है, को भगवान राम द्वारा मल्ल्यदेश (मल्ल) पर राज्याभिषेक प्रदान किया गया।
                      वहाँ, राम ने उनके लिए एक भव्य राजधानी चन्द्रकान्ति बनवाई — एक ऐसा नगर जिसे "अत्यंत रमणीय और देवताओं के नगर के समान" बताया गया है।
                    </p>

                    <p className="font-serif">
                      पहला संदर्भ बताता है कि भगवान राम ने लक्ष्मण से कहा:
                      “हे सुमित्रानंदन, तुम्हारे दो पुत्र अंगद और चन्द्रकेतु गुणी और सक्षम हैं;
                      मैं उन्हें उनके-अपने-अपने राज्यों का शासक बनाऊँगा।"
                    </p>

                    <p className="font-serif mx-5 md:mx-10">
                      <em>
                        "ततः सुमित्रानन्दनौ पुत्रौ तव लङ्क्ष्मण । <br />
                        अङ्गदं चन्द्रकेतुं च राज्ये स्थापयिता अहम् ॥"
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
                        "मल्यदेशे च तौ वीरौ चन्द्रकान्तीनगरीं शुभाम् । <br />
                        निरमात् स रघुश्रेष्ठो लोकपालपुरोपमाम् ॥"
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
                ) : (
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
                    </p>
                    <p className="font-serif">
                      The Mallakas lived in the region now covered by the Kushinagar district in India, although their precise borders are yet to be determined. The Mallakas&#39; neighbours to the east across the Sadānirā river were the Licchavikas, their neighbours to the west were the Sakyas, Koliyas, Moriyas, and Kauśalyas, the southern neighbours of the Mallakas were the Kālāmas and the Gaṅgā river, and the northern Mallaka borders were the Himālaya mountains. The territory of the Mallakas was a tract of land between the Vaidehas and the Kauśalyas.

                      The territories of the two Malla republics were divided by the river named Hiraññavatī in Pāli, and Hiraṇyavatī in Sanskrit, and the two Malla republics respectively had their capitals at Kusinārā, identified with the modern village of Kāsiā in Kushinagar, and at Pāvā (now known as Fazilnagar). Kusinārā was close to the Sakya capital of Kapilavatthu to its north-east, and Pāvā was close to the Licchavika capital of Vesālī.
                    </p>
                    <p className="font-serif">
                      The Mallakas are called Malla in Pāli texts, Mallai in Jain Prākrit texts, and Malla in Sanskrit texts.
                    </p>
                    <p className="font-serif">
                      The Mallakas were an Indo-Aryan tribe in the eastern Gangetic plain in the Greater Magadha cultural region. Similarly to the other populations of the Greater Magadha cultural area, Mallakas were initially not fully Brahmanised despite being an Indo-Aryan people, but, like the Vaidehas, they later became Brahmanised and adopted the Vāseṭṭha (in Pali) or Vaśiṣṭha (in Sanskrit) gotra. At some point in time, the Mallakas became divided into two separate republics with their respective capitals at Kusinārā and Pāvā, possibly due to internal trouble, and henceforth the relations between the two Mallaka republics remained uncordial. Both Mallaka republics nevertheless became members of the Licchavi-led Vajjika League, within which, unlike the Vaidehas, they maintained their own sovereign rights because they had not been conquered by the Licchavikas, and the Mallakas held friendly relations with the Licchavikas, the Vaidehas, and the Nāyikas who were the other members of this league.
                      However occasional tensions between the Mallakas and the Licchavikas did arise, such as in the case of the man named Bandhula, a Mallaka who, thanks to his education received in Takṣaśilā, had offered his services as a general to the Kauśalya king Pasenadi so as to maintain the good relations between the Mallakas and Kosala. Bandhula, along with his wife Mallikā, violated the Abhiseka-Pokkharaṇī sacred tank of the Licchavikas, which resulted in armed hostilities between the Kauśalyas and the Licchavikas. Bandhula was later treacherously murdered along with his sons by Pasenadi, and, in retaliation, some Mallakas helped Pasenadi&#39;s son Viḍūḍabha usurp the throne of Kosala to avenge the death of Bandhula, after which Pasenadi fled from Kosala and died in front of the gates of the Māgadhī capital of Rājagaha.
                      The Buddha arrived in Pāvā shortly after the Mallakas there had inaugurated their new santhāgāra, which they had named Ubbhataka. From Pāvā, the Buddha and his followers went to Kusinārā, and on the way they crossed two rivers, the first one being named Kakutthā in Pali and Kukustā in Sanskrit, and the second one being the Hiraññavatī which separated the two Mallaka republics. The Buddha spent his final days in the Malla republic of Kusinārā, and when he sent Ānanda to inform the Mallakas of Kusinārā of his impending death, Ānanda found the Mallaka Council holding a meeting about public affairs in their santhāgāra.
                      When Ānanda went again to the Mallakas of Kusinārā to inform them of the Buddha&#39;s passing, he found them this time holding a meeting to discuss the funeral ceremony of the Buddha in the santhāgāra. After the Buddha&#39;s cremation, his remains were honoured in the santhāgāra of Kusinārā for seven days, and it was in this santhāgāra that the Mallakas of Kusinārā received the envoys of Magadha, Licchavi, Shakya, Buli, Koliya, the Mallakas of Pāvā, and Moriya, who all went to Kusinārā to claim their shares of the Buddha&#39;s relics. The Licchavikas, the Mallakas, and the Sakyas were able to claim shares of the relics, but the other members of the Vajjika League, the Vaidehas and the Nāyikas, were not among the states claiming a share because they were dependencies of the Licchavikas without their own sovereignty, and therefore could not put forth their own claim while Licchavi could. The Mallakas of Pāvā were the first ones to arrive with an army to Kusinārā, and they put forth their claim to the relics in rude and hostile terms. In the end, each Malla republic obtained a share of the Buddha&#39;s relics and built their own stūpas and gave their own feasts to commemorate this event.
                      After the death of the 24th Jain Tīrthaṅkara, Mahāvīra, the Mallakas and the Licchavikas jointly instituted a festival of lights to commemorate his passing.
                    </p>
                    <p className="font-serif font-bold">
                      <strong>
                        <em> Debunked Theory (due to lack of evidence) by Lal Khadag Bahadur Mall</em>
                      </strong>
                    </p>
                    <p className="font-serif">
                      Lal Khadag Bahadur Mall, in his book <em>&quot;Vishen Vansh Vatika&quot;</em>, mentioned the name of Raja Madhav Mall but did not include his children Raja Nath Bahadur Mall and Babu Fateh Bahadur Mall. He presented the Malls of Madhuban as descendants of Mayyur Bhat through his Kurmi wife. This theory was criticized by many historians and kings of that time and was later debunked.
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
                      वंशजों ने &quot;मल्ल&quot; उपनाम को अपनाया और वे पूर्वी उत्तर प्रदेश के
                      विभिन्न क्षेत्रों में बस गए — विशेष रूप से मधुबन, मऊ, गोरखपुर,
                      देवरिया और हसनपुर, बहारामपुर, जाजौली, अहरौली और परशुरामपुर जैसे
                      गाँवों में।
                    </p>
                    <p className="font-serif font-bold">
                      <strong>
                        <em>लाल खड़ग बहादुर मल्ल द्वारा (प्रमाणों के अभाव में) खंडित सिद्धांत</em>
                      </strong>
                    </p>
                    <p className="font-serif">
                      लाल खड़ाग बहादुर मल्ल ने अपनी पुस्तक <em>&quot;विशेन वंश वाटिका&quot;</em> में राजा माधव मल्ल का नाम तो लिया, लेकिन उनके पुत्र राजा नत्थ बहादुर मल्ल और बाबू फतह बहादुर मल्ल को शामिल नहीं किया। उन्होंने मधुबन के मल्लों को मईयूर भट की कुर्मी पत्नी से उत्पन्न वंशज बताया। इस सिद्धांत की उस समय के कई इतिहासकारों और राजाओं द्वारा आलोचना की गई और बाद में इसे खारिज कर दिया गया।
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
