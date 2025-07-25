import Head from "next/head";
import Header from "../../../components/Header";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import MadhubanEstateDetails from "@/components/EstateDetails/MadhubanEstateDetails";

export default function Madhuban() {
  return (
    <>
      <Header />
      <Navbar />
      <MadhubanEstateDetails />
      <Footer />
    </>
  );
}
