import { Stack, SimpleGrid, Text, Icon, chakra } from "@chakra-ui/react";
import Section from "../Section/Section";
import { BsSearch } from "react-icons/bs";
import { MdOutlineGpsFixed } from "react-icons/md";
import { RiWechatLine } from "react-icons/ri";
const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      {/* <Flex w={"full"}  mb={1}>
        {icon}
      </Flex> */}
      <chakra.h2 fontSize={"2xl"} my={4} fontWeight= "semibold">
        {title}
      </chakra.h2>
      <Text textStyle="text">{text}</Text>
    </Stack>
  );
};

const Modalidad = () => {
  return (
    <Section
      id="WorkModality"
      title="Modalidad de trabajo"
      backgroundColor="#f7fafc"
    >
      <SimpleGrid
        columns={{ base: 1, lg: 3 }}
        spacing={5}
        textAlign={{
          base: "center",
          md: "left",
        }}
      >
        <Feature
          icon={<Icon as={BsSearch} w={8} h={8} opacity="0.7" />}
          title={"Evaluacion"}
          text={
            "Es el primer paso desde que se pacta un día y un horario para la primera consulta. La evaluación consta de un número de entrevistas, en las cuáles se escucha el motivo de la consulta, se detectan los problemas y malestares y se plantea un tratamiento para la solución de los mismos. Cabe aclarar que luego de este proceso, muchas veces, no es necesario un tratamiento y que con algunas consultas más el problema puede estar resuelto. "
          }
        />
        <Feature
          icon={<Icon as={RiWechatLine} w={8} h={8} opacity="0.7" />}
          title={"Tratamiento"}
          text={
            "De haber sido necesario e indicado, se continúa con el tratamiento que consta de una serie de sesiones donde se trabaja junto al consultante para poder ayudarlo a resolver los problemas por los cuales consultó. Con adolescentes y adultos se utiliza la conversación como herramienta fundamental pero también existen otras técnicas que puedan ser de ayuda durante el proceso terapéutico. Con niños y adolescentes que aún sean un poco mas tímidos o de pocas palabras, se utilizan, además de la conversación, el dibujo y el juego como herramientas adicionales. Con familias y parejas el proceso es similar, aunque con la diferencia que se aplican otro tipo de técnicas que en la terapia individual. La conversación, el acompañamiento y la escucha es el denominador común entre todos los tratamientos posibles.  "
          }
        />
        <Feature
          icon={<Icon as={MdOutlineGpsFixed} w={8} h={8} opacity="0.7" />}
          title={"Seguimiento"}
          text={
            "Por último, tenemos la etapa de seguimiento que se trata de acompañar al paciente, a la pareja o la familia luego de que se haya resuelto el motivo de consulta. Se trata de unas últimas sesiones donde se conversa sobre los logros alcanzados y se piensan estrategias para la prevención de recaídas. Se les informa a los consultantes que una terapia no soluciona todos los problemas, pero si puede solucionar algunos y que esta experiencia satisfactoria puede ser la base para que la persona, la pareja o la familia puedan resolver sus problemas futuros por sí misma.    "
          }
        />
      </SimpleGrid>
    </Section>
  );
};

export default Modalidad;
