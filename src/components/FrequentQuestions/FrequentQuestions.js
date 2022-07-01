import { Box, VStack, Heading } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import data from './data'
import OneQuestion from './OneQuestion/OneQuestion'
import Aos from 'aos';
import 'aos/dist/aos.css';

const FrequentQuestions = () => {
    
    useEffect(() => {
        Aos.init({ duration:2000 })
      }, []);

  return (
    <Box
    id='frequentQuestions'
    bg='#f7fafc'
    >
        <Box

        w={{base: '90%', md: '80%'}}
        mx='auto' 
        py={{base:'140px',sm: '160px', md:'180px', xl:'200px'}}
        data-aos="fade-up"
        >
            <Heading
            as='h2'
            color='#2d3748' 
            textAlign='center' 
            fontSize={{
            base: "2xl",
            md: "3xl",
            lg: '4xl'
            }}
            letterSpacing=' -0.015em'
            lineHeight= '1.24'
            fontWeight='bold'
            mb={10}
            >
                Preguntas Frecuentes
            <Box borderTop='2px' color='rgb(49 151 149)' w='10%' mx='auto' mt={2} />
            </Heading>
            {data.map((oneData, i) => {
                return(
                    <VStack
                    w='100%'
                    backgroundColor='#ffffff'
                    boxShadow='lg'
                    borderRadius={5}
                    px={5}
                    my='30px'
                    mx='auto'
                    >
                        <OneQuestion key={oneData.id} oneData={oneData} />
                    </VStack>
                )
            })}
        </Box>

    </Box>
  )
}

export default FrequentQuestions