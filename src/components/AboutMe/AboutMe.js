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
    bg='#f7fafc'
    id='about-me'
    >
            <Flex 
            h={{base: '100%', md: '120vh'}}
            w={{base: '90%', md: '80%', lg:'70%'}}
            mx='auto' 
            p={5}
            direction={{base:'column', md:'row'}}
            justify='center'
            align='center'
            data-aos="zoom-in"
            >
                <Box
                mx='auto'
                mt={{base:'100px', md:'50px'}}
                // data-Aos='fade-right'
                >
                    <Image 
                    src={person}
                    boxSize='350px'/>
                </Box>   
                <Box 
                textAlign='center' 
                w={{base: '100%', md: '50%'}}
                // data-Aos='fade-left'
                >
                    <Flex 
                    align={'center'} 
                    justify='center' 
                    my={4}

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
                    mb={{base: '5px', md:'1px'}}
                    p={5}
                    >
                    Psicologo egresado de la UBA - especializacion en psicoterapia sistemica. Movilizado por deseo de acompañar a las personas a lograr una mejor calidad de vida, atiendo en centros de salud integrales y en mi consultorio privado. me gusta leer, escribir y el cine. Convencido de que siempre en el problema se encuentra la solucion</Text>
                </Box>
            </Flex>
    </Box>
  )
}

export default AboutMe