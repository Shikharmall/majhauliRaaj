"use client";
import React from "react";
import Banner from "./Banner";
import FamilyTreeStructure from "./FamilyTreeStructure";

const familyData = {
  name: "Raja Raghuvansh Mall",
  children: [
    {
      name: "Raja Ratna Mall",
      children: [
        {
          name: "Raja Ram Mall",
          children: [
            {
              name: "Raja Nipra Mall",
              children: [
                {
                  name: "Raja Harishchandra Mall",
                  children: [
                    {
                      name: "Maharaja Dev Mall",
                      children: [
                        {
                          name: "Raja Prasad Mall",
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
                                              name: "Raja Bodh Mall",
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
                                                      children: [
                                                        {
                                                          name: "Raja Ajit Mall(Rani Dilraaj kuwaari)",
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
                          children: [
                            {
                              name: "Raja Nath Mall",
                              children: [],
                            },
                            {
                              name: "Raja Ajit Mall\n(Raja Fateh Bahadur Mall)",
                              children: [],
                            },
                          ],
                        },
                        {
                          name: "Raja Rai Mall\n(Narharpur Estate)",
                          children: [],
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "Raja Pratap Mall\n(Gonda)",
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
