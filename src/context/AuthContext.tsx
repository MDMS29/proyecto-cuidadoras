import { createContext } from "react";

export type AuthContextProps = {
    auth : any
    setAuth : any
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

