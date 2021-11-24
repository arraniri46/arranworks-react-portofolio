import { ChakraProvider } from '@chakra-ui/react';
import Home from './components/Home';


function App() {
  return (
    <ChakraProvider>
        <Home />      
    </ChakraProvider>
  );
}

export default App;
