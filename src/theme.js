import { extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins"
import "@fontsource/roboto"
import "@fontsource/open-sans"
const theme = extendTheme({
  
  fonts: {
    body: 'roboto, poppins, open-sans',
    heading: 'roboto, poppins, open-sans',
  },
  textStyles: {
    p: {
      fontSize: {
        base: "16px",
        md: "18px",
        lg: "20px",
        xl: "22px",
      },
      opacity: "0.7",
      letterSpacing: "wider",
    },
    text: {
      fontSize: {
        base: "15px",
        md: "16px",
        lg: "18px",
        xl: "20px",
      },
      opacity: "0.7",
      letterSpacing: "wider",
    }
  }
});

export default theme;
