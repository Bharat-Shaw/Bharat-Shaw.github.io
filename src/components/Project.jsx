import { Box, Text } from '@chakra-ui/react'
import React from 'react'

function Project() {
  return (
    <Box id="projects" pt={'80px'}>
      <Box className="project-card" ml={'100px'} borderRadius={'20px'}>
          <Text className="project-title"></Text>
          <Text className="project-description"></Text>
          <Text className="project-tech-stack"></Text>
          <Text className="project-github-link"></Text>
          <Text className="project-deployed-link"></Text>
      </Box>
    </Box>
  )
}

export default Project