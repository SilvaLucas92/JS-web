import React from 'react';
import { BsWhatsapp, BsLinkedin } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai'
import { IconButton, Text, HStack } from '@chakra-ui/react'     
const SingleContact = () => {
  return (
    <>
      <HStack
        h={50}
        my={5}
        w='90%'
        mx='auto'
        border='1px'
        borderColor='#f1f1f1'
        borderRadius={5}
        justify='space-between'
        backgroundColor='#ffffff'
        boxShadow='lg'
        >
          <IconButton
          bg='#ffffff'
          icon={<BsWhatsapp />}
          color='#767d88'
          size='lg'
          >
          </IconButton>
          <Text fontSize={{base:'sm', md:'md'}} color='#767d88' pr='20px'> +5411 70447685</Text>
        </HStack>
        <HStack
        mx='auto'
        h={50}
        my={5}
        w='90%'
        border='1px'
        borderColor='#f1f1f1'
        borderRadius={5}
        justify='space-between'
        backgroundColor='#ffffff'
        boxShadow='lg'
        >
          <IconButton
          bg='#ffffff'
          icon={<AiOutlineMail />}
          color='#767d88'
          size='lg'>
          </IconButton>
          <Text fontSize={{base:'sm', md:'md'}} color='#767d88' pr='20px'> Julio.silva@gmail.com</Text>
        </HStack>
        <HStack
        h={50}
        mx='auto'
        my={5}
        w='90%'
        border='1px'
        borderColor='#f1f1f1'
        borderRadius={5}
        justify='space-between'
        backgroundColor='#ffffff'
        boxShadow='lg'
        >
          <IconButton
          bg='#ffffff'
          icon={<BsLinkedin />}
          color='#767d88'
          size='lg'>
          </IconButton>
          <Text 
          color='#767d88' 
          pr='20px'
          fontSize={{base:'sm', md:'md'}}>Julio Silva Linkedin</Text>
        </HStack>
    </>
  )
}

export default SingleContact