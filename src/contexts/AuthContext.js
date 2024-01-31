import { createContext } from "react";

const AuthContext = createContext();
const AuthContextProvider = AuthContext.Provider;
const AuthContextConsumer = AuthContext.Consumer;

export { AuthContext, AuthContextConsumer, AuthContextProvider }