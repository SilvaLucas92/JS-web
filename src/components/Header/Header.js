import { Button, Flex, Heading, HStack, useDisclosure, IconButton, Box } from '@chakra-ui/react';
import { AiOutlineAlignRight,  AiOutlineClose} from 'react-icons/ai';
import { Link, animateScroll } from 'react-scroll';
import React from 'react'
const Header = () => {
  const mobileNav = useDisclosure();
  return (
    <Box
    w='100%'
    position="fixed"
    top={0}
    bg='#ffffff'
    borderBottomWidth={1}
    zIndex= '3'
    >
      <Flex >
        <HStack
          w='90%'
          mx='auto'
          justify='space-between'
          align='center'
          p={5}>
          <Heading display={{base: 'none', md: 'block'}}>
              Julio Silva
          </Heading>
          <Heading display={{base: 'block', md:'none'}}>
              JS
          </Heading>
          <Flex
            display={{md:'none'}}
          >
            <IconButton
              icon={!mobileNav.isOpen? <AiOutlineAlignRight /> : <AiOutlineClose />} 
              onClick={!mobileNav.isOpen? mobileNav.onOpen : mobileNav.onClose}
              fontSize={25}
            />
          </Flex>

          <Flex
            display={{base:'none', md:"flex"}}
            justify='center'
            align='center'
          >
            <Button m={2} variant='link'>
              <Link
              to='hero'
              spy={true} 
              smooth={true} 
              offset={100} 
              duration={800}
              >Inicio</Link>
            </Button>
            <Button m={2} variant='link'>
            <Link
              to='services'
              spy={true} 
              smooth={true} 
              offset={100} 
              duration={800}
            >
            Nuestros servicios</Link>
            </Button>
            <Button m={2} variant='link'>
            <Link
              to='about-me'
              spy={true} 
              smooth={true} 
              offset={100} 
              duration={800}
            >
            About Me</Link>
            </Button>
            <Button m={2} variant='link'>
            <Link
              to='contact-me'
              spy={true} 
              smooth={true} 
              offset={100} 
              duration={800}
            >
            Contacto</Link>
            </Button>
          </Flex>  
        </HStack>
      </Flex>
      <Flex
          display={mobileNav.isOpen? 'flex' : 'none'}
          direction='column'
          w='90%'
          mx='auto'
          align='center'
          bg='#ffffff'
          >
            <Button m={2} variant='link' onClick={mobileNav.onClose}>
              <Link
              to='hero'
              spy={true} 
              smooth={true} 
              offset={100} 
              duration={800}
              >Inicio</Link>
            </Button>
            <Button m={2} variant='link'>
            <Link
              to='services'
              spy={true} 
              smooth={true} 
              offset={100} 
              duration={800}
            >
            Nuestros servicios</Link>
            </Button>
            <Button m={2} variant='link'>
            <Link
              to='about-me'
              spy={true} 
              smooth={true} 
              offset={100} 
              duration={800}
            >
            About Me</Link>
            </Button>
            <Button m={2} variant='link'>
            <Link
              to='contact-me'
              spy={true} 
              smooth={true} 
              offset={100} 
              duration={800}
            >
            Contacto</Link>
            </Button>
        </Flex> 
    </Box> 
  )
}

export default Header;