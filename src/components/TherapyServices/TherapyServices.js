import React from "react";
import Section from "../Section/Section";
import Therapy from "../Therapy/Therapy";
import EachService from "./components/EachService";
import WorkModality from "../WorkModality/WorkModality";
import { Text, Heading } from "@chakra-ui/react";
const data = [
  {
    id: 1,
    title: "Niños y Adolecentes",
    description:
      "Dificultades escolares, problemas en la conducta, timidez, bullying, miedos/fobias, dificultades en el control de esfinteres, trastornos en la conducta alimentaria, trastornos en el sueño.",
  },
  {
    id: 2,
    title: "Adultos",
    description:
      "fobia, llanto, problemas de socializacion, fobia, llanto, problemas de socializacion",
  },
  {
    id: 3,
    title: "Familia",
    description:
      "fobia, llanto, problemas de socializacion, fobia, llanto, problemas de socializacion",
  },
  {
    id: 4,
    title: "Parejas",
    description:
      "fobia, llanto, problemas de socializacion, fobia, llanto, problemas de socializacion",
  },
];
const data2 = [
  {
    id: 1,
    title: "Niños y Adolecentes",
    description:
      "Dificultades escolares, problemas en la conducta, timidez, bullying, miedos/fobias, dificultades en el control de esfinteres, trastornos en la conducta alimentaria, trastornos en el sueño.",
  },
  {
    id: 2,
    title: "Adultos",
    description:
      "fobia, llanto, problemas de socializacion, fobia, llanto, problemas de socializacion",
  },
];
function TherapyServices() {
  return (
    <Section id="services" title="Servicios">
      <Heading
        as="h3"
        color="#2d3748"
        textAlign="center"
        my={10}
        fontSize={{
          base: "2xl",
          sm: "3xl",
          lg: "4xl",
        }}
      >
        Atencion Clinica
      </Heading>
      <Text
        opacity="0.7"
        fontSize={{ base: "18px", md: "20px" }}
        p={5}
        textAlign="center"
      >
        Atención Online y presencial a Niños, Adolescentes y Adultos, Familias y
        Parejas con orientación Sistémica en las siguientes problemáticas:
      </Text>
      <Therapy title="¿Que es la terapia?">
        La Terapia Cognitivo Conductual (TCC) es una forma de tratamiento
        psicológico de orientación práctica, que utiliza procedimientos
        validados por la ciencia. Es de corta duración, ya que se se trabaja por
        objetivos, los cuales se acuerdan previamente de manera conjunta. Se
        enfoca en el presente inmediato, a resolver los problemas del “aquí y
        ahora”. Se parte del supuesto de que Pensamientos, Emociones y Conductas
        están interconectados. Adquirirás habilidades y estrategias efectivas
        que te ayuden a identificar y modificar tus pensamientos distorsionados;
        lo cual conlleva asimismo un cambio en la forma en que te sientes y
        actúas, logrando respuestas más adaptativas a tu vida. La idea es que te
        vuelvas “tu propio terapeuta” y tengas las herramientas necesarias para
        lidiar con los obstáculos que encuentres a futuro en tu vida cotidiana.
      </Therapy>
      <EachService title="Problematicas" data={data} />
      <WorkModality />
      <Therapy title={"Revisiones"}>
        La Terapia Cognitivo Conductual (TCC) es una forma de tratamiento
        psicológico de orientación práctica, que utiliza procedimientos
        validados por la ciencia. Es de corta duración, ya que se se trabaja por
        objetivos, los cuales se acuerdan previamente de manera conjunta. Se
        enfoca en el presente inmediato, a resolver los problemas del “aquí yv
        ahora”. Se parte del supuesto de que Pensamientos, Emociones y Conductas
        están interconectados. Adquirirás habilidades y estrategias efectivas
        que te ayuden a identificar y modificar tus pensamientos distorsionados;
      </Therapy>
    </Section>
  );
}

export default TherapyServices;
