import { createContext } from "react";

export type AuthContextProps = {
    auth: {
        idusuario: number
        nombre: string
        apellido: string
        tipo_ident: string
        n_identificacion: string
        tipo_usuario: string
    }
}

export const AuthContext = createContext<{
    state: AuthContextProps;
    setState: React.Dispatch<React.SetStateAction<AuthContextProps>>
}>({
    state: {
        auth: {
            idusuario: 0,
            nombre: '',
            apellido: '',
            tipo_ident: '',
            n_identificacion: '',
            tipo_usuario: ''
        }
    },
    setState: () => { }
})