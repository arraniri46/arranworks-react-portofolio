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
            <Text fontWeight="semibold" textAlign="center" textColor="red.200">
              !!! UNDER DEVELOPMENT
            </Text>
            <Text fontSize="lg" my={8}>
              Thalika Bagstore adalah toko online yang menyediakan berbagai
              jenis tas wanita yang stylish dan modern.
            </Text>
            <List mb={12}>
              <ListItem>
                <Text as="mark" bg="blue.500" color="white">
                  LINK :
                </Text>
                <Link
                  href="https://thalikabag.store"
                  color="red.200"
                  target="_blank"
                >
                  {' '}
                  https://thalikabag.store
                </Link>
              </ListItem>
              <ListItem>
                <Text as="mark" bg="blue.500" color="white">
                  TITLE :
                </Text>
                <span> Thalika Bagstore</span>
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
                <span> Next JS, Tailwind CSS, Strapi</span>
              </ListItem>
            </List>
          </Box>
          <Box maxW={480}>
            <Image borderRadius={10} src={dataProjects[3].image[0]}></Image>
            <Divider my={8} />

            <Image borderRadius={10} src={dataProjects[3].image[1]}></Image>
            <Divider my={8} />
            <Image borderRadius={10} src={dataProjects[3].image[2]}></Image>
            <Divider my={8} />
            <Image borderRadius={10} src={dataProjects[3].image[3]}></Image>
            <Divider my={8} />
          </Box>
        </Box>
      </Container>
    </motion.div>
  )
}

export default Nowted
