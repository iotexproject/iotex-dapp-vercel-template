import { Ctx } from "blitz"

export default async function templateQuery(query: { foo: string }, ctx: Ctx) {
  return query
}
