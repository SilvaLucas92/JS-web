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
      w={{base: '90%', md: '80%'}}
      mx='auto' 
      justify='center'
      direction='column'
      p={5}
      h={{base: '100%', md: '120vh'}}
      // data-aos="zoom-in"
      border='1px'
      borderColor='red'
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
          letterSpacing=' -0.015em'
          lineHeight= '1.24'
          fontWeight='bold'
          mt={{base:'100px', md:'5px'}}
          >
            Contacto
            <Box borderTop='2px' color='#ffffff' w='50%' mx='auto' mt={2} />
          </Heading>
        </Flex>
        <Text 
        textAlign='center' 
        color='#ffffff' 
        my={5}
        fontSize={{base: 'lg', md:'xl'}}
        mx='auto'
        >Si tenes alguna duda y queres escribirnos, te dejamo tos los medio para que  te comuniques</Text>
        <SingleContact />           
      </Flex>
      <Center p={10}>
        <IconButton
        icon= {<AiOutlineArrowUp  />}
        onClick={scrollToTop}
        backgroundColor='#ffffff'
        colorScheme='teal' 
        variant='outline'
        />
      </Center>
    </Box>
  )
}

export default Contacto