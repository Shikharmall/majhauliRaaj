import Head from "next/head";
import Header from "../../../components/Header";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import DumariaEstateDetails from "@/components/EstateDetails/DumariaEstateDetails";

export default function Contact() {
  return (
    <>
      <Header />
      <Navbar />
      <DumariaEstateDetails />
      <Footer />
    </>
  );
}
