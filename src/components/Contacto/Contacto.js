import { Text } from "@chakra-ui/react";
import SingleContact from "./SingleContact/SingleContact";
import Section from "../Section/Section";

const Contacto = () => {
  return (
    <Section id="contact-me" title="Contacto">
      <Text
        textAlign="center"
        color="#ffffff"
        p={5}
        fontSize={{ base: "18px", md: "20px" }}
        opacity="0.8"
      >
        Si tenes alguna duda y queres escribirnos, te dejamo tos los medio para
        que te comuniques
      </Text>
      <SingleContact />
    </Section>
  );
};

export default Contacto;
