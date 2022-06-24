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
import ya from './1.jpg';
import data from '../AboutMe/data';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const About = () => {

  const [ index, setIndex ] = useState(0);
  const { title, text } = data[index];

  return (
    <Center
    as='section'
    bg='#f7fafc'
    w= '100%'
    id='about-me'
    >
        <Flex 
        w={{base: '90%', md: '80%'}}
        maxW= '1000px'
        mx='auto'
        my='100px'
        align= 'center'
        justify= 'center'
        direction={{base:'column', md:'row'}}
        //   data-aos="fade-up"
        >
        <Image 
        src= {ya}
        w={{base:'90%', sm:'80%' ,md:'60%', xl:'55%'}}
        minH={{base:'400px', md:'600px'}}
        borderRadius= '8px'
                />       
            <Box
            w={{base:'80%',sm:'70%' ,md:'50%'}}
            p={{base:'15px', xl:'20px'}}
            bg= '#ffffff'
            borderRadius= '8px'
            ml= {{base: '0px', md:'-100px'}}
            mt={{base:'-80px', md:'0px'}}
            textAlign='center'
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
                >
                    { title } 
                <Box borderTop='2px' color='rgb(49 151 149)' w='25%' mx='auto' mt={2} />
                </Heading>

                <Text
                mt={5}
                opacity='0.7'
                fontSize={{base: '15x', xl:'18px'}}
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
    </Center>
  )
}

export default About