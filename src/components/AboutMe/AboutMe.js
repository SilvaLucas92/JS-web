import React, { useState } from 'react'
import {   
  Flex,
  Heading,
  Text,
  Box,
  Image,
  Center,
  HStack,
  IconButton
  } from '@chakra-ui/react';
import ya from './1.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css'
import data from '../AboutMe/data';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
const AboutMe = () => {
  const [ index, setIndex ] = useState(0);
  const { title, text } = data[index];
  
  return (
          <Box
          as='section'
          bg='#f7fafc'
          id='about-me'
          >
            <Flex 
            w={{base: '90%', md: '80%'}}
            mx='auto'
            py={{base:'140px',sm: '160px', md:'180px', xl:'200px'}}
            align= 'flex-start'
            justify= 'center'
            direction={{base:'column', xl:'row'}}
            border='1px red solid'
            px={{base:'10px', xl:'20px'}}
            >
              <Image 
              src= {ya}
              w={{base:'350px', sm:'500px', md:'550px'}}
              mx='auto'
              />      
              <Box 
              h='100%'
              >
              <Flex 
              align='center'
              justify='center' 
              w={{base:'100%', xl:'100%'}}
              >
                <Heading 
                as='h2'
                color='#2d3748' 
                textAlign='center' 
                letterSpacing=' -0.015em'
                lineHeight= '1.24'
                fontSize={{
                base: "2xl",
                md: "3xl",
                lg: '4xl'
                }}
                fontWeight='bold'
                mt={{base:15, xl:'0'}}
                >
                   { title }  
                <Box borderTop='2px' color='rgb(49 151 149)' w='50%' mx='auto' mt={2} />
                </Heading>
              </Flex>
              <Text
              p={5}
              opacity='0.7'
              fontSize={18}
              textAlign='center' 
              >
                { text }
              </Text>
              <HStack pt={5} justify='center'>
                <IconButton 
                isRound='true' 
                onClick={() => index === 0? setIndex(data.length - 1) : setIndex(index - 1)} 
                icon={<AiOutlineArrowLeft />} 
                backgroundColor='#ffffff'
                colorScheme='teal' 
                variant='outline'
                />
                <IconButton 
                isRound='true' 
                onClick={() => index === (data.length - 1)  ? setIndex(0) : setIndex(index + 1)} 
                icon={<AiOutlineArrowRight />} 
                backgroundColor='#ffffff'
                colorScheme='teal' 
                variant='outline'  
                />
                </HStack>  
              </Box>
            </Flex>
          </Box>
  )
}

export default AboutMe