import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Testimonials from "../components/Testimonios/Testimonials";
import CallToAction from "../components/CallToAction/CallToAction";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer/Footer";
import BenefitsSection from "../components/Beneficios/BenefitsSection";
import ServicesSection from "../Components/ServicesSection/ServicesSection";
import InfoSection from "../Components/ServicesSection/InfoSection";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <ServicesSection/>
      <InfoSection />
      <BenefitsSection />
      <Testimonials />
      <FAQ />
      <CallToAction />
      <Footer />
    </>
  );
};

export default LandingPage;
