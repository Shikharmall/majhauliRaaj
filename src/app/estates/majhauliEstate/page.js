import Head from "next/head";

import Header from "../../../components/Header";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import MajhauliEstateDetails from "../../../components/EstateDetails/MajhauliEstateDetails";

export default function Majhauli() {
  return (
    <>
      <Header />
      <Navbar />
      <MajhauliEstateDetails/>
      <Footer />
    </>
  );
}
