import { Heading, Code, Button, Text, Box, Link, Alert } from "@chakra-ui/react"
import { useColorModeValue } from "@chakra-ui/color-mode"
import { DownloadIcon, EmailIcon } from "@chakra-ui/icons"
import { motion } from "framer-motion"

const About = () => {
  return (
    <Box
      display={{ sm: "flex" }}
      flexDirection="column"
      fontFamily="Inter"
      mt={8}
    >
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "100%", opacity: 1 }}
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
      <Box w="100%" align="start">
        <Heading as="h3" size="lg" fontFamily="Inter">
          About
        </Heading>
        <Box py={4}>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;Assalamu'alaikum, Hi Everyone. I am a
            freelancer and a full-stack developer based in Medan, North of
            Sumatera. I have passion for making digital stuff. I love to follow
            the evolution about web technology development.
          </p>
          <Text mt={10}>
            <Code>#simplicity over #complexity</Code>
          </Text>
        </Box>
        <Box display="flex" mt={100} mb={10} flexDirection="column">
          <Button w="8em" colorScheme="blue">
            <EmailIcon mr={2} />
            Email Me
          </Button>
          <Link
            mt={2}
            color={useColorModeValue("blue.500", "whiteAlpha.700")}
            fontSize="0.9em"
          >
            <DownloadIcon mr={1} mb={1} />
            Download Resume
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default About
