import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Testimonials from "../components/Testimonios/Testimonials";
import CallToAction from "../components/CallToAction/CallToAction";
import Footer from "../components/Footer/Footer";
import BenefitsSection from "../components/Beneficios/BenefitsSection";

const LandingPage = () => {
  return (
    <>
    <Header/>
    <Banner/>
      <BenefitsSection />
      <Testimonials />

      <CallToAction />
      <Footer />
    </>
  );
};

export default LandingPage;
