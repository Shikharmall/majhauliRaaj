"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import Banner from "../common/Banner";
import FamilyTreeStructure from "../common/FamilyTreeStructure";
import LanguageContext from "@/context/languageContext";
import ImageModal from "../common/ImageModel";
import { gondaFamilyData, gondaFamilyDataHindi } from "@/data/gondaFamilyData";

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
        title={language === "english" ? "Gonda Estate" : "गोंडा रियासत"}
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
              </p>
              <p className="m-10">
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
              </p>
              <p className="font-serif mx-5 md:mx-10">
                <strong>
                  <em>
                    &quot;साहिब, तुम्हारे देशवासियों ने इस देश में आकर हमारे
                    राजा को बेदखल कर दिया। तुमने अपने अफसरों को ज़िलों में भेजा
                    और जमींदारियों की जाँच करवाई। एक ही झटके में तुमने मुझसे वे
                    ज़मीने छीन लीं जो अनादिकाल से मेरे परिवार के पास थीं। मैंने
                    सब सहन किया। अचानक तुम पर विपत्ति आई। देश की जनता तुम्हारे
                    विरुद्ध उठ खड़ी हुई। तुम उस आदमी के पास आए जिसे तुमने लूटा
                    था। मैंने तुम्हें बचाया। लेकिन अब, अब मैं अपने अनुयायियों के
                    साथ लखनऊ की ओर कूच कर रहा हूँ, ताकि तुम्हें इस देश से निकाल
                    सकूँ।&quot;
                  </em>
                </strong>
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
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                <Image
                  src="/assets/img/gonda/Raja_devi_Bakhsh_Singh.jpg"
                  alt="gonda-img"
                  width={200}
                  height={50}
                  className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                  onClick={() =>
                    openModal({
                      url: "/assets/img/gonda/Raja_devi_Bakhsh_Singh.jpg",
                    })
                  }
                />
                {/* <Image
                  src="/assets/img/kalakankar/proof2.png"
                  alt="kalakankar-img"
                  width={200}
                  height={50}
                  className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                  onClick={() =>
                    openModal({ url: "/assets/img/kalakankar/proof2.png" })
                  }
                /> */}
              </div>

              <p>
                {language === "english"
                  ? "Statue of Raja Devi Baksh Singh"
                  : "“1857 की क्रांति और सिपाही विद्रोह” पुस्तक (लेखक: आर. सी. मजूमदार) में धरुपुर (कलाकांकर) के राजा हनुमंत सिंह का उल्लेख मिलता है।"}
              </p>
            </div>
          </div>
        </div>

        <FamilyTreeStructure
          familyData={
            language === "english" ? gondaFamilyData : gondaFamilyDataHindi
          }
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
