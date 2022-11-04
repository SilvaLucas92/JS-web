import React from 'react'
import {Flex, VStack} from "@chakra-ui/react";
import Footer from '../Footer/Footer'
import Head from '../Header/Head';

const Layout = ({ children }) => {
  return (
    <>
      <VStack role="main" spacing={0}>
        <Head />
        <Flex flexDir="column" width="full">
          {children}
          <Footer />
        </Flex>
      </VStack>
    </>
  )
}

export default Layout