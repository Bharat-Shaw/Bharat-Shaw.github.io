import React from 'react'
import { Box } from '@chakra-ui/react'
import { Link} from 'react-router-dom'

function Contact() {
  return (
    <Box id="contact">Contact
    <Box>
    <Link id="contact-github">GitHub profile link</Link>
    <Link id="contact-linkedin">LinkedIn profile link</Link>
    <Link id="contact-phone">Phone number</Link>
    <Link id="contact-email">Email address</Link>
    </Box>
    
    </Box>
    
  )
}

export default Contact