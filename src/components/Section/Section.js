import { useEffect } from "react";
import { Box, chakra } from "@chakra-ui/react";
import Aos from "aos";
import "aos/dist/aos.css";
const Section = ({ title, id, backgroundColor, children, paddingBottom }) => {
  // useEffect(() => {
  //   Aos.init({ duration: 2000 });
  // }, []);
  return (
    <Box
      id={id}
      bg={backgroundColor ? backgroundColor : "white"}
      as="section"
      w="full"
    >
      <Box
        w={{ base: "90%", md: "80%", xl: "75%" }}
        mx="auto"
        pt="200px"
        pb={paddingBottom ?? ""}
        // data-aos="fade-up"
      >
        <chakra.h2 textStyle={"h2"}>
          {title ? title : ""}
          <Box
            borderTop="4px"
            color="rgb(49 151 149)"
            w="10%"
            mx="auto"
            mt={2}
          />
        </chakra.h2>
        {children}
      </Box>
    </Box>
  );
};

export default Section;
