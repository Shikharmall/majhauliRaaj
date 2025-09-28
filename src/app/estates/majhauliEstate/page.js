import Head from "next/head";

import Header from "../../../components/common/Header";
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";
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
