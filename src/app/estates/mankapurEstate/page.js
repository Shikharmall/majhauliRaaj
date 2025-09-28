import Head from "next/head";
import Header from "../../../components/common/Header";
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";
import MadhubanEstateDetails from "@/components/EstateDetails/MankapurEstateDetails";

export default function Manakpur() {
  return (
    <>
      <Header />
      <Navbar />
      <MadhubanEstateDetails />
      <Footer />
    </>
  );
}
