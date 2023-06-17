import { HamburgerIcon } from '@chakra-ui/icons'
import { Box, Drawer, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, HStack, IconButton, Spacer, Text, VStack, useDisclosure } from '@chakra-ui/react'
import React, { useReducer } from 'react'
import { Link } from 'react-router-dom'
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { IoMdSunny } from 'react-icons/io';
import { HiMoon } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';

function Navbar() {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'HOME':
        return { initialState, home: true };
      case 'ABOUT':
        return { initialState, about: true, home: false };
      case 'SKILLS':
        return { initialState, skills: true, home: false };
      case 'PROJECT':
        return { initialState, project: true, home: false };
      case 'CONTACT':
        return { initialState, contact: true, home: false };
      default:
        return initialState;
    }
  }
  const initialState = {
    home: true,
    about: false,
    skills: false,
    project: false,
    contact: false
  }
  const [tab, dispatch] = useReducer(reducer, initialState)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const reduxDispatch = useDispatch();
  const theme = useSelector(state => state.theme)

  return (
    <Box id="nav-menu" position={'fixed'} w={'100%'}>
      <VStack position={'fixed'} bottom={'110px'} left={2} zIndex={'2'}>
        <IconButton _hover={{ bg: theme ? 'white' : 'blackAlpha.900' }} color={theme ? 'black' : 'white'} bg={theme ? 'whiteAlpha.700' : 'blackAlpha.700'} icon={<BsLinkedin />} rounded={'full'} colorScheme='none' />
        <IconButton _hover={{ bg: theme ? 'white' : 'blackAlpha.900' }} color={theme ? 'black' : 'white'} bg={theme ? 'whiteAlpha.700' : 'blackAlpha.700'} icon={<BsGithub />} rounded={'full'} colorScheme='none' />
      </VStack>
      <VStack position={'fixed'} bottom={3} left={2} zIndex={'2'}>
        <IconButton _hover={{ bg: theme ? 'white' : 'blackAlpha.900' }} color={theme ? 'black' : 'white'} bg={theme ? 'whiteAlpha.700' : 'blackAlpha.700'} onClick={() => { reduxDispatch({ type: 'THEME' }) }} icon={theme ? <HiMoon /> : <IoMdSunny />} rounded={'full'} colorScheme='none' />
      </VStack>
      <Flex boxShadow={'lg'} px={'20px'} py={'5px'} bg={'white'}>

        <HStack py={'14px'}>
          <Text fontWeight={'600'} pl={'20px'} color={'black'}>BHARAT SHAW</Text>
        </HStack>
        <Spacer />
        <HStack py={'14px'} display={{ base: 'none', md: 'flex' }}>
          <Link className="nav-link home" to={'/'}><Text fontWeight={'600'} px={'18px'} color={tab.home ? 'black' : 'blackAlpha.600'} onClick={() => { dispatch({ type: 'HOME' }) }}>Home</Text></Link>
          <Link className="nav-link about" to={'/about'}><Text fontWeight={'600'} px={'18px'} color={tab.about ? 'black' : 'blackAlpha.600'} onClick={() => { dispatch({ type: 'ABOUT' }) }}>About</Text></Link>
          <Link className="nav-link skills" to={'/skills'}><Text fontWeight={'600'} px={'18px'} color={tab.skills ? 'black' : 'blackAlpha.600'} onClick={() => { dispatch({ type: 'SKILLS' }) }}>Skills</Text></Link>
          <Link className="nav-link projects" to={'/projects'}><Text fontWeight={'600'} px={'18px'} color={tab.project ? 'black' : 'blackAlpha.600'} onClick={() => { dispatch({ type: 'PROJECT' }) }}>Projects</Text></Link>
          <Link className="nav-link contact" to={'/contact'}><Text fontWeight={'600'} px={'18px'} color={tab.contact ? 'black' : 'blackAlpha.600'} onClick={() => { dispatch({ type: 'CONTACT' }) }}>Contact</Text></Link>
          <Link id="resume-button-1" className="nav-link resume" ><Text fontWeight={'600'} px={'18px'} color={true ? 'black' : 'blackAlpha.600'} >Resume</Text></Link>
        </HStack>

        <HamburgerIcon m={'14px'} color={'black'} boxSize={'20px'} onClick={onOpen} display={{ base: 'block', md: 'none' }} />
        <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent bg={theme ? 'black' : 'white'} >
            <DrawerCloseButton />
            <Box pl={'30px'} pt={'40px'}>
              <Link className="nav-link home" to={'/'}><Text p={'10px'} fontWeight={'600'} px={'18px'} color={tab.home ? 'black' : 'blackAlpha.600'} onClick={() => { dispatch({ type: 'HOME' }) }}>Home</Text></Link>
          <Link className="nav-link about" to={'/about'}><Text p={'10px'} fontWeight={'600'} px={'18px'} color={tab.about ? 'black' : 'blackAlpha.600'} onClick={() => { dispatch({ type: 'ABOUT' }) }}>About</Text></Link>
          <Link className="nav-link skills" to={'/skills'}><Text p={'10px'} fontWeight={'600'} px={'18px'} color={tab.skills ? 'black' : 'blackAlpha.600'} onClick={() => { dispatch({ type: 'SKILLS' }) }}>Skills</Text></Link>
          <Link className="nav-link projects" to={'/projects'}><Text p={'10px'} fontWeight={'600'} px={'18px'} color={tab.project ? 'black' : 'blackAlpha.600'} onClick={() => { dispatch({ type: 'PROJECT' }) }}>Projects</Text></Link>
          <Link className="nav-link contact" to={'/contact'}><Text p={'10px'} fontWeight={'600'} px={'18px'} color={tab.contact ? 'black' : 'blackAlpha.600'} onClick={() => { dispatch({ type: 'CONTACT' }) }}>Contact</Text></Link>
          <Link className="nav-link resume" ><Text p={'10px'} fontWeight={'600'} px={'18px'} color={true ? 'black' : 'blackAlpha.600'} >Resume</Text></Link>
            </Box>
          </DrawerContent>
        </Drawer>

      </Flex>
    </Box>
  )
}

export default Navbar