import Head from "next/head";
import Header from "../../../components/Header";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import GondaEstateDetails from "@/components/EstateDetails/GondaEstateDetails";

export default function Gonda() {
  return (
    <>
      <Header />
      <Navbar />
      <GondaEstateDetails />
      <Footer />
    </>
  );
}
