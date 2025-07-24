"use client";
import React from "react";
import Image from "next/image";
import Banner from "../Banner";
import FamilyTreeStructure from "../FamilyTreeStructure";

const familyData = {
  name: "Babu Roop Mall",
  isKing: true,
  children: [
    {
      name: "Rai Hom Mall",
      isExtra: "(Kala Kankar)",
      isKing: true,
      children: [
        {
          name: "Rai Purandar Mall",
          isKing: true,
          children: [
            {
              name: "Rai Gopal Mall",
              isKing: true,
              children: [
                {
                  name: "Rai Radho",
                },
                {
                  name: "Babu Ram",
                  isKing: true,
                  children: [
                    {
                      name: "Rai Askaran",
                      isKing: true,
                      children: [
                        {
                          name: "Rudra Pratap",
                          isKing: true,
                          children: [
                            {
                              name: "Todal(Todar Mall)",
                              isKing: true,
                              children: [
                                {
                                  name: "Dharu Shah",
                                  isKing: true,
                                  children: [
                                    {
                                      name: "Barsal Rai",
                                      isKing: true,
                                      children: [
                                        {
                                          name: "Rai Jai Singh",
                                          isKing: true,
                                          children: [
                                            {
                                              name: "Rai Shyam Singh",
                                              isKing: true,
                                              children: [
                                                {
                                                  name: "Rai Sangram Singh",
                                                },
                                                {
                                                  name: "Mau Singh",
                                                  isKing: true,
                                                  children: [
                                                    {
                                                      name: "Rai Kamal Singh",
                                                      isKing: true,
                                                      children: [
                                                        {
                                                          name: "Lal Balwant Singh",
                                                          isKing: true,
                                                          children: [
                                                            {
                                                              name: "Lal Bairi Sal",
                                                              isKing: true,
                                                              children: [
                                                                {
                                                                  name: "Rai Hanumant Singh",
                                                                  isKing: true,
                                                                  children: [
                                                                    {
                                                                      name: "Laal Pratap Singh",
                                                                      isKing: true,
                                                                      children:
                                                                        [
                                                                          {
                                                                            name: "Raja Rampal Singh",
                                                                            isKing: true,
                                                                            children:
                                                                              [
                                                                                {
                                                                                  name: "Raja Ramesh Singh",
                                                                                  isKing: true,
                                                                                  children:
                                                                                    [
                                                                                      {
                                                                                        name: "Raja AVADESH SINGH",
                                                                                        isKing: true,
                                                                                        children:
                                                                                          [
                                                                                            {
                                                                                              name: "Raja DINESH SINGH",
                                                                                              isExtra:
                                                                                                "(Former Foreign Minister)",
                                                                                              isKing: true,
                                                                                              children:
                                                                                                [],
                                                                                            },
                                                                                          ],
                                                                                      },
                                                                                      {
                                                                                        name: "Brijesh Singh",
                                                                                      },
                                                                                      {
                                                                                        name: "Suresh Singh",
                                                                                      },
                                                                                    ],
                                                                                },
                                                                              ],
                                                                          },
                                                                        ],
                                                                    },
                                                                    {
                                                                      name: "Lakshman Singh",
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
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      name: "Rai Kashi",
                    },
                    {
                      name: "Rai Khemkaran",
                    },
                  ],
                },
                {
                  name: "Rai Rajneesh",
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default function KalakankarEstateDetails() {
  return (
    <div>
      <Banner title={"Kalakankar Estate"} />

      {/* Main Content */}
      <main className="container mx-auto px-20 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Image */}
          <div className="md:col-span-1 ">
            <Image
              src="/assets/img/kalakankar/kalakankar1.jpeg"
              alt="majhauli-img"
              width={600}
              height={400}
              className="rounded-lg shadow-lg border-3 border-gray-300"
            />
            <div className="flex items-center justify-center">
              <h2>Kalakankar Fort</h2>
            </div>
            <br />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14369.46722136209!2d81.3450168463899!3d25.791470207595832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399b186f0960f8b5%3A0xd944f342d54729d!2sKalakankar%2C%20Uttar%20Pradesh%20229408!5e0!3m2!1sen!2sin!4v1753358403077!5m2!1sen!2sin"
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
              The estate was also known as Rampur Dharupur. The founder of the
              family was Raja Hom Mull, a younger son of Raja Prithvi Mall of
              Majhauli in Gorakhpur.
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
