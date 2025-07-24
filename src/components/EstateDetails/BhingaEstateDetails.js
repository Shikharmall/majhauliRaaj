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

export default function BhingaEstateDetails() {
  return (
    <div>
      <Banner title={"Bhinga Estate"} />

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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8638.905745604467!2d84.39244020699444!3d24.44341386225517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398cf31f8b3626a3%3A0x75658a35e4553df9!2sDumariya%2C%20Bihar%20824206!5e0!3m2!1sen!2sin!4v1753268952049!5m2!1sen!2sin"
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
              The founder of the family was Jagat Bahadur Shahi, who was a
              wealthy landlord living in Dumaria with his family, consisting of
              three wives and many daughters, but was still longing for a son
              who could succeed him. One day, another zamindar who originally
              belonged to Gorakhpur in Uttar Pradesh shifted with his family to
              a village called Navendrapur (which is half a km from Dumaria).
              The latter had five sons, the youngest of whom was, Ranadhwaj
              Singh who was adopted by Jagat Bahadur Shahi at a very young age
              but the adoption became legal only after Ranadhwaj turned 18 in
              1921. After being adopted he was named Shattru Mardan Shahi. He
              was single handedly responsible for making Dumaria into what it
              later became. He owned about 5000 acres of land, a considerable
              amount in those times.
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
