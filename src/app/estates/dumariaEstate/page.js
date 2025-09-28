import Head from "next/head";
import Header from "../../../components/common/Header";
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";
import DumariaEstateDetails from "@/components/EstateDetails/DumariaEstateDetails";

export default function Dumaria() {
  return (
    <>
      <Header />
      <Navbar />
      <DumariaEstateDetails />
      <Footer />
    </>
  );
}
