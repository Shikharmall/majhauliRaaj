"use client";
import LanguageContext from "@/context/languageContext";
import Banner from "./common/Banner";
import RoyalImagesGrid from "./RoyalImagesGrid";
import { useContext } from "react";

const images = [
  {
    estate: "Majhauli Estate",
    estateHindi: "मझौली राज",
    url: "/assets/img/majhauli/majhauliraj1.jpg",
  },
  {
    estate: "Majhauli Estate",
    estateHindi: "मझौली राज",
    url: "/assets/img/majhauli/majhauliraj2.jpg",
  },
  {
    estate: "Majhauli Estate",
    estateHindi: "मझौली राज",
    url: "/assets/img/majhauli/majhauliraj3.jpg",
  },
  {
    estate: "Majhauli Estate",
    estateHindi: "मझौली राज",
    url: "/assets/img/majhauli/majhauliraj4.jpg",
  },
  {
    estate: "Majhauli Estate",
    estateHindi: "मझौली राज",
    url: "/assets/img/majhauli/majhauliraj5.png",
  },
  {
    estate: "Majhauli Estate",
    estateHindi: "मझौली राज",
    url: "/assets/img/majhauli/majhauliraj6.png",
  },
  {
    estate: "Majhauli Estate",
    estateHindi: "मझौली राज",
    url: "/assets/img/majhauli/majhauliraj7.jpeg",
  },
  {
    estate: "Majhauli Estate",
    estateHindi: "मझौली राज",
    url: "/assets/img/majhauli/majhauliraj10.jpg",
  },
  {
    estate: "Majhauli Estate",
    estateHindi: "मझौली राज",
    url: "/assets/img/majhauli/majhauliraj11.jpg",
  },
  {
    estate: "Majhauli Estate",
    estateHindi: "मझौली राज",
    url: "/assets/img/majhauli/majhauliraj12.jpg",
  },
  {
    estate: "Kalakankar Estate",
    estateHindi: "कालाकंकर रियासत",
    url: "/assets/img/kalakankar/kalakankar1.jpeg",
  },
  {
    estate: "Kalakankar Estate",
    estateHindi: "कालाकंकर रियासत",
    url: "/assets/img/kalakankar/kalakankar2.jpg",
  },
  {
    estate: "Kalakankar Estate",
    estateHindi: "कालाकंकर रियासत",
    url: "/assets/img/kalakankar/kalakankar3.jpeg",
  },
  {
    estate: "Kalakankar Estate",
    estateHindi: "कालाकंकर रियासत",
    url: "/assets/img/kalakankar/kalakankar4.jpeg",
  },
  {
    estate: "Kalakankar Estate",
    estateHindi: "कालाकंकर रियासत",
    url: "/assets/img/kalakankar/kalakankar5.jpeg",
  },
  {
    estate: "Kalakankar Estate",
    estateHindi: "कालाकंकर रियासत",
    url: "/assets/img/kalakankar/kalakankar6.jpeg",
  },
  {
    estate: "Kalakankar Estate",
    estateHindi: "कालाकंकर रियासत",
    url: "/assets/img/kalakankar/kalakankar7.jpeg",
  },
  {
    estate: "Kalakankar Estate",
    estateHindi: "कालाकंकर रियासत",
    url: "/assets/img/kalakankar/kalakankar8.jpeg",
  },
  {
    estate: "Kalakankar Estate",
    estateHindi: "कालाकंकर रियासत",
    url: "/assets/img/kalakankar/kalakankar9.jpeg",
  },
  {
    estate: "Gonda Estate",
    estateHindi: "गोंडा रियासत",
    url: "/assets/img/gonda/gonda1.jpg",
  },
  {
    estate: "Gonda Estate",
    estateHindi: "गोंडा रियासत",
    url: "/assets/img/gonda/gonda2.png",
  },
  {
    estate: "Kalakankar Estate",
    estateHindi: "कालाकंकर रियासत",
    url: "/assets/img/kalakankar/kalakankar10.jpeg",
  },
  {
    estate: "Mankapur Estate",
    estateHindi: "मनकापुर रियासत",
    url: "/assets/img/mankapur/mankapur1.jpg",
  },
  {
    estate: "Mankapur Estate",
    estateHindi: "मनकापुर रियासत",
    url: "/assets/img/mankapur/mankapur2.jpg",
  },
  {
    estate: "Mankapur Estate",
    estateHindi: "मनकापुर रियासत",
    url: "/assets/img/mankapur/mankapur3.jpg",
  },
  {
    estate: "Mankapur Estate",
    estateHindi: "मनकापुर रियासत",
    url: "/assets/img/mankapur/mankapur4.jpg",
  },
  {
    estate: "Mankapur Estate",
    estateHindi: "मनकापुर रियासत",
    url: "/assets/img/mankapur/mankapur5.jpg",
  },
  {
    estate: "Mankapur Estate",
    estateHindi: "मनकापुर रियासत",
    url: "/assets/img/mankapur/mankapur6.jpg",
  },
  {
    estate: "Bhadri Estate",
    estateHindi: "भदरी रियासत",
    url: "/assets/img/bhadri/bhadri1.png",
  },
  {
    estate: "Bhadri Estate",
    estateHindi: "भदरी रियासत",
    url: "/assets/img/bhadri/bhadri2.png",
  },
  {
    estate: "Bhadri Estate",
    estateHindi: "भदरी रियासत",
    url: "/assets/img/bhadri/bhadri3.png",
  },
  {
    estate: "Bhadri Estate",
    estateHindi: "भदरी रियासत",
    url: "/assets/img/bhadri/bhadri5.png",
  },
  {
    estate: "Bhadri Estate",
    estateHindi: "भदरी रियासत",
    url: "/assets/img/bhadri/bhadri6.png",
  },
  {
    estate: "Bhadri Estate",
    estateHindi: "भदरी रियासत",
    url: "/assets/img/bhadri/bhadri7.png",
  },
  {
    estate: "Bhadri Estate",
    estateHindi: "भदरी रियासत",
    url: "/assets/img/bhadri/bhadri8.png",
  },
  {
    estate: "Dumaria Estate",
    estateHindi: "डुमरिया रियासत",
    url: "/assets/img/dumaria/dumaria1.jpg",
  },
  {
    estate: "Dumaria Estate",
    estateHindi: "डुमरिया रियासत",
    url: "/assets/img/dumaria/dumaria5.jpg",
  },
  {
    estate: "Dumaria Estate",
    estateHindi: "डुमरिया रियासत",
    url: "/assets/img/dumaria/dumaria7.jpg",
  },
  {
    estate: "Dumaria Estate",
    estateHindi: "डुमरिया रियासत",
    url: "/assets/img/dumaria/dumaria8.jpg",
  },
  {
    estate: "Bhinga Estate",
    estateHindi: "भिंगा रियासत",
    url: "/assets/img/bhinga/bhinga1.jpg",
  },
  {
    estate: "Bhinga Estate",
    estateHindi: "भिंगा रियासत",
    url: "/assets/img/bhinga/bhinga2.jpg",
  },
  {
    estate: "Bhinga Estate",
    estateHindi: "भिंगा रियासत",
    url: "/assets/img/bhinga/bhinga3.jpg",
  },
  {
    estate: "Bhinga Estate",
    estateHindi: "भिंगा रियासत",
    url: "/assets/img/bhinga/bhinga4.jpg",
  },
  {
    estate: "Bhinga Estate",
    estateHindi: "भिंगा रियासत",
    url: "/assets/img/bhinga/bhinga5.jpg",
  },
  {
    estate: "Narharpur Estate",
    estateHindi: "नरहरपुर रियासत",
    url: "/assets/img/narharpur/narharpur1.png",
  },
  {
    estate: "Narharpur Estate",
    estateHindi: "नरहरपुर रियासत",
    url: "/assets/img/narharpur/narharpur2.png",
  },
  {
    estate: "Narharpur Estate",
    estateHindi: "नरहरपुर रियासत",
    url: "/assets/img/narharpur/narharpur3.png",
  },
  {
    estate: "Narharpur Estate",
    estateHindi: "नरहरपुर रियासत",
    url: "/assets/img/narharpur/narharpur4.png",
  },
  {
    estate: "Narharpur Estate",
    estateHindi: "नरहरपुर रियासत",
    url: "/assets/img/narharpur/narharpur5.png",
  },
  {
    estate: "Narharpur Estate",
    estateHindi: "नरहरपुर रियासत",
    url: "/assets/img/narharpur/narharpur6.png",
  },
  {
    estate: "Madhuban Estate",
    estateHindi: "मधुबन रियासत",
    url: "/assets/img/madhuban/madhuban1.jpg",
  },
  {
    estate: "Madhuban Estate",
    estateHindi: "मधुबन रियासत",
    url: "/assets/img/madhuban/madhuban2.png",
  },
  {
    estate: "Madhuban Estate",
    estateHindi: "मधुबन रियासत",
    url: "/assets/img/madhuban/madhuban3.png",
  },
  {
    estate: "Madhuban Estate",
    estateHindi: "मधुबन रियासत",
    url: "/assets/img/madhuban/madhuban4.png",
  },
];

export default function GallerySection() {
  const { language } = useContext(LanguageContext);
  return (
    <section className="bg-white pb-12">
      {/* Heading */}
      <Banner
        title={language === "english" ? "Royal Gallery" : "राजवंशीय गैलरी"}
      />
      <div className="max-w-6xl mx-auto px-4">
        <RoyalImagesGrid images={images} />
      </div>
    </section>
  );
}
