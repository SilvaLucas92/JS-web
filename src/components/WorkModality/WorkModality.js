import { Stack, Flex, SimpleGrid, Text, Icon, Heading } from "@chakra-ui/react";
import Section from "../Section/Section";
import { BsSearch } from "react-icons/bs";
import { MdOutlineGpsFixed } from "react-icons/md";
import { RiWechatLine } from "react-icons/ri";
const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex w={"full"} align={"center"} justify={"center"} mb={1}>
        {icon}
      </Flex>
      <Text
        as="h3"
        color="#2d3748"
        fontWeight="semibold"
        my={4}
        fontSize={[20, 22, 24]}
      >
        {title}
      </Text>
      <Text fontSize={{ base: "18px", md: "20px" }} opacity="0.7">
        {text}
      </Text>
    </Stack>
  );
};

const Modalidad = () => {
  return (
    <>
      <Heading
        as="h3"
        color="#2d3748"
        textAlign="center"
        mb={10}
        fontSize={{
          base: "2xl",
          sm: "3xl",
          lg: "4xl",
        }}
      >
        Modalidad de trabajo
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} textAlign="center">
        <Feature
          icon={<Icon as={BsSearch} w={8} h={8} opacity="0.7" />}
          title={"Evaluacion"}
          text={
            "En esta primera etapa, la finalidad es la obtención de toda la información necesaria sobre el problema objeto de la consulta. Se detallan los factores que han influído en la aparición del conflicto y aquellos que lo mantienen, brindándote Psicoeducación y estableciendo conjuntamente los objetivos del tratamiento. La duración de esta fase es entre 3 y 5 sesiones."
          }
        />
        <Feature
          icon={<Icon as={RiWechatLine} w={8} h={8} opacity="0.7" />}
          title={"Tratamiento"}
          text={
            "Esta segunda etapa es la más larga, el tratamiento propiamente dicho, cuya duración variará dependiendo de los factores del problema, el ritmo de cambio, la motivación, etc. Aquí es cuando se aplican las técnicas adaptadas a cada problema, dirigidas a alcanzar los objetivos planteados.  Con el fin de lograr un buen entrenamiento, se te brindarán tareas entre sesiones, para afianzar el aprendizaje."
          }
        />
        <Feature
          icon={<Icon as={MdOutlineGpsFixed} w={8} h={8} opacity="0.7" />}
          title={"Seguimiento"}
          text={
            "La tercera etapa está orientada a mantener los cambios que has conseguido y prevenir recaídas. El objetivo es que puedas poner en práctica todo lo aprendido y convertirte en tu “propio terapeuta”. Durante esta fase se van espaciando las frecuencias de las sesiones (quincenales, mensuales) y en el momento en que se considera que se han alcanzado los objetivos se te brinda el alta terapéutico."
          }
        />
      </SimpleGrid>
    </>
  );
};

export default Modalidad;
