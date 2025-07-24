"use client";
import React from "react";
import Banner from "./Banner";
import FamilyTreeStructure from "./FamilyTreeStructure";

const familyData = {
  name: "Raja Raghuvansh Mall",
  isKing: true,
  children: [
    {
      name: "Raja Ratna Mall",
      isKing: true,
      children: [
        {
          name: "Raja Ram Mall",
          isKing: true,
          children: [
            {
              name: "Raja Nrip Mall",
              isKing: true,
              children: [
                {
                  name: "Raja Harishchandra Mall",
                  isKing: true,
                  children: [
                    {
                      name: "Maharaja Dev Mall",
                      isKing: true,
                      children: [
                        {
                          name: "Raja Prasad Mall",
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
                                              isKing: true,
                                              children: [
                                                {
                                                  name: "Bhavani Mall",
                                                  children: [
                                                    {
                                                      name: "Bheem Mall II",
                                                      children: [],
                                                    },
                                                  ],
                                                },
                                                {
                                                  name: "Lakshmi Mall",
                                                  children: [
                                                    {
                                                      name: "Raja Shiv Mall",
                                                      isKing: true,
                                                      children: [
                                                        {
                                                          name: "Raja Ajit Mall(Rani Dilraaj kuwaari)",
                                                          isKing: true,
                                                          children: [
                                                            {
                                                              name: "Tej Mall(adopted son of Babu Sarvajeet Mall)",
                                                              children: [],
                                                            },
                                                          ],
                                                        },
                                                      ],
                                                    },
                                                    {
                                                      name: "Babu Krishna Prasad Mall",
                                                      children: [
                                                        {
                                                          name: "Babu Sarvajeet Mall",
                                                          children: [
                                                            {
                                                              name: "Tej Mall",
                                                              children: [],
                                                            },
                                                          ],
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                },
                                                {
                                                  name: "Anand Mall",
                                                  children: [
                                                    {
                                                      name: "Govind Mall",
                                                      children: [
                                                        {
                                                          name: "Prithvi Mall",
                                                          children: [
                                                            {
                                                              name: "Pratap Mall",
                                                              children: [],
                                                            },
                                                            {
                                                              name: "Juba Mall",
                                                              children: [],
                                                            },
                                                            {
                                                              name: "Haripal Mall",
                                                              children: [],
                                                            },
                                                            {
                                                              name: "Kaniyha Mall",
                                                              children: [],
                                                            },
                                                          ],
                                                        },
                                                      ],
                                                    },
                                                    {
                                                      name: "Indra Mall",
                                                      children: [],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                        {
                                          name: "Babu Madhav Mall II (Ancestors of Mahen)",
                                          children: [],
                                        },
                                      ],
                                    },
                                    {
                                      name: "Raja Chatur Mall",
                                      isKing: true,
                                      children: [],
                                    },
                                    {
                                      name: "Babu Chattar Shahi",
                                      children: [],
                                    },
                                  ],
                                },
                                {
                                  name: "Babu Ram Shahi",
                                  children: [],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: "Raja Madhav Mall (Madhuban Estate)",
                          isKing: true,
                          children: [
                            {
                              name: "Raja Nath Mall",
                              isKing: true,
                              children: [],
                            },
                            {
                              name: "Ajit Mall(Fateh Bahadur Mall)",
                              children: [],
                            },
                          ],
                        },
                        {
                          name: "Raja Rai Mall(Narharpur Estate)",
                          isKing: true,
                          children: [],
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "Raja Pratap Mall(Gonda)",
                  isKing: true,
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Raja Roop Mall",
      isKing: true,
      children: [],
    },
  ],
};

export default function FamilyTreeDetails() {
  return (
    <div>
      <Banner title={"Royal Family Tree"} />
      <FamilyTreeStructure familyData={familyData} />
    </div>
  );
}
