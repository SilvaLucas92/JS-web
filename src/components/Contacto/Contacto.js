import { Heading, IconButton, Flex, Text, Box, Center } from "@chakra-ui/react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { animateScroll } from "react-scroll";
import React, { useEffect } from "react";
import SingleContact from "./SingleContact/SingleContact";
import Aos from "aos";
import "aos/dist/aos.css";
import Form from "./Form/Form";

const Contacto = () => {
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Box as="section" id="contact-me"  bg="#f7fafc">
      <Flex
        w={{ base: "90%", md: "70%" }}
        mx="auto"
        justify="center"
        direction="column"
        data-aos="fade-up"
        py={{ base: "140px", sm: "160px", md: "180px", xl: "200px" }}
      >
        <Flex align="center" justify="center">
          <Heading as="h2" color="#2d3748" textAlign="center">
            Contacto
            <Box borderTop="2px" w="50%" mx="auto" mt={2} />
          </Heading>
        </Flex>
        <Text
          textAlign="center"
          color="#ffffff"
          p={5}
          fontSize={{ base: "18px", md: "20px" }}
          opacity="0.8"
        >
          Si tenes alguna duda y queres escribirnos, te dejamo tos los medio
          para que te comuniques
        </Text>
        {/* <SingleContact /> */}
        <Form />
      </Flex>
      <Center p={5}>
        <IconButton
          icon={<AiOutlineArrowUp />}
          onClick={scrollToTop}
          backgroundColor="#ffffff"
          colorScheme="teal"
          variant="outline"
          fontSize="25px"
          isRound="true"
        />
      </Center>
    </Box>
  );
};

export default Contacto;
