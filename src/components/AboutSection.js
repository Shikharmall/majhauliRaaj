import LanguageContext from "@/context/languageContext";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import ImageModal from "./ImageModel";

export default function AboutSection() {
  const { language } = useContext(LanguageContext);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const openModal = (src) => {
    setSelectedImage(src);
    setModalOpen(true);
  };
  return (
    <section className="py-12 bg-[#f472172d] my-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div
          className="w-full md:w-1/2 p-4 aos-init aos-animate flex flex-col md:flex-row justify-center"
          data-aos="flip-left"
        >
          <Image
            // src={`/assets/img/map1Crop.png`}
            src={`/assets/img/majhauli/majhauliraj7.jpeg`}
            alt="majhauli-raj"
            width={500} // full HD width
            height={600} // adjust height accordingly
            className="rounded-md shadow-2xl cursor-pointer"
            onClick={() =>
              openModal({ url: "/assets/img/majhauli/majhauliraj7.jpeg" })
            }
          />
        </div>
        <div
          className="w-full md:w-1/2 p-4 aos-init aos-animate"
          data-aos="flip-right"
        >
          {/* <h2 className="text-2xl font-semibold text-[#f47217] font-serif">About</h2> */}
          <div className="inline-block relative mb-5">
            <h2 className="text-2xl font-semibold text-[#f47217] font-serif">
              {language === "english" ? "About" : "परिचय"}
            </h2>
            <div className="absolute left-0 top-8 w-1/2 h-1 bg-[#2ccc7f]"></div>
          </div>
          <h1 className="text-4xl mb-4 text-[#082366]">
            {language === "english" ? "Majhauli Raj" : "मझौली राज"}
          </h1>
          <p className="mb-4 text-black">
            {language === "english"
              ? `Majhauli Raj was the seat of an eponymous Bisen (or Visen) feudal estate,
     said to have been founded between 1100 and 1300 CE. King Vishwa Sen 
     (estimated around 1000 to 1200 BCE), one of the earliest rulers of 
     Malla Desh (also known as Malla Bhumi or Malla Rashtra, later Malla 
     Mahajanpada), ruled before the Mahajanapada era from Kushinagar, 
     the capital of eastern Kosala.`
              : `मझौली राज एक बिसेन (या विसेन) सामंतवादी रियासत का मुख्य केंद्र था, 
     जिसकी स्थापना लगभग 1100 से 1300 ईस्वी के बीच मानी जाती है। 
     राजा विश्वसेन (अनुमानित काल: 1000 से 1200 ईसा पूर्व), मल्ल देश 
     (जिसे मल्ल भूमि या मल्ल राष्ट्र भी कहा जाता है, बाद में मल्ल महाजनपद) 
     के प्रारंभिक शासकों में से एक माने जाते हैं। उन्होंने महाजनपद युग से पहले 
     कुशीनगर (पूर्वी कोशल की राजधानी) से शासन किया था।`}
          </p>
          <Link
            href="/estates/majhauliEstate"
            className="text-[#2ccc7f] hover:text-white hover:bg-[#2ccc7f] border border-2 p-3 rounded"
          >
            {language === "english" ? "Learn More" : "और जानें"}
          </Link>
        </div>
      </div>

      {/* Modal */}
      <ImageModal
        isOpen={isModalOpen}
        imageSrc={selectedImage}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
