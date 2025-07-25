"use client";
import React from "react";
import Image from "next/image";
import Banner from "../Banner";
import FamilyTreeStructure from "../FamilyTreeStructure";

const familyData1 = {
  name: "Majhauli Raj",
  isExtra: "(Deoria)",
  children: [
    {
      name: "Majhauli Raj",
      isExtra: "(continues)",
      children: [
        {
          name: "Majhauli Raj",
          isExtra: "(continues)",
          children: [
            {
              name: "Majhauli Raj",
              isExtra: "(continues)",
              children: [],
            },
            {
              name: "Madhuban Estate",
              isExtra: "(Madhuban)",
              children: [],
            },
            {
              name: "Narharpur Estate",
              isExtra: "(Narharpur)",
              children: [],
            },
          ],
        },
        {
          name: "Gonda Estate",
          isExtra: "(Gonda)",
          children: [
            {
              name: "Gonda Estate",
              isExtra: "(continues)",
              children: [
                {
                  name: "Gonda Estate",
                  isExtra: "(continues)",
                  children: [],
                },
                {
                  name: "Bhinga Estate",
                  isExtra: "Oudh (Bahraich Dist.)",
                  children: [],
                },
              ],
            },
            {
              name: "Mankapur Estate",
              isExtra: "Uttar Pradesh (Gonda Dist.)",
              children: [],
            },
          ],
        },
      ],
    },
    {
      name: "Kala Kankar Estate",
      isExtra: "Oudh, Uttar Pradesh",
      children: [
        {
          name: "Kala Kankar Estate",
          isExtra: "(continues)",
          children: [],
        },
        {
          name: "Badri Estate",
          isExtra: "Oudh (Pratapgarh Dist.)",
          children: [],
        },
      ],
    },
  ],
};

const familyData = {
  name: "Raja Vishwa Sen",
  isKing: true,
  children: [
    {
      name: "",
      isInfinite: true,
      children: [
        {
          name: "Raja Raghuvansh Mall",
          isKing: true,
          children: [
            {
              name: "Raja Ratan Mall",
              isExtra: "(Majhauli)",
              isKing: true,
              children: [
                {
                  name: "Raja Nrip Mall",
                  isKing: true,
                  children: [
                    {
                      name: "Raja Harishchandra Mall",
                      isExtra: "(Majhauli)",
                      isKing: true,
                      children: [
                        {
                          name: "Maharaja Dev Mall",
                          isKing: true,
                          children: [
                            {
                              name: "Raja Prasad Mall",
                              isExtra: "(Majhauli)",
                              isKing: true,
                              children: [
                                {
                                  name: "Maharaja Bheem Mall",
                                  isKing: true,
                                  children: [
                                    {
                                      name: "Raja Narayan Mall",
                                      isKing: true,
                                      children: [
                                        {
                                          name: "Raja Roop Mall",
                                          isKing: true,
                                          children: [
                                            {
                                              name: "Raja Vikramaditya Mall",
                                              isKing: true,
                                              children: [
                                                {
                                                  name: "Raja Bodh Mall",
                                                  isExtra:
                                                    "(after him something error)",
                                                  isKing: true,
                                                  children: [
                                                    {
                                                      name: "Raja Shiv Mall",
                                                      isKing: true,
                                                      children: [
                                                        {
                                                          name: "Raja Ajit Mall",
                                                          isKing: true,
                                                          children: [
                                                            {
                                                              name: "Raja Tej Mall",
                                                              isKing: true,
                                                              children: [
                                                                {
                                                                  name: "Raja Udaynarayan Mall",
                                                                  isKing: true,
                                                                  children: [
                                                                    {
                                                                      name: "",
                                                                      isInfinite: true,
                                                                      children:
                                                                        [
                                                                          {
                                                                            name: "Raja Kaushal Kishore Mall",
                                                                            isKing: true,
                                                                            children:
                                                                              [
                                                                                {
                                                                                  name: "Raani Shyaam Sundari Ku.",
                                                                                  isKing: true,
                                                                                  children:
                                                                                    [
                                                                                      {
                                                                                        name: "Raja Inderjeet Mall",
                                                                                        isKing: true,
                                                                                        children:
                                                                                          [
                                                                                            {
                                                                                              name: "Raja Balbhadra Mall",
                                                                                              isKing: true,
                                                                                              children:
                                                                                                [
                                                                                                  {
                                                                                                    name: "Raja Awadhesh Mall",
                                                                                                    isKing: true,
                                                                                                    children:
                                                                                                      [
                                                                                                        {
                                                                                                          name: "Majhauli Estate merge with Republic of India(1947)",
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
                              name: "Raja Madhav Mall",
                              isExtra: "(Madhuban)",
                              isKing: true,
                              children: [
                                {
                                  name: "Raja Nath Mall",
                                  isKing: true,
                                  children: [],
                                },
                              ],
                            },
                            {
                              name: "Raja RaiMall",
                              isExtra: "(Narharpur)",
                              isKing: true,
                              children: [
                                {
                                  name: "",
                                  isInfinite: true,
                                  children: [
                                    {
                                      name: "Raja Hari Prasad Mall",
                                      isExtra: "(Martyr - 1857)",
                                      isKing: true,
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
                      name: "Raja Ram Pratap Mall",
                      isExtra: "(Gonda)",
                      isKing: true,
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
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
                              isKing: true,
                              children: [
                                {
                                  name: "",
                                  isInfinite: true,
                                  children: [
                                    {
                                      name: "Rai SABAL SHAH",
                                      isKing: true,
                                      children: [
                                        {
                                          name: "Rai BIKRAM SHAH",
                                          isKing: true,
                                          children: [
                                            {
                                              name: "Rai CHHATAR SINGH",
                                              isKing: true,
                                              children: [
                                                {
                                                  name: "Rai RAM SINGH",
                                                  isKing: true,
                                                  children: [
                                                    {
                                                      name: "Rai GAHARWAR SINGH",
                                                      isKing: true,
                                                      children: [
                                                        {
                                                          name: "Rai DALJIT SINGH",
                                                          isKing: true,
                                                          children: [
                                                            {
                                                              name: "Rai ZALIM SINGH",
                                                              isKing: true,
                                                              children: [
                                                                {
                                                                  name: "Rai DALJIT SINGH",
                                                                  isKing: true,
                                                                  children: [
                                                                    {
                                                                      name: "Rai JAGMOHAN SINGH",
                                                                      isKing: true,
                                                                      children:
                                                                        [
                                                                          {
                                                                            name: "Rai BISHNATH SINGH",
                                                                            isKing: true,
                                                                            children:
                                                                              [
                                                                                {
                                                                                  name: "Rai JAGAT BAHADUR SINGH",
                                                                                  isKing: true,
                                                                                  children:
                                                                                    [
                                                                                      {
                                                                                        name: "Rai SARABJIT SINGH",
                                                                                        isKing: true,
                                                                                        children:
                                                                                          [
                                                                                            {
                                                                                              name: "Rai KRISHAN PRASAD SINGH",
                                                                                              isKing: true,
                                                                                              children:
                                                                                                [
                                                                                                  {
                                                                                                    name: "Raja BAJRANG BAHADUR SINGH",
                                                                                                    isKing: true,
                                                                                                    children:
                                                                                                      [
                                                                                                        {
                                                                                                          name: "Raja UDAI PRATAP SINGH",
                                                                                                          isKing: true,
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
                                                                      children:
                                                                        [
                                                                          {
                                                                            name: "Lal Berisaat",
                                                                            isKing: true,
                                                                            children:
                                                                              [
                                                                                {
                                                                                  name: "Rai Hanumant Singh",
                                                                                  isKing: true,
                                                                                  children:
                                                                                    [
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
};

export default function MajhauliEstateDetails() {
  return (
    <div>
      <Banner title={"Majhauli Estate"} />

      {/* Main Content */}
      <main className="container mx-auto px-20 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Image */}
          <div className="md:col-span-1 ">
            <Image
              src="/assets/img/majhauli/majhauliraj7.jpeg"
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

        <FamilyTreeStructure familyData={familyData1} />

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
