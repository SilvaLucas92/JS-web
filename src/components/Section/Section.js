import { Box, chakra } from "@chakra-ui/react";
const Section = ({ title, id, children, paddingBottom }) => {
  return (
    <Box id={id} bg={"white"} as="section" w="full">
      <Box
        w={{ base: "90%", md: "80%", xl: "75%" }}
        mx="auto"
        pt="200px"
        pb={paddingBottom ?? ""}
      >
        <chakra.h2 textStyle={"h2"} color='#2b2c34'>
          {title ? title : ""}
          <Box
            borderTop="4px"
            // color="rgb(49 151 149)"
            color='#29539b'
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
