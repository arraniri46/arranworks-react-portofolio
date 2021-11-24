import { Container, Flex } from "@chakra-ui/layout"
import Content from "./Content"
import Navbar from "./Navbar"

const Home = () => {
  return (
    <Container maxW="container.lg">
      <Navbar />
      <Flex>
        <Content />
      </Flex>
    </Container>
  )
}

export default Home
