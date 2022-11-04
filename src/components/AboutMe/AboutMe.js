import { Text, Image, Center } from "@chakra-ui/react";
import Section from "../Section/Section";
const AboutMe = () => {
  return (
    <Section
      title='Sobre mí'
      id="about-me"
      backgroundColor="#f7fafc"
    >
      <Center>
        <Image
          borderRadius="full"
          boxSize={{base:"150px", md:'200px'}}
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
          align="center"
        />
      </Center>
      <Text
        p={2}
        opacity="0.7"
        fontSize={{ base: "18px", md: "20px" }}
        textAlign="center"
      >
        Movilizado por deseo de acompañar a las personas a lograr una mejor
        calidad de vida,<br></br>
        atiendo en centros de salud integrales y en mi
        consultorio privado.<br></br>
        Me gusta leer, escribir y el cine.<br></br>
        Convencido de que siempre en el problema, se encuentra la solución.
      </Text>
    </Section>
  );
};

export default AboutMe;
