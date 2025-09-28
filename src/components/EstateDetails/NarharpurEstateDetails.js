"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import Banner from "../common/Banner";
import FamilyTreeStructure from "../FamilyTreeStructure";
import LanguageContext from "@/context/languageContext";
import ImageModal from "../common/ImageModel";
import { narharpurFamilyData, narharpurFamilyDataHindi } from "@/data/narharpurFamilyData";


export default function NarharpurEstateDetails() {
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
        title={language === "english" ? "Narharpur Estate" : "नरहरपुर रियासत"}
      />

      {/* Main Content */}
      <main className="container mx-auto px-5 md:px-20 py-5 md:py-10">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Image */}
          <div className="md:col-span-1">
            <Image
              src="/assets/img/narharpur/narharpur4.png"
              alt="Narharpur Estate"
              width={600}
              height={400}
              className="rounded-lg shadow-lg border-3 border-gray-300 cursor-pointer"
              onClick={() =>
                openModal({
                  url: "/assets/img/narharpur/narharpur4.png",
                  estate: "Ruins of Raja Narharpur's Haveli",
                  estateHindi: "राजा नरहरपुर की हवेली के अवशेष",
                })
              }
            />
            <div className="flex items-center justify-center mt-2">
              <h2>
                {language === "english"
                  ? "Ruins of Raja Narharpur's Haveli"
                  : "राजा नरहरपुर की हवेली के अवशेष"}{" "}
              </h2>
            </div>
            <br />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20235.785202233685!2d83.50170764273523!3d26.28712166670223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39917f0059e3646d%3A0xb834233bb298d5c4!2sVillage%20narharpur!5e0!3m2!1sen!2sin!4v1753365164437!5m2!1sen!2sin"
              width="100%"
              height="300"
              className="w-full rounded-md border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Bio */}
          {language === "english" ? (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed font-serif">
              <p className="font-serif">
                Narharpur Estate, also known as
                <strong> Chillupar Estate</strong>, was a historical princely
                estate located near the Sarayu River (also called the Ghaghara
                River) in the present-day Gorakhpur region of Uttar Pradesh.
                Chillupar Estate was established by
                <strong> Raja Rai Mall</strong>, the third son of Maharaja Dev
                Mall. In 1857, it was ruled by
                <strong> Raja Hari Prasad Mall</strong>, a valiant freedom
                fighter who played a significant role in the War of Independence
                of 1857. Raja Hari Prasad Mall resisted British colonial forces
                by capturing army rations and weapons and allied himself with
                revolutionary leaders such as Babu Kunwar Singh and Bandhu
                Singh. In retaliation, the British bombarded the Narharpur fort
                with cannons from across the Sarayu, leading to its destruction
                and the martyrdom of Raja Hari Prasad Mall along with thousands
                of his followers. Unlike neighboring estates that surrendered,
                Narharpur chose resistance and sacrifice. Though his legacy is
                still remembered locally—especially through the establishment of
                a martyr&apos;s memorial at the site—formal recognition of the
                estate&apos;s ruins and its significance in India&apos;s freedom
                struggle remains limited. In 1857, Raja Hariprasad Mall of
                Chillupar challenged British rule by seizing the supplies and
                weapons being transported from the Indigo Factory (Neel Kothi)
                at Doharighat. Enraged by this defiance, the British army
                launched a brutal cannon attack on the Narharpur estate and its
                military encampment, causing widespread devastation. In
                retaliation, Raja Hariprasad Mall’s soldiers destroyed the
                Indigo Factory and killed several British soldiers. Raja
                Hariprasad Mall was martyred in this war of independence.
              </p>
              <p className="font-serif">
                Chillupar was a princely estate in the Gorakhpur district, and
                Raja Hariprasad Mall ruled over it. His fort was located at
                Narharpur on the banks of the Sarayu River. By 1857, the fire of
                rebellion ignited by Mangal Pandey had started to spread. Raja
                Hariprasad Mall held meetings at Narharpur Fort with patriots
                from Paina village, as well as lath-wielders, archers, and
                swordsmen from various local castes. It was resolved that the
                flame of freedom kindled by Mangal Pandey would not be
                extinguished. The British would no longer be served, and taxes
                would no longer be paid. When the officers of the Indigo Factory
                at Bahadurpur, located near Doharighat across the river, learned
                of these developments, they became furious. They attempted to
                pressure Raja Hariprasad Mall into submission, but the Raja and
                his soldiers responded fiercely. Raja Hariprasad Mall seized the
                British government&apos;s arms and supplies being transported by
                boat to Gorakhpur, posing an open and direct challenge to
                British rule. Frustrated, the British officers attacked the
                Chillupar estate. Raja Hariprasad Mall’s forces fought back
                fiercely, killing hundreds of British soldiers. The infuriated
                British army then turned their cannons—stationed at the Indigo
                Factory—toward the Narharpur Fort and bombarded it, reducing it
                to rubble. After this, the British forces also destroyed the
                military camp at what is now known as &quot;Muktipath&quot; in
                Bardahalgunj, which used to be Chillupar&apos;s military base.
                In retaliation, Raja Hariprasad Mall&apos;s forces launched a
                final attack on the Indigo Factory, setting it ablaze and
                killing the British troops stationed there. Raja Hariprasad Mall
                was martyred along with thousands of his soldiers in this war of
                independence. The site where the Raja&apos;s military camp once
                stood is now home to the Muktipath roadway.
              </p>
              <p className="font-serif">
                A martyr&apos;s memorial has been built there in honor of the
                fallen soldiers. However, the martyrdom site of Raja Hariprasad
                Mall and the ruins of his fort are yet to receive the
                recognition and respect they truly deserve.
                <strong>
                  {" "}
                  Raja&apos;s Stables in Bardahalgunj Police Station:{" "}
                </strong>
                The place where the Bardahalgunj police station now stands used
                to be Raja Hariprasad Mall&apos;s horse stable and elephant
                enclosure (Hathisar). The Raja would travel by boat from his
                fort to this location. After overseeing the stables, he would
                hold court in what is now the Junior High School. He used to
                meet the local people there, listen to their grievances, and
                resolve their issues.
                <strong>
                  {" "}
                  Historical Significance of Bardahalgunj Market:{" "}
                </strong>
                The largest market in the Chillupar region, now known as
                Bardahalgunj, was once called &quot;Barhan Ganj.&quot; It was
                considered the biggest market in the surrounding areas. Over
                time, the name evolved and came to be known as Bardahalgunj.
              </p>
              <p className="font-serif">
                <strong> Former Minister&apos;s Statement:</strong>
              </p>
              <p className="font-serif mx-5 md:mx-10">
                <em>
                  A martyr&apos;s memorial has been built at Muktipath with
                  support from local citizens. The mention of Raja Hariprasad
                  Mall still stirs deep patriotic emotions in the hearts of the
                  people in this region. However, the ruins of his fort and his
                  martyrdom site have yet to receive the full recognition they
                  deserve. Efforts have begun, and it is hoped that the
                  government will take steps to preserve and honor this
                  important piece of history.
                </em>
              </p>
            </div>
          ) : (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed font-serif">
              <p className="font-serif">
                नरहरपुर एस्टेट, जिसे
                <strong> चिल्लूपार एस्टेट </strong>के नाम से भी जाना जाता है, एक
                ऐतिहासिक रियासत थी जो उत्तर प्रदेश के वर्तमान गोरखपुर क्षेत्र
                में सरयू नदी (घाघरा नदी) के किनारे स्थित थी। चिल्लूपार एस्टेट की
                स्थापना
                <strong> राजा राय मल्ल</strong> ने की थी, जो महाराज देव मल्ल के
                तीसरे पुत्र थे। वर्ष 1857 में इसका शासन
                <strong> राजा हरिप्रसाद मल्ल</strong> के हाथों में था, जो एक वीर
                स्वतंत्रता सेनानी थे और 1857 के स्वतंत्रता संग्राम में उनका
                महत्वपूर्ण योगदान रहा। राजा हरिप्रसाद मल्ल ने ब्रिटिश सेना के
                राशन और हथियार जब्त कर अंग्रेजों का विरोध किया और बाबू कुंवर
                सिंह तथा बंधु सिंह जैसे क्रांतिकारियों के साथ मिलकर संघर्ष किया।
                इस विद्रोह के जवाब में अंग्रेजों ने सरयू नदी के पार से नरहरपुर
                किले पर तोपों से हमला किया, जिससे किला ध्वस्त हो गया और राजा
                हरिप्रसाद मल्ल अपने हजारों अनुयायियों के साथ शहीद हो गए। जहां
                अन्य रियासतों ने अंग्रेजों के सामने आत्मसमर्पण कर दिया, वहीं
                नरहरपुर ने संघर्ष और बलिदान का रास्ता चुना। यद्यपि स्थानीय स्तर
                पर उनकी विरासत को अब भी याद किया जाता है—विशेषकर शहीद स्मारक की
                स्थापना के माध्यम से—लेकिन उनके किले के अवशेष और स्वतंत्रता
                संग्राम में उनके योगदान को आज भी औपचारिक मान्यता नहीं मिली है।
                वर्ष 1857 में राजा हरिप्रसाद मल्ल ने चिल्लूपार से अंग्रेजी
                हुकूमत को चुनौती दी और दोहरीघाट स्थित नील कोठी से भेजे जा रहे
                हथियारों और रसद को जब्त कर लिया। अंग्रेजों ने इस विद्रोह से
                बौखलाकर नरहरपुर किले और सैनिक छावनी पर तोपों से भयंकर हमला किया,
                जिससे व्यापक तबाही हुई। इसके जवाब में राजा हरिप्रसाद मल्ल के
                सैनिकों ने नील कोठी को नष्ट कर दिया और कई अंग्रेज सैनिकों को मार
                डाला। इस स्वतंत्रता संग्राम में राजा हरिप्रसाद मल्ल वीरगति को
                प्राप्त हुए।
              </p>
              <p className="font-serif">
                चिल्लूपार गोरखपुर जनपद की एक रियासत थी, जिसका शासन राजा
                हरिप्रसाद मल्ल के हाथों में था। उनका किला सरयू नदी के तट पर
                स्थित नरहरपुर में था। 1857 तक मंगल पांडे द्वारा भड़काई गई
                क्रांति की चिंगारी पूरे क्षेत्र में फैलने लगी थी। राजा हरिप्रसाद
                मल्ल ने नरहरपुर किले में पैना गांव के क्रांतिकारियों, विभिन्न
                जातियों के लठैतों, धनुर्धारियों और तलवारबाजों के साथ बैठकें कीं।
                इन बैठकों में यह निश्चय हुआ कि मंगल पांडे द्वारा जलाई गई
                स्वतंत्रता की ज्योति को बुझने नहीं दिया जाएगा। अब अंग्रेजों की
                सेवा नहीं की जाएगी और न ही कर अदा किया जाएगा। जब दोहरीघाट के पास
                बहादुरपुर की नील कोठी के अधिकारियों को इसकी जानकारी हुई तो वे
                आगबबूला हो गए। उन्होंने राजा हरिप्रसाद मल्ल पर दबाव बनाने की
                कोशिश की, लेकिन राजा और उनके सैनिकों ने डटकर जवाब दिया। राजा
                हरिप्रसाद मल्ल ने अंग्रेज सरकार के हथियार और रसद जो नावों के
                माध्यम से गोरखपुर ले जाए जा रहे थे, जब्त कर लिए और अंग्रेजी
                हुकूमत को खुली चुनौती दी। क्रोधित अंग्रेज अधिकारियों ने
                चिल्लूपार रियासत पर हमला किया। राजा हरिप्रसाद मल्ल के सैनिकों ने
                भीषण प्रतिरोध किया और सैकड़ों अंग्रेज सैनिकों को मार गिराया।
                बौखलाए अंग्रेजों ने नील कोठी में खड़ी तोपों को नरहरपुर किले की
                ओर मोड़ दिया और भीषण गोला-बारी कर किले को मलबे में तब्दील कर
                दिया। इसके बाद अंग्रेज सेना ने चिल्लूपार की सैन्य छावनी, जो
                वर्तमान में “मुक्तिपथ” के नाम से जानी जाती है, को भी नष्ट कर
                दिया। बदले में राजा हरिप्रसाद मल्ल की सेना ने अंतिम आक्रमण करते
                हुए नील कोठी को आग के हवाले कर दिया और वहां तैनात अंग्रेज
                सैनिकों को मार डाला। इस युद्ध में राजा हरिप्रसाद मल्ल अपने
                हजारों सैनिकों सहित शहीद हो गए। जहां कभी राजा की छावनी थी, आज
                वहीं “मुक्तिपथ” रोड बनाई गई है।
              </p>
              <p className="font-serif">
                वहां शहीद सैनिकों की स्मृति में एक शहीद स्मारक का निर्माण किया
                गया है। हालांकि, राजा हरिप्रसाद मल्ल की शहादत स्थल और उनके किले
                के खंडहरों को आज भी वह मान्यता और सम्मान नहीं मिला है, जिसके वे
                हकदार हैं।
                <strong> बरदहालगंज थाना परिसर में राजा के अस्तबल: </strong> जहां
                आज बरदहालगंज पुलिस थाना स्थित है, वह स्थान पहले राजा हरिप्रसाद
                मल्ल का घुड़साल और हाथीशाला (हाथी दरबार) हुआ करता था। राजा नाव
                से अपने किले से वहां आते थे। अस्तबल का निरीक्षण करने के बाद वे
                उसी परिसर में स्थित जूनियर हाई स्कूल भवन में दरबार लगाते थे।
                वहीं वे स्थानीय लोगों से मिलते, उनकी समस्याएं सुनते और न्याय
                करते थे।
                <strong>बरदहालगंज बाजार का ऐतिहासिक महत्व:</strong> चिल्लूपार
                क्षेत्र का सबसे बड़ा बाजार, जिसे आज बरदहालगंज कहा जाता है, पहले
                “बरहनगंज” के नाम से जाना जाता था। यह आसपास के क्षेत्रों का सबसे
                प्रमुख व्यापारिक केंद्र था। समय के साथ इसका नाम बदलकर बरदहालगंज
                हो गया।
              </p>

              <p className="font-serif">
                <strong> पूर्व मंत्री का बयान:</strong>
              </p>

              <p className="font-serif mx-5 md:mx-10">
                <em>
                  मुक्तिपथ पर स्थानीय नागरिकों के सहयोग से एक शहीद स्मारक का
                  निर्माण किया गया है। राजा हरिप्रसाद मल्ल का नाम आज भी इस
                  क्षेत्र के लोगों के दिलों में गहरी देशभक्ति की भावना जागृत
                  करता है। फिर भी, उनके किले के अवशेष और शहादत स्थल को अब तक
                  पूरी मान्यता नहीं मिल पाई है। प्रयास शुरू हो चुके हैं और आशा
                  है कि सरकार इस इतिहास के महत्वपूर्ण हिस्से को संरक्षित और
                  सम्मानित करने के लिए कदम उठाएगी।
                </em>
              </p>
            </div>
          )}
        </div>

        <FamilyTreeStructure
          familyData={language === "english" ? narharpurFamilyData : narharpurFamilyDataHindi}
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
