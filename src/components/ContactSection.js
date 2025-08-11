"use client";
import COLORS from "@/utils/color";
import Banner from "./Banner";
import LanguageContext from "@/context/languageContext";
import { useContext, useState } from "react";

export default function ContactSection() {
  const { language } = useContext(LanguageContext);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    fromEmail: "",
    number: "",
    message: "",
  });

  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  async function sendEmail(e) {
    e.preventDefault();
    setIsLoading(true);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "59e83bd7-97cc-461f-8443-24f9cf9737c4",
        name: formData?.name,
        email: formData?.fromEmail,
        number: formData?.number,
        message: formData?.message,
      }),
    });
    const result = await response.json();
    console.log(result);
    if (result.success) {
      setIsLoading(false);
      alert(
        language === "english"
          ? "Email sent successfully!"
          : "ईमेल सफलतापूर्वक भेजा गया!"
      );
      setFormData({ name: "", fromEmail: "", number: "", message: "" });
    } else {
      setIsLoading(false);
      alert(language === "english" ? result?.message : "कुछ त्रुटि हुई है!");
    }
  }

  return (
    <section className="bg-white pb-12">
      {/* Heading */}

      <Banner title={language === "english" ? "Contact Us" : "संपर्क करें"} />
      <div className="max-w-6xl mx-auto px-4">
        {/* Map */}
        <div className="mb-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7153.794212572512!2d83.95687574101336!3d26.29743542657846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993b53248562115%3A0xcf26bb1cd7634614!2sMajhauli%20Raj%2C%20Uttar%20Pradesh%20274506!5e0!3m2!1sen!2sin!4v1753097706026!5m2!1sen!2sin"
            width="100%"
            height="400"
            className="w-full rounded-md border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md mb-12">
          <div className="flex justify-center items-center my-3">
            <div className="inline-block relative mb-5">
              <h2
                className="text-2xl font-semibold font-serif"
                style={{ color: COLORS.primary }}
              >
                {language === "english" ? "Get In Touch" : "हमसे जुड़ें"}
              </h2>
              <div
                className="absolute left-0 top-8 w-1/2 h-1"
                style={{
                  backgroundColor: COLORS.secondary,
                }}
              ></div>
            </div>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                name="name"
                placeholder={language === "english" ? "Full Name" : "पूरा नाम"}
                className="p-3 border rounded w-full"
                onChange={(e) => onChangeHandler(e)}
                value={formData?.name}
              />
              <input
                type="email"
                name="fromEmail"
                placeholder={language === "english" ? "Email Address" : "ईमेल"}
                className="p-3 border rounded w-full"
                onChange={(e) => onChangeHandler(e)}
                value={formData?.fromEmail}
              />
              <input
                type="text"
                name="number"
                placeholder={language === "english" ? "Number" : "नंबर"}
                className="p-3 border rounded w-full"
                onChange={(e) => onChangeHandler(e)}
                value={formData?.number}
              />
            </div>
            <textarea
              name="message"
              placeholder={language === "english" ? "Message" : "संदेश"}
              className="w-full p-3 border rounded h-40 resize-none"
              onChange={(e) => onChangeHandler(e)}
              value={formData?.message}
            ></textarea>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition cursor-pointer"
              style={{ backgroundColor: COLORS.primary }}
              onClick={sendEmail}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  {language === "english"
                    ? "Submiting...."
                    : "भेजा जा रहा है..."}
                </>
              ) : (
                <>{language === "english" ? "Submit" : "सबमिट करें"}</>
              )}
            </button>
          </form>
        </div>

        {/* Contact Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center space-y-3">
            <i
              className="fa-solid fa-location-dot text-3xl"
              style={{ color: COLORS.primary }}
            ></i>
            <h2 className="text-lg font-semibold">
              {language === "english" ? "Address" : "पता"}
            </h2>
            <p className="text-gray-700">
              {language === "english"
                ? "Uttar Pradesh (INDIA)"
                : "उत्तर प्रदेश (भारत)"}
            </p>
          </div>

          <div className="flex flex-col items-center space-y-3">
            <i
              className="fa-solid fa-envelope text-3xl"
              style={{ color: COLORS.primary }}
            ></i>
            <h2 className="text-lg font-semibold">
              {language === "english" ? "Email" : "ईमेल"}
            </h2>
            <p className="text-gray-700">thesarus.2022@gmail.com</p>
          </div>

          <div className="flex flex-col items-center space-y-3">
            <i
              className="fa-solid fa-phone text-3xl"
              style={{ color: COLORS.primary }}
            ></i>
            <h2 className="text-lg font-semibold">
              {language === "english" ? "Number" : "नंबर"}
            </h2>
            <p className="text-gray-700">+91-XXXXX XXXXX</p>
          </div>
        </div>
      </div>
    </section>
  );
}
