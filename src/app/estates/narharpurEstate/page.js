import Head from "next/head";
import Header from "../../../components/common/Header";
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";
import NarharpurEstateDetails from "@/components/EstateDetails/NarharpurEstateDetails";

export default function Narharpur() {
  return (
    <>
      <Header />
      <Navbar />
      <NarharpurEstateDetails />
      <Footer />
    </>
  );
}
