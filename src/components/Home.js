import { Container, Box, useMediaQuery } from '@chakra-ui/react'
import Content from './Content'
import Navbar from './Navbar'
import Profile from './Profile'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProjectList from './layouts/ProjectList'
import ProjectDetails from './ProjectDetails'

const Home = () => {
  const [isNotSmallScreen] = useMediaQuery('(min-width: 576px)')

  return (
    <Container maxW="container.lg">
      <Navbar />
      <Box py={4} direction={isNotSmallScreen ? 'row' : 'column'}>
        <Profile />
      </Box>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </BrowserRouter>
    </Container>
  )
}

export default Home
