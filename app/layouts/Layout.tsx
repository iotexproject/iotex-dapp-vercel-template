import { Head } from "blitz"
import { getCssString } from "app/utils/stitches.config"
import Header from "app/components/header"

const Layout = ({ children, title = "blitzjs" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssString() }} />
      </Head>
      <Header />

      {children}
    </>
  )
}

export default Layout
