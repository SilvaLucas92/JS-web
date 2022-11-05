import React from "react";
import AboutMe from "../components/AboutMe/AboutMe";
import Contacto from "../components/Contacto/Contacto";
import Hero from "../components/Hero/Hero";
import Layout from "../components/Layout/Layout";
import WorkModality from "../components/WorkModality/WorkModality";
import Servicios from "../components/Servicios/Servicios";
import Therapy from "../components/Therapy/Therapy";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <AboutMe />
      <Therapy />
      <Servicios />
      <WorkModality />
      <Contacto />
    </Layout>
  );
};

export default Home;
