import React, { useEffect } from 'react'
import {   
    Heading,
    Text,
    Box,
    } from '@chakra-ui/react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { TriangleDownIcon } from '@chakra-ui/icons';

const Service = ({ oneData }) => {
    useEffect(() => {
        Aos.init({ duration:2000 })
      }, [])
  return (
            <Box
            as='article'
            textAlign='center'
            borderRadius={12}
            p={15}
            mx='auto'
            backgroundColor='#ffffff'
            boxShadow='lg'
            w='100%'
            // data-Aos={oneData.id % 2 === 0 ? 'fade-left' : 'fade-right'}
            // data-aos="zoom-in"
            >   
                <TriangleDownIcon
                color='rgb(49 151 149)' />
                <Heading
                as='h3'
                color='#2d3748'
                fontWeight= 'semibold'
                // lineHeight= '1.2'
                mt={6}
                mb={3}
                fontSize={20}
                >
                    Fobias
                </Heading>
                <Text
                fontSize={18}
                opacity= '0.7'
                >
                    Customize any part of our components to match your design needs.
                </Text>
            </Box>  
  )
}

export default Service


{/* <Heading 
fontSize='2xl'
mb={2}
color='#898f98'
>
    { oneData.title }
</Heading>
<Text 
color='#818792'
fontSize={{base: 'md', md:'xl'}}
>
    { oneData.description } 
</Text> */}