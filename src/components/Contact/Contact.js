import {
  Stack,
  Flex,
  SimpleGrid,
  Text,
  IconButton,
  Tooltip,
  useClipboard,
} from "@chakra-ui/react";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import Section from "../Section/Section";
const Feature = ({ icon }) => {
  return (
    <Stack align="center">
      <Flex align={"center"} justify={"center"} rounded={"full"} mb={1}>
        {icon}
      </Flex>
    </Stack>
  );
};

const Contact = () => {
  const { hasCopied, onCopy } = useClipboard("example@example.com");
  return (
    <Section id="contact-me" title="Contacto" backgroundColor="#f7fafc">
      <Text
        textAlign="center"
        fontSize={{ base: "18px", md: "20px" }}
        opacity="0.8"
        mb={10}
      >
        Si tenes alguna duda y queres escribirnos, te dejamo tos los medio para
        que te comuniques
      </Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={
            <Tooltip label={"Send a messagge"} hasArrow>
              <IconButton
                as="a"
                aria-label="whatsapp"
                href="https://wa.link/9fq5vs"
                variant="ghost"
                size="lg"
                fontSize="4xl"
                icon={<BsWhatsapp />}
                _hover={{
                  bg: "#4FD1C5",
                }}
                isRound
              />
            </Tooltip>
          }
        />
        <Feature
          icon={
            <Tooltip
              label={hasCopied ? "Email Copied!" : "Copy Email"}
              closeOnClick={false}
              hasArrow
            >
              <IconButton
                aria-label="email"
                variant="ghost"
                size="lg"
                fontSize="4xl"
                icon={<AiOutlineMail />}
                _hover={{
                  bg: "#4FD1C5",
                }}
                onClick={onCopy}
                isRound
              />
            </Tooltip>
          }
        />
        <Feature
          icon={
            <Tooltip label={"See where am I!"} hasArrow>
              <IconButton
                aria-label="gps"
                as="a"
                href="https://goo.gl/maps/826GDXv1k4fcTtor7"
                variant="ghost"
                size="lg"
                fontSize="4xl"
                icon={<GoLocation />}
                _hover={{
                  bg: "#4FD1C5",
                }}
                isRound
              />
            </Tooltip>
          }
        />
      </SimpleGrid>
    </Section>
  );
};

export default Contact;
