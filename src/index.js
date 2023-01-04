import { ColorModeScript } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import theme from './theme/theme'

ReactDOM.render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </>,
  document.getElementById('root')
)
