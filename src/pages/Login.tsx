import { useState, useEffect, useContext } from 'react'
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"

import Swal from 'sweetalert2'

import { AuthContext } from '../context/AuthContext'

const Login = () => {

    // const { auth, setAuth } = useContext(AuthContext)


    const [usuario, setUsuario] = useState('')
    const [contrasena, setContrasena] = useState('')

    // const navigate = useNavigate()

    // const handleSubmit = async (e: any) => {
    //     e.preventDefault()

    //     if ([usuario, contrasena].includes('')) {
    //         return Swal.fire({
    //             icon: 'error',
    //             text: '¡Debe llenar todos los campos!'
    //         })
    //     }

    //     try {
    //         const { data } = await axios.post('http://localhost:4000/api/usuario/login', { usuario, contrasena })
            
    //         //Validar informacion del BackEnd
    //         if (data.msg) {
    //             setUsuario('')
    //             setContrasena('')

    //             return Swal.fire({
    //                 icon: 'error',
    //                 text: `${data.msg}`
    //             })
    //         }

    //         //Guardamos el JWT para poder saber quien esta iniciando sesión.
    //         localStorage.setItem('token', data.token)

    //         setAuth(data)

    //         navigate('/auth')

    //     } catch (error) {
    //         console.log(error)
    //         return
    //     }

    // }

    return (
        <div className='flex justify-center items-center h-[500px]'>
            <form  className='z-10 bg-white flex items-center flex-col w-3/4 max-w-[550px] gap-3 rounded-lg p-6 shadow-lg'>
                <h1 className='font-semibold text-4xl '>Iniciar Sesión</h1>

                <div className="relative z-0 mb-6 group flex items-center w-5/6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 mt-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <div className='block w-11/12'>
                        <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={usuario} onChange={(e: any) => setUsuario(e.target.value)} required />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Usuario</label>
                    </div>
                </div>

                <div className="relative z-0 mb-6 group flex items-center w-5/6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 mt-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                    </svg>
                    <div className='block w-11/12'>
                        <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={contrasena} onChange={(e: any) => setContrasena(e.target.value)} required />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contraseña</label>
                    </div>
                </div>
                <input type='submit' value='Ingresar' className='rounded bg-sky-600 px-6 py-2.5 font-semibold uppercase  text-white shadow-md transition duration-150 ease-in-out hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none hover:cursor-pointer' />            </form>
        </div>
    )
}

export default Login