import { useEffect } from "react";
import { Box, Heading } from "@chakra-ui/react";
import Aos from "aos";
import "aos/dist/aos.css";
const Section = ({ title, id, backgroundColor, children }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Box id={id} bg={backgroundColor? backgroundColor : 'white'} as="section" w="full" border='solid 1px red'>
      <Box
        w={{ base: "90%", md: "80%", xl:'75%' }}
        mx="auto"
        py={{ base: "200px", sm: "200px", md: "200px", xl: "210px" }}
        // data-aos="fade-up"
      >
        <Heading as="h2" color="#2d3748" textAlign="center" mb={'50px'} size={'2xl'} fontWeight='semibold'>
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
      </Box>
    </Box>
  );
};

export default Section;
