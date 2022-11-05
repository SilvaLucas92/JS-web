import { Text } from "@chakra-ui/react";
import Section from "../Section/Section";
function Therapy() {
    return (
        <Section id="terapia" title="¿Qué es la terapia sistémica?">
        <Text
            p={2}
            opacity="0.7"
            fontSize={{ base: "18px", md: "20px" }}
            textAlign="center"
        >
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
        </Text>
        </Section>
    );
}

export default Therapy;
