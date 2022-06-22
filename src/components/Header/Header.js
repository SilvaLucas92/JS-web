import { Button, Flex, Heading, HStack, useDisclosure, IconButton, Box } from '@chakra-ui/react';
import { AiOutlineAlignRight,  AiOutlineClose} from 'react-icons/ai';
import { Link } from 'react-scroll';
import React, { useState, useEffect } from 'react'
const Header = () => {
  const mobileNav = useDisclosure();
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

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

  return (
    <Box
    as='header'
    w='100%'
    position="fixed"
    top={show ? 0 : '-80px'}
    bg='#ffffff'
    borderBottomWidth={1}
    zIndex= '99'
    overflow='hidden'
    backdropFilter="saturate(180%) blur(5px)"
    >
      <Flex >
        <HStack
          w={{base: '90%', md: '80%', lg:'70%'}}
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
          <Heading display={{base: 'block', md:'none'}}>
              JS
          </Heading>
          <Flex
            display={{md:'none'}}
          >
            <IconButton
              icon={!showMenu? <AiOutlineAlignRight /> : <AiOutlineClose />} 
              // onClick={!mobileNav.isOpen? mobileNav.onOpen : mobileNav.onClose}
              onClick={() => {return !showMenu? setShowMenu(true) : setShowMenu(false)}}
              fontSize={25}
            />
          </Flex>

          <Flex
            display={{base:'none', md:"flex"}}
            justify='center'
            align='center'
          >
            <Button m={2} variant='link' >
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
          display={showMenu? 'flex' : 'none'}
          direction='column'
          w='90%'
          mx='auto'
          align='center'
          bg='#ffffff'
          >
            <Button m={2} variant='link' >
              <Link
              to='hero'
              spy={true} 
              smooth={true} 
              offset={100} 
              duration={800}
              onClick={() => {return setShowMenu(false)}}
              >Inicio</Link>
            </Button>
            <Button m={2} variant='link'>
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
            <Button m={2} variant='link' >
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
            <Button m={2} variant='link'>
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
    </Box> 
  )
}

export default Header;