"use client";
import React, { useContext } from "react";
import Image from "next/image";
import FamilyTreeStructure from "../FamilyTreeStructure";
import Banner from "../Banner";
import LanguageContext from "@/context/languageContext";
import {
  bhadriFamilyData,
  bhadriFamilyDataHindi,
} from "@/data/bhadriFamilyTree";

export default function BhadriEstateDetails() {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      <Banner
        title={language === "english" ? "Bhadri Estate" : "भदरी रियासत"}
      />

      {/* Main Content */}
      <main className="container mx-auto px-5 md:px-20 py-5 md:py-10">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Image */}
          <div className="md:col-span-1 ">
            <Image
              src="/assets/img/bhadri/bhadri1.png"
              alt="majhauli-img"
              width={600}
              height={400}
              className="rounded-lg shadow-lg border-3 border-gray-300"
            />
            <div className="flex items-center justify-center">
              <h2>
                {language === "english"
                  ? "Fort of Bhadri Estate"
                  : "भदरी रियासत का किला"}
              </h2>
            </div>
            <br />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28764.600329510467!2d81.54633988433976!3d25.685378177913105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399ad92161cf6587%3A0x50118c97d2357ba5!2sBhadri%2C%20Uttar%20Pradesh%20230201!5e0!3m2!1sen!2sin!4v1753359010351!5m2!1sen!2sin"
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
                The family of Bhadri is a younger branch of that of Kalakankar
                and belongs to the Bisen family, of which the head is the Raja
                of Rampur (Dharupur), while the head of the whole clan of Bisens
                is the Raja of Majhauli.
              </p>
              <p className="font-serif"></p>
              <p className="font-serif"></p>
            </div>
          ) : (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
              <p className="font-serif">
                भदरी का परिवार कलाकांकर के परिवार की एक कनिष्ठ शाखा है और यह
                बिसेन वंश से संबंधित है, जिसके प्रमुख रामपुर (धरुपुर) के राजा
                हैं, जबकि पूरे बिसेन वंश के प्रमुख मझौली के राजा हैं।
              </p>
              <p className="font-serif"></p>
              <p className="font-serif"></p>
            </div>
          )}
        </div>

        <FamilyTreeStructure
          familyData={
            language === "english" ? bhadriFamilyData : bhadriFamilyDataHindi
          }
        />
      </main>
    </div>
  );
}
