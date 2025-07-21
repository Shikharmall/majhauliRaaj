import Head from "next/head";
import dynamic from "next/dynamic";
import Script from "next/script";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SwiperSlider from "../components/SwiperSlider";
import AboutSection from "@/components/AboutSection";
import Footer from "../components/Footer";
import GallerySection from "@/components/GallerySection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Majhauli Raaj</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />
      <Navbar />
      <main>
        <SwiperSlider />
      </main>
      <AboutSection />
      <GallerySection />
      {/* <WelcomeSection />
      <Gallery />
      <Connect /> */}
      <Footer />
    </>
  );
}
