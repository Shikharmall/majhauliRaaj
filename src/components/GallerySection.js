// "use client";
// import { useContext, useEffect } from "react";
// import ImagesGrid from "./ImagesGrid";
// import COLORS from "@/utils/color";
// import LanguageContext from "@/context/languageContext";

// export default function GallerySection() {
//   const { language } = useContext(LanguageContext);

//   const imagesMajhauli = [
//     {
//       estate: "Majhauli Estate",
//       estateHindi: "मझौली राज",
//       url: "/assets/img/majhauli/majhauliraj1.png",
//     },
//     {
//       estate: "Majhauli Estate",
//       estateHindi: "मझौली राज",
//       url: "/assets/img/majhauli/majhauliraj4.png",
//     },
//     {
//       estate: "Majhauli Estate",
//       estateHindi: "मझौली राज",
//       url: "/assets/img/majhauli/majhauliraj3.png",
//     },
//     {
//       estate: "Majhauli Estate",
//       estateHindi: "मझौली राज",
//       url: "/assets/img/majhauli/majhauliraj2.png",
//     },
//   ];

//   const imagesKalakankar = [
//     {
//       estate: "Kalakankar Estate",
//       estateHindi: "कालाकंकर रियासत",
//       url: "/assets/img/kalakankar/kalakankar1.jpeg",
//     },
//     {
//       estate: "Kalakankar Estate",
//       estateHindi: "कालाकंकर रियासत",
//       url: "/assets/img/kalakankar/kalakankar2.jpg",
//     },
//     {
//       estate: "Kalakankar Estate",
//       estateHindi: "कालाकंकर रियासत",
//       url: "/assets/img/kalakankar/kalakankar3.jpeg",
//     },
//     {
//       estate: "Kalakankar Estate",
//       estateHindi: "कालाकंकर रियासत",
//       url: "/assets/img/kalakankar/kalakankar4.jpeg",
//     },
//   ];

//   const imagesBhadri = [
//     {
//       estate: "Bhadri Estate",
//       estateHindi: "भदरी रियासत",
//       url: "/assets/img/bhadri/bhadri1.png",
//     },
//     {
//       estate: "Bhadri Estate",
//       estateHindi: "भदरी रियासत",
//       url: "/assets/img/bhadri/bhadri2.png",
//     },
//     {
//       estate: "Bhadri Estate",
//       estateHindi: "भदरी रियासत",
//       url: "/assets/img/bhadri/bhadri3.png",
//     },
//     {
//       estate: "Bhadri Estate",
//       estateHindi: "भदरी रियासत",
//       url: "/assets/img/bhadri/bhadri5.png",
//     },
//   ];

//   const imagesGonda = [
//     {
//       estate: "Madhuban Estate",
//       estateHindi: "मधुबन रियासत",
//       url: "/assets/img/madhuban/madhuban1.jpg",
//     },
//     {
//       estate: "Madhuban Estate",
//       estateHindi: "मधुबन रियासत",
//       url: "/assets/img/madhuban/madhuban1.jpg",
//     },
//     {
//       estate: "Madhuban Estate",
//       estateHindi: "मधुबन रियासत",
//       url: "/assets/img/madhuban/madhuban1.jpg",
//     },
//     {
//       estate: "Madhuban Estate",
//       estateHindi: "मधुबन रियासत",
//       url: "/assets/img/madhuban/madhuban1.jpg",
//     },
//   ];

//   const imagesMankapur = [
//     {
//       estate: "Mankapur Estate",
//       estateHindi: "मानकपुर रियासत",
//       url: "/assets/img/mankapur/mankapur1.jpg",
//     },
//     {
//       estate: "Mankapur Estate",
//       estateHindi: "मानकपुर रियासत",
//       url: "/assets/img/mankapur/mankapur2.jpg",
//     },
//     {
//       estate: "Mankapur Estate",
//       estateHindi: "मानकपुर रियासत",
//       url: "/assets/img/mankapur/mankapur4.jpg",
//     },
//     {
//       estate: "Mankapur Estate",
//       estateHindi: "मानकपुर रियासत",
//       url: "/assets/img/mankapur/mankapur5.jpg",
//     },
//   ];

//   const imagesBhinga = [
//     {
//       estate: "Bhinga Estate",
//       estateHindi: "भिंगा रियासत",
//       url: "/assets/img/bhinga/bhinga1.jpg",
//     },
//     {
//       estate: "Bhinga Estate",
//       estateHindi: "भिंगा रियासत",
//       url: "/assets/img/bhinga/bhinga2.jpg",
//     },
//     {
//       estate: "Bhinga Estate",
//       estateHindi: "भिंगा रियासत",
//       url: "/assets/img/bhinga/bhinga3.jpg",
//     },
//     {
//       estate: "Bhinga Estate",
//       estateHindi: "भिंगा रियासत",
//       url: "/assets/img/bhinga/bhinga4.jpg",
//     },
//   ];

//   const imagesMadhuban = [
//     {
//       estate: "Madhuban Estate",
//       estateHindi: "मधुबन रियासत",
//       url: "/assets/img/madhuban/madhuban1.jpg",
//     },
//     {
//       estate: "Madhuban Estate",
//       estateHindi: "मधुबन रियासत",
//       url: "/assets/img/madhuban/madhuban2.png",
//     },
//     {
//       estate: "Madhuban Estate",
//       estateHindi: "मधुबन रियासत",
//       url: "/assets/img/madhuban/madhuban3.png",
//     },
//     {
//       estate: "Madhuban Estate",
//       estateHindi: "मधुबन रियासत",
//       url: "/assets/img/madhuban/madhuban4.png",
//     },
//   ];

//   const imagesNarharpur = [
//     {
//       estate: "Narharpur Estate",
//       estateHindi: "नरहरपुर रियासत",
//       url: "/assets/img/narharpur/narharpur1.png",
//     },
//     {
//       estate: "Narharpur Estate",
//       estateHindi: "नरहरपुर रियासत",
//       url: "/assets/img/narharpur/narharpur4.png",
//     },
//     {
//       estate: "Narharpur Estate",
//       estateHindi: "नरहरपुर रियासत",
//       url: "/assets/img/narharpur/narharpur6.png",
//     },
//     {
//       estate: "Narharpur Estate",
//       estateHindi: "नरहरपुर रियासत",
//       url: "/assets/img/narharpur/narharpur2.png",
//     },
//   ];

//   const imagesDumaria = [
//     {
//       estate: "Dumaria Estate",
//       estateHindi: "डुमरिया रियासत",
//       url: "/assets/img/dumaria/dumaria1.jpg",
//     },
//     {
//       estate: "Dumaria Estate",
//       estateHindi: "डुमरिया रियासत",
//       url: "/assets/img/dumaria/dumaria2.png",
//     },
//   ];

//   const estates = [
//     {
//       name: "Majhauli Estate",
//       successorState: "Malla Mahajanpada",
//       king: "King Vishwa Sen",
//       images: [
//         {
//           estate: "Majhauli Estate",
//           estateHindi: "मझौली राज",
//           url: "/assets/img/majhauli/majhauliraj1.png",
//         },
//         {
//           estate: "Majhauli Estate",
//           estateHindi: "मझौली राज",
//           url: "/assets/img/majhauli/majhauliraj4.png",
//         },
//         {
//           estate: "Majhauli Estate",
//           estateHindi: "मझौली राज",
//           url: "/assets/img/majhauli/majhauliraj3.png",
//         },
//         {
//           estate: "Majhauli Estate",
//           estateHindi: "मझौली राज",
//           url: "/assets/img/majhauli/majhauliraj2.png",
//         },
//       ],
//     },
//   ];

//   useEffect(() => {
//     // Load Twitter widget script dynamically
//     const script = document.createElement("script");
//     script.src = "https://platform.twitter.com/widgets.js";
//     script.async = true;
//     script.charset = "utf-8";
//     document.body.appendChild(script);
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <section className="bg-[#f472172d] py-12">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="text-center mb-8">
//           <div className="inline-block relative mb-5">
//             <h2
//               className="text-2xl font-semibold font-serif"
//               style={{ color: COLORS.primary }}
//             >
//               Gallery
//             </h2>
//             <div
//               className="absolute left-0 top-8 w-1/2 h-1"
//               style={{
//                 backgroundColor: COLORS.secondary,
//               }}
//             ></div>
//           </div>
//           <h1 className="text-4xl  text-[#082366]">Photo Gallery</h1>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* Majhauli Estate */}

//           {}

//           <div className="bg-white p-4 rounded shadow">
//             <h3 className="text-xl font-semibold mb-0">Majhauli Estate</h3>
//             <h3 className="text-sm mb-4">
//               Successor Estate of Malla Mahajanpada
//             </h3>
//             <a
//               className="twitter-timeline"
//               data-width="380"
//               data-height="500"
//               // href="https://twitter.com/b_bhushansharan"
//             >
//               Est. by King Vishwa Sen
//             </a>
//             <ImagesGrid images={imagesMajhauli} />
//           </div>

//           {/* Kalakankar Estate */}
//           <div className="bg-white p-4 rounded shadow">
//             <h3 className="text-xl font-semibold mb-0">Kalakankar Estate</h3>
//             <h3 className="text-sm mb-4">
//               Successor Estate of Majhauli Estate
//             </h3>
//             <a
//               className="twitter-timeline"
//               data-width="380"
//               data-height="500"
//               href="https://twitter.com/b_bhushansharan"
//             >
//               Est. by King Hom Mall
//             </a>
//             <ImagesGrid images={imagesKalakankar} />
//           </div>

//           {/* Bhadri Estate */}
//           <div className="bg-white p-4 rounded shadow">
//             <h3 className="text-xl font-semibold mb-0">Bhadri Estate</h3>
//             <h3 className="text-sm mb-4">
//               Successor Estate of Majhauli Estate
//             </h3>
//             <a
//               className="twitter-timeline"
//               data-width="380"
//               data-height="500"
//               href="https://twitter.com/b_bhushansharan"
//             >
//               Est. by Rai Sabal Shah
//             </a>
//             <ImagesGrid images={imagesBhadri} />
//           </div>

//           {/* Gonda Estate */}
//           <div className="bg-white p-4 rounded shadow">
//             <h3 className="text-xl font-semibold mb-0">Gonda Estate</h3>
//             <h3 className="text-sm mb-4">
//               Successor Estate of Majhauli Estate
//             </h3>
//             <a
//               className="twitter-timeline"
//               data-width="380"
//               data-height="500"
//               href="https://twitter.com/b_bhushansharan"
//             >
//               Est. by Raja Pratap Mall
//             </a>
//             <ImagesGrid images={imagesGonda} />
//           </div>

//           {/* Mankapur Estate */}
//           <div className="bg-white p-4 rounded shadow">
//             <h3 className="text-xl font-semibold mb-0">Mankapur Estate</h3>
//             <h3 className="text-sm mb-4">
//               Successor Estate of Majhauli Estate
//             </h3>
//             <a
//               className="twitter-timeline"
//               data-width="380"
//               data-height="500"
//               href="https://twitter.com/b_bhushansharan"
//             >
//               Est. by Raja Ajmat Singhji
//             </a>
//             <ImagesGrid images={imagesMankapur} />
//           </div>

//           {/* Bhinga Estate */}
//           <div className="bg-white p-4 rounded shadow">
//             <h3 className="text-xl font-semibold mb-0">Bhinga Estate</h3>
//             <h3 className="text-sm mb-4">
//               Successor Estate of Majhauli Estate
//             </h3>
//             <a
//               className="twitter-timeline"
//               data-width="380"
//               data-height="500"
//               href="https://twitter.com/b_bhushansharan"
//             >
//               Est. by Raja Bhawani Singh
//             </a>
//             <ImagesGrid images={imagesBhinga} />
//           </div>

//           {/* Madhuban Estate */}
//           <div className="bg-white p-4 rounded shadow">
//             <h3 className="text-xl font-semibold mb-0">Madhuban Estate</h3>
//             <h3 className="text-sm mb-4">
//               Successor Estate of Majhauli Estate
//             </h3>
//             <a
//               className="twitter-timeline"
//               data-width="380"
//               data-height="500"
//               href="https://twitter.com/b_bhushansharan"
//             >
//               Est. by King Madhav Mall
//             </a>
//             <ImagesGrid images={imagesMadhuban} />
//           </div>

//           {/* Narharpur Estate */}
//           <div className="bg-white p-4 rounded shadow">
//             <h3 className="text-xl font-semibold mb-0">Narharpur Estate</h3>
//             <h3 className="text-sm mb-4">
//               Successor Estate of Majhauli Estate
//             </h3>
//             <a
//               className="twitter-timeline"
//               data-width="380"
//               data-height="500"
//               href="https://twitter.com/b_bhushansharan"
//             >
//               Est. by King Raai Mall
//             </a>
//             <ImagesGrid images={imagesNarharpur} />
//           </div>

//           {/* Dumaria Zamindari */}
//           <div className="bg-white p-4 rounded shadow">
//             <h3 className="text-xl font-semibold mb-0">Dumaria Zamindar</h3>
//             <h3 className="text-sm mb-4">
//               Successor Estate of Majhauli Estate
//             </h3>
//             <a
//               className="twitter-timeline"
//               data-width="380"
//               data-height="500"
//               href="https://twitter.com/b_bhushansharan"
//             >
//               Est. by Jagat Bahadur Shahi
//             </a>
//             <ImagesGrid images={imagesDumaria} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { useContext, useEffect } from "react";
import ImagesGrid from "./ImagesGrid";
import COLORS from "@/utils/color";
import LanguageContext from "@/context/languageContext";

export default function GallerySection() {
  const { language } = useContext(LanguageContext);

  const estates = [
    {
      name: "Majhauli Estate",
      nameHindi: "मझौली राज",
      successor: "Malla Mahajanpada",
      successorHindi: "मल्ल महाजनपद",
      king: "King Vishwa Sen",
      kingHindi: "राजा विश्व सेन",
      images: [
        "/assets/img/majhauli/majhauliraj1.png",
        "/assets/img/majhauli/majhauliraj4.png",
        "/assets/img/majhauli/majhauliraj3.png",
        "/assets/img/majhauli/majhauliraj2.png",
      ],
    },
    {
      name: "Kalakankar Estate",
      nameHindi: "कालाकंकर रियासत",
      successor: "Majhauli Estate",
      successorHindi: "मझौली राज",
      king: "King Hom Mall",
      kingHindi: "राजा होम मल्ल",
      images: [
        "/assets/img/kalakankar/kalakankar1.jpeg",
        "/assets/img/kalakankar/kalakankar2.jpg",
        "/assets/img/kalakankar/kalakankar3.jpeg",
        "/assets/img/kalakankar/kalakankar4.jpeg",
      ],
    },
    {
      name: "Bhadri Estate",
      nameHindi: "भदरी रियासत",
      successor: "Majhauli Estate",
      successorHindi: "मझौली राज",
      king: "Rai Sabal Shah",
      kingHindi: "राय सबल शाह",
      images: [
        "/assets/img/bhadri/bhadri1.png",
        "/assets/img/bhadri/bhadri2.png",
        "/assets/img/bhadri/bhadri3.png",
        "/assets/img/bhadri/bhadri5.png",
      ],
    },
    {
      name: "Gonda Estate",
      nameHindi: "गोंडा रियासत",
      successor: "Majhauli Estate",
      successorHindi: "मझौली राज",
      king: "Raja Pratap Mall",
      kingHindi: "राजा प्रताप मल्ल",
      images: [
        "/assets/img/madhuban/madhuban1.jpg",
        "/assets/img/madhuban/madhuban1.jpg",
        "/assets/img/madhuban/madhuban1.jpg",
        "/assets/img/madhuban/madhuban1.jpg",
      ],
    },
    {
      name: "Mankapur Estate",
      nameHindi: "मानकपुर रियासत",
      successor: "Majhauli Estate",
      successorHindi: "मझौली राज",
      king: "Raja Ajmat Singhji",
      kingHindi: "राजा अजमत सिंहजी",
      images: [
        "/assets/img/mankapur/mankapur1.jpg",
        "/assets/img/mankapur/mankapur2.jpg",
        "/assets/img/mankapur/mankapur4.jpg",
        "/assets/img/mankapur/mankapur5.jpg",
      ],
    },
    {
      name: "Bhinga Estate",
      nameHindi: "भिंगा रियासत",
      successor: "Majhauli Estate",
      successorHindi: "मझौली राज",
      king: "Raja Bhawani Singh",
      kingHindi: "राजा भवानी सिंह",
      images: [
        "/assets/img/bhinga/bhinga1.jpg",
        "/assets/img/bhinga/bhinga2.jpg",
        "/assets/img/bhinga/bhinga3.jpg",
        "/assets/img/bhinga/bhinga4.jpg",
      ],
    },
    {
      name: "Madhuban Estate",
      nameHindi: "मधुबन रियासत",
      successor: "Majhauli Estate",
      successorHindi: "मझौली राज",
      king: "King Madhav Mall",
      kingHindi: "राजा माधव मल्ल",
      images: [
        "/assets/img/madhuban/madhuban1.jpg",
        "/assets/img/madhuban/madhuban2.png",
        "/assets/img/madhuban/madhuban3.png",
        "/assets/img/madhuban/madhuban4.png",
      ],
    },
    {
      name: "Narharpur Estate",
      nameHindi: "नरहरपुर रियासत",
      successor: "Majhauli Estate",
      successorHindi: "मझौली राज",
      king: "King Raai Mall",
      kingHindi: "राजा राय मल्ल",
      images: [
        "/assets/img/narharpur/narharpur1.png",
        "/assets/img/narharpur/narharpur4.png",
        "/assets/img/narharpur/narharpur6.png",
        "/assets/img/narharpur/narharpur2.png",
      ],
    },
    {
      name: "Dumaria Estate",
      nameHindi: "डुमरिया रियासत",
      successor: "Majhauli Estate",
      successorHindi: "मझौली राज",
      king: "Jagat Bahadur Shahi",
      kingHindi: "जगत बहादुर शाही",
      images: [
        "/assets/img/dumaria/dumaria1.jpg",
        "/assets/img/dumaria/dumaria2.png",
      ],
    },
  ];

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const renderEstateCard = (estate) => (
    <div key={estate.name} className="bg-white p-4 rounded shadow">
      <h3 className="text-xl font-semibold mb-0">
        {language === "english" ? estate.name : estate.nameHindi}
      </h3>
      <h3 className="text-sm mb-4">
        {language === "english"
          ? `Successor Estate of ${estate.successor}`
          : `${estate.successorHindi} की उत्तराधिकारी रियासत`}
      </h3>
      <a className="twitter-timeline" data-width="380" data-height="500">
        {language === "english"
          ? `Est. by ${estate.king}`
          : `${estate.kingHindi} द्वारा स्थापित`}
      </a>
      <ImagesGrid
        images={estate.images.map((url) => ({
          estate: estate.name,
          estateHindi: estate.nameHindi,
          url,
        }))}
      />
    </div>
  );

  return (
    <section className="bg-[#f472172d] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-block relative mb-5">
            <h2
              className="text-2xl font-semibold font-serif"
              style={{ color: COLORS.primary }}
            >
              {language === "english" ? "Gallery" : "गैलरी"}
            </h2>
            <div
              className="absolute left-0 top-8 w-1/2 h-1"
              style={{
                backgroundColor: COLORS.secondary,
              }}
            ></div>
          </div>
          <h1 className="text-4xl text-[#082366]">
            {language === "english" ? "Photo Gallery" : "फोटो गैलरी"}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {estates.map(renderEstateCard)}
        </div>
      </div>
    </section>
  );
}
