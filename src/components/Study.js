import { Box, Heading, Text, Divider, Center } from "@chakra-ui/react"
import { motion } from "framer-motion"
const Study = () => {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Box fontFamily="Inter">
        <Box display="grid" direction="row" maxW="md" align="left" mt={8}>
          <Heading as="u" size="md">
            Study
          </Heading>
          <Box display="flex" direction="column" mt={4}>
            <Text>1996</Text>
            <Center h="25px">
              <Divider orientation="vertical" mx={6} />
            </Center>
            <Text>Born in Medan</Text>
          </Box>
          <Box display="flex" direction="column" mt={4}>
            <Text>2021</Text>
            <Center h="50px">
              <Divider orientation="vertical" mx={6} />
            </Center>
            <Text>Graduated from Information Technology</Text>
          </Box>
          <Box display="flex" direction="column" mt={4}>
            <Text>2021</Text>
            <Center h="25px">
              <Divider orientation="vertical" mx={6} />
            </Center>
            <Text>Solo Full-stack Developer</Text>
          </Box>
        </Box>
      </Box>
    </motion.div>
  )
}

export default Study
