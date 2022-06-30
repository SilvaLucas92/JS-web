import { Heading, Flex, IconButton, Text } from '@chakra-ui/react';
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
            // mt={8}
            // mb={4}
            fontSize={[20, 22, , 24]}
            opacity= '0.9'
            > { question } </Heading>
            <IconButton 
            icon={!visibleTrue? <AiOutlinePlus /> : <AiOutlineMinus />}
            fontSize={[20, 22, , 22]}
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
            fontSize={[18, 20, , 22]}
            color='#767d88'
            pb='10px' 
            >{ answer }</Text>
        </Flex>
    </>
  )
}

export default OneQuestion