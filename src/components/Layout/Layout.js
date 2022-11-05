import React from 'react'
import {Flex, VStack} from "@chakra-ui/react";
import Footer from '../Footer/Footer'
import NavBar from '../Header/NavBar';
import ScrollBtn from '../ScrollBtn/ScrollBtn';

const Layout = ({ children }) => {
  return (
    <>
      <VStack role="main" spacing={0}>
        <NavBar />
        <Flex flexDir="column" width="full">
          {children}
          <ScrollBtn />
          <Footer />
        </Flex>
      </VStack>
    </>
  )
}

export default Layout