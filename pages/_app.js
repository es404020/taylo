
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react"
import theme from "../components/theme"


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      

      <Component {...pageProps} />

    </ChakraProvider>
  )



}

export default MyApp


