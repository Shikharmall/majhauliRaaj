"use client";
import Header from "../../components/common/Header";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import FamilyTreeDetails from "@/components/FamilyTreeDetails";

export default function FamilyTree() {
  return (
    <>
      <Header />
      <Navbar />
      <FamilyTreeDetails />
      <Footer />
    </>
  );
}
