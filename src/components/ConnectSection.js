"use client";

import { useEffect } from "react";
import ImageGrid from "./ImagesGrid";

export default function ConnectSection() {
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
    "/assets/img/majhauliraaj1.png",
    "/assets/img/majhauliraaj4.png",
    "/assets/img/majhauliraaj5.png",
    "/assets/img/majhauliraaj3.png",
  ];

  const imagesPratapgarh = [
    "/assets/img/kunda1.png",
    "/assets/img/kunda2.png",
    "/assets/img/kunda3.png",
    "/assets/img/kunda4.png",
  ];

  const imagesNarharpur = [
    "/assets/img/narharpur1.png",
    "/assets/img/narharpur4.png",
    "/assets/img/narharpur6.png",
    "/assets/img/narharpur2.png",
  ];

  const imagesPadrauna = [
    "/assets/img/padrauna1.jpg",
    "/assets/img/padrauna2.png",
    "/assets/img/padrauna3.png",
    "/assets/img/padrauna4.png",
  ];

  const imagesMadhuban = [
    "/assets/img/madhuban1.jpg",
    "/assets/img/madhuban2.png",
    "/assets/img/madhuban3.png",
    "/assets/img/madhuban4.png",
  ];

  return (
    <section className="bg-[#f472172d] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-[#f47217]">Gallery</h2>
          <h1 className="text-4xl  text-[#082366]">Photo Gallery</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Majhauli Estate */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold mb-4">Majhauli Estate</h3>
            <a
              className="twitter-timeline"
              data-width="380"
              data-height="500"
              href="https://twitter.com/b_bhushansharan"
            >
              Est. by King Vishwa Sen
            </a>
            <ImageGrid images={imagesMajhauli} />
          </div>

          {/* Pratapgarh Estate */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold mb-4">Pratapgarh Estate</h3>
            <a
              className="twitter-timeline"
              data-width="380"
              data-height="500"
              href="https://twitter.com/b_bhushansharan"
            >
              Est. by King Roop Mall
            </a>
            <ImageGrid images={imagesPratapgarh} />
          </div>

          {/* Padrauna Estate */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold mb-4">Padrauna Estate</h3>
            <a
              className="twitter-timeline"
              data-width="380"
              data-height="500"
              href="https://twitter.com/b_bhushansharan"
            >
              Est. by Rai Bahadur Jagdish Narain Singh
            </a>
            <ImageGrid images={imagesPadrauna} />
          </div>

          {/* Narharpur Estate */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold mb-4">Narharpur Estate</h3>
            <a
              className="twitter-timeline"
              data-width="380"
              data-height="500"
              href="https://twitter.com/b_bhushansharan"
            >
              Est. by King Raai Mall
            </a>
            <ImageGrid images={imagesNarharpur} />
          </div>

          {/* Madhuban Estate */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold mb-4">Madhuban Estate</h3>
            <a
              className="twitter-timeline"
              data-width="380"
              data-height="500"
              href="https://twitter.com/b_bhushansharan"
            >
              Est. by King Madhav Mall
            </a>
            <ImageGrid images={imagesMadhuban} />
          </div>
        </div>
      </div>
    </section>
  );
}
