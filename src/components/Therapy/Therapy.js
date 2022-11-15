import { Text } from "@chakra-ui/react";
import Section from "../Section/Section";
function Therapy() {
  return (
    <Section
      id="terapia"
      title="¿Qué es la Terapia Sistémica?"
    >
      <Text
        p={4}
        opacity="0.7"
        fontSize={{ base: "18px", md: "20px" }}
        textAlign="center"
        letterSpacing="wider"
      >
        La terapia sistémica es un enfoque psicoterapéutico cuyo objeto de
        estudio y campo de intervención son las interacciones que se dan en todo
        tipo de vínculos: Familia, Pareja, Amistad, Trabajo, Estudio o cualquier
        otra relación o sistema donde circule algún tipo de intercambio. Las
        técnicas utilizadas están orientadas a la solución de problemas en el
        menor tiempo posible, teniendo como objetivo, el cambio terapéutico.
      </Text>
    </Section>
  );
}

export default Therapy;
