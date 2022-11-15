import React from "react";
import { Box, VStack } from "@chakra-ui/react";
import Footer from "../Footer/Footer";
import NavBar from "../Header/NavBar";
import ScrollBtn from "../ScrollBtn/ScrollBtn";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Box role="main">
        {children}
        <ScrollBtn />
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
