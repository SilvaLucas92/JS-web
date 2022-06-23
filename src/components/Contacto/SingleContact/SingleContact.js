import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { AiOutlineMail, AiOutlineLinkedin } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { IconButton, Text, HStack } from '@chakra-ui/react'     
const SingleContact = () => {
  return (
    <>
      <HStack
      h={{base:'50px', sm:'55px', xl:'60px'}}
      my={5}
      mx='auto'
      p={5}
      borderRadius={5}
      justify='space-between'
      backgroundColor='#ffffff'
      boxShadow='lg'
      w='full'
      >
        <IconButton
        as='a'
        href='https://wa.link/9fq5vs'
        bg='#ffffff'
        target='_blank'
        icon={<BsWhatsapp />}
        color='#767d88'
        fontSize={{base:'20px', md:'25px'}}
        lineHeight= '1.24'
        fontWeight='bold'
        isRound='true'
        />
        <Text 
        fontSize={{base:'sm', sm: 'md', md:'lg'}} 
        color='#767d88' 
        >
          +5411 70447685
        </Text>
        </HStack>
        <HStack
        h={{base:'50px', sm:'55px', xl:'60px'}}
        my={5}
        mx='auto'
        p={5}
        borderRadius={5}
        justify='space-between'
        backgroundColor='#ffffff'
        boxShadow='lg'
        w='full'
        >
          <IconButton
          as='a'
          href='mailto:l.silva8692@gmail.com'
          bg='#ffffff'
          icon={<AiOutlineMail />}
          color='#767d88'
          fontSize={{base:'20px', md:'25px'}}
          lineHeight= '1.24'
          fontWeight='bold'
          isRound='true'
          />
          <Text  
          fontSize={{base:'sm', sm: 'md', md:'lg'}} 
          color='#767d88' 
          > 
            Julio.silva@gmail.com
          </Text>
        </HStack>
        <HStack
        h={{base:'50px', sm:'55px', xl:'60px'}}
        my={5}
        mx='auto'
        p={5}
        borderRadius={5}
        justify='space-between'
        backgroundColor='#ffffff'
        boxShadow='lg'
        w='full'
        >
          <IconButton
          bg='#ffffff'
          as='a'
          href='https://goo.gl/maps/826GDXv1k4fcTtor7'
          icon={<GoLocation />}
          color='#767d88'
          fontSize={{base:'20px', md:'25px'}}
          lineHeight= '1.24'
          fontWeight='bold'
          isRound='true'
          />
          <Text 
          fontSize={{base:'sm', sm: 'md', md:'lg'}} 
          color='#767d88' 
          >
            Direccion de consultorio
          </Text>
        </HStack>
    </>
  )
}

export default SingleContact