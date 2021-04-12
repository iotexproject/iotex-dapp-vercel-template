import { AppProps } from "blitz"
import { useEffect } from "react"
import { useStore } from "app/stores"

export default function MyApp({ Component, pageProps }: AppProps) {
  const { lang } = useStore()
  useEffect(() => {
    lang.init()
  }, [])
  return <Component {...pageProps} />
}
