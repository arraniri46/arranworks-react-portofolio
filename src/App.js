import { ChakraProvider } from '@chakra-ui/react'
import Home from './components/Home'
import theme from './theme/theme'
import { AnimatePresence } from 'framer-motion'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence initial={true}>
        <Home />
      </AnimatePresence>
    </ChakraProvider>
  )
}

export default App
