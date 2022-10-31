import React, { useState, useEffect } from "react";
import {
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  chakra,
} from "@chakra-ui/react";
import { AiOutlineAlignRight, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion, isValidMotionProp } from "framer-motion";
import navLinks from "./navLinks";

const ChakraBox = chakra(motion.header, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

const Head = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);
  
  return (
    <ChakraBox
      w="100%"
      top={show ? 0 : "-100px"}
      bg="#ffffff"
      borderBottomWidth={1}
      position="fixed"
      zIndex="1"
      boxShadow="xl"
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{
        delay: 0.5,
        type: "tween",
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <Flex>
        <HStack
          w={{ base: "90%", md: "80%" }}
          mx="auto"
          justify="space-between"
          align="center"
          p={5}
        >
          <Heading
            display={{ base: "none", xl: "block" }}
            fontWeight="bold"
            color="#2b2c34"
          >
            Julio Silva
          </Heading>
          <Heading display={{ base: "block", xl: "none" }}>JS</Heading>
          <Flex display={{ md: "none" }}>
            <IconButton
              icon={!showMenu ? <AiOutlineAlignRight /> : <AiOutlineClose />}
              onClick={() => {
                return !showMenu ? setShowMenu(true) : setShowMenu(false);
              }}
              fontSize={22}
              isRound="true"
              backgroundColor="#ffffff"
              colorScheme="teal"
              variant="outline"
            />
          </Flex>

          <Flex
            as="nav"
            display={{ base: "none", md: "flex" }}
            justify="center"
            align="center"
          >
            {navLinks &&
              navLinks.map((oneLink) => {
                return (
                  <Button m={2} variant="link">
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
        as="nav"
        display={showMenu ? "flex" : "none"}
        direction="column"
        w="100%"
        mx="auto"
        align="center"
        bg="#ffffff"
      >
        {navLinks &&
          navLinks.map((oneLink) => {
            return (
              <Button my={8} variant="link" size="lg">
                <Link
                  to={oneLink.to}
                  spy={true}
                  smooth={true}
                  offset={100}
                  duration={800}
                  onClick={() => {
                    return setShowMenu(false);
                  }}
                >
                  {oneLink.section}
                </Link>
              </Button>
            );
          })}
      </Flex>
    </ChakraBox>
  );
};

export default Head;
