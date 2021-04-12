import { BlitzPage, invoke } from "blitz"
import { observer } from "mobx-react-lite"
import Layout from "app/layouts/Layout"
import { useStore } from "app/stores"
import templateMutation from "app/mutations/templateMutation"
import templateQuery from "app/queries/templateQuery"
import { useEffect } from "react"
import { message } from "antd"

const Teamplate: BlitzPage = observer(() => {
  const { lang } = useStore()

  useEffect(() => {
    invoke(templateQuery, { foo: "123" }).then(console.log)
    invoke(templateMutation, { name: "test", password: "test" })
      .then(console.log)
      .catch((e) => {
        console.log(123, { e })
      })
  }, [])
  return (
    <div>
      <div>{lang.t("hello", { message: "nextjs" })}</div>
    </div>
  )
})

Teamplate.getLayout = (page) => <Layout title={"Teamplate"}>{page}</Layout>

export default Teamplate
