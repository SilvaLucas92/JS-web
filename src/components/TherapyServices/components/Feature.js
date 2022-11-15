import { Flex, Icon, Box, Text } from "@chakra-ui/react";

const Feature = ({ title, children }) => {
  return (
    <Flex textAlign='center' bg='white' p={10} border='solid 1px red'>
      <Box >
        <Text
          as="h3"
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
