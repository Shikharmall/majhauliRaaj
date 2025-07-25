"use client";
import React, { useContext } from "react";
import Image from "next/image";
import Banner from "../Banner";
import FamilyTreeStructure from "../FamilyTreeStructure";
import LanguageContext from "@/context/languageContext";

const familyData = {
  name: "Raja BHAWANI SINGH",
  isKing: true,
  children: [
    {
      name: "Raja SARV DAMAN SINGH",
      isKing: true,
      children: [
        {
          name: "Raja SHEO SINGH",
          isKing: true,
          children: [
            {
              name: "Raja JAGAT SINGH",
              isKing: true,
              children: [
                {
                  name: "Raja SARABJIT SINGH",
                  isKing: true,
                  children: [
                    {
                      name: "Raja KRISHNA DUTT SINGH",
                      isKing: true,
                      children: [
                        {
                          name: "Raja Saheb Udai Pratap Singh",
                          isKing: true,
                          children: [
                            {
                              name: "Kunwar Surendra Bikram Singh",
                            },
                            {
                              name: "Raja Saheb Rajendra Bahadur Singh",
                              isKing: true,
                              children: [
                                {
                                  name: "Raja Saheb Virendra Kant Singh",
                                  isKing: true,
                                  children: [
                                    {
                                      name: "Yuvaraj Alekshandra Kant Singh,",
                                      children: [
                                        {
                                          name: "Raja Saheb Chandra Mani Kant Singh",
                                          isKing: true,
                                        },
                                        { name: "Rani Bhuratna Prabha Kumari" },
                                      ],
                                    },
                                    {
                                      name: "Kunwar Chamendra Kant Singh",
                                    },
                                  ],
                                },
                                {
                                  name: "Rajkumar Yogendra Kant Singh",
                                  children: [
                                    {
                                      name: "Kunwar Yopendra Kant Singh",
                                    },
                                    {
                                      name: "Kunwar Sataindra Kant Singh",
                                    },
                                  ],
                                },
                                {
                                  name: "Rajkumar Jayendra Singh of Lachmanpur",
                                  children: [],
                                },
                              ],
                            },
                            {
                              name: "Kunwar Man Mahendra Bikram Singh",
                              children: [
                                {
                                  name: "Maharani Brijraj Kunwar",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: "Kumari (name unknown) [Rani Sahiba of Malhajini]",
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

export default function BhingaEstateDetails() {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      <Banner title={"Bhinga Estate"} />

      {/* Main Content */}
      <main className="container mx-auto px-20 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Image */}
          <div className="md:col-span-1 ">
            <Image
              src="/assets/img/bhinga/bhinga1.jpg"
              alt="majhauli-img"
              width={600}
              height={400}
              className="rounded-lg shadow-lg border-3 border-gray-300"
            />
            <div className="flex items-center justify-center">
              <h2>Fort of Bhinga</h2>
            </div>
            <br />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14129.781230779357!2d81.92524194743521!3d27.703534016951988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399834b862bee2d1%3A0x86869b712e431d80!2sBhinga%2C%20Uttar%20Pradesh%20271831!5e0!3m2!1sen!2sin!4v1753388737057!5m2!1sen!2sin"
              width="100%"
              height="300"
              className="w-full rounded-md border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Bio */}
          <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
            <p className="font-serif">
              The Taluq was granted to Kunwar Bhawani Singh, second son of Raja
              Ram Singh of Gonda
            </p>
            <p className="font-serif"></p>
            <p className="font-serif"></p>
          </div>
        </div>

        <FamilyTreeStructure familyData={familyData} />
      </main>
    </div>
  );
}
