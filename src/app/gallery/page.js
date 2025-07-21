import Head from "next/head";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import RoyalGallerySection from "../../components/RoyalGallerySection";

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Majhauli Raaj</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />
      <Navbar />
      <RoyalGallerySection />
      <Footer />
    </>
  );
}
