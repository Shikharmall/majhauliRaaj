import ImagesGrid from "./ImagesGrid";

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
    url: "/assets/img/majhauliraaj7.png",
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
  {
    estate: "Madhuban Estate",
    url: "/assets/img/madhuban5.png",
  },
];

export default function GallerySection() {
  return (
    <section className="bg-white pb-12">
      {/* Heading */}
      <div
        className="relative h-80 mb-12 flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/img/royal4.jpg')" }} // Replace with actual image path
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Optional overlay */}
        <h1 className="relative z-10 text-5xl text-white">Royal Gallery</h1>
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <ImagesGrid images={images} />
      </div>
    </section>
  );
}
