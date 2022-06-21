import React from 'react'
import {   
    Flex,
    Heading,
    Text,
    Box,
    Image
    } from '@chakra-ui/react';
import person from './person.jpg'
const AboutMe = () => {
  return (
    <Box
    bg='#f7fafc'
    id='about-me'
    >
        <Flex 
        h={{base:'130vh', md:'130vh'}}
        w='90%' 
        mx='auto' 
        p={5}
        direction={{base:'column', md:'row'}}
        justify='center'
        align='center'
        >
            <Box
            mx='auto'
            >
                <Image 
                src={person}
                boxSize='350px'
                />
            </Box>    
            <Box 
            textAlign='center' 
            w={{base: '100%', md: '50%'}} 
            >
                <Flex 
                align={'center'} 
                justify='center' 
                my={4}
                >
                    <Heading 
                    color='#2d3748' 
                    textAlign='center' 
                    fontSize='2xl'
                    letter-spacing=' -0.015em'
                    line-height= '1.24'
                    font-size= '2rem'
                    fontWeight='bold' 
                    >
                        Conoceme 
                    </Heading>
                </Flex>
                <Text 
                color='#767d88' 
                mb={{base: '5px', md:'1px'}}
                >
                Psicologo egresado de la UBA - especializacion en psicoterapia sistemica. Movilizado por deseo de acompañar a las personas a lograr una mejor calidad de vida, atiendo en centros de salud integrales y en mi consultorio privado. me gusta leer, escribir y el cine. Convencido de que siempre en el problema se encuentra la solucion</Text>
            </Box>
        </Flex>
    </Box>
  )
}

export default AboutMe