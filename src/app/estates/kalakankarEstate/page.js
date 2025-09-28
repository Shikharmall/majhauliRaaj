import Head from "next/head";
import Header from "../../../components/common/Header";
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";
import KalakankarEstateDetails from "@/components/EstateDetails/KalakankarEstateDetails";

export default function Kalakankar() {
  return (
    <>
      <Header />
      <Navbar />
      <KalakankarEstateDetails />
      <Footer />
    </>
  );
}
