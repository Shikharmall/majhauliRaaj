import Head from "next/head";
import Header from "../../../components/Header";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import BadriEstateDetails from "@/components/EstateDetails/BadriEstateDetails";

export default function Contact() {
  return (
    <>
      <Header />
      <Navbar />
      <BadriEstateDetails />
      <Footer />
    </>
  );
}
