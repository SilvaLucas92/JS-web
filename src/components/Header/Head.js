import React, { useState } from "react";
import {
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { AiOutlineAlignRight, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import navLinks from "./navLinks";

const Head = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleButton = () => !showMenu ? setShowMenu(true) : setShowMenu(false);
  return (
    <Box
      as='nav'
      w="full"
      top={0}
      bg="#ffffff"
      borderBottomWidth={1}
      height={'full'}
      position={"sticky"}
      zIndex={"modal"}
      boxShadow="2xl"
    >
      <Flex>
        <HStack
          w={{ base: "90%", md: "70%" }}
          h='full'
          mx="auto"
          justify="space-between"
          align="center"
          p={5}
        >
          <Heading
            display={{ base: "none", lg: "block" }}
            fontWeight="bold"
            color="#2b2c34"
          >
            Julio Silva
          </Heading>
          <Heading display={{ base: "block", lg: "none" }}>JS</Heading>
          <Flex display={{ lg: "none" }}>
            <IconButton
              icon={!showMenu ? <AiOutlineAlignRight /> : <AiOutlineClose />}
              onClick={toggleButton}
              fontSize={22}
              isRound="true"
              backgroundColor="#ffffff"
              colorScheme="teal"
              variant="outline"
            />
          </Flex>

          <Flex
            display={{ base: "none", lg: "flex" }}
            justify="center"
            align="center"
          >
            {navLinks &&
              navLinks.map((oneLink, index) => {
                return (
                  <Button m={2} variant="link" key={index}>
                    <Link
                      to={oneLink.to}
                      spy={true}
                      smooth={true}
                      offset={100}
                      duration={800}
                    >
                      {oneLink.section}
                    </Link>
                  </Button>
                );
              })}
          </Flex>
        </HStack>
      </Flex>
      <Flex
        display={showMenu ? "flex" : "none"}
        direction="column"
        w="100%"
        mx="auto"
        align="center"
        bg="#ffffff"
      >
        {navLinks &&
          navLinks.map((oneLink, index) => {
            return (
              <Button my={8} variant="link" size="lg" key={index}>
                <Link
                  to={oneLink.to}
                  spy={true}
                  smooth={true}
                  offset={100}
                  duration={800}
                  onClick={toggleButton}
                >
                  {oneLink.section}
                </Link>
              </Button>
            );
          })}
      </Flex>
    </Box>
  );
};

export default Head;
