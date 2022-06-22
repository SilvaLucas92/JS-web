import React, { useEffect } from 'react'
import {   
    Heading,
    Text,
    Box,
    } from '@chakra-ui/react';
import Aos from 'aos';
import 'aos/dist/aos.css'
const Service = ({ oneData }) => {
    useEffect(() => {
        Aos.init({ duration:2000 })
      }, [])
  return (
            <Box
            textAlign='center'
            borderRadius={12}
            p={2}
            mx='auto'
            backgroundColor='#ffffff'
            boxShadow='lg'
            w='100%'
            data-Aos={oneData.id % 2 === 0 ? 'fade-left' : 'fade-right'}
            >
                <Heading 
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
                </Text>
            </Box>  
  )
}

export default Service