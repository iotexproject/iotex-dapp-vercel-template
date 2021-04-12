import { BlitzPage, invoke } from "blitz"
import { observer } from "mobx-react-lite"
import { useStore } from "app/stores"
import { globalStyles } from "app/utils/styles"
import Layout from "app/layouts/Layout"
import templateMutation from "app/mutations/templateMutation"
import { useEffect } from "react"
import templateQuery from "app/queries/templateQuery"

const Home: BlitzPage = observer(() => {
  const { lang } = useStore()

  useEffect(() => {
    invoke(templateQuery, { foo: "123" }).then(console.log)
    invoke(templateMutation, { name: "123", password: "123" }).then(console.log)
  }, [])
  return (
    <div className={globalStyles.container.className}>
      <div>{lang.t("hello", { message: "nextjs" })}</div>
    </div>
  )
})

Home.getLayout = (page) => <Layout title={"Home"}>{page}</Layout>

export default Home
