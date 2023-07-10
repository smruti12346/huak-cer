import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Banner from "../header/Banner";
import FeatureServices from "../FeatureServices";
import About from "../About";
import CommonServices from "../CommonServices";
import LabIntroduction from "../LabIntroduction";
// import Testimonial from "../Testimonial";
import LatestNews from "../LatestNews";
import ContactForm from "../ContactForm";
import Downbanner from "../Downbanner";

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Downbanner />
      <FeatureServices />
      <About />
      <CommonServices />
      <LatestNews />

      <LabIntroduction />
      {/* <Testimonial /> */}
      <ContactForm />
      <Footer />
    </>
  );
}

export default Home;
