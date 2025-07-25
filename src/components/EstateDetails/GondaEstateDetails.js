"use client";
import React, { useContext } from "react";
import Image from "next/image";
import Banner from "../Banner";
import FamilyTreeStructure from "../FamilyTreeStructure";
import LanguageContext from "@/context/languageContext";

const familyData = {
  name: "Raja Prithvi Mall?",
  isKing: true,
  children: [
    {
      name: "Raja PRATAP MALL",
      isKing: true,
      children: [
        {
          name: "Raja SHAH MALL",
          isKing: true,
          children: [
            {
              name: "Raja KUSUM MALL",
              isKing: true,
              children: [
                {
                  name: "Raja MAN SINGH",
                  isKing: true,
                  children: [
                    {
                      name: "Raja MAN SINGH",
                      isKing: true,
                      children: [
                        {
                          name: "Raja LAKSHMAN SINGH",
                          isKing: true,
                          children: [
                            {
                              name: "Raja NIRVAHAN SINGH",
                              isKing: true,
                              children: [
                                {
                                  name: "Raja AMAR SINGH",
                                  isKing: true,
                                  children: [
                                    {
                                      name: "Raja RAM SINGH",
                                      isKing: true,
                                      children: [
                                        {
                                          name: "Raja Dutt Singh",
                                          isKing: true,
                                          children: [
                                            {
                                              name: "Raja Udit Singh",
                                              isKing: true,
                                              children: [
                                                {
                                                  name: "Raja Mangal Singh",
                                                  isKing: true,
                                                  children: [
                                                    {
                                                      name: "Raja Sheo Prasad Singh",
                                                      isKing: true,
                                                      children: [
                                                        {
                                                          name: "Raja Jai Singh",
                                                          isKing: true,
                                                          children: [
                                                            {
                                                              name: "Raja GUMAN SINGH",
                                                              isExtra:
                                                                "(I'st son of KANWAR(NAME UNKNOWN) SINGH)",
                                                              isKing: true,
                                                              children: [
                                                                {
                                                                  name: "Raja DEVI BAKSH SINGH",
                                                                  isKing: true,
                                                                  isExtra: `(Son of II'nd son of KANWAR(NAME UNKNOWN) SINGH)`,
                                                                  children: [
                                                                    {
                                                                      name: "property being given to the Zamindar of Balrampur after 1857",
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
                                                      name: "Maharani Ser Kunwar",
                                                    },
                                                  ],
                                                },
                                                {
                                                  name: "Kanwar Pahlwan Singh",
                                                  children: [
                                                    {
                                                      name: "Kanwar(name unknown) Singh",
                                                      children: [
                                                        {
                                                          name: "Raja Guman Singh",
                                                        },
                                                        {
                                                          name: "Kunwar Daljit Singh",
                                                          children: [
                                                            {
                                                              name: "Raja Devi Baksh Singh",
                                                            },
                                                          ],
                                                        },
                                                      ],
                                                    },
                                                    {
                                                      name: "Kanwar Hindupat Singh",
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                            {
                                              name: "Raja Ajmat Singh",
                                              isKing: true,
                                              isExtra:
                                                "(Received the estate of Mankapur from his father.)",
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      name: "Raja Bhawani Singh",
                                      isKing: true,
                                      isExtra:
                                        "(Received the estate of Bhinga from his brother.)",
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
      name: "Raja Hom Mall?",
      isKing: true,
    },
  ],
};

export default function GondaEstateDetails() {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      <Banner title={"Gonda Estate"} />

      {/* Main Content */}
      <main className="container mx-auto px-20 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Image */}
          <div className="md:col-span-1 ">
            <Image
              src="/assets/img/madhuban1.jpg"
              alt="majhauli-img"
              width={600}
              height={400}
              className="rounded-lg shadow-lg border-3 border-gray-300"
            />
            <div className="flex items-center justify-center">
              <h2>Ruins of Raja Fateh Bahadur Mall's Haveli</h2>
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
          <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
            <p className="font-serif">
              The ancestor of the Bisen Dynasty of Gonda, Bhinga, Kalakankar etc
              was Raja Prithvi Mall of Majhauli in Gorakhpur. Gonda was founded
              by Man Mall, the first to use the surname of Singh, who was given
              the title of Raja in 1618 by the Mughal Emperor. He was also the
              ancestor of the Rulers of Bhinga and Mankapur.
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
