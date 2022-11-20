import { extendTheme } from "@chakra-ui/react";
import "@fontsource/inter"
import "@fontsource/raleway"

const theme = extendTheme({
  
  fonts: {
    body: 'raleway, sans-serif',
    heading: 'raleway, sans-serif',
  },
  textStyles: {
    p: {
      fontFamily:'inter, sans-serif',
      fontSize: {
        base: "16px",
        md: "16px",
        lg: "18px",
        xl: "20px",
      },
      opacity: "0.7"
    },
    text: {
      fontFamily:'inter, sans-serif',
      fontSize: {
        base: "14px",
        md: "14px",
        lg: "16px",
        xl: "18px",
      },
      opacity: "0.7"
    },
    h2: {
      fontSize: {
        base: "34px",
        md: "36px",
        lg: "48px",
        xl: "50px",
      },
      color: "black",
      textAlign: "center",
      mb: "50px",
      fontWeight: "semibold"
    }
  }
});

export default theme;
