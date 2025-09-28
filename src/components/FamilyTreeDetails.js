"use client";
import React, { useContext } from "react";
import Banner from "./common/Banner";
import FamilyTreeStructure from "./FamilyTreeStructure";
import LanguageContext from "@/context/languageContext";
import {
  majhauliFamilyData,
  majhauliFamilyDataHindi,
} from "@/data/majhauliFamilyData";

export default function FamilyTreeDetails() {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      <Banner
        title={
          language === "english" ? "Royal Family Tree" : "राजपरिवार वंशवृक्ष"
        }
      />
      <FamilyTreeStructure
        familyData={
          language === "english" ? majhauliFamilyData : majhauliFamilyDataHindi
        }
      />
    </div>
  );
}
