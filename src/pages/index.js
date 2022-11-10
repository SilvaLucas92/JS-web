import React from "react";
import AboutMe from "../components/AboutMe/AboutMe";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import Layout from "../components/Layout/Layout";
import WorkModality from "../components/WorkModality/WorkModality";
import Servicios from "../components/Servicios/Servicios";
import Therapy from "../components/Therapy/Therapy";
import TherapyServices from "../components/TherapyServices/TherapyServices";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <AboutMe />
      <Therapy />
      <TherapyServices />
      {/* <Servicios /> */}
      <WorkModality />
      <Contact />
    </Layout>
  );
};

export default Home;
