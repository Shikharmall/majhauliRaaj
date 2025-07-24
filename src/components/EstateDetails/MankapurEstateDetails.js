"use client";
import React from "react";
import Image from "next/image";
import Banner from "../Banner";
import FamilyTreeStructure from "../FamilyTreeStructure";

const familyData = {
  name: "Jagat Bahadur Shahi",
  isKing: true,
  children: [
    {
      name: "Shattru Mardan Shahi (prev. Ranadhwaj Singh - adopted)",
      isKing: true,
      children: [
        {
          name: "Ripudaman Shahi",
          children: [],
        },
        {
          name: "Ran Vijaya Shahi",
          isKing: true,
          children: [
            {
              name: "Kirti Renu Singh",
              children: [
                {
                  name: "Surya Kirti Singh",
                  children: [],
                },
                {
                  name: "Arusha Singh",
                  children: [],
                },
              ],
            },
            {
              name: "Arindam Shahi",
              isKing: true,
              children: [
                {
                  name: "Arimardan Shahi",
                  children: [],
                },
                {
                  name: "Kritika Shahi",
                  children: [],
                },
                {
                  name: "Ripumardan Shahi",
                  children: [],
                },
              ],
            },
            {
              name: "Shattrundam Shahi",
              children: [
                {
                  name: "Sreejamya Shahi",
                  children: [],
                },
                {
                  name: "Samar Vijay Shahi",
                  children: [],
                },
              ],
            },
            {
              name: "Ripundam Shahi",
              children: [
                {
                  name: "Arkaja Shahi",
                  children: [],
                },
              ],
            },
          ],
        },
        {
          name: "Bhargavi Kumari Devi",
          children: [],
        },
        {
          name: "Indira Kumari Devi",
          children: [],
        },
        {
          name: "Padma Kumari Devi",
          children: [],
        },
        {
          name: "Ajay Kumar Shahi",
          children: [
            {
              name: "Rananjay Shahi",
              children: [
                {
                  name: "Bhavya Shahi",
                  children: [],
                },
              ],
            },
            {
              name: "Dhananjay Shahi",
              children: [],
            },
          ],
        },
      ],
    },
  ],
};

export default function MankapurEstateDetails() {
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
