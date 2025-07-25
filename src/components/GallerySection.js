"use client";

import { useEffect } from "react";
import ImagesGrid from "./ImagesGrid";
import COLORS from "@/utils/color";

export default function GallerySection() {
  useEffect(() => {
    // Load Twitter widget script dynamically
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const imagesMajhauli = [
    {
      estate: "Majhauli Estate",
      url: "/assets/img/majhauli/majhauliraj1.png",
    },
    {
      estate: "Majhauli Estate",
      url: "/assets/img/majhauli/majhauliraj4.png",
    },
    {
      estate: "Majhauli Estate",
      url: "/assets/img/majhauli/majhauliraj3.png",
    },
    {
      estate: "Majhauli Estate",
      url: "/assets/img/majhauli/majhauliraj2.png",
    },
  ];

  const imagesKalakankar = [
    {
      estate: "Kalakankar Estate",
      url: "/assets/img/kalakankar/kalakankar1.jpeg",
    },
    {
      estate: "Kalakankar Estate",
      url: "/assets/img/kalakankar/kalakankar2.jpg",
    },
    {
      estate: "Kalakankar Estate",
      url: "/assets/img/kalakankar/kalakankar3.jpeg",
    },
    {
      estate: "Kalakankar Estate",
      url: "/assets/img/kalakankar/kalakankar4.jpeg",
    },
  ];

  const imagesBadri = [
    {
      estate: "Badri Estate",
      url: "/assets/img/badri/badri1.png",
    },
    {
      estate: "Badri Estate",
      url: "/assets/img/badri/badri2.png",
    },
    {
      estate: "Badri Estate",
      url: "/assets/img/badri/badri3.png",
    },
    {
      estate: "Badri Estate",
      url: "/assets/img/badri/badri5.png",
    },
  ];

  const imagesGonda = [
    {
      estate: "Madhuban Estate",
      url: "/assets/img/madhuban/madhuban1.jpg",
    },
    {
      estate: "Madhuban Estate",
      url: "/assets/img/madhuban/madhuban1.jpg",
    },
    {
      estate: "Madhuban Estate",
      url: "/assets/img/madhuban/madhuban1.jpg",
    },
    {
      estate: "Madhuban Estate",
      url: "/assets/img/madhuban/madhuban1.jpg",
    },
  ];

  const imagesMankapur = [
    {
      estate: "Mankapur Estate",
      url: "/assets/img/mankapur/mankapur1.jpg",
    },
    {
      estate: "Mankapur Estate",
      url: "/assets/img/mankapur/mankapur2.jpg",
    },
    {
      estate: "Mankapur Estate",
      url: "/assets/img/mankapur/mankapur4.jpg",
    },
    {
      estate: "Mankapur Estate",
      url: "/assets/img/mankapur/mankapur5.jpg",
    },
  ];

  const imagesBhinga = [
    {
      estate: "Bhinga Estate",
      url: "/assets/img/bhinga/bhinga1.jpg",
    },
    {
      estate: "Bhinga Estate",
      url: "/assets/img/bhinga/bhinga2.jpg",
    },
    {
      estate: "Bhinga Estate",
      url: "/assets/img/bhinga/bhinga3.jpg",
    },
    {
      estate: "Bhinga Estate",
      url: "/assets/img/bhinga/bhinga4.jpg",
    },
  ];

  const imagesMadhuban = [
    {
      estate: "Madhuban Estate",
      url: "/assets/img/madhuban/madhuban1.jpg",
    },
    {
      estate: "Madhuban Estate",
      url: "/assets/img/madhuban/madhuban2.png",
    },
    {
      estate: "Madhuban Estate",
      url: "/assets/img/madhuban/madhuban3.png",
    },
    {
      estate: "Madhuban Estate",
      url: "/assets/img/madhuban/madhuban4.png",
    },
  ];

  const imagesNarharpur = [
    {
      estate: "Narharpur Estate",
      url: "/assets/img/narharpur/narharpur1.png",
    },
    {
      estate: "Narharpur Estate",
      url: "/assets/img/narharpur/narharpur4.png",
    },
    {
      estate: "Narharpur Estate",
      url: "/assets/img/narharpur/narharpur6.png",
    },
    {
      estate: "Narharpur Estate",
      url: "/assets/img/narharpur/narharpur2.png",
    },
  ];

  const imagesDumaria = [
    {
      estate: "Dumaria Estate",
      url: "/assets/img/dumaria/dumaria1.jpg",
    },
    {
      estate: "Dumaria Estate",
      url: "/assets/img/dumaria/dumaria2.png",
    },
    // {
    //   estate: "Dumaria Estate",
    //   url: "/assets/img/dumaria/dumaria3.jpeg",
    // },
    // {
    //   estate: "Dumaria Estate",
    //   url: "/assets/img/dumaria/dumaria4.jpeg",
    // },
  ];

  return (
    <section className="bg-[#f472172d] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-block relative mb-5">
            <h2
              className="text-2xl font-semibold font-serif"
              style={{ color: COLORS.primary }}
            >
              Gallery
            </h2>
            <div
              className="absolute left-0 top-8 w-1/2 h-1"
              style={{
                backgroundColor: COLORS.secondary,
              }}
            ></div>
          </div>
          <h1 className="text-4xl  text-[#082366]">Photo Gallery</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Majhauli Estate */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold mb-0">Majhauli Estate</h3>
            <h3 className="text-sm mb-4">
              Successor Estate of Malla Mahajanpada
            </h3>
            <a
              className="twitter-timeline"
              data-width="380"
              data-height="500"
              // href="https://twitter.com/b_bhushansharan"
            >
              Est. by King Vishwa Sen
            </a>
            <ImagesGrid images={imagesMajhauli} />
          </div>

          {/* Kalakankar Estate */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold mb-0">Kalakankar Estate</h3>
            <h3 className="text-sm mb-4">
              Successor Estate of Majhauli Estate
            </h3>
            <a
              className="twitter-timeline"
              data-width="380"
              data-height="500"
              href="https://twitter.com/b_bhushansharan"
            >
              Est. by King Hom Mall
            </a>
            <ImagesGrid images={imagesKalakankar} />
          </div>

          {/* Badri Estate */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold mb-0">Badri Estate</h3>
            <h3 className="text-sm mb-4">
              Successor Estate of Majhauli Estate
            </h3>
            <a
              className="twitter-timeline"
              data-width="380"
              data-height="500"
              href="https://twitter.com/b_bhushansharan"
            >
              Est. by Rai Sabal Shah
            </a>
            <ImagesGrid images={imagesBadri} />
          </div>

          {/* Gonda Estate */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold mb-0">Gonda Estate</h3>
            <h3 className="text-sm mb-4">
              Successor Estate of Majhauli Estate
            </h3>
            <a
              className="twitter-timeline"
              data-width="380"
              data-height="500"
              href="https://twitter.com/b_bhushansharan"
            >
              Est. by Raja Pratap Mall
            </a>
            <ImagesGrid images={imagesGonda} />
          </div>

          {/* Mankapur Estate */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold mb-0">Mankapur Estate</h3>
            <h3 className="text-sm mb-4">
              Successor Estate of Majhauli Estate
            </h3>
            <a
              className="twitter-timeline"
              data-width="380"
              data-height="500"
              href="https://twitter.com/b_bhushansharan"
            >
              Est. by Raja Ajmat Singhji
            </a>
            <ImagesGrid images={imagesMankapur} />
          </div>

          {/* Bhinga Estate */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold mb-0">Bhinga Estate</h3>
            <h3 className="text-sm mb-4">
              Successor Estate of Majhauli Estate
            </h3>
            <a
              className="twitter-timeline"
              data-width="380"
              data-height="500"
              href="https://twitter.com/b_bhushansharan"
            >
              Est. by Raja Bhawani Singh
            </a>
            <ImagesGrid images={imagesBhinga} />
          </div>

          {/* Madhuban Estate */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold mb-0">Madhuban Estate</h3>
            <h3 className="text-sm mb-4">
              Successor Estate of Majhauli Estate
            </h3>
            <a
              className="twitter-timeline"
              data-width="380"
              data-height="500"
              href="https://twitter.com/b_bhushansharan"
            >
              Est. by King Madhav Mall
            </a>
            <ImagesGrid images={imagesMadhuban} />
          </div>

          {/* Narharpur Estate */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold mb-0">Narharpur Estate</h3>
            <h3 className="text-sm mb-4">
              Successor Estate of Majhauli Estate
            </h3>
            <a
              className="twitter-timeline"
              data-width="380"
              data-height="500"
              href="https://twitter.com/b_bhushansharan"
            >
              Est. by King Raai Mall
            </a>
            <ImagesGrid images={imagesNarharpur} />
          </div>

          {/* Dumaria Zamindari */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold mb-0">Dumaria Zamindar</h3>
            <h3 className="text-sm mb-4">
              Successor Estate of Majhauli Estate
            </h3>
            <a
              className="twitter-timeline"
              data-width="380"
              data-height="500"
              href="https://twitter.com/b_bhushansharan"
            >
              Est. by Jagat Bahadur Shahi
            </a>
            <ImagesGrid images={imagesDumaria} />
          </div>
        </div>
      </div>
    </section>
  );
}
