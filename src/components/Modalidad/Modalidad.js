import { Stack } from "@chakra-ui/react";
import Section from "../Section/Section";
import Mod from "./Mod/Mod";
const data = [
    {
        id:1,
        title: 'Evaluacion',
        description:'En esta primera etapa, la finalidad es la obtención de toda la información necesaria sobre el problema objeto de la consulta. Se detallan los factores que han influído en la aparición del conflicto y aquellos que lo mantienen, brindándote Psicoeducación y estableciendo conjuntamente los objetivos del tratamiento. La duración de esta fase es entre 3 y 5 sesiones.'
    },
    {
        id:2,
        title: 'Tratamiento',
        description:'Esta segunda etapa es la más larga, el tratamiento propiamente dicho, cuya duración variará dependiendo de los factores del problema, el ritmo de cambio, la motivación, etc. Aquí es cuando se aplican las técnicas adaptadas a cada problema, dirigidas a alcanzar los objetivos planteados.  Con el fin de lograr un buen entrenamiento, se te brindarán tareas entre sesiones, para afianzar el aprendizaje.'
    },
    {
        id:3,
        title: 'Seguimiento',
        description:' La tercera etapa está orientada a mantener los cambios que has conseguido y prevenir recaídas. El objetivo es que puedas poner en práctica todo lo aprendido y convertirte en tu “propio terapeuta”. Durante esta fase se van espaciando las frecuencias de las sesiones (quincenales, mensuales) y en el momento en que se considera que se han alcanzado los objetivos se te brinda el alta terapéutico.'
    },

]

const Modalidad = () => {
  return (
    <Section id="modalidad" title="Modalidad de trabajo">
      <Stack
        spacing={{
          base: 10,
          md: 0,
        }}
        display={{
          md: "grid",
        }}
        gridTemplateColumns={{
          md: "repeat(3,1fr)",
        }}
        gridColumnGap={{
          md: 8,
        }}
        gridRowGap={{
          md: 10,
        }}
        mt={10}
      >
        {data.map((oneData, i) => {
          return <Mod key={i} oneData={oneData} />;
        })}
      </Stack>
    </Section>
  );
};

export default Modalidad;
