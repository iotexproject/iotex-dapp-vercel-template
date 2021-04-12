import { BlitzPage, invoke } from "blitz"
import { observer } from "mobx-react-lite"
import { useStore } from "app/stores"
import Layout from "app/layouts/Layout"
import { Box, Center, Container, Stack } from "@chakra-ui/layout"

const Home: BlitzPage = observer(() => {
  const { lang } = useStore()
  return (
    <Box>
      <Container>
        <Center>{lang.t("hello", { msg: "world" })}</Center>
      </Container>
    </Box>
  )
})

Home.getLayout = (page) => <Layout title={"Home"}>{page}</Layout>

export default Home
