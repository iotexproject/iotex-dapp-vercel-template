import { toJS } from "mobx"
import { enableStaticRendering } from "mobx-react-lite"
import { createContext, useContext } from "react"
import { BaseStore } from "./base"
import { LangStore } from "./lang"

const isServer = typeof window === "undefined"

enableStaticRendering(isServer)

export const rootStore = {
  base: new BaseStore(),
  lang: new LangStore(),
}

export const StoresContext = createContext(rootStore)

export const useStore = () => useContext(StoresContext)

if (!isServer) {
  //@ts-ignore
  window.store = new Proxy(rootStore, {
    get(target, props, receiver) {
      return toJS(target[props])
    },
  })
}
