import React from "react";
import AboutMe from "../components/AboutMe/AboutMe";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import Layout from "../components/Layout/Layout";
import WorkModality from "../components/WorkModality/WorkModality";
import Therapy from "../components/Therapy/Therapy";
import Choc from '../components/TherapyServices/TherapyServices'
const Home = () => {
  return (
    <div pt="100px" overflow-y="hidden">
      <Layout>
        <Hero />
        <AboutMe />
        <Choc />
        <Therapy />
        <WorkModality />
        <Contact />
      </Layout>
    </div>
  );
};

export default Home;
