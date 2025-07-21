import Banner from "./Banner";
import RoyalImagesGrid from "./RoyalImagesGrid";

const images = [
  {
    estate: "Majhauli Estate",
    url: "/assets/img/majhauliraaj1.png",
  },
  {
    estate: "Majhauli Estate",
    url: "/assets/img/majhauliraaj2.png",
  },
  {
    estate: "Majhauli Estate",
    url: "/assets/img/majhauliraaj3.png",
  },
  {
    estate: "Majhauli Estate",
    url: "/assets/img/majhauliraaj4.png",
  },
  {
    estate: "Majhauli Estate",
    url: "/assets/img/majhauliraaj5.png",
  },
  {
    estate: "Majhauli Estate",
    url: "/assets/img/majhauliraaj6.png",
  },
  {
    estate: "Majhauli Estate",
    url: "/assets/img/majhauliraaj7.jpeg",
  },
  {
    estate: "Pratapgarh Estate",
    url: "/assets/img/kunda1.png",
  },
  {
    estate: "Pratapgarh Estate",
    url: "/assets/img/kunda2.png",
  },
  {
    estate: "Pratapgarh Estate",
    url: "/assets/img/kunda3.png",
  },
  {
    estate: "Pratapgarh Estate",
    url: "/assets/img/kunda4.png",
  },
  {
    estate: "Pratapgarh Estate",
    url: "/assets/img/kunda5.png",
  },
  {
    estate: "Pratapgarh Estate",
    url: "/assets/img/kunda6.png",
  },
  {
    estate: "Pratapgarh Estate",
    url: "/assets/img/kunda7.png",
  },
  {
    estate: "Pratapgarh Estate",
    url: "/assets/img/kunda8.png",
  },
  {
    estate: "Padrauna Estate",
    url: "/assets/img/padrauna1.jpg",
  },
  {
    estate: "Padrauna Estate",
    url: "/assets/img/padrauna2.png",
  },
  {
    estate: "Padrauna Estate",
    url: "/assets/img/padrauna3.png",
  },
  {
    estate: "Padrauna Estate",
    url: "/assets/img/padrauna4.png",
  },
  {
    estate: "Padrauna Estate",
    url: "/assets/img/padrauna5.png",
  },
  {
    estate: "Padrauna Estate",
    url: "/assets/img/padrauna6.png",
  },
  {
    estate: "Padrauna Estate",
    url: "/assets/img/padrauna7.png",
  },
  {
    estate: "Narharpur Estate",
    url: "/assets/img/narharpur1.png",
  },
  {
    estate: "Narharpur Estate",
    url: "/assets/img/narharpur2.png",
  },
  {
    estate: "Narharpur Estate",
    url: "/assets/img/narharpur3.png",
  },
  {
    estate: "Narharpur Estate",
    url: "/assets/img/narharpur4.png",
  },
  {
    estate: "Narharpur Estate",
    url: "/assets/img/narharpur5.png",
  },
  {
    estate: "Narharpur Estate",
    url: "/assets/img/narharpur6.png",
  },
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

export default function GallerySection() {
  return (
    <section className="bg-white pb-12">
      {/* Heading */}
      <Banner title={"Royal Gallery"}/>
      <div className="max-w-6xl mx-auto px-4">
        <RoyalImagesGrid images={images} />
      </div>
    </section>
  );
}
