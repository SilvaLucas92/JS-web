import { Text, Image } from "@chakra-ui/react";
import ja from "./ja.jpg";
import Aos from "aos";
import { aboutMe } from "./utils";
import Section from "../Section/Section";
const AboutMe = () => {
  return (
    <Section
      title={aboutMe.title ?? null}
      id={"about-me"}
      backgroundColor="#f7fafc"
    >
      <Text p={2} opacity="0.7" fontSize={{ base: "18px", md: "20px" }}>
        {aboutMe && aboutMe.text}
      </Text>
      <Image
        src={ja}
        w={{ base: "350px", sm: "500px", md: "550px" }}
        mx="auto"
      />
    </Section>
  );
};

export default AboutMe;

{
  /* <Box as="section" bg="#f7fafc" id="about-me">
<VStack
  w={{ base: "90%", md: "70%" }}
  mx="auto"
  py={{ base: "140px", sm: "160px", md: "180px", xl: "200px" }}
  data-aos="fade-up"
>
  <Image
    src={ja}
    w={{ base: "350px", sm: "500px", md: "550px" }}
    mx="auto"
  />
  <Box h="100%">
    <Flex align="center" justify="center" w="full">
      <Heading as="h2" color="#2d3748" textAlign="center">
        {aboutMe && aboutMe.title}
        <Box
          borderTop="2px"
          color="rgb(49 151 149)"
          w="50%"
          mx="auto"
          mt={2}
        />
      </Heading>
    </Flex>
    <Text p={2} opacity="0.7" fontSize={{ base: "18px", md: "20px" }}>
      {aboutMe && aboutMe.text}
    </Text>
  </Box>
</VStack>
</Box> */
}
