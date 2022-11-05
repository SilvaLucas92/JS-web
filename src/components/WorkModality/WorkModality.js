import { Stack, Flex, SimpleGrid, Text, Icon } from "@chakra-ui/react";
import Section from "../Section/Section";
import { FcFinePrint, FcCollaboration, FcBinoculars } from "react-icons/fc";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        mb={1}
      >
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
    <Section
      id="modalidad"
      title="Modalidad de trabajo"
      backgroundColor="#f7fafc"
    >
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcFinePrint} w={10} h={10} />}
          title={"Evaluacion"}
          text={
            "En esta primera etapa, la finalidad es la obtención de toda la información necesaria sobre el problema objeto de la consulta. Se detallan los factores que han influído en la aparición del conflicto y aquellos que lo mantienen, brindándote Psicoeducación y estableciendo conjuntamente los objetivos del tratamiento. La duración de esta fase es entre 3 y 5 sesiones."
          }
        />
        <Feature
          icon={<Icon as={FcCollaboration} w={10} h={10} />}
          title={"Tratamiento"}
          text={
            "Esta segunda etapa es la más larga, el tratamiento propiamente dicho, cuya duración variará dependiendo de los factores del problema, el ritmo de cambio, la motivación, etc. Aquí es cuando se aplican las técnicas adaptadas a cada problema, dirigidas a alcanzar los objetivos planteados.  Con el fin de lograr un buen entrenamiento, se te brindarán tareas entre sesiones, para afianzar el aprendizaje."
          }
        />
        <Feature
          icon={<Icon as={FcBinoculars} w={10} h={10} />}
          title={"Seguimiento"}
          text={
            "La tercera etapa está orientada a mantener los cambios que has conseguido y prevenir recaídas. El objetivo es que puedas poner en práctica todo lo aprendido y convertirte en tu “propio terapeuta”. Durante esta fase se van espaciando las frecuencias de las sesiones (quincenales, mensuales) y en el momento en que se considera que se han alcanzado los objetivos se te brinda el alta terapéutico."
          }
        />
      </SimpleGrid>
    </Section>
  );
};

export default Modalidad;
