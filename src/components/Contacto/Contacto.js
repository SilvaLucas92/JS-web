import { Heading, IconButton, Flex, Text, Box, HStack, Center } from '@chakra-ui/react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsWhatsapp, BsLinkedin } from 'react-icons/bs'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { animateScroll } from 'react-scroll';
import React from 'react'

const Contacto = () => {
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  }
  return (
    <Box
    bg='#f7fafc'
    id='contact-me'>
      <Flex 
      w='90%' 
      mx='auto' 
      justify='center'
      direction='column'
      p={5}
      h='130vh'
      >
        <Flex align={'center'} justify='center' my={4}>
          <Heading 
          color='#2d3748' 
          textAlign='center' 
          fontSize='2xl'
          letter-spacing=' -0.015em'
          line-height= '1.24'
          font-size= '2rem'
          fontWeight='bold' 
          >
            Contacto 
          </Heading>
        </Flex>
        <Text textAlign='center' color='#767d88' mb={{base: '5px', md:'1px'}}>Si tenes alguna duda y queres escribirnos, te dejamo tos los medio para que  te comuniques</Text>
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
          color='#767d88'>
          </IconButton>
          <Text color='#767d88' pr='20px'> +5411 70447685</Text>
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
          color='#767d88'>
          </IconButton>
          <Text color='#767d88' pr='20px'> Julio.silva@gmail.com</Text>
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
          color='#767d88'>
          </IconButton>
          <Text color='#767d88' pr='20px'>Julio Silva Linkedin</Text>
        </HStack>
      </Flex>
      <Center pb={10}>
        <IconButton
        icon= {<AiOutlineArrowUp />}
        onClick={scrollToTop}/>
      </Center>
    </Box>
  )
}

export default Contacto