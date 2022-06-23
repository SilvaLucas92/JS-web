import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { AiOutlineMail, AiOutlineLinkedin } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { IconButton, Text, HStack } from '@chakra-ui/react'     
const SingleContact = () => {
  return (
    <>
      <HStack
        h={{base:'50px', md:'55px', xl:'60px'}}
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
          fontSize={{base:'18px', md:'22px'}}
          >
          </IconButton>
          <Text 
          fontSize={{base:'md', md:'lg'}} 
          color='#767d88' pr='20px'
          > +5411 70447685</Text>
        </HStack>
        <HStack
        h={{base:'50px', md:'55px', xl:'60px'}}
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
          fontSize={{base:'18px', md:'22px'}}
          >
          </IconButton>
          <Text  fontSize={{base:'md', md:'lg'}}  color='#767d88' pr='20px'> Julio.silva@gmail.com</Text>
        </HStack>
        <HStack
        h={{base:'50px', md:'55px', xl:'60px'}}
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
          icon={<AiOutlineLinkedin />}
          color='#767d88'
          fontSize={{base:'18px', md:'22px'}}
          >
          </IconButton>
          <Text 
          color='#767d88' 
          pr='20px'
          fontSize={{base:'md', md:'lg'}} >Julio Silva Linkedin</Text>
        </HStack>
        <HStack
        h={{base:'50px', md:'55px', xl:'60px'}}
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
          fontSize={{base:'18px', md:'22px'}}
          >
          </IconButton>
          <Text 
          color='#767d88' 
          pr='20px'
          fontSize={{base:'md', md:'lg'}} >Direccin de consultorio</Text>
        </HStack>
    </>
  )
}

export default SingleContact