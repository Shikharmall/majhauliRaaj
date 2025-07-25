"use client";
import React, { useContext } from "react";
import Image from "next/image";
import Banner from "../Banner";
import FamilyTreeStructure from "../FamilyTreeStructure";
import LanguageContext from "@/context/languageContext";

const familyData = {
  name: "Raja AJMAT SINGHJI (1)",
  isExtra: "(Son of King of Gonda RAJA DUTT SINGH)",
  isKing: true,
  children: [
    {
      name: "Raja GOPAL SINGHJI (2)",
      isKing: true,
      children: [
        {
          name: "Raja Bahadur Singhji (3)",
          isKing: true,
          children: [
            {
              name: "Raja Bakht Singhji (4)",
              isKing: true,
              children: [
                {
                  name: "Raja Prithvi Pat Singhji (5)",
                  isKing: true,
                  children: [
                    {
                      name: "Maharani Gyan Kunwar",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Rajkumar (name unknown) Singhji",
          children: [
            {
              name: "Kunwar (name unknown) Singhji",
              children: [
                {
                  name: "Raja Jai Prakash Singhji (6)",
                  isKing: true,
                  children: [
                    {
                      name: "Raja RAGHURAJ SINGHJI (7)",
                      isKing: true,
                      children: [
                        {
                          name: "Raja Ambikeshwar Pratap Singhji (8)",
                          isKing: true,
                        },
                        {
                          name: "Kunwar Adya Rudra Pratap Singhji",
                        },
                        {
                          name: "Kuwarani Munni Bachcha",
                        },
                        {
                          name: "Raja Raghvendra Pratap Singhji (9)",
                          isKing: true,
                          children: [
                            {
                              name: "Raja Anand Singhji (10)",
                              isKing: true,
                              children: [
                                {
                                  name: "Rajkumari Niharika Kumari",
                                  children: [
                                    {
                                      name: "Akshay Singh",
                                    },
                                    {
                                      name: "Akshita Singh",
                                    },
                                  ],
                                },
                                {
                                  name: "Rajkumar Kirti Vardhan Singhji",
                                  children: [
                                    {
                                      name: "Jai Singh",
                                    },
                                  ],
                                },
                                {
                                  name: "Rajkumari Shivani Singh Ji",
                                  children: [
                                    {
                                      name: "Anirudh Singh",
                                    },
                                    {
                                      name: "Arnav Singh",
                                    },
                                    {
                                      name: "Shephali Singh",
                                    },
                                  ],
                                },
                                {
                                  name: "Rajkumari Radhika Singh Ji",
                                  children: [
                                    {
                                      name: "Vasudev Singh",
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              name: "Kunwarani Aruna Kumari",
                            },
                          ],
                        },
                        {
                          name: "Kunwar Devendra Pratap Singhji",
                        },
                        {
                          name: "Rani Shaileshwari Kumari",
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

export default function MankapurEstateDetails() {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      <Banner title={"Mankapur Estate"} />

      {/* Main Content */}
      <main className="container mx-auto px-20 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Image */}
          <div className="md:col-span-1 ">
            <Image
              src="/assets/img/mankapur/mankapur1.jpg"
              alt="majhauli-img"
              width={600}
              height={400}
              className="rounded-lg shadow-lg border-3 border-gray-300"
            />
            <div className="flex items-center justify-center">
              <h2>Gate of Mankapur Fort</h2>
            </div>
            <br />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23905.538677421067!2d82.20614949333229!3d27.04344762892043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39975619d581012f%3A0x439de32bbf7d69ab!2sMankapur%2C%20Uttar%20Pradesh%20271302!5e0!3m2!1sen!2sin!4v1753365606014!5m2!1sen!2sin"
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
              Raja Dutt Singh of Gonda seized the Bandhalgoti rai of Mankapur
              and gave it to his younger son, Kunwar Ajmat Singh who was still
              an infant at the time.
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
