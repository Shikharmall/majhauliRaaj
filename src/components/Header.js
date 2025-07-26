"use client";
import LanguageContext from "@/context/languageContext";
import { useContext } from "react";

export default function Header() {
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <header className="bg-[#082366] text-white border-b-3 border-green-500">
      <div className="container mx-auto flex justify-between items-center py-2 px-4">
        <div className="flex items-center space-x-4 text-sm">
          {/* <a className="hover:underline"></a> */}
          <span className="border-r border-white pr-4">thesarus.2022@gmail.com</span>
          <p
            className="cursor-pointer"
            onClick={() => {
              language === "english"
                ? setLanguage("hindi")
                : setLanguage("english");
            }}
          >
            {language === "english" ? "हिंदी में देखें" : "Watch in English"}
          </p>
        </div>
        <div className="flex space-x-3 text-xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter" />
          </a>
          <a href="#" className="fab fa-google-plus-g" />
          <a href="#" className="fab fa-linkedin-in" />
        </div>
      </div>
    </header>
  );
}
