import React from "react";
import { Box, chakra, Flex, VStack, Button } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { Link } from "react-scroll";
const HeroPr = () => {
  return (
    <Box bg="#fffffe" id="hero" w="100%">
      <Flex
        w={{ base: "90%", md: "70%" }}
        mx="auto"
        justify="center"
        align="center"
        h="100vh"
      >
        <Box w="full">
          <Box
            px={{
              base: 4,
              sm: 6,
              lg: 8,
            }}
          >
            <VStack
              textAlign="center"
              w={{
                base: "full",
                md: 11 / 12,
                xl: 8 / 12,
              }}
              mx="auto"
            >
              <chakra.h1
                fontSize={{
                  base: "4xl",
                  sm: "5xl",
                  md: "6xl",
                  lg: "7xl",
                }}
                fontWeight="extrabold"
                color="#2b2c34"
              >
                Julio Sebastían Silva
              </chakra.h1>
              <chakra.h2
                fontSize={{
                  base: "3xl",
                  sm: "4xl",
                  md: "5xl",
                }}
                fontWeight="extrabold"
                color="#319795"
              >
                Psicólogo Clínico
              </chakra.h2>
              <Flex
                direction={{ base: "column", sm: "row" }}
                justify="center"
                w="full"
              >
              </Flex>
            </VStack>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default HeroPr;
