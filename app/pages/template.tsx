import { BlitzPage, invoke } from "blitz"
import { observer } from "mobx-react-lite"
import Layout from "app/layouts/Layout"
import { useStore } from "app/stores"

const Teamplate: BlitzPage = observer(() => {
  const { lang } = useStore()

  return (
    <div>
      <div>{lang.t("hello", { message: "nextjs" })}</div>
    </div>
  )
})

Teamplate.getLayout = (page) => <Layout title={"Teamplate"}>{page}</Layout>

export default Teamplate
