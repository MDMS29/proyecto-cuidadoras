import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { AuthContext, AuthContextProps } from './AuthContext'

import axios from 'axios'
interface props {
    children: JSX.Element | JSX.Element[]
}

export const AuthProvider = ({ children }: props) => {

    const [state, setState] = useState<AuthContextProps>({
        auth: {
            idusuario: 0,
            nombre: '',
            apellido: '',
            tipo_ident: '',
            n_identificacion: '',
            tipo_usuario: ''
        }
    })

    const navigate = useNavigate()
    let token: any
    useEffect(() => {
        const autenticarUsuario = async () => {
            token = localStorage.getItem('token')
            if (!token) {
                return
            }
            const config = {
                headers: {
                    "Content-Type": "apllication/json",
                    Authorization: `Bearer ${token}`
                }
            }
            try {
                const { data } = await axios('http://localhost:4000/api/usuario/perfil', config)
                setState({ ...state, auth: data })
            } catch (error) {
                setState({
                    ...state, auth: {
                        idusuario: 0,
                        nombre: '',
                        apellido: '',
                        tipo_ident: '',
                        n_identificacion: '',
                        tipo_usuario: ''
                    }
                })
            }
        }
        autenticarUsuario()
        if (token) {
            navigate('/auth')
        } else {
            navigate('/')
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            state, setState
        }}>
            {children}
        </AuthContext.Provider>
    )
}