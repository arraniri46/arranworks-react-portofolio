import { Container, Divider } from '@chakra-ui/react'
import { Box } from '@chakra-ui/layout'
import TabsOfContent from './TabsOfContent'
import About from './About'
import Bio from './Bio'

const Content = () => {
  return (
    <Container maxW="container.md" align="center">
      <Divider my={8} />
      <Box>
        <About />
      </Box>
      <Box>
        <TabsOfContent />
      </Box>
      <Box>
        <Bio />
      </Box>
    </Container>
  )
}

export default Content
