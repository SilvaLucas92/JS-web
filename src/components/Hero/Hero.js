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
                  base: "5xl",
                  sm: "6xl",
                  md: "7xl",
                  lg: "8xl",
                }}
                fontWeight="extrabold"
                color="#2b2c34"
              >
                Julio Silva
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
                Psicologo Clinico
              </chakra.h2>
              <chakra.p
                fontSize={{
                  base: "lg",
                  md: "xl",
                }}
                color="gray.500"
              >
                " De una herida, lo que importa es la cicatriz. "<br></br>
                Jaques Lacan
              </chakra.p>
              <Flex
                direction={{ base: "column", sm: "row" }}
                justify="center"
                w="full"
              >
                <Button
                  w={{ base: "150px", sm: "150px", md: "190px", xl: "210px" }}
                  rightIcon={<EmailIcon />}
                  colorScheme="teal"
                  variant="solid"
                  mx={"auto"}
                  fontSize={{ base: "16px", md: "18px" }}
                >
                  <Link to="contact-me">Contactame</Link>
                </Button>
              </Flex>
            </VStack>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default HeroPr;
