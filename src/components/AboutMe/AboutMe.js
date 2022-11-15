import { Text, Image, Center } from "@chakra-ui/react";
import Section from "../Section/Section";
import julio from './julio.jpeg'
const AboutMe = () => {
  return (
    <Section
      title='Sobre mí'
      id="about-me"
      bg="#f7fafc"
    >
      <Center>
        <Image
          borderRadius="full"
          boxSize={{base:"150px", md:'200px'}}
          src={julio}
          alt="Julio S. Silva"
          align="center"
        />
      </Center>
      <Text
        p={4}
        opacity="0.7"
        fontSize={{ base: "18px", md: "20px" }}
        textAlign="center"
        letterSpacing="wider"
      >
        Movilizado por deseo de acompañar a las personas a lograr una mejor
        calidad de vida,
        atiendo en centros de salud integrales y en mi
        consultorio privado.<br></br>
        Me gusta leer, escribir y el cine.<br></br>
        Convencido de que siempre en el problema, se encuentra la solución.
      </Text>
    </Section>
  );
};

export default AboutMe;
