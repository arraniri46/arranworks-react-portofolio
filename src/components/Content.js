import { Container, Divider } from "@chakra-ui/react"
import { Box } from "@chakra-ui/layout"
import Profile from "./Profile"
import { useMediaQuery } from "@chakra-ui/media-query"
import TabsOfContent from "./TabsOfContent"
import Footer from "./Footer"
import About from "./About"
import Bio from "./Bio"

const Content = () => {
  const [isNotSmallScreen] = useMediaQuery("(min-width: 576px)")

  return (
    <Container maxW="container.md" align="center">
      <Box py={4} direction={isNotSmallScreen ? "row" : "column"}>
        <Profile />
      </Box>
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
      <Box>
        <Footer />
      </Box>
    </Container>
  )
}

export default Content
