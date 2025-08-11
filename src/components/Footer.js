"use client";
import LanguageContext from "@/context/languageContext";
import { useContext } from "react";

export default function Footer() {
  const { language } = useContext(LanguageContext);

  const quickLinks = [
    { name: "HOME", nameHindi: "होम", link: "/" },
    {
      name: "ROYAL FAMILY TREE",
      nameHindi: "राजपरिवार वंशवृक्ष",
      link: "/familyTree",
    },
    { name: "GALLERY", nameHindi: "गैलरी", link: "/gallery" },
    { name: "CONTACT US", nameHindi: "संपर्क करें", link: "/contact" },
  ];

  const aboutMe = [
    { name: "HOME", nameHindi: "होम", link: "/" },
    {
      name: "ROYAL FAMILY TREE",
      nameHindi: "राजपरिवार वंशवृक्ष",
      link: "/familyTree",
    },
    { name: "GALLERY", nameHindi: "गैलरी", link: "/gallery" },
    { name: "CONTACT US", nameHindi: "संपर्क करें", link: "/contact" },
  ];

  return (
    <footer
      className="relative min-h-screen bg-cover bg-center flex flex-col text-white"
      style={{
        backgroundImage: "url('/assets/img/majhauli/majhauliraj9.png')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-70 pointer-events-none"></div>

      {/* Content wrapper */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 py-16 flex flex-col flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 flex-grow">
          {/* Contact Us */}
          <div>
            <h5 className="mb-5 text-white text-lg font-semibold">
              {language === "english" ? "Contact Us" : "संपर्क करें"}
            </h5>
            <address className="not-italic mb-3">
              <i className="fa-solid fa-location-dot mr-2"></i>
              {language === "english"
                ? "Uttar Pradesh (INDIA)"
                : "उत्तर प्रदेश (भारत)"}
            </address>
            <p className="mb-2">
              <i className="fa-solid fa-envelope mr-2"></i>
              thesarus.2022@gmail.com
            </p>
            <p className="mb-4">
              <i className="fa-solid fa-phone mr-2"></i>+91 XXXXX-XXXXX
            </p>
            <div className="flex space-x-4 text-xl">
              {/* <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="fab fa-facebook-f hover:text-blue-500"
                aria-label="Facebook"
              ></a> */}
              <a
                href="#"
                // target="_blank"
                rel="noopener noreferrer"
                className="fab fa-twitter hover:text-blue-400"
                aria-label="Twitter"
              ></a>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=thesarus.2022@gmail.com&su=${encodeURIComponent(
                  ""
                )}&body=${encodeURIComponent("")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="fab fa-google-plus-g hover:text-red-500"
                aria-label="Google Plus"
              ></a>
              <a
                href="https://www.linkedin.com/company/the-sarus"
                target="_blank"
                rel="noopener noreferrer"
                className="fab fa-linkedin-in hover:text-blue-700"
                aria-label="LinkedIn"
              ></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="mb-5 text-white text-lg font-semibold">
              {language === "english" ? "Quick Links" : "त्वरित लिंक"}
            </h5>
            <ul className="space-y-2">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link?.link}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {language === "english" ? link.name : link.nameHindi}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Me */}
          <div>
            <h5 className="mb-5 text-white text-lg font-semibold">
              {language === "english" ? "About Me" : "मेरे बारे में"}
            </h5>
            <ul className="space-y-2">
              {[
                "HOME",
                "PERSONAL DETAILS",
                "MY VIEWS",
                "MEDIA",
                "SOCIAL & CULTURAL ACTIVITIES",
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href="javascript:void(0)"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h5 className="mb-5 text-white text-lg font-semibold">
              {language === "english"
                ? "Subscribe For Newsletter"
                : "सदस्यता लें समाचार पत्र के लिए"}
            </h5>
            <p className="mb-4 text-white/70">
              {language === "english"
                ? "Subscribe newsletter to get updates..."
                : "अपडेट प्राप्त करने के लिए समाचार पत्र की सदस्यता लें..."}
              .
            </p>
            <div className="flex">
              <input
                type="email"
                name="email"
                placeholder={
                  language === "english"
                    ? "Enter your email"
                    : "अपना ईमेल दर्ज करें"
                }
                className="flex-grow rounded-l-md px-3 py-2 text-gray-900 focus:outline-none bg-white"
              />
              <button
                type="submit"
                className="bg-[#f47217] px-4 rounded-r-md hover:bg-[#fc8430] transition-colors cursor-pointer"
                aria-label="Subscribe"
              >
                <i className="fa-sharp fa-solid fa-paper-plane text-white"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-t border-gray-700 pt-4 text-sm text-white/70 text-center">
          <p>
            Copyright © 2025 Developed by{" "}
            <a href="#" className="text-blue-400 hover:underline">
              The SARUS
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
