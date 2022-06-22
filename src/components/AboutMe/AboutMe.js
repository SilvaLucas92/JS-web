import React, { useEffect } from 'react'
import {   
    Flex,
    Heading,
    Text,
    Box,
    Image
    } from '@chakra-ui/react';
import person from './person.jpg'
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
            h={{base: '100%', md: '120vh'}}
            w={{base: '90%', md: '80%', lg:'70%'}}
            mx='auto' 
            p={5}
            direction={{base:'column', md:'row'}}
            data-aos="zoom-in"
            border='1px'
            borderColor='red'
            alignItems='center'
            pt={{base:'100px', md:'120px'}}
            >
                <Box
                textAlign='center' 
                w={{md: '40%'}}
                h='100%'
                alignSelf='center'
                mx='auto'
                >
                    <Image 
                    src={person}
                    boxSize={{base: '350px', md: '400px'}}

                    />
                </Box>   
                <Box 
                textAlign='center' 
                w={{base: '100%', md: '60%'}}
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
                        letter-spacing=' -0.015em'
                        line-height= '1.24'
                        fontSize={{
                        base: "2xl",
                        md: "3xl",
                        lg: '4xl'
                        }}
                        fontWeight='bold' 
                        >
                            Conoceme 
                        </Heading>
                    </Flex>
                    <Text
                    color='#767d88' 
                    p={5}
                    fontSize={{base: 'lg', md:'lg', xl:'xl'}}
                    >
                    Psicologo egresado de la UBA - especializacion en psicoterapia sistemica. Movilizado por deseo de acompañar a las personas a lograr una mejor calidad de vida, atiendo en centros de salud integrales y en mi consultorio privado. me gusta leer, escribir y el cine. Convencido de que siempre en el problema se encuentra la solucion</Text>
                </Box>
            </Flex>
    </Box>
  )
}

export default AboutMe