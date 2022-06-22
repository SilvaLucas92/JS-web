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
  }, [])  
  return (
    <Box
    bg='rgb(49 151 149)'
    id='contact-me'>
      <Flex 
      w={{base: '90%', md: '80%', lg:'70%'}}
      mx='auto' 
      justify='center'
      direction='column'
      p={5}
      h='120vh'
      data-aos="zoom-in"
      >
        <Flex align={'center'} justify='center' mt={8}>
          <Heading 
          color='#ffffff'
          textAlign='center' 
          fontSize={{
                    base: "2xl",
                    md: "3xl",
                    lg: '4xl'
                    }}
          letter-spacing=' -0.015em'
          line-height= '1.24'
          font-size= '2rem'
          fontWeight='bold'
          mt={{base:'100px', md:'5px'}}
          >
            Contacto 
          </Heading>
        </Flex>
        <Text textAlign='center' color='#ffffff' my={5}>Si tenes alguna duda y queres escribirnos, te dejamo tos los medio para que  te comuniques</Text>
        <SingleContact />           
      </Flex>
      <Center p={10}>
        <IconButton
        icon= {<AiOutlineArrowUp  />}
        onClick={scrollToTop}
        backgroundColor='#ffffff'
        />
      </Center>
    </Box>
  )
}

export default Contacto