import { Flex, Icon, Box, Text } from "@chakra-ui/react";

const Feature = ({ title, children }) => {
  return (
    <Flex>
      <Flex>
        <Icon boxSize={5} mt={1} color="brand.500">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          ></path>
        </Icon>
      </Flex>
      <Box >
        <Text
          as="h3"
          color="#2d3748"
          fontSize={{ base: "18px", md: "20px" }}
        >
          {title}
        </Text>
        <Text fontSize={{ base: "16px", md: "18px" }} opacity="0.7">
          {children}
        </Text>
      </Box>
    </Flex>
  );
};

export default Feature;
