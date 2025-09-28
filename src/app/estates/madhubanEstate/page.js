import Head from "next/head";
import Header from "../../../components/common/Header";
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";
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
