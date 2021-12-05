import { Heading, Box, Wrap, Button } from '@chakra-ui/react'

import { motion } from 'framer-motion'
import { BsArrowUpRightCircle } from 'react-icons/bs'
import ListCertificates from './ListCertificates'

const certificates = [
  {
    title: 'Data Visualization with python',
    desc: 'Data Visualization using python',
    image: '/images/certificate-data-visualization-python.png'
  },
  {
    title: 'Element Of AI',
    desc: 'Introduction to Artificial Intelligence',
    image: '/images/certificate-element-of-ai.png'
  },
  {
    title: 'Adobe Certified Associate',
    desc: 'Graphic Design and Illustration using Adobe Illustrator CS6',
    image: '/images/certificate-aca.png'
  },
  {
    title: 'IBM - Machine Learning',
    desc: ' Pelatihan IBM – Machine Learning Program Fresh Graduate Academy Digital Talent Scholarship',
    image: '/images/certificate-machine-learning.png'
  }
]

const Certificates = () => {
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
          <Heading fontFamily="Inter" as="h3" size="lg" mb={12}>
            Certificates
          </Heading>
        </motion.div>
        <Wrap flexDirection="row" justify="center">
          {certificates.map((certificate, index) => (
            <ListCertificates certificate={certificate} key={index} />
          ))}
        </Wrap>
        <Button colorScheme="blue">
          More
          <Box ml={2}>
            <BsArrowUpRightCircle />
          </Box>
        </Button>
      </Box>
    </motion.div>
  )
}

export default Certificates
