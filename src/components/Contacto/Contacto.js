import { IconButton, Text, Center } from "@chakra-ui/react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { animateScroll } from "react-scroll";
import SingleContact from "./SingleContact/SingleContact";
import Form from "./Form/Form";
import Section from "../Section/Section";

const Contacto = () => {
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

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
      {/* <Form /> */}
      <Center p={5}>
        <IconButton
          icon={<AiOutlineArrowUp />}
          onClick={scrollToTop}
          backgroundColor="#ffffff"
          colorScheme="teal"
          variant="outline"
          fontSize="25px"
          isRound="true"
        />
      </Center>
    </Section>
  );
};

export default Contacto;
