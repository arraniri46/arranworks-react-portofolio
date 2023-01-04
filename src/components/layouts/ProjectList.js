import {
  Text,
  Image,
  Divider,
  Wrap,
  WrapItem,
  Spacer,
  LinkBox,
  Box
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import data from '../../data.js'
import { DiBootstrap, DiDjango, DiPython } from 'react-icons/di'

const cardVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3
    }
  }
}

const ProjectList = () => {
  const projects = data

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Wrap flexDirection="row" justify="center" mt={8}>
        {projects.map((project, index) => (
          <motion.div variants={cardVariants} whileHover="hover" key={index}>
            <LinkBox>
              <WrapItem
                w="290px"
                h="370px"
                boxShadow="xs"
                flexDirection="column"
                style={{ margin: '20px' }}
                align="center"
                as="button"
              >
                <Image
                  src={project.image[0]}
                  style={{ width: 290, height: 180 }}
                  mt={2}
                ></Image>
                <Divider mt={4} />
                <Box>
                  <Link to={`projects/${project.id}`}>
                    <Text style={{ fontSize: '1.2em', fontWeight: '600' }}>
                      {project.title}
                    </Text>
                  </Link>
                  <Text style={{ fontSize: '0.95em' }} mt={4}>
                    {project.desc}
                  </Text>
                </Box>
                <Box w="100%" display="flex" pl={4} py={3} mt={2}>
                  <Box align="left">
                    <Text fontSize="0.8em">Stack</Text>
                  </Box>
                  <Spacer />
                  <DiPython />
                  <DiDjango />
                  <DiBootstrap />
                </Box>
              </WrapItem>
            </LinkBox>
          </motion.div>
        ))}
      </Wrap>
    </motion.div>
  )
}

export default ProjectList
