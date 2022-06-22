import React from 'react'
import {   
    Flex,
    Stack,
    Heading,
    Box,
    } from '@chakra-ui/react';
import data from '../Servicios/Service/data';
import Service from './Service/Service';

const Servicios = () => {
  return (
    <Box
    id='services'
    >
      <Flex 
      w={{base: '90%', md: '80%', lg:'70%'}}
      mx='auto' 
      justify='center'
      direction='column'
      p={5}
      h={{base: '100%', md: '120vh'}}
      border='1px'
      borderColor='red'
      >
          <Flex align={'center'} justify='center' my={4}>
              <Heading 
              color='#2d3748' 
              textAlign='center' 
              fontSize={{
                      base: "2xl",
                      md: "3xl",
                      lg: '4xl'
                      }}
              letter-spacing=' -0.015em'
              line-height= '1.24'
              font-size= '2rem'
              fontWeight='bold' 
              mt={{base:'100px', md:'0px'}}
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
                {data.map( oneData => {
                    return <Service key={oneData.id} oneData={oneData}/>
                })}
            </Stack>
          </Box>
        </Flex>
      </Box>
  )
}

export default Servicios