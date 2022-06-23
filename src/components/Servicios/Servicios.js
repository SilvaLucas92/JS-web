import React from 'react'
import {   
    Flex,
    Stack,
    Heading,
    Box,
    Text,
    VStack
    } from '@chakra-ui/react';
import data from '../Servicios/Service/data';
import Service from './Service/Service';

const Servicios = () => {
  return (
    <Box
    id='services'
    >
      <Flex 
      w={{base: '90%', md: '80%'}}
      mx='auto' 
      justify='center'
      direction='column'
      p={5}
      h={{base: '100%', md: '150vh'}}
      border='1px'
      borderColor='red'
      >
          <VStack align={'center'} justify='center' my={4}>
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
              mt={{base:'100px', md:'0px'}}
              mb={5}
              >
                  Nuestos servicios 
                  <Box borderTop='2px' color='rgb(49 151 149)' w='50%' mx='auto' mt={2} />
              </Heading>
              <Text
              opacity='0.7'
              fontSize={18}
              mb={15}
              >
                Atención Online y presencial a Niños, Adolescentes y Adultos, Familias y Parejas con orientación Sistémica. 
              </Text>
          </VStack>
          {/* <Box
          m={10}
          > */}
            <Stack
            spacing={{
                base: 10,
                md: 0,
            }}
            display={{
                md: "grid",
            }}
            gridTemplateColumns={{
                md: "repeat(3,1fr)",
            }}
            gridColumnGap={{
                md: 8,
            }}
            gridRowGap={{
                md: 10,
            }}
            mt={10}>  
                {data.map( oneData => {
                    return <Service key={oneData.id} oneData={oneData}/>
                })}
            </Stack>
          {/* </Box> */}
        </Flex>
      </Box>
  )
}

export default Servicios