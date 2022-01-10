import { motion } from 'framer-motion'
import {
  WrapItem,
  LinkBox,
  Image,
  Box,
  Divider,
  LinkOverlay,
  Text
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/hooks'
import ShowModal from './ShowModal'

const cardVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3
    }
  }
}

const CertificatesList = ({ certificate, index }) => {
  const { onOpen, isOpen, onClose } = useDisclosure()

  const handleOpen = (a) => {
    onOpen()
  }

  return (
    <motion.div variants={cardVariants} whileHover="hover" key={index}>
      <LinkBox onClick={() => handleOpen(certificate)}>
        <WrapItem
          w="300px"
          h="320px"
          boxShadow="xs"
          flexDirection="column"
          style={{ margin: '10px' }}
          alignItems="center"
          as="button"
        >
          <Image
            src={certificate.image}
            style={{ width: 270, height: 180 }}
            mt={2}
          ></Image>
          <Divider mt={4} />
          <Box mt={4}>
            <LinkOverlay key={index}>
              <Text
                style={{ fontSize: '1.2em', fontWeight: '600' }}
                noOfLines={2}
              >
                {certificate.title}
              </Text>
            </LinkOverlay>
            <Text style={{ fontSize: '0.95em' }} mt={4}>
              {certificate.desc}
            </Text>
          </Box>
          <Box w="100%" display="flex" pl={4} py={3} mt={6}></Box>
        </WrapItem>
      </LinkBox>
      <ShowModal isOpen={isOpen} onClose={onClose} detail={certificate} />
    </motion.div>
  )
}

export default CertificatesList
