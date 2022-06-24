import React from 'react'
import {   
    Flex,
    Heading,
    Text,
    Box,
    Image,
    Center
    } from '@chakra-ui/react';
import terapia from './terapia.jpg';
import ya from './1.jpg'
const About = () => {
  return (
    <Center
    as='section'
    bg='#f7fafc'
    w= '100%'
    id='about-me'
    >
      <Flex 
        w={{base: '90%', md: '80%'}}
        maxW= '1000px'
        mx='auto'
        // mt='100px'
        // mb='50px'
        my='100px'
        align= 'center'
        justify= 'center'
        direction={{base:'column', md:'row'}}
    //   data-aos="fade-up"
      >
        {/* <Box
        w={{base:'90%', sm:'80%' ,md:'70%', xl:'55%'}}
        h={{base:'400px', md:'600px'}}
        > */}
        <Image 
        src= {ya}
        // h='100%'
        // w='100%'
        w={{base:'90%', sm:'80%' ,md:'70%', xl:'55%'}}
        minH={{base:'400px', md:'600px'}}
        borderRadius= '8px'
                />       
        {/* </Box> */}
        <Box
        w={{base:'80%',sm:'70%' ,md:'50%'}}
        p={{base:'15px', xl:'20px'}}
        bg= '#ffffff'
        borderRadius= '8px'
        ml= {{base: '0px', md:'-100px'}}
        mt={{base:'-80px', md:'0px'}}
        textAlign='center'
        >
                <Heading
                as='h2'
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
                >
                   Conoceme 
                <Box borderTop='2px' color='rgb(49 151 149)' w='25%' mx='auto' mt={2} />
                </Heading>

              <Text
                mt={5}
                opacity='0.7'
                fontSize={{base: '15x', xl:'18px'}}
              >
                Psicologo egresado de la UBA - especializacion en psicoterapia sistemica. Movilizado por deseo de acompañar a las personas a lograr una mejor calidad de vida, atiendo en centros de salud integrales y en mi consultorio privado. me gusta leer, escribir y el cine. Convencido de que siempre en el problema se encuentra la solucion.
                Psicólogo egresado en la Universidad de Buenos Aires (UBA) – Especialización en Psicoterapia Sistémica. 
                Trabajo en APS (Atención Primaria de Salud) en Centros de Salud Integral, formando parte de equipos interdisciplinarios con Médicos familiares, Pediatras, Cardiólogos, Enfermeras, Ginecólogas, Obstetras, Trabajadoras Sociales y Psiquiatras. 
              </Text>    
              </Box>        
      </Flex>
    </Center>
  )
}

export default About