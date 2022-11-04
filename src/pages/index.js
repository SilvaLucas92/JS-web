import React from "react";
import AboutMe from "../components/AboutMe/AboutMe";
import Contacto from "../components/Contacto/Contacto";
import FrequentQuestions from "../components/FrequentQuestions/FrequentQuestions";
import Hero from "../components/Hero/Hero";
import Layout from "../components/Layout/Layout";
import Modalidad from "../components/Modalidad/Modalidad";
import Servicios from "../components/Servicios/Servicios";
import Terapia from "../components/Terapia/Terapia";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <AboutMe />
      <Terapia />
      <Servicios />
      <Modalidad />
      {/* <FrequentQuestions /> */}
      <Contacto />
    </Layout>
  );
};

export default Home;
