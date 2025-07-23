"use client";
import React from "react";
import Image from "next/image";
import Banner from "./Banner";
import FamilyTreeStructure from "./FamilyTreeStructure";

const familyData = {
  name: "Raja Vishwa Sen",
  children: [
    {
      name: "",
      isInfinite: true,
      children: [
        {
          name: "Raja Raghuvansh Mall",
          children: [
            {
              name: "Raja Ratan Mall",
              children: [
                {
                  name: "Raja Niph Mall",
                  children: [
                    {
                      name: "Raja Harishchandra Mall (Majhauli)",
                      children: [
                        {
                          name: "Maharaja Dev Mall",
                          children: [
                            {
                              name: "Raja Prasad Mall (Majhauli)",
                              children: [
                                {
                                  name: "Maharaja Bheem Mall",
                                  children: [
                                    {
                                      name: "Raja Narayan Mall",
                                      children: [
                                        {
                                          name: "Raja Roop Mall",
                                          children: [
                                            {
                                              name: "Raja Vikramaditya Mall",
                                              children: [
                                                {
                                                  name: "Raja Bodh Mall (after him something error)",
                                                  children: [
                                                    {
                                                      name: "Raja Shiv Mall",
                                                      children: [
                                                        {
                                                          name: "Raja Ajit Mall",
                                                          children: [
                                                            {
                                                              name: "Raja Tej Mall",
                                                              children: [
                                                                {
                                                                  name: "Raja Udaynarayan Mall",
                                                                  children: [
                                                                    {
                                                                      name: ".",
                                                                      children:
                                                                        [
                                                                          {
                                                                            name: "Raja Kaushal Kishore Mall",
                                                                            children:
                                                                              [
                                                                                {
                                                                                  name: "Raani Shyaam Sundari Ku.",
                                                                                  children:
                                                                                    [
                                                                                      {
                                                                                        name: "Raja Inderjeet Mall",
                                                                                        children:
                                                                                          [
                                                                                            {
                                                                                              name: "Raja Balbhadra Mall",
                                                                                              children:
                                                                                                [
                                                                                                  {
                                                                                                    name: "Raja Awadhesh Mall",
                                                                                                    children:
                                                                                                      [
                                                                                                        {
                                                                                                          name: "Majhauli Estate merge with Republic of India",
                                                                                                          children:
                                                                                                            [],
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
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              name: "Raja Madhav Mall (Madhuban)",
                              children: [
                                {
                                  name: "Raja Nath Mall",
                                  children: [],
                                },
                                {
                                  name: "Raja Ajit Mall",
                                  children: [],
                                },
                              ],
                            },
                            {
                              name: "Raja RaiMall (Narharpur)",
                              children: [],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      name: "Raja Ram Pratap Mall (Gonda)",
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
  ],
};

export default function EstateDetails() {
  return (
    <div>
      <Banner title={"Majhauli Estate"} />

      {/* Main Content */}
      <main className="container mx-auto px-20 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Image */}
          <div className="md:col-span-1 ">
            <Image
              src="/assets/img/majhauliraaj7.jpeg"
              alt="majhauli-img"
              width={600}
              height={400}
              className="rounded-lg shadow-lg border-3 border-gray-300"
            />
            <br />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7153.794212572512!2d83.95687574101336!3d26.29743542657846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993b53248562115%3A0xcf26bb1cd7634614!2sMajhauli%20Raj%2C%20Uttar%20Pradesh%20274506!5e0!3m2!1sen!2sin!4v1753097706026!5m2!1sen!2sin"
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
              Majhauli Raj was the seat of an eponymous Bisen/Visen feudal
              estate known as the Majhauli Raj, which is said to have been
              founded around 1100 to 1300 CE. King Vishwa Sen (Estimated Around
              1000 to 1200 BCE), one of the sole king of Malla Desh or Malla
              Bhumi or Malla Rastra (Later known as Malla Mahajanpada), had
              ruled prior to Mahajanpad Era from Kushinagar as capital of
              eastern Koshala.Later one of descendant of King Vishwa Sen
              (i.e.most probably 86th generation) King Bhim Malla went to
              conquer the pargana of Salempur, Uttar Pradesh and Majhauli, where
              he founded a fort and established the Majhauli Raj around 1100 to
              1300 CE.
            </p>
            <p className="font-serif">
              One branch of this dynasty comes from a founder named Mayyur who
              has been variously described as a Brahmin, Bhumihar or even a
              Bhat. He had come from Kashi to Kushinara had children with four
              wives: One Brahmin, one Malla princess (name may be Suryaprabha),
              one more Bhumihar, as well as one Rajput. His son from his
              Bhumihar wife named King Bir Sen (Estimated 600 BCE ) founder of
              Baghochia Dynasty and his descendants established Bans Gaon Estate
              (Dileepnagar Estate), Hathwa Raj and Tamkuhi raj and started
              Bhumihar branch . One son from his Malla princess name King
              Vishwasen founder of Vishwasen Rajput dynasty and his descendant
              (probably 86th generation) King Bhim Dev stablished Majhuli Raj,
              One son from his Brahmin wife went on to become the ancestor of
              the Misra Brahmins; and the son from his Kurmi wife went on to
              found the Kakradih estate.
            </p>
            <p className="font-serif">
              As the kings of Majhauli Raj were descendants of King Vishwasen of
              Malla Mahajanpad, they stills put this name as a surname i.e.
              Vishen/Bisen short form of Vishwasen in their names. They are
              Suryavanshi Rajput and claim to be sons of God Laxmana from his
              one of the sons Chandraketu (had got title 'Malla' for being
              extraordinary wrestler or fighter of that time) who was ruler of
              Malla Rastra or Malla Mahajanpada in ancient India. Later many
              kings who were of Majhauli Kingdom established many estates of
              names Manakpur (Estate), Bhadri (Estate), Raja Madhav Mall
              (Madhuban), Kalakankar (Estate) and many more in North India.
            </p>
          </div>
        </div>

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
        <FamilyTreeStructure familyData={familyData} />
      </main>
    </div>
  );
}
