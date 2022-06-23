import React from 'react'
import {
    Box,
    chakra,
    Flex,
    VStack,
    Button } from '@chakra-ui/react';
import { ArrowForwardIcon, EmailIcon } from '@chakra-ui/icons';
import { Link } from 'react-scroll';
const Hero = () => {
  return (
    <Box  
    bg='#fffffe'
    id='hero'
    >
      <Flex  
      h={{base: '100vh', md: '120vh'}}
      w={{base: '90%', md: '80%'}}
      mx='auto'   
      maxW="7xl"  
      justify='center'
      align='center'
      >
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
                base: "5xl",
                sm: "6xl",
                md: "8xl",
              }}
              letterSpacing="tight"
              lineHeight="short"
              fontWeight="extrabold"
              color="#2b2c34"
              >
                Julio Silva{" "}
              </chakra.h1>
              <chakra.h2
                display={{
                base: "block",
                }}
                fontSize={{
                base: "3xl",
                sm: "4xl",
                md: "5xl",
              }}
                letterSpacing="tight"
                lineHeight="short"
                fontWeight="extrabold"
                color="#319795"
                >
                    Psicologo Clinico
                </chakra.h2>
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
              <Flex
              direction={{base:'column', sm:'row'}}
              mt={3}
              justify='center'
              w='full'
              >
                <Button
                // m={2}
                p={3}
                w={{base:'100%', sm:'40%', md:'35%', xl:'25%'}}
                rightIcon={<ArrowForwardIcon />}
                colorScheme='teal' 
                variant='outline'
                mx={{base: 'auto', sm: '5px' }}
                my={{base: '5px', sm:'2px'}}
                >
                  <Link to='about-me'>Conoceme</Link>
                </Button>
                <Button
                // m={2}
                bg='rgb(49 151 149)'
                p={3}
                w={{base:'100%', sm:'40%', md:'35%', xl:'25%'}}
                rightIcon={<EmailIcon />}
                colorScheme='teal'
                variant='solid'
                mx={{base: 'auto', sm:'5px'}}
                my={{base: '5px', sm:'2px'}}
                >
                  <Link to='contact-me'>Contactame</Link>
                </Button>
              </Flex>          
            </VStack>
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}

export default Hero;