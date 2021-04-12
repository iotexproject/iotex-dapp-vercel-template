import { BlitzPage, invoke } from "blitz"
import { observer } from "mobx-react-lite"
import { useStore } from "app/stores"
import { globalStyles } from "app/utils/styles"
import Layout from "app/layouts/Layout"
const Home: BlitzPage = observer(() => {
  const { lang } = useStore()

  return (
    <div className={globalStyles.container.className}>
      <div>{lang.t("hello", { message: "nextjs" })}</div>
    </div>
  )
})

Home.getLayout = (page) => <Layout title={"Home"}>{page}</Layout>

export default Home
