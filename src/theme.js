import { extendTheme } from '@chakra-ui/react'

// 2. Define the new text styles
const theme = extendTheme({
  textStyles: {
    p: {
      fontSize: {
        base:'16px',
        md:'18px',
        lg:'20px',
        xl:'22px'
    },
      opacity: '0.7',
      letterSpacing: 'wider',
    },
    text: {
      fontSize: {
        base:'15px',
        md:'16px',
        lg:'18px',
        xl:'20px'
    },
      opacity: '0.7',
      letterSpacing: 'wider',
    }
  },
})

export default theme