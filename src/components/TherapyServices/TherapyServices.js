import React from "react";
import Section from "../Section/Section";
import { Flex, Box, Text, chakra, SimpleGrid } from "@chakra-ui/react";

function TherapyServices() {
  return (
    <Section id="services" title="Mis servicios">
      <Flex w="full" justifyContent="center" alignItems="center">
        <Box mx="auto">
          <SimpleGrid
            alignItems="start"
            columns={{
              base: 1,
              lg: 2,
            }}
            mb={24}
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
                fontSize={"3xl"}
                textAlign={{
                  base: "center",
                  md: "left",
                }}
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
            <Box w="full" h="full" py={48} bg="gray.200"></Box>
          </SimpleGrid>
          <SimpleGrid
            alignItems="center"
            columns={{
              base: 1,
              lg: 2,
            }}
            flexDirection="column-reverse"
            mb={24}
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
                fontSize={"3xl"}
                textAlign={{
                  base: "center",
                  md: "left",
                }}
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
            <Box w="full" h="full" py={48} bg="gray.200"></Box>
          </SimpleGrid>
        </Box>
      </Flex>
    </Section>
  );
}

export default TherapyServices;
