import React, { useState, useEffect } from "react";
import {
  Flex,
  Heading,
  Text,
  Box,
  Image,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import ja from "./ja.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import data from "../AboutMe/data";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
const AboutMe = () => {
  const [index, setIndex] = useState(0);
  const { title, text } = data[index];
  const changeToRight = () =>
    index === 0 ? setIndex(data.length - 1) : setIndex(index - 1);
  const changeToleft = () =>
    index === 0 ? setIndex(data.length - 1) : setIndex(index - 1);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Box as="section" bg="#f7fafc" id="about-me">
      <Flex
        w={{ base: "90%", md: "70%" }}
        mx="auto"
        py={{ base: "140px", sm: "160px", md: "180px", xl: "200px" }}
        align="flex-start"
        justify="center"
        direction={{ base: "column", xl: "row" }}
        px={{ base: "10px", xl: "20px" }}
        data-aos="fade-up"
      >
        <Image
          src={ja}
          w={{ base: "350px", sm: "500px", md: "550px" }}
          mx="auto"
        />
        <Box h="100%">
          <Flex
            align="center"
            justify="center"
            w={{ base: "100%", xl: "100%" }}
          >
            <Heading
              as="h2"
              color="#2d3748"
              textAlign="center"
            >
              {title}
              <Box borderTop='2px' color='rgb(49 151 149)' w='50%' mx='auto' mt={2} />
            </Heading>
          </Flex>
          <Text
            p={2}
            opacity="0.7"
            fontSize={{ base: "18px", md: "20px" }}
            textAlign="center"
          >
            {text}
          </Text>
          <HStack justify="center">
            <IconButton
              isRound="true"
              onClick={changeToleft}
              icon={<AiOutlineArrowLeft />}
              colorScheme="teal"
              variant="outline"
            />
            <IconButton
              isRound="true"
              onClick={changeToRight}
              icon={<AiOutlineArrowRight />}
              colorScheme="teal"
              variant="outline"
            />
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default AboutMe;
