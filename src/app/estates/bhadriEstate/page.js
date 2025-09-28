import Head from "next/head";
import Header from "../../../components/common/Header";
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";
import BhadriEstateDetails from "@/components/EstateDetails/BhadriEstateDetails";

export default function Bhadri() {
  return (
    <>
      <Header />
      <Navbar />
      <BhadriEstateDetails />
      <Footer />
    </>
  );
}
