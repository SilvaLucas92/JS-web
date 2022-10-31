import React from "react";
import AboutMe from "../components/AboutMe/AboutMe";
import Contacto from "../components/Contacto/Contacto";
import FrequentQuestions from "../components/FrequentQuestions/FrequentQuestions";
import HeroPr from "../components/Hero/HeroPr";
import Layout from "../components/Layout/Layout";
import Servicios from "../components/Servicios/Servicios";

const Home = () => {
  return (
    <Layout>
      <HeroPr />
      <AboutMe />
      <Servicios />
      <FrequentQuestions />
      <Contacto />
    </Layout>
  );
};

export default Home;
