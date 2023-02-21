import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'

import axios from 'axios'

interface props {
    children: JSX.Element | JSX.Element[]
}

export const AuthProvider = ({ children }: props) => {

    const [auth, setAuth] = useState({})
    const [cargando, setCargando] = useState({})

    const navigate = useNavigate()

    let token: any

    useEffect(() => {
        const autenticarUsuario = async () => {
            //Se extrae el JWT para aprobar el inicio de sesion.
            token = localStorage.getItem('token')
            if (!token) {
                setCargando(false)
                return
            }
            
            //Bearer token y lo revisa en el checkout del backend.
            const config = {
                headers: {
                    "Content-Type": "apllication/json",
                    Authorization: `Bearer ${token}`
                }
            }
            
            try {
                const { data } = await axios('http://localhost:4000/api/usuario/perfil', config)
                console.log(data)
                setAuth(data)
                //Siempre que haya un token al iniciar, redireccionara a la pag principal.
            } catch (error) {
                setAuth({})
            }
            setCargando(false)
        }
        autenticarUsuario()
        if (token) {
            navigate('/auth')
        }else{
            navigate('/')
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            auth, setAuth
        }}>
            {children}
        </AuthContext.Provider>
    )
}