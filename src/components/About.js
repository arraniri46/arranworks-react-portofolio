import {
  Heading,
  Code,
  Button,
  Text,
  Box,
  Link,
  Alert,
  Divider
} from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { DownloadIcon, EmailIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'

const About = (props) => {
  return (
    <Box
      display={{ sm: 'flex' }}
      flexDirection="column"
      fontFamily="Inter"
      mt={8}
    >
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: '100%', opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Alert
          status="info"
          variant="solid"
          mb={8}
          fontWeight="600"
          flexDirection="column"
          textAlign="center"
        >
          Welcome
        </Alert>
      </motion.div>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.7 }}
      >
        <Box w="100%" align="start">
          <Heading as="h3" size="lg" fontFamily="Inter">
            About
          </Heading>
          <Box py={4}>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;I am Garda, graduated as Information
              Technology Program in University of Sumatera Utara. A solo
              Fullstack Developer with less than 1 year of experience who have
              passion for creating digital stuff. I love to keep up with the
              evolution around web technology development. Familiar with
              application development especially web development. Proven to have
              developed personal projects as well as clients project{' '}
              <i>
                <b>(look at portofolios section)</b>
              </i>
              .
            </p>
            <Text mt={10}>
              <Code>#simplicity over #complexity</Code>
            </Text>
          </Box>
          <Box display="flex" mt={6} mb={10} flexDirection="column" maxW={150}>
            <Link href="mailto:garda.arraniri@gmail.com">
              <Button w="8em" colorScheme="blue">
                <EmailIcon mr={2} />
                Email Me
              </Button>
            </Link>
            <Link
              href="download/Curriculum Vitae - Garda Arraniri.pdf"
              mt={2}
              color={useColorModeValue('blue.500', 'whiteAlpha.700')}
              fontSize="0.9em"
            >
              <DownloadIcon mr={1} mb={1} />
              Download Resume
            </Link>
          </Box>
        </Box>
      </motion.div>
      <Divider />
    </Box>
  )
}

export default About
