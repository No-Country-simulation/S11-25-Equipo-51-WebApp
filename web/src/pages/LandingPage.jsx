import React from "react";
import Testimonials from "../components/Testimonios/Testimonials";
import CallToAction from "../components/CallToAction/CallToAction";
import Footer from "../components/Footer/Footer";
import BenefitsSection from "../components/Beneficios/BenefitsSection";

const LandingPage = () => {
  return (
    <>
      <BenefitsSection />
      <Testimonials />

      <CallToAction />
      <Footer />
    </>
  );
};

export default LandingPage;
