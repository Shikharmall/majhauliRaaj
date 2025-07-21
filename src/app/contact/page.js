import Head from "next/head";
import dynamic from "next/dynamic";
import Script from "next/script";

import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import SwiperSlider from "../../components/SwiperSlider";
import AboutSection from "@/components/AboutSection";
import Footer from "../../components/Footer";
import ConnectSection from "@/components/ConnectSection";
import ContactSection from "@/components/ContactSection";
// import WelcomeSection from '../components/WelcomeSection'
// import Gallery from '../components/Gallery'
// import Connect from '../components/Connect'

// import 'aos/dist/aos.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'swiper/swiper-bundle.min.css'
// import '../public/assets/css/style.css' // Copy from original
// import '../public/assets/css/animate.min.css'
// import '../public/assets/css/aos.css'

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
      <ContactSection />
      <Footer />
    </>
  );
}
