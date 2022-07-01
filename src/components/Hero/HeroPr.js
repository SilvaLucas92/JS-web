import React from 'react'
import {
    Box,
    chakra,
    Flex,
    VStack,
    Button,
    Chakra } from '@chakra-ui/react';
import { ArrowForwardIcon, EmailIcon } from '@chakra-ui/icons';
import { Link } from 'react-scroll';
import { motion, isValidMotionProp } from 'framer-motion';

const ChakraBox = chakra(motion.section, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});
const HeroPr = () => {
  return (
    <ChakraBox  
    bg='#fffffe'
    id='hero'
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{
        delay:1, 
        duration:1,
        ease:'easeIn'
        }}
    w='100%'
    >
      <Flex  
      w={{base: '90%', md: '80%'}}
      mx='auto'    
      justify='center'
      align='center'
      py={{base:'180px',sm: '200px', md:'220px', xl:'240px'}}
      >
        <Box
          pos="relative"
          w="full"
          border="solid 1px transparent"
        >
        <Box
          px={{
          base: 4,
          sm: 6,
          lg: 8,
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
                m={{base: 3, sm:5}}
                fontSize={{
                base: "lg",
                md: "xl",
                }}
                color="gray.500"
                lineHeight="base"
              >
                " De una herida, lo que importa es la cicatriz. "<br></br>
                Jaques Lacan
              </chakra.p>
              <Flex
              direction={{base:'column', sm:'row'}}
              mt={3}
              justify='center'
              w='full'
              >
                <Button
                p={3}
                w={{base:'200px', sm:'150px', md:'190px', xl:'210px'}}
                rightIcon={<ArrowForwardIcon />}
                colorScheme='teal' 
                variant='outline'
                mx={{base: 'auto', sm: '5px' }}
                my={{base: '5px', sm:'2px'}}
                fontSize={{base:'16px', md:'18px'}}
                >
                  <Link to='about-me'>Conoceme</Link>
                </Button>
                <Button
                bg='rgb(49 151 149)'
                p={3}
                w={{base:'200px', sm:'150px', md:'190px', xl:'210px'}}
                rightIcon={<EmailIcon />}
                colorScheme='teal'
                variant='solid'
                mx={{base: 'auto', sm:'5px'}}
                my={{base: '5px', sm:'2px'}}
                fontSize={{base:'16px', md:'18px'}}
                >
                  <Link to='contact-me'>Contactame</Link>
                </Button>
              </Flex>          
            </VStack>
          </Box>
        </Box>
      </Flex>
    </ChakraBox>
  )
}

export default HeroPr;