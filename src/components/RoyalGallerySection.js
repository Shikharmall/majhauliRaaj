import Banner from "./Banner";
import RoyalImagesGrid from "./RoyalImagesGrid";

const images = [
  {
    estate: "Majhauli Estate",
    url: "/assets/img/majhauli/majhauliraj1.png",
  },
  {
    estate: "Majhauli Estate",
    url: "/assets/img/majhauli/majhauliraj2.png",
  },
  {
    estate: "Majhauli Estate",
    url: "/assets/img/majhauli/majhauliraj3.png",
  },
  {
    estate: "Majhauli Estate",
    url: "/assets/img/majhauli/majhauliraj4.png",
  },
  {
    estate: "Majhauli Estate",
    url: "/assets/img/majhauli/majhauliraj5.png",
  },
  {
    estate: "Majhauli Estate",
    url: "/assets/img/majhauli/majhauliraj6.png",
  },
  {
    estate: "Majhauli Estate",
    url: "/assets/img/majhauli/majhauliraj7.jpeg",
  },
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
  {
    estate: "Kalakankar Estate",
    url: "/assets/img/kalakankar/kalakankar5.jpeg",
  },
  {
    estate: "Kalakankar Estate",
    url: "/assets/img/kalakankar/kalakankar6.jpeg",
  },
  {
    estate: "Kalakankar Estate",
    url: "/assets/img/kalakankar/kalakankar7.jpeg",
  },
  {
    estate: "Kalakankar Estate",
    url: "/assets/img/kalakankar/kalakankar8.jpeg",
  },
  {
    estate: "Kalakankar Estate",
    url: "/assets/img/kalakankar/kalakankar9.jpeg",
  },
  {
    estate: "Kalakankar Estate",
    url: "/assets/img/kalakankar/kalakankar10.jpeg",
  },
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
    url: "/assets/img/mankapur/mankapur3.jpg",
  },
  {
    estate: "Mankapur Estate",
    url: "/assets/img/mankapur/mankapur4.jpg",
  },
  {
    estate: "Mankapur Estate",
    url: "/assets/img/mankapur/mankapur5.jpg",
  },
  {
    estate: "Mankapur Estate",
    url: "/assets/img/mankapur/mankapur6.jpg",
  },
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
  {
    estate: "Badri Estate",
    url: "/assets/img/badri/badri6.png",
  },
  {
    estate: "Badri Estate",
    url: "/assets/img/badri/badri7.png",
  },
  {
    estate: "Badri Estate",
    url: "/assets/img/badri/badri8.png",
  },
  {
    estate: "Dumaria Estate",
    url: "/assets/img/dumaria/dumaria1.jpg",
  },
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
  {
    estate: "Bhinga Estate",
    url: "/assets/img/bhinga/bhinga5.jpg",
  },
  {
    estate: "Narharpur Estate",
    url: "/assets/img/narharpur/narharpur1.png",
  },
  {
    estate: "Narharpur Estate",
    url: "/assets/img/narharpur/narharpur2.png",
  },
  {
    estate: "Narharpur Estate",
    url: "/assets/img/narharpur/narharpur3.png",
  },
  {
    estate: "Narharpur Estate",
    url: "/assets/img/narharpur/narharpur4.png",
  },
  {
    estate: "Narharpur Estate",
    url: "/assets/img/narharpur/narharpur5.png",
  },
  {
    estate: "Narharpur Estate",
    url: "/assets/img/narharpur/narharpur6.png",
  },
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
