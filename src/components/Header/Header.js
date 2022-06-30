import { Button, Flex, Heading, HStack,  IconButton, Stack } from '@chakra-ui/react';
import { AiOutlineAlignRight,  AiOutlineClose} from 'react-icons/ai';
import { Link } from 'react-scroll';
import React, { useState, useEffect } from 'react'
const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > lastScrollY) {
        setShow(false); 
      } else {
        setShow(true);  
      }
      setLastScrollY(window.scrollY); 
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <Stack
    as='header'
    w='100%'
    top={show ? 0 : '-100px'}
    left='0'
    right='0'
    bg='#ffffff'
    borderBottomWidth={1}
    position='fixed'
    zIndex='1'
    boxShadow='xl'
    >
      <Flex >
        <HStack
          w={{base: '90%', md: '80%'}}
          mx='auto'
          justify='space-between'
          align='center'
          p={5}>
          <Heading 
          display={{base: 'none', md: 'block'}}
          fontWeight="bold"
          color="#2b2c34"
          >
              Julio Silva
          </Heading>
          <Heading  display={{base: 'block', md:'none'}}>
              JS
          </Heading>
          <Flex
            display={{md:'none'}}
          >
            <IconButton
              icon={!showMenu? <AiOutlineAlignRight /> : <AiOutlineClose />} 
              onClick={() => {return !showMenu? setShowMenu(true) : setShowMenu(false)}}
              fontSize={22}
              isRound='true'
              backgroundColor='#ffffff'
              colorScheme='teal' 
              variant='outline'
            />
          </Flex>

          <Flex
            as='nav'
            display={{base:'none', md:"flex"}}
            justify='center'
            align='center'
          >
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
              to='frequentQuestions'
              spy={true} 
              smooth={true} 
              offset={100} 
              duration={800}
            >
            Preguntas Frecuentes</Link>
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
          as='nav'
          display={showMenu? 'flex' : 'none'}
          direction='column'
          w='100%'
          mx='auto'
          align='center'
          bg='#ffffff'
          >
            <Button my={8} variant='link' size='lg'>
            <Link
              to='about-me'
              spy={true} 
              smooth={true} 
              offset={100} 
              duration={800}
              onClick={() => {return setShowMenu(false)}}
            >
            About Me</Link>
            </Button>
            <Button my={8} variant='link' size='lg'>
            <Link
              to='services'
              spy={true} 
              smooth={true} 
              offset={100} 
              duration={800}
              onClick={() => {return setShowMenu(false)}}
            >
            Nuestros servicios</Link>
            </Button>
            <Button my={8} variant='link' size='lg'>
            <Link
              to='frequentQuestions'
              spy={true} 
              smooth={true} 
              offset={100} 
              duration={800}
              onClick={() => {return setShowMenu(false)}}
            >
            Preguntas frecuentes</Link>
            </Button>
            <Button my={8} variant='link' size='lg'>
            <Link
              to='contact-me'
              spy={true} 
              smooth={true} 
              offset={100} 
              duration={800}
              onClick={() => {return setShowMenu(false)}}
            >
            Contacto</Link>
            </Button>
        </Flex> 
    </Stack> 
  )
}

export default Header;