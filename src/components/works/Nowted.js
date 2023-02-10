import {
  Box,
  Container,
  Divider,
  Image,
  Link,
  List,
  ListItem,
  Text
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import data from '../../data'

const Nowted = () => {
  const dataProjects = data

  return (
    <motion.div
      initial={{ opacity: 0, marginTop: -60 }}
      animate={{ opacity: 1, marginTop: 0 }}
      transition={{ duration: 1 }}
    >
      <Container maxW="container.md">
        <Box align="center" flexDirection="column">
          <Box align="start" flexDirection="column" maxW={560}>
            <Text fontSize="lg" my={8}>
              Slicing challenge design of Nowted App from codedesign.dev
            </Text>
            <List mb={12}>
              <ListItem>
                <Text as="mark" bg="blue.500" color="white">
                  LINK :
                </Text>
                <Link
                  href="https://nowted-app-slicing.vercel.app"
                  color="red.200"
                  target="_blank"
                >
                  {' '}
                  https://nowted-app-slicing.vercel.app
                </Link>
              </ListItem>
              <ListItem>
                <Text as="mark" bg="blue.500" color="white">
                  TITLE :
                </Text>
                <span> Nowted App</span>
              </ListItem>
              <ListItem>
                <Text as="mark" bg="blue.500" color="white">
                  PLATFORM :
                </Text>
                <span> Web</span>
              </ListItem>
              <ListItem>
                <Text as="mark" bg="blue.500" color="white">
                  STACK :
                </Text>
                <span> React, Tailwind CSS, Framer Motion</span>
              </ListItem>
            </List>
          </Box>
          <Box maxW={480}>
            <Image borderRadius={10} src={dataProjects[2].image[0]}></Image>
            <Divider my={8} />
          </Box>
        </Box>
      </Container>
    </motion.div>
  )
}

export default Nowted
