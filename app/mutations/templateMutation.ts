import { resolver, Ctx } from "blitz"
import * as z from "zod"

export const testArgs = z.object({
  name: z.string(),
  password: z.string().optional(),
})
export type testArgsType = typeof testArgs["_type"]

export default async function templateMutation(args: testArgsType) {
  testArgs.parse(args)
  return args
}
