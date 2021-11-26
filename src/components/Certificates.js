import {
  Heading,
  Box,
  Text,
  Image,
  Divider,
  Wrap,
  WrapItem,
  LinkBox,
  LinkOverlay,
  Button
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { BsArrowUpRightCircle } from 'react-icons/bs'

const cardVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3
    }
  }
}

const Certificates = () => {
  const certificates = [
    {
      title: 'Data Visualization with python',
      desc: 'Data Visualization using python',
      image: '/certificate-data-visualization-python.jpg'
    },
    {
      title: 'Element Of AI',
      desc: 'Introduction to Artificial Intelligence',
      image: '/certificate-element-of-AI.jpg'
    },
    {
      title: 'Adobe Certified Associate',
      desc: 'Graphic Design and Illustration using Adobe Illustrator CS6',
      image: '/certificate-aca.png'
    },
    {
      title: 'IBM - Machine Learning',
      desc: ' Pelatihan IBM – Machine Learning Program Fresh Graduate Academy Digital Talent Scholarship',
      image: '/certificate-machine-learning.jpg'
    }
  ]

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
            <motion.div variants={cardVariants} whileHover="hover" key={index}>
              <LinkBox>
                <WrapItem
                  w="300px"
                  h="320px"
                  boxShadow="xs"
                  flexDirection="column"
                  style={{ margin: '10px' }}
                  alignItems="center"
                >
                  <Image
                    src={certificate.image}
                    style={{ width: 270, height: 180 }}
                    mt={2}
                  ></Image>
                  <Divider mt={4} />
                  <Box mt={4}>
                    <LinkOverlay href="#">
                      <Text
                        style={{ fontSize: '1.2em', fontWeight: '600' }}
                        noOfLines={2}
                      >
                        {certificate.title}
                      </Text>
                    </LinkOverlay>
                    <Text style={{ fontSize: '0.95em' }}>
                      {certificate.desc}
                    </Text>
                  </Box>
                  <Box w="100%" display="flex" pl={4} py={3} mt={6}></Box>
                </WrapItem>
              </LinkBox>
            </motion.div>
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
