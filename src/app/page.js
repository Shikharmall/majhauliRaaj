"use client";
import Header from "@/components/common/Header";
import Navbar from "@/components/common/Navbar";
import SwiperSlider from "@/components/home/SwiperSlider";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/common/Footer";
import GallerySection from "@/components/home/GallerySection";
import MoreSection from "@/components/home/MoreSection";
import MapSection from "@/components/home/MapSection";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <SwiperSlider />
      <AboutSection />
      <MoreSection />
      <GallerySection />
      <MapSection />
      <Footer />
    </>
  );
}
