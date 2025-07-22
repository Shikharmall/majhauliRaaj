"use client";

import { useEffect } from "react";
import ImagesGrid from "./ImagesGrid";

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
      url: "/assets/img/majhauliraaj1.png",
    },
    {
      estate: "Majhauli Estate",
      url: "/assets/img/majhauliraaj4.png",
    },
    {
      estate: "Majhauli Estate",
      url: "/assets/img/majhauliraaj3.png",
    },
    {
      estate: "Majhauli Estate",
      url: "/assets/img/majhauliraaj2.png",
    },
  ];

  const imagesKalakankar = [
    {
      estate: "Kalakankar Estate",
      url: "/assets/img/kalakankar1.jpeg",
    },
    {
      estate: "Kalakankar Estate",
      url: "/assets/img/kalakankar2.jpg",
    },
    {
      estate: "Kalakankar Estate",
      url: "/assets/img/kalakankar3.jpeg",
    },
    {
      estate: "Kalakankar Estate",
      url: "/assets/img/kalakankar4.jpeg",
    },
  ];

  const imagesBadri = [
    {
      estate: "Badri Estate",
      url: "/assets/img/badri1.png",
    },
    {
      estate: "Badri Estate",
      url: "/assets/img/badri2.png",
    },
    {
      estate: "Badri Estate",
      url: "/assets/img/badri3.png",
    },
    {
      estate: "Badri Estate",
      url: "/assets/img/badri5.png",
    },
  ];

  const imagesMankapur = [
    {
      estate: "Mankapur Estate",
      url: "/assets/img/mankapur1.jpg",
    },
    {
      estate: "Mankapur Estate",
      url: "/assets/img/mankapur2.jpg",
    },
    {
      estate: "Mankapur Estate",
      url: "/assets/img/mankapur4.jpg",
    },
    {
      estate: "Mankapur Estate",
      url: "/assets/img/mankapur5.jpg",
    },
  ];

  const imagesNarharpur = [
    {
      estate: "Narharpur Estate",
      url: "/assets/img/narharpur1.png",
    },
    {
      estate: "Narharpur Estate",
      url: "/assets/img/narharpur4.png",
    },
    {
      estate: "Narharpur Estate",
      url: "/assets/img/narharpur6.png",
    },
    {
      estate: "Narharpur Estate",
      url: "/assets/img/narharpur2.png",
    },
  ];

  const imagesMadhuban = [
    {
      estate: "Madhuban Estate",
      url: "/assets/img/madhuban1.jpg",
    },
    {
      estate: "Madhuban Estate",
      url: "/assets/img/madhuban2.png",
    },
    {
      estate: "Madhuban Estate",
      url: "/assets/img/madhuban3.png",
    },
    {
      estate: "Madhuban Estate",
      url: "/assets/img/madhuban4.png",
    },
  ];

  return (
    <section className="bg-[#f472172d] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-[#f47217] font-serif">
            Gallery
          </h2>
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
              href="https://twitter.com/b_bhushansharan"
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
              Est. by King Roop Mall
            </a>
            <ImagesGrid images={imagesKalakankar} />
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
              Est. by Rai Bahadur Jagdish Narain Singh
            </a>
            <ImagesGrid images={imagesMankapur} />
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
        </div>
      </div>
    </section>
  );
}
