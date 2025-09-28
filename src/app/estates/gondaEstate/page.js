import Head from "next/head";
import Header from "../../../components/common/Header";
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";
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
