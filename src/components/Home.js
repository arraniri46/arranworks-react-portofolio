import { Container, Box, useMediaQuery } from '@chakra-ui/react'
import Content from './Content'
import Navbar from './Navbar'
import Profile from './Profile'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProjectList from './layouts/ProjectList'
import Footer from './Footer'
import ClusteringApp from './works/ClusteringApp'
import MupiBang from './works/MupiBang'
import Nowted from './works/Nowted'
import ThalikaBagstore from './works/ThalikaBagstore'

const Home = () => {
  const [isNotSmallScreen] = useMediaQuery('(min-width: 576px)')

  return (
    <>
      <Container maxW="container.lg">
        <Navbar />
        <Box py={4} direction={isNotSmallScreen ? 'row' : 'column'}>
          <Profile />
        </Box>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/projects" element={<ProjectList />} />
            <Route path="/projects/1" element={<ClusteringApp />} />
            <Route path="/projects/2" element={<MupiBang />} />
            <Route path="/projects/3" element={<Nowted />} />
            <Route path="/projects/4" element={<ThalikaBagstore />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </Container>
    </>
  )
}

export default Home
