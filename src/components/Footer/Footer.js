import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      w="90%"
      mx="auto"
      h={50}
      backgroundColor="#f7fafc"
    >
      <Text alignItems="center" color="gray.500">
        Developed by Lucas Silva.
      </Text>
    </Flex>
  );
};

export default Footer;
