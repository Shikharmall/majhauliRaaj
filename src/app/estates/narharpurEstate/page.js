import Head from "next/head";
import Header from "../../../components/Header";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import NarharpurEstateDetails from "@/components/EstateDetails/NarharpurEstateDetails";

export default function Contact() {
  return (
    <>
      <Header />
      <Navbar />
      <NarharpurEstateDetails />
      <Footer />
    </>
  );
}
