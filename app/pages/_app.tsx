import { AppProps } from "blitz"
import { useEffect } from "react"
import { useStore } from "app/stores"
import { ChakraProvider } from "@chakra-ui/react"

export default function MyApp({ Component, pageProps }: AppProps) {
  const { lang } = useStore()
  const getLayout = Component.getLayout || ((page) => page)

  useEffect(() => {
    lang.init()
  }, [])
  return <ChakraProvider>{getLayout(<Component {...pageProps} />)}</ChakraProvider>
}
