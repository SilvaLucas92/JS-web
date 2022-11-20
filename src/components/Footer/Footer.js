import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      w="100%"
      mx="auto"
      h={50}
    >
      <Text alignItems="center" color="gray.500">
        Developed by Lucas Silva.
      </Text>
    </Flex>
  );
};

export default Footer;
