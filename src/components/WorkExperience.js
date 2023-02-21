import { Box, Heading, Text, Divider, Center } from '@chakra-ui/react'
import { motion } from 'framer-motion'
const WorkExperience = () => {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Box fontFamily="Inter">
        <Box display="grid" direction="row" maxW="md" align="center" mt={8}>
          <Heading as="u" size="md">
            Work Experience
          </Heading>
          <Box display="flex" direction="column" mt={4}>
            <Text>2021 - Now</Text>
            <Center h="25px">
              <Divider orientation="vertical" mx={6} />
            </Center>
            <Text>Solo Frontend Engineer</Text>
          </Box>
        </Box>
      </Box>
    </motion.div>
  )
}

export default WorkExperience
