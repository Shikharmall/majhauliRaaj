import Head from "next/head";
import Header from "../../../components/Header";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import KalakankarEstateDetails from "@/components/EstateDetails/KalakankarEstateDetails";

export default function Contact() {
  return (
    <>
      <Header />
      <Navbar />
      <KalakankarEstateDetails />
      <Footer />
    </>
  );
}
