import React from "react";
import AboutMe from "../components/AboutMe/AboutMe";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import Layout from "../components/Layout/Layout";
import WorkModality from "../components/WorkModality/WorkModality";
import Therapy from "../components/Therapy/Therapy";
import TherapyServices from "../components/TherapyServices/TherapyServices";
import NavBar from "../components/Header/NavBar";
import Footer from "../components/Footer/Footer";
import { Box } from "@chakra-ui/react";
const Home = () => {
  return (
    <div pt="100px" overflow-y="hidden">
      <NavBar />
      <Box role="main">
        <Hero />
        <AboutMe />
        <TherapyServices />
        <Therapy />
        <WorkModality />
        <Contact />
        <Footer />
      </Box>
    </div>
  );
};

export default Home;
