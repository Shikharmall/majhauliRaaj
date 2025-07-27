"use client";
import { useEffect, useState } from "react";
import LanguageContext from "@/context/languageContext";

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("english");

  useEffect(() => {
    const languageStore = localStorage.getItem("language");
    if (languageStore) {
      setLanguage(languageStore);
    } else {
      localStorage.setItem("language", "english");
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
