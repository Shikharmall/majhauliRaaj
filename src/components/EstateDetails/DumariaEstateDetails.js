"use client";
import React, { useContext } from "react";
import Image from "next/image";
import Banner from "../Banner";
import FamilyTreeStructure from "../FamilyTreeStructure";
import LanguageContext from "@/context/languageContext";

const familyData = {
  name: "Jagat Bahadur Shahi",
  isKing: true,
  children: [
    {
      name: "Shattru Mardan Shahi",
      isExtra: "(prev. Ranadhwaj Singh - adopted)",
      isKing: true,
      children: [
        {
          name: "Ripudaman Shahi",
        },
        {
          name: "Ran Vijaya Shahi",
          isKing: true,
          children: [
            {
              name: "Kirti Renu Singh",
              children: [
                {
                  name: "Surya Kirti Singh",
                },
                {
                  name: "Arusha Singh",
                },
              ],
            },
            {
              name: "Arindam Shahi",
              isKing: true,
              children: [
                {
                  name: "Arimardan Shahi",
                },
                {
                  name: "Kritika Shahi",
                },
                {
                  name: "Ripumardan Shahi",
                },
              ],
            },
            {
              name: "Shattrundam Shahi",
              children: [
                {
                  name: "Sreejamya Shahi",
                },
                {
                  name: "Samar Vijay Shahi",
                },
              ],
            },
            {
              name: "Ripundam Shahi",
              children: [
                {
                  name: "Arkaja Shahi",
                },
              ],
            },
          ],
        },
        {
          name: "Bhargavi Kumari Devi",
        },
        {
          name: "Indira Kumari Devi",
        },
        {
          name: "Padma Kumari Devi",
        },
        {
          name: "Ajay Kumar Shahi",
          children: [
            {
              name: "Rananjay Shahi",
              children: [
                {
                  name: "Bhavya Shahi",
                },
              ],
            },
            {
              name: "Dhananjay Shahi",
            },
          ],
        },
      ],
    },
  ],
};

const familyDataHindi = {
  name: "जगत बहादुर शाही",
  isKing: true,
  children: [
    {
      name: "शत्रु मर्दन शाही",
      isExtra: "(पूर्व में रणध्वज सिंह - दत्तक)",
      isKing: true,
      children: [
        {
          name: "रिपुदमन शाही",
        },
        {
          name: "रण विजय शाही",
          isKing: true,
          children: [
            {
              name: "कीर्ति रेनु सिंह",
              children: [
                {
                  name: "सूर्य कीर्ति सिंह",
                },
                {
                  name: "अरुषा सिंह",
                },
              ],
            },
            {
              name: "अरिंदम शाही",
              isKing: true,
              children: [
                {
                  name: "अरिमर्दन शाही",
                },
                {
                  name: "कृतिका शाही",
                },
                {
                  name: "रिपुमर्दन शाही",
                },
              ],
            },
            {
              name: "शत्रुंडम शाही",
              children: [
                {
                  name: "सृजम्य शाही",
                },
                {
                  name: "समर विजय शाही",
                },
              ],
            },
            {
              name: "रिपुंडम शाही",
              children: [
                {
                  name: "अर्कजा शाही",
                },
              ],
            },
          ],
        },
        {
          name: "भर्गवी कुमारी देवी",
        },
        {
          name: "इंदिरा कुमारी देवी",
        },
        {
          name: "पद्मा कुमारी देवी",
        },
        {
          name: "अजय कुमार शाही",
          children: [
            {
              name: "रणंजय शाही",
              children: [
                {
                  name: "भव्य शाही",
                },
              ],
            },
            {
              name: "धनंजय शाही",
            },
          ],
        },
      ],
    },
  ],
};

export default function DumariaEstateDetails() {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      <Banner
        title={
          language === "english" ? "Dumaria Zamindari" : "डुमरिया ज़मींदारी"
        }
      />

      {/* Main Content */}
      <main className="container mx-auto px-5 md:px-20 py-5 md:py-10">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Image */}
          <div className="md:col-span-1 ">
            <Image
              src="/assets/img/dumaria/dumaria1.jpg"
              alt="majhauli-img"
              width={600}
              height={400}
              className="rounded-lg shadow-lg border-3 border-gray-300"
            />
            <div className="flex items-center justify-center">
              <h2>
                {language === "english"
                  ? "Haveli of Dumaria Zamindari"
                  : "डुमरिया ज़मींदारी की हवेली"}
              </h2>
            </div>
            <br />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8638.905745604467!2d84.39244020699444!3d24.44341386225517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398cf31f8b3626a3%3A0x75658a35e4553df9!2sDumariya%2C%20Bihar%20824206!5e0!3m2!1sen!2sin!4v1753268952049!5m2!1sen!2sin"
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
                The founder of the family was Jagat Bahadur Shahi, who was a
                wealthy landlord living in Dumaria with his family, consisting
                of three wives and many daughters, but was still longing for a
                son who could succeed him. One day, another zamindar who
                originally belonged to Gorakhpur in Uttar Pradesh shifted with
                his family to a village called Navendrapur (which is half a km
                from Dumaria). The latter had five sons, the youngest of whom
                was, Ranadhwaj Singh who was adopted by Jagat Bahadur Shahi at a
                very young age but the adoption became legal only after
                Ranadhwaj turned 18 in 1921. After being adopted he was named
                Shattru Mardan Shahi. He was single handedly responsible for
                making Dumaria into what it later became. He owned about 5000
                acres of land, a considerable amount in those times.
              </p>
              <p className="font-serif"></p>
              <p className="font-serif"></p>
            </div>
          ) : (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
              <p className="font-serif">
                इस ज़मींदारी परिवार के संस्थापक जगत बहादुर शाही थे, जो डुमरिया
                गाँव में अपनी तीन पत्नियों और कई बेटियों के साथ रहने वाले एक
                समृद्ध ज़मींदार थे। हालांकि उनके पास संपत्ति और वैभव की कोई कमी
                नहीं थी, फिर भी वह एक ऐसे पुत्र की कामना कर रहे थे जो उनके
                उत्तराधिकारी बन सकें। एक दिन, उत्तर प्रदेश के गोरखपुर से संबंध
                रखने वाले एक अन्य ज़मींदार अपने परिवार सहित डुमरिया से लगभग आधा
                किलोमीटर दूर स्थित नवेंद्रपुर नामक गाँव में आकर बस गए। उस
                ज़मींदार के पाँच बेटे थे, जिनमें सबसे छोटे का नाम रणध्वज सिंह
                था। रणध्वज सिंह को जगत बहादुर शाही ने बहुत कम उम्र में गोद ले
                लिया था, लेकिन यह गोद लेने की प्रक्रिया विधिक (क़ानूनी) रूप से
                तभी पूरी हुई जब रणध्वज 18 वर्ष के हुए, यानी सन् 1921 में। गोद
                लेने के बाद उनका नाम बदलकर शत्रु मर्दन शाही रखा गया। शत्रु मर्दन
                शाही ने ही डुमरिया को वह पहचान और प्रतिष्ठा दिलाई जो उसे बाद में
                मिली। उनके पास लगभग 5000 एकड़ भूमि थी, जो उस समय के हिसाब से
                अत्यंत महत्वपूर्ण मानी जाती थी।
              </p>
              <p className="font-serif"></p>
              <p className="font-serif"></p>
            </div>
          )}
        </div>

        <FamilyTreeStructure
          familyData={language === "english" ? familyData : familyDataHindi}
        />
      </main>
    </div>
  );
}
