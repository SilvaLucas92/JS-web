import { Heading, IconButton, Flex, Text, Box, Center } from '@chakra-ui/react'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { animateScroll } from 'react-scroll';
import React, { useEffect } from 'react';
import SingleContact from './SingleContact/SingleContact';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Contacto = () => {

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  }
  useEffect(() => {
    Aos.init({ duration:2000 })
  }, []);

  return (
    <Box
    as='section'
    bg='rgb(49 151 149)'
    id='contact-me'>
      <Flex 
      w={{base: '90%', md: '80%'}}
      mx='auto' 
      justify='center'
      direction='column'
      p={5}
      h={{base: '100%', md: '120vh'}}
      data-aos="fade-up"
      py={{base:'100px', md:'120px'}}
      >
        <Flex 
        align='center' 
        justify='center'
        >
          <Heading
          as='h2'
          color='#ffffff'
          textAlign='center' 
          fontSize={{
          base: "2xl",
          md: "3xl",
          lg: '4xl'
          }}
          letterSpacing=' -0.015em'
          lineHeight= '1.24'
          fontWeight='bold'
          mb={5}
          >
            Contacto
          <Box borderTop='2px' color='#ffffff' w='50%' mx='auto' mt={2} />
          </Heading>
        </Flex>
        <Text 
        textAlign='center' 
        color='#ffffff' 
        p={5}
        fontSize={18} 
        opacity='0.8'
        >
          Si tenes alguna duda y queres escribirnos, te dejamo tos los medio para que  te comuniques
        </Text>
        <SingleContact />           
      </Flex>
      <Center
      p={5}
      >
        <IconButton
        icon= {<AiOutlineArrowUp  />}
        onClick={scrollToTop}
        backgroundColor='#ffffff'
        colorScheme='teal' 
        variant='outline'
        fontSize='25px'
        isRound='true'
        />
      </Center>
    </Box>
  )
}

export default Contacto