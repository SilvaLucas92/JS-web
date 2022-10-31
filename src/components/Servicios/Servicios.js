import React from "react";
import { Flex, Stack, Heading, Box, Text, VStack } from "@chakra-ui/react";
import data from "../Servicios/Service/data";
import Service from "./Service/Service";

const Servicios = () => {
  return (
    <Box as="section" id="services">
      <Flex
        w={{ base: "90%", md: "80%" }}
        mx="auto"
        justify="center"
        direction="column"
        py={{ base: "140px", sm: "160px", md: "180px", xl: "200px" }}
      >
        <VStack align={"center"} justify="center">
          <Heading as="h2" color="#2d3748" textAlign="center">
            Nuestos servicios
            <Box
              borderTop="2px"
              color="rgb(49 151 149)"
              w="50%"
              mx="auto"
              mt={2}
            />
          </Heading>
          <Text
            opacity="0.7"
            fontSize={{ base: "18px", md: "20px" }}
            p={5}
            textAlign="center"
          >
            Atención Online y presencial a Niños, Adolescentes y Adultos,
            Familias y Parejas con orientación Sistémica.
          </Text>
        </VStack>
        <Stack
          spacing={{
            base: 10,
            md: 0,
          }}
          display={{
            md: "grid",
          }}
          gridTemplateColumns={{
            md: "repeat(3,1fr)",
          }}
          gridColumnGap={{
            md: 8,
          }}
          gridRowGap={{
            md: 10,
          }}
          mt={10}
        >
          {data.map((oneData) => {
            return <Service key={oneData.id} oneData={oneData} />;
          })}
        </Stack>
      </Flex>
    </Box>
  );
};

export default Servicios;
