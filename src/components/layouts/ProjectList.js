import {
  Text,
  Image,
  Divider,
  Wrap,
  WrapItem,
  Icon,
  Spacer,
  LinkBox,
  LinkOverlay,
  Box
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

const cardVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3
    }
  }
}

const ProjectList = () => {
  const projects = [
    {
      title: 'Fancy and Interactice Note App',
      desc: 'A Fancy and interactice note app made with love',
      image: '/background.jpg'
    },
    {
      title: 'Modern E-Commerce made with Love',
      desc: 'A modern interface e-commerce using VFX',
      image: '/background-2.jpg'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: '-5vh' }}
      animate={{ opacity: 1, y: 0 }}
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
                alignItems="center"
              >
                <Image
                  src={project.image}
                  style={{ width: 290, height: 180 }}
                  mt={2}
                ></Image>
                <Divider mt={4} />
                <Box mt={4}>
                  <LinkOverlay href="#">
                    <Text
                      style={{ fontSize: '1.2em', fontWeight: '600' }}
                      noOfLines={2}
                    >
                      {project.title}
                    </Text>
                  </LinkOverlay>
                  <Text style={{ fontSize: '0.95em' }}>{project.desc}</Text>
                </Box>
                <Box w="100%" display="flex" pl={4} py={3} mt={6}>
                  <Box align="left">
                    <Text fontSize="0.8em">Stack</Text>
                  </Box>
                  <Spacer />
                  <Icon></Icon>
                  <Icon></Icon>
                  <Icon></Icon>
                  <Icon></Icon>
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
