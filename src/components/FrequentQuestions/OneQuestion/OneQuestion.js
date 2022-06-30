import { Heading, Flex, IconButton, Text, VStack, Box } from '@chakra-ui/react';
import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

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
        >
            <Heading
            as='h3'
            color='#2d3748'
            fontWeight= 'semibold'
            mt={8}
            mb={4}
            fontSize={[18, 20, 22 , 24]}
            opacity= '0.9'
            > { question } </Heading>
            <IconButton 
            icon={<AiOutlinePlus />}
            fontSize={22}
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
        fontSize={[18, 20, 22 , 24]}
        opacity= '0.8'
        >
            <Text
            fontSize={{base:'sm', sm: 'md', md:'lg'}} 
            color='#767d88' 
            >{ answer }</Text>
        </Flex>
    </>
  )
}

export default OneQuestion