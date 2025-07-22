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
  {
    estate: "Kalakankar Estate",
    url: "/assets/img/kalakankar5.jpeg",
  },
  {
    estate: "Kalakankar Estate",
    url: "/assets/img/kalakankar6.jpeg",
  },
  {
    estate: "Kalakankar Estate",
    url: "/assets/img/kalakankar7.jpeg",
  },
  {
    estate: "Kalakankar Estate",
    url: "/assets/img/kalakankar8.jpeg",
  },
  {
    estate: "Kalakankar Estate",
    url: "/assets/img/kalakankar9.jpeg",
  },
  {
    estate: "Kalakankar Estate",
    url: "/assets/img/kalakankar10.jpeg",
  },
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
    url: "/assets/img/mankapur3.jpg",
  },
  {
    estate: "Mankapur Estate",
    url: "/assets/img/mankapur4.jpg",
  },
  {
    estate: "Mankapur Estate",
    url: "/assets/img/mankapur5.jpg",
  },
  {
    estate: "Mankapur Estate",
    url: "/assets/img/mankapur6.jpg",
  },
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
  {
    estate: "Badri Estate",
    url: "/assets/img/badri6.png",
  },
  {
    estate: "Badri Estate",
    url: "/assets/img/badri7.png",
  },
  {
    estate: "Badri Estate",
    url: "/assets/img/badri8.png",
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
      <Banner title={"Royal Gallery"} />
      <div className="max-w-6xl mx-auto px-4">
        <RoyalImagesGrid images={images} />
      </div>
    </section>
  );
}
