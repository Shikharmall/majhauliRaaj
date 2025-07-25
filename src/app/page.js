"use client";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SwiperSlider from "../components/SwiperSlider";
import AboutSection from "@/components/AboutSection";
import Footer from "../components/Footer";
import GallerySection from "@/components/GallerySection";
import MoreSection from "@/components/MoreSection";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <SwiperSlider />
      <AboutSection />
      <MoreSection />
      <GallerySection />
      <Footer />
    </>
  );
}
