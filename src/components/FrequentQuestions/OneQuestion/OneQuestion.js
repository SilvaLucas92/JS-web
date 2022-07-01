import { Heading, Flex, IconButton, Text, chakra } from '@chakra-ui/react';
import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const OneQuestion = ({oneData}) => {
    const { question, answer, id } = oneData;
    const [visibleTrue, setVisibleTrue] = useState(false)
  return (
    <>
        <Flex
        align='center'
        justify='space-between'
        w='100%'
        p='5px'
        key={id}
        py='20px'
        >
            <Heading
            as='h3'
            color='#2d3748'
            fontWeight= 'semibold'
            fontSize={{base:'20px', md:'22'}} 
            > { question } </Heading>
            <IconButton 
            icon={!visibleTrue? <AiOutlinePlus /> : <AiOutlineMinus />}
            fontSize={{base:'20px', md:'22px'}}
            isRound='true'
            backgroundColor='#ffffff'
            colorScheme='teal' 
            variant='outline'
            onClick={() => visibleTrue? setVisibleTrue(false) : setVisibleTrue(true)}
            />
        </Flex>
        <Flex
        align='center'
        justify='space-between'
        w='100%'
        p='5px'
        display= { visibleTrue? 'block' : 'none' }
        >
            <Text
            fontSize={{base:'18px', md:'20px'}}            
            opacity= '0.7'
            pb='10px' 
            >{ answer }</Text>
        </Flex>
    </>
  )
}

export default OneQuestion