import {
    HStack,
    Text,
    chakra,
    Flex,
    VStack,
    Box,
  } from "@chakra-ui/react";

function Feature({ title, text, number, borderbottom, bordertop }){
    return (
      <HStack p={5} borderBottom={borderbottom ? 'solid 0.5px gray' : ''} borderTop={bordertop? 'solid 0.5px gray' : ''} py={10}>
        <Flex mx='auto' w='20%' justify='center' p={{base:'5px'}}>
          <Text opacity='0.6' fontSize={{base:'40px'}} mx='auto'>{number}</Text>
        </Flex>
        <VStack w='80%' textAlign={"left"}>
          <Box textAlign={"left"} w="full">
            <chakra.h2 fontSize={"xl"}fontWeight="semibold">
              {title}
            </chakra.h2>
          </Box>
          <Text textStyle="textMod">{text}</Text> 
        </VStack>
      </HStack>
    );
  };

  export default Feature