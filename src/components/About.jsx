import React from 'react'
import { Box, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <Box id="about" className="about_section">About
    <Image className="home-img"/>
    <Link id="resume-button-2"></Link>
    </Box>
  )
}

export default About