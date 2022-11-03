import { useEffect } from "react";
import { Container, Box, Heading } from "@chakra-ui/react";
import Aos from "aos";
import "aos/dist/aos.css";
const Section = ({ title, id, backgroundColor, children }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  console.log(title);
  return (
    <Box id={id} bg={backgroundColor? backgroundColor : 'white'} as="section" w="full">
      <Container
        w={{ base: "90%", md: "70%" }}
        mx="auto"
        py={{ base: "140px", sm: "160px", md: "180px", xl: "200px" }}
        data-aos="fade-up"
      >
        <Heading as="h2" color="#2d3748" textAlign="center" mb={10}>
          {title ? title : ""}
          <Box
            borderTop="2px"
            color="rgb(49 151 149)"
            w="10%"
            mx="auto"
            mt={2}
          />
        </Heading>
        {children}
      </Container>
    </Box>
  );
};

export default Section;
