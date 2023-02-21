import { Image } from '@chakra-ui/image'
import { Box, Heading, Link, Spacer } from '@chakra-ui/layout'
import { Text, Skeleton, Icon, Container } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { BsLinkedin, BsGithub, BsInstagram, BsFacebook } from 'react-icons/bs'

const Identity = () => {
  return (
    <Box boxSize={200} w="sm" align="start">
      <Heading
        fontFamily="Inter"
        color={useColorModeValue('gray.600', 'whiteAplha.900')}
      >
        Hi, I am
      </Heading>
      <Text
        fontSize={42}
        fontFamily="Inter"
        fontWeight="bold"
        color={useColorModeValue('gray.600', 'whiteAplha.900')}
      >
        Garda Arraniri
      </Text>
      <Skeleton w={300} mb={2}>
        skeleton
      </Skeleton>
      <Text mb={2} fontFamily="Inter">
        Solo Frontend Engineer (Digital Artisan)
      </Text>
      <Text fontSize="1.05em">
        <Link
          variant=""
          href="https://github.com/arraniri46/arranworks-react-portofolio"
          isExternal
          display="inline-flex"
          p={1}
        >
          <BsGithub
            style={{
              marginRight: '4px',
              marginTop: '4px'
            }}
          />
          Source
        </Link>
      </Text>
    </Box>
  )
}

const ProfileAvatar = () => {
  return (
    <Box>
      <Image
        src="/profile-picture.png"
        boxSize={[240, 200]}
        mt={[8, 0]}
        borderRadius="full"
      />
    </Box>
  )
}

const SocialMedia = () => {
  return (
    <Box
      h={[5, '150px']}
      w={['100%', 5]}
      display="flex"
      flexDirection={['row', 'column']}
      justifyContent="space-between"
      mr={[0, 6]}
      mt={[10, 0]}
      px={[4, 0]}
    >
      <Link
        href="https://www.linkedin.com/in/garda-ar-51a72686/"
        target="_blank"
      >
        <Icon mt={2} as={BsLinkedin}></Icon>
      </Link>
      <Link href="https://www.instagram.com/arraniri46/" target="_blank">
        <Icon mt={2} as={BsInstagram}></Icon>
      </Link>
      <Link href="https://www.facebook.com/garda.rev46" target="_blank">
        <Icon mt={2} as={BsFacebook}></Icon>
      </Link>
      <Link href="https://github.com/arraniri46" target="_blank">
        <Icon mt={2} as={BsGithub}></Icon>
      </Link>
    </Box>
  )
}

const Profile = () => {
  return (
    <Container maxW="container.md">
      <Box display={{ sm: 'flex' }} align="center">
        <Identity />
        <Spacer />
        <SocialMedia />
        <ProfileAvatar />
      </Box>
    </Container>
  )
}

export default Profile
