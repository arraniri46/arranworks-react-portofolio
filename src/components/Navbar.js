import { IconButton } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/color-mode'
import { Box, Container, Flex, Spacer } from '@chakra-ui/layout'
import Logo from './Logo'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'

const DarkMode = () => {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
    >
      <MoonIcon mb={1} />
    </motion.div>
  )
}

const LightMode = () => {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
    >
      <SunIcon mb={1} />
    </motion.div>
  )
}

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  return (
    <Container maxW="container.md">
      <Flex pt={4} mb={12} align="center">
        <Box align="center">
          <Logo />
        </Box>
        <Spacer />
        <IconButton
          onClick={toggleColorMode}
          icon={isDark ? <DarkMode /> : <LightMode />}
          rounded="full"
        ></IconButton>
      </Flex>
    </Container>
  )
}

export default Navbar
