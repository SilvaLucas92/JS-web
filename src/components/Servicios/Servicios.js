import React from 'react'
import {   
    Flex,
    Stack,
    Heading,
    Text,
    Box
    } from '@chakra-ui/react';
const Servicios = () => {
  return (
    <Box
      id='services'
      >
      <Flex 
      w='90%' 
      mx='auto' 
      justify='center'
      direction='column'
      p={5}
      h={{base: '200vh', md: '150vh'}}
      >
            <Flex align={'center'} justify='center' my={4}>
                <Heading 
                color='#2d3748' 
                textAlign='center' 
                fontSize='2xl'
                letter-spacing=' -0.015em'
                line-height= '1.24'
                font-size= '2rem'
                fontWeight='bold' 
                >
                    Nuestos servicios 
                </Heading>
            </Flex>
            <Box
            m={10}
            >
            <Stack
              spacing={{
                base: 10,
                md: 0,
              }}
              display={{
                md: "grid",
              }}
              gridTemplateColumns={{
                md: "repeat(2,1fr)",
              }}
              gridColumnGap={{
                md: 8,
              }}
              gridRowGap={{
                md: 10,
              }}>
                <Box
                textAlign='center'
                borderRadius={12}
                p={2}
                mx='auto'
                backgroundColor='#ffffff'
                boxShadow='lg'
                w='full'
                >
                    <Heading 
                    fontSize='1xl'
                    mb={2}
                    color='#898f98'
                    >Niños</Heading>
                    <Text color='#818792'>The project board is an exclusive resource for contract work. It's.The project board is an exclusive resource for contract work. It's.The project board is an exclusive resource for contract work. It's.</Text>
                </Box>
                <Box
                textAlign='center'
                borderRadius={12}
                p={2}
                mx='auto'
                backgroundColor='#ffffff'
                boxShadow='lg'
                >
                    <Heading 
                    fontSize='1xl'
                    mb={2}
                    color='#898f98'
                    >Adolecentes</Heading>
                    <Text color='#818792'>The project board is an exclusive resource for contract work. It's.The project board is an exclusive resource for contract work. It's.The project board is an exclusive resource for contract work. It's.</Text>
                </Box>    
                <Box
                textAlign='center'
                borderRadius={12}
                p={2}
                mx='auto'
                backgroundColor='#ffffff'
                boxShadow='lg'
                >
                    <Heading 
                    fontSize='1xl'
                    mb={2}
                    color='#898f98'
                    >Adultos</Heading>
                    <Text color='#818792'>The project board is an exclusive resource for contract work. It's.The project board is an exclusive resource for contract work. It's.The project board is an exclusive resource for contract work. It's.</Text>
                </Box>
                <Box
                textAlign='center'
                borderRadius={12}
                p={2}
                mx='auto'
                backgroundColor='#ffffff'
                boxShadow='lg'
                >
                    <Heading 
                    fontSize='1xl'
                    mb={2}
                    color='#898f98'
                    >Parejas</Heading>
                    <Text color='#818792'>The project board is an exclusive resource for contract work. It's.The project board is an exclusive resource for contract work. It's.The project board is an exclusive resource for contract work. It's.</Text>
                </Box>
                </Stack>                                       
            </Box>
        </Flex>
        </Box>
  )
}

export default Servicios