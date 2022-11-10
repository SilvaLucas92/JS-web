import React from "react";
import Section from "../Section/Section";
import EachService from "./components/EachService";
const data = [
    {
        id: 1,
        title: 'Niños y Adolecentes',
        description: 'Dificultades escolares, problemas en la conducta, timidez, bullying, miedos/fobias, dificultades en el control de esfinteres, trastornos en la conducta alimentaria, trastornos en el sueño.'
    },
    {
        id: 2,
        title: 'Adultos',
        description: 'fobia, llanto, problemas de socializacion, fobia, llanto, problemas de socializacion'
    },
    {
        id: 3,
        title: 'Familia',
        description: 'fobia, llanto, problemas de socializacion, fobia, llanto, problemas de socializacion'
    },
    {
        id: 4,
        title: 'Parejas',
        description: 'fobia, llanto, problemas de socializacion, fobia, llanto, problemas de socializacion'
    }
  ]
  const data2 = [
    {
        id: 1,
        title: 'Niños y Adolecentes',
        description: 'Dificultades escolares, problemas en la conducta, timidez, bullying, miedos/fobias, dificultades en el control de esfinteres, trastornos en la conducta alimentaria, trastornos en el sueño.'
    },
    {
        id: 2,
        title: 'Adultos',
        description: 'fobia, llanto, problemas de socializacion, fobia, llanto, problemas de socializacion'
    }]
function TherapyServices() {
  return (
    <Section id="services" title="Servicios">
        <EachService title='Atencion Clinica' data={data}/>
        <EachService title='Revisiones' data={data2}/>
    </Section>
  );
}

export default TherapyServices;
