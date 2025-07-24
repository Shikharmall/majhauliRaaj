import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-12 bg-[#f472172d] my-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div
          className="w-full md:w-1/2 p-4 aos-init aos-animate flex flex-col md:flex-row justify-center"
          data-aos="flip-left"
        >
          {/* <img
            src="/assets/img/FB_IMG_1669810467512.jpg"
            alt="Brij"
            className="w-full rounded-md shadow"
          /> */}

          <Image
            src={`/assets/img/majhauliraaj7.jpeg`}
            alt="majhauli-raaj"
            width={500} // full HD width
            height={600} // adjust height accordingly
            className="rounded-md shadow-2xl"
          />
        </div>
        <div
          className="w-full md:w-1/2 p-4 aos-init aos-animate"
          data-aos="flip-right"
        >
          {/* <h2 className="text-2xl font-semibold text-[#f47217] font-serif">About</h2> */}
          <div className="inline-block relative mb-5">
            <h2 className="text-2xl font-semibold text-[#f47217] font-serif">
              About
            </h2>
            <div className="absolute left-0 top-8 w-1/2 h-1 bg-[#2ccc7f]"></div>
          </div>
          <h1 className="text-4xl mb-4 text-[#082366]">Majhauli Raj</h1>
          <p className="mb-4 text-black">
            Majhauli Raj was the seat of an eponymous Bisen/Visen feudal estate
            known as the Majhauli Raj, which is said to have been founded around
            1100 to 1300 CE. King Vishwa Sen (Estimated Around 1000 to 1200
            BCE), one of the sole king of Malla Desh or Malla Bhumi or Malla
            Rastra (Later known as Malla Mahajanpada), had ruled prior to
            Mahajanpad Era from Kushinagar as capital of eastern Koshala.
          </p>
          <Link
            href="/majhauliEstate"
            className="text-[#2ccc7f] hover:text-white hover:bg-[#2ccc7f] border border-2 p-3 rounded"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
