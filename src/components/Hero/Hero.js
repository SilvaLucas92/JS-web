import React from 'react'
import {
    Box,
    chakra,
    Flex,
    VStack } from '@chakra-ui/react';

const Hero = () => {
  return (
<Box  
bg='#fffffe'


>
  <Flex  
  h='100vh' 
  w='90%' 
  mx='auto' 
  maxW="7xl"  
  justify='center'
  align='center'>
    <Box
      pos="relative"
      pb={{
        base: 8,
        sm: 16,
        md: 20,
        lg: 28,
        xl: 32,
      }}
      w="full"
      border="solid 1px transparent"
    >
    <Box
      maxW={{
        base: "7xl",
      }}
      px={{
        base: 4,
        sm: 6,
        lg: 8,
      }}
      mt={{
        base: 12,
        md: 16,
        lg: 20,
        xl: 28,
      }}
    >
      <VStack
        textAlign="center"
        w={{
          base: "full",
          md: 11 / 12,
          xl: 8 / 12,
          }}
          mx="auto"
        >
        <chakra.h1
          fontSize={{
            base: "4xl",
            sm: "5xl",
            md: "6xl",
          }}
          letterSpacing="tight"
          lineHeight="short"
          fontWeight="extrabold"
          color="#2b2c34"
          >
            Julio Silva{" "}
          <chakra.h2
            display={{
            base: "block",
            }}
            color="#319795"
            >
                Psicologo Clinico
            </chakra.h2>
          </chakra.h1>
          <chakra.p
            mt={{
              base: 3,
              sm: 5,
              md: 5,
            }}
            mx={{
              sm: "auto",
              lg: 0,
            }}
            mb={6}
            fontSize={{
              base: "lg",
              md: "xl",
            }}
            color="gray.500"
            lineHeight="base"
          >
            Anim aute id magna aliqua ad ad non deserunt sunt.
          </chakra.p>
        </VStack>
      </Box>
    </Box>
  </Flex>
</Box>
  )
}

export default Hero;