"use client"
import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SwiperSlider from "../components/SwiperSlider";
import AboutSection from "@/components/AboutSection";
import Footer from "../components/Footer";
import GallerySection from "@/components/GallerySection";
import MoreSection from "@/components/MoreSection";
import { createContext } from "react";

const LanguageContext = createContext();

export default function Home() {
  return (
    <>
      <Head>
        <title>Majhauli Raj</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

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
