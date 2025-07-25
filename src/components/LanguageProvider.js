"use client";
import { useState } from "react";
import LanguageContext from "@/context/languageContext";

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("english");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
