import React, { useEffect } from 'react'
import {   
    Flex,
    Heading,
    Text,
    Box,
    Image
    } from '@chakra-ui/react';
import ya from './1.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css'
const AboutMe = () => {

  useEffect(() => {
    Aos.init({ duration:2000 })
  }, [])
  
  return (
    <Box
    as='section'
    bg='#f7fafc'
    id='about-me'
    >
            <Flex 
            h={{base: '100%'}}
            w={{base: '90%', md: '80%'}}
            mx='auto' 
            p={5}
            direction={{base:'column'}}
            // data-aos="zoom-in"
            border='1px'
            borderColor='red'
            align='center'
            justify='center'
            pt={{base:'100px', md:'120px'}}
            >
                <Box
                // w={{md: '50%'}}
                h='100%'
                mx='auto'
                alignSelf='flex-start'
                >
                  
                    <Image 
                    src= {ya}
                    boxSize={{base: '350px', md: '400px'}}
                    borderRadius='50%'
                    />

                </Box>   
                <Box 
                // textAlign='center' 
                // w={{base: '100%', md: '50%'}}
                h='100%'
                alignSelf='center'
                >
                    <Flex 
                    align='center'
                    justify='center' 
                    >
                        <Heading 
                        color='#2d3748' 
                        textAlign='center' 
                        letterSpacing=' -0.015em'
                        lineHeight= '1.24'
                        fontSize={{
                        base: "2xl",
                        md: "3xl",
                        lg: '4xl'
                        }}
                        fontWeight='bold'
                        mt={{base: '15px', md:'0'}}
                        >
                            Conoceme 
                            <Box borderTop='2px' color='rgb(49 151 149)' w='50%' mx='auto' mt={2} />
                        </Heading>
                    </Flex>
                    <Text
                    color='#767d88' 
                    p={5}
                    fontSize={{base: 'lg', md:'lg', xl:'xl'}}
                    >
                      Psicologo egresado de la UBA - especializacion en psicoterapia sistemica. Movilizado por deseo de acompañar a las personas a lograr una mejor calidad de vida, atiendo en centros de salud integrales y en mi consultorio privado. me gusta leer, escribir y el cine. Convencido de que siempre en el problema se encuentra la solucion.
                      Psicólogo egresado en la Universidad de Buenos Aires (UBA) – Especialización en Psicoterapia Sistémica. 
                      Trabajo en APS (Atención Primaria de Salud) en Centros de Salud Integral, formando parte de equipos interdisciplinarios con Médicos familiares, Pediatras, Cardiólogos, Enfermeras, Ginecólogas, Obstetras, Trabajadoras Sociales y Psiquiatras. 
                    </Text>
                </Box>
            </Flex>
    </Box>
  )
}

export default AboutMe