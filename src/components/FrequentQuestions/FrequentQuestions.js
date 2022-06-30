import { Box, VStack, Heading } from '@chakra-ui/react'
import React from 'react'
import data from './data'
import OneQuestion from './OneQuestion/OneQuestion'

const FrequentQuestions = () => {

  return (
    <Box
    id='frequentQuestions'
    w={{base: '90%', md: '80%'}}
    mx='auto' 
    py={{base:'140px',sm: '160px', md:'180px', xl:'200px'}}
    border='1px red solid'
    bg='#f7fafc'
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
                my={5}
                mx='auto'
                >
                    <OneQuestion key={oneData.id} oneData={oneData} />
                </VStack>
            )
        })}
    </Box>
  )
}

export default FrequentQuestions