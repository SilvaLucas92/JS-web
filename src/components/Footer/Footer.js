import { Flex, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { AiFillHeart } from 'react-icons/ai'

const Footer = () => {
  return (
    <Flex
    justifyContent='center'
    alignItems='center'
    w='90%'
    mx='auto'
    h={50}
    backgroundColor='#ffffff'
    >
        <Text
        alignItems='center'
        color='gray.500'
        >
            Developed by Lucas Silva.
        </Text>
    </Flex>
    )
}

export default Footer