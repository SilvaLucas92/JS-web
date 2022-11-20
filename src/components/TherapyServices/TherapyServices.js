import React from "react";
import Section from "../Section/Section";
import { Flex, Box, Text, chakra, SimpleGrid, Image } from "@chakra-ui/react";
import img from "./img.png";
function TherapyServices() {
  return (
    <Section id="services" title="Mis servicios" >
      <Flex w="full" justifyContent="center" alignItems="center">
        <Box mx="auto">
          <SimpleGrid
            alignItems="start"
            columns={{
              base: 1,
              md: 2,
            }}
            mb={5}
            spacingY={{
              base: 10,
              md: 15,
            }}
            spacingX={{
              base: 10,
              md: 15,
            }}
          >
            <Box>
              <chakra.h2
                mb={4}
                fontSize={"2xl"}
                textAlign={{
                  base: "center",
                  md: "left",
                }}
                fontWeight= "semibold"
              >
                Tratamientos psicológicos
              </chakra.h2>
              <Text
                textAlign={{
                  base: "center",
                  sm: "left",
                }}
                textStyle="text"
              >
                Atención online y presencial a Niños, Adolescentes y Adultos,
                Familias y Parejas con Orientación Sistémica.
              </Text>
            </Box>
            <Box alignItems={"center"}>
              <Image src={img} w="100%" maxH={"416px"} px={{ md: "15px" }} />
            </Box>
          </SimpleGrid>
          <SimpleGrid
            alignItems="center"
            columns={{
              base: 1,
              md: 2,
            }}
            flexDirection="column-reverse"
            mb={5}
            spacingY={{
              base: 10,
              md: 15,
            }}
            spacingX={{
              base: 10,
              md: 15,
            }}
          >
            <Box
              order={{
                base: "initial",
                md: 2,
              }}
            >
              <chakra.h2
                mb={4}
                fontSize={"2xl"}
                textAlign={{
                  base: "center",
                  md: "left",
                }}
                fontWeight= "semibold"
              >
                Supervisiones
              </chakra.h2>
              <Text
                textAlign={{
                  base: "center",
                  sm: "left",
                }}
                textStyle="text"
              >
                Un espacio destinado a profesionales de la salud mental que
                estén interesados en supervisar su caso desde una perspectiva
                sistémica. No es excluyente que sean terapeutas que trabajen
                desde este marco teórico, puede que no lo sean y se construya un
                espacio de intercambio desde su disciplina y desde la sistémica
                que pueda ampliar y enriquecer la lectura, la orientación y las
                intervenciones del tratamiento que se esté realizando. Las
                supervisiones pueden ser en forma presencial o virtual.
              </Text>
            </Box>
            <Box alignItems={"center"}>
              <Image src={img} w="100%" maxH={"416px"} px={{ md: "15px" }} />
            </Box>
          </SimpleGrid>
        </Box>
      </Flex>
    </Section>
  );
}

export default TherapyServices;
