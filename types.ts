import { BlitzApiRequest, BlitzApiResponse, DefaultCtx } from "blitz"
import { IncomingMessage } from "http"

declare module "blitz" {
  export interface Ctx extends DefaultCtx {
    req: BlitzApiRequest | IncomingMessage
    res: BlitzApiResponse
  }
}
