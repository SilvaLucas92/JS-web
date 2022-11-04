import React from "react";
import { Heading, Stack, Text, VStack } from "@chakra-ui/react";
import Service from "./OneService/Service";
import Section from "../Section/Section";
const data = [
  {
      id: 1,
      title: 'Niños y Adolecentes',
      description: 'Dificultades escolares, problemas en la conducta, timidez, bullying, miedos/fobias, dificultades en el control de esfinteres, trastornos en la conducta alimentaria, trastornos en el sueño.'
  },
  {
      id: 2,
      title: 'Adultos',
      description: 'fobia, llanto, problemas de socializacion, fobia, llanto, problemas de socializacion'
  },
  {
      id: 3,
      title: 'Familia',
      description: 'fobia, llanto, problemas de socializacion, fobia, llanto, problemas de socializacion'
  },
  {
      id: 4,
      title: 'Parejas',
      description: 'fobia, llanto, problemas de socializacion, fobia, llanto, problemas de socializacion'
  },
  {
      id: 5,
      title: 'Orientacion a padres',
      description: 'Crianza respetada'
  }
]
const data2 = [
  {
      id: 1,
      title: 'Niños y Adolecentes',
      description: 'Dificultades escolares, problemas en la conducta, timidez, bullying, miedos/fobias, dificultades en el control de esfinteres, trastornos en la conducta alimentaria, trastornos en el sueño.'
  },
  {
      id: 2,
      title: 'Adultos',
      description: 'fobia, llanto, problemas de socializacion, fobia, llanto, problemas de socializacion'
  },]

const Servicios = () => {
  return (
    <Section id="services" title="Servicios">
      <VStack align={"center"} justify="center">
        <Heading as='h3'>
          Atencion Clinica
        </Heading>
        <Text
          opacity="0.7"
          fontSize={{ base: "18px", md: "20px" }}
          p={5}
          textAlign="center"
        >
          Atención Online y presencial a Niños, Adolescentes y Adultos, Familias
          y Parejas con orientación Sistémica en las siguientes problemáticas:
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
        {data.map((oneData, i) => {
          return <Service key={i} oneData={oneData} />;
        })}
      </Stack>
      <Heading textAlign='center' mt={10} as='h3'>
        Supervisión
      </Heading>
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
        {data2.map((oneData, i) => {
          return <Service key={i} oneData={oneData} />;
        })}
      </Stack>
    </Section>
  );
};

export default Servicios;
