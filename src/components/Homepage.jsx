import { Box } from '@chakra-ui/react'
import React from 'react'

function Home() {
  return (
    <Box id="home" pt={'80px'} minH={'90vh'} >
      <Box w={'95%'}   m={'auto'}>
        The standard Lorem Ipsum passage, used since the 1500s
        <Box id="user-detail-name">Name</Box>
        <Box id="user-detail-intro">Formal introduction</Box>
      </Box>
    </Box>
  )
}

export default Home