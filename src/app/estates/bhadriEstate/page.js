import Head from "next/head";
import Header from "../../../components/Header";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
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
