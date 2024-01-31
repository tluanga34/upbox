import { createContext } from "react"

const GlobalContext = createContext();
const GlobalContextProvider = GlobalContext.Provider;
const GlobalContextConsumer = GlobalContext.Consumer;

export {GlobalContext, GlobalContextProvider, GlobalContextConsumer}