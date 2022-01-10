import { Heading, Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ProjectList from './layouts/ProjectList'

const cardVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3
    }
  }
}

const Projects = () => {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Box fontFamily="Inter" mt={12} mx={-6}>
        <motion.div
          initial={{ opacity: 0, y: '-5vh' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading fontFamily="Inter" as="h3" size="lg" mb={1}>
            Projects
          </Heading>
        </motion.div>
        <ProjectList cardVariants={cardVariants} />
        <Link to="/projects">
          {/* <Button colorScheme="blue" mt={12}>
            More Projects
            <Box ml={2}>
              <BsArrowUpRightCircle />
            </Box>
          </Button> */}
        </Link>
      </Box>
    </motion.div>
  )
}

export default Projects
