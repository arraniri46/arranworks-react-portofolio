import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react'
import { Button, Image, Text, Box } from '@chakra-ui/react'

const ShowModal = (props) => {
  return (
    <Box alignItems="center" flexDirection="column">
      <Modal isOpen={props.isOpen} onClose={props.onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.detail.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody alignItems="center">
            <Image src={props.detail.image} alt="Dan Abramov" p={4} />
            <Text pt={4} mx={6} align="center" style={{ fontSize: '1.1em' }}>
              {props.detail.desc}
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={props.onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default ShowModal
