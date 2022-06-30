import React, { useEffect } from 'react'
import {   
    Heading,
    Text,
    Box
    } from '@chakra-ui/react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { TriangleDownIcon } from '@chakra-ui/icons';

const Service = () => {

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
        data-aos= 'fade-in'
        >   
            <TriangleDownIcon
            color='rgb(49 151 149)' />
            <Heading
            as='h3'
            color='#2d3748'
            fontWeight= 'semibold'
            mt={8}
            mb={4}
            fontSize={[20, 22, , 24]}
            >
                Fobias
            </Heading>
            <Text
            fontSize={{base:'18px', md:'20px'}}            
            opacity= '0.7'
            >
                Customize any part of our components to match your design needs.
            </Text>
        </Box>  
        )
    }

export default Service;
