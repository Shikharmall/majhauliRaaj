"use client";
import React from "react";
import Image from "next/image";
import Banner from "./Banner";
import FamilyTreeStructure from "./FamilyTreeStructure";

const familyData = {
  name: "Raja Madhav Mall",
  isKing: true,
  children: [
    {
      name: "Raja Nath Mall",
      children: [
        {
          name: "Ajit Mall",
          children: [
            {
              name: "Vijay Mall",
              children: [
                {
                  name: "Ganga Mall",
                  children: [],
                },
                {
                  name: "Sultan Mall",
                  children: [],
                },
                {
                  name: "Naval Mall",
                  children: [],
                },
                {
                  name: "Madhav Mall",
                  children: [],
                },
                {
                  name: "Brindavan Mall",
                  children: [],
                },
                {
                  name: "Vikram Mall",
                  children: [],
                },
                {
                  name: "Vishnu Dayal Mall",
                  children: [
                    {
                      name: "Dhaval Mall",
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
    {
      name: "Raja Ajay Mall (Raja Fateh Bahadur Mall)",
      children: [
        {
          name: "Harihar Mall",
          children: [
            {
              name: "Nag Mall",
              children: [],
            },
            {
              name: "Karan Mall",
              children: [],
            },
            {
              name: "Narhar Mall",
              children: [],
            },
            {
              name: "Banwari Mall",
              children: [],
            },
            {
              name: "Bisha Mall",
              children: [
                {
                  name: "Sesar Mall",
                  children: [],
                },
                {
                  name: "Vihari Mall",
                  children: [
                    {
                      name: "Narseva Mall",
                      children: [
                        {
                          name: "Nandan Mall",
                          children: [],
                        },
                        {
                          name: "Kaval Mall",
                          children: [
                            {
                              name: "Jawaahar Mall",
                              children: [],
                            },
                            {
                              name: "Uttam Mall",
                              children: [
                                {
                                  name: "Bacchan Mall",
                                  children: [
                                    {
                                      name: "Nanua Mall",
                                      children: [
                                        {
                                          name: "Tikaat Mall",
                                          children: [
                                            {
                                              name: "Shiv Baksh Mall",
                                              children: [
                                                {
                                                  name: "Nakched Mall",
                                                  children: [],
                                                },
                                                {
                                                  name: "Charita Mall",
                                                  children: [
                                                    {
                                                      name: "Tarapati Mall",
                                                      children: [],
                                                    },
                                                    {
                                                      name: "Ram Prasad Mall",
                                                      children: [],
                                                    },
                                                    {
                                                      name: "Shiv Prasad Mall",
                                                      children: [],
                                                    },
                                                  ],
                                                },
                                                {
                                                  name: "Madaari Mall",
                                                  children: [],
                                                },
                                              ],
                                            },
                                            {
                                              name: "Jabaal Mall",
                                              children: [],
                                            },
                                            {
                                              name: "Ram Baksh Mall",
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
                            {
                              name: "Dhaamu Mall",
                              children: [
                                {
                                  name: "Anand Mall",
                                  children: [],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: "Baban Mall",
                          children: [],
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "Mohan Mall",
                  children: [],
                },
              ],
            },
            {
              name: "Ratti Mall",
              children: [],
            },
          ],
        },
      ],
    },
  ],
};

export default function MadhubanEstateDetails() {
  return (
    <div>
      <Banner
        title={
          <>
            Madhuban Estate
            {/* (est. mid 16<sup>th</sup> century) */}
          </>
        }
      />

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
          <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
            <p className="font-serif">
              Raja Madhav Mall was a prominent Rajput ruler from the Vishen
              (also called Bisen) dynasty, historically linked to the Majhauli
              Raj estate in eastern Uttar Pradesh. He was the second son of Raja
              Dev Mall, the 95th ruler of the Majhauli line.
            </p>
            <p className="font-serif">
              In the mid-16th century, Raja Madhav Mall established the region
              known as Madhuban (in present-day Mau district, Uttar Pradesh),
              which became an influential settlement for his descendants. This
              area is now the Madhuban tehsil, comprising numerous villages and
              a significant population.
            </p>
            <p className="font-serif">
              Raja Madhav Malla had two sons: Raja Nath Malla and Raja Ajay
              Bahadur Malla (also known as Fateh Bahadur Malla). Their
              descendants took on the surname “Mall”, and many settled across
              eastern UP — especially in Madhuban, Mau, Gorakhpur and Deoria,
              and villages like Hasanpur, Bahrampur, Jajoli, Ahirauli, and
              Parshurampur.
            </p>
          </div>
        </div>

        <FamilyTreeStructure familyData={familyData} />

        {/* Personal Details Table */}
        {/* <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Personal Details</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <tbody>
                <tr>
                  <th className="border px-4 py-2 text-left">Name</th>
                  <td className="border px-4 py-2">
                    Brij Bhushan Sharan Singh
                  </td>
                </tr>
                <tr>
                  <th className="border px-4 py-2 text-left">Father’s Name</th>
                  <td className="border px-4 py-2">
                    Shri Jagdamba Sharan Singh
                  </td>
                </tr>
                <tr>
                  <th className="border px-4 py-2 text-left">Date of Birth</th>
                  <td className="border px-4 py-2">08 January 1957</td>
                </tr>
                <tr>
                  <th className="border px-4 py-2 text-left">Place of Birth</th>
                  <td className="border px-4 py-2">Gonda, Uttar Pradesh</td>
                </tr>
                <tr>
                  <th className="border px-4 py-2 text-left">Marital Status</th>
                  <td className="border px-4 py-2">Married</td>
                </tr>
                <tr>
                  <th className="border px-4 py-2 text-left">Spouse</th>
                  <td className="border px-4 py-2">Ketki Devi Singh</td>
                </tr>
                <tr>
                  <th className="border px-4 py-2 text-left">Children</th>
                  <td className="border px-4 py-2">2 sons and 1 daughter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> */}

        {/* Positions Held Table */}
        {/* <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Positions Held</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2 text-left">Year</th>
                  <th className="border px-4 py-2 text-left">Position</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">1991</td>
                  <td className="border px-4 py-2">
                    Elected to 10th Lok Sabha (Gonda)
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">1999</td>
                  <td className="border px-4 py-2">
                    Elected to 13th Lok Sabha (Balrampur)
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">2004</td>
                  <td className="border px-4 py-2">
                    Elected to 14th Lok Sabha (Kaiserganj)
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">2009</td>
                  <td className="border px-4 py-2">
                    Re-elected to 15th Lok Sabha (Kaiserganj)
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">2014</td>
                  <td className="border px-4 py-2">
                    Re-elected to 16th Lok Sabha (Kaiserganj)
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">2019</td>
                  <td className="border px-4 py-2">
                    Re-elected to 17th Lok Sabha (Kaiserganj)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> */}
      </main>
    </div>
  );
}
