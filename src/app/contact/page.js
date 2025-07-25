import Head from "next/head";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContactSection from "@/components/ContactSection";

export default function Contact() {
  return (
    <>
      <Header />
      <Navbar />
      <ContactSection />
      <Footer />
    </>
  );
}
