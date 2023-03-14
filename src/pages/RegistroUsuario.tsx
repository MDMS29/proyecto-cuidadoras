import axios from 'axios'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const RegistroUsuario = () => {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [tipoIdent, setTipoIdent] = useState('')
    const [nIdent, setNIdent] = useState('')
    const [tipoUsuario, setTipoUsuario] = useState('')
    const [contrasena, setContrasena] = useState('')
    const [contrasenaConfirm, setContrasenaConfirm] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        if ([nombre, apellido, tipoIdent, nIdent, tipoUsuario, contrasena, contrasenaConfirm].includes('')) {
            return Swal.fire({
                icon: 'error',
                text: '¡Debe llenar todos los campos!'
            })
        }
        if (contrasena != contrasenaConfirm) return Swal.fire({ icon: 'success', text: '¡Las contraseñas no coinciden!' })
        try {
            const { data } = await axios.post('http://localhost:4000/api/usuario/registrarUsuario', { nombre, apellido, tipoIdent, nIdent, tipoUsuario, contrasena })
            if (data.msg) {
                Swal.fire({ icon: 'success', text: `${data.msg}` })
            } else if (data.msgEx) {
                Swal.fire({ icon: 'error', text: `${data.msgEx}` })
            }
            setNombre('')
            setApellido('')
            setTipoIdent('')
            setNIdent('')
            setTipoUsuario('')
            setContrasena('')
            setContrasenaConfirm('')
        } catch (error) {
            return error;
        }
    }
    return (
        <div className='flex justify-center items-center h-[500px]'>
            <button className='z-10 flex items-center bg-blue-500 hover:bg-blue-800 transition-colors text-white px-3 py-1 uppercase font-bold absolute left-10 top-14 rounded' type='button' onClick={() => navigate(-1)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                </svg>

               <p className='ml-2'>Volver</p>
            </button>
            <form onSubmit={handleSubmit} className='z-10 bg-white flex items-center flex-col w-3/4 max-w-[550px] gap-3 rounded-lg py-3 shadow-lg '>
                <h1 className='font-semibold text-4xl '>Registrar Usuario</h1>

                <div className="relative z-0 mb-4 group flex items-center w-5/6 gap-4">
                    <div className='block w-11/12'>
                        <input type="text" name="nombre" id="nombre" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={nombre || ""} onChange={(e: any) => setNombre(e.target.value)} required />
                        <label htmlFor="nombre" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre</label>
                    </div>
                    <div className='block w-11/12'>
                        <input type="text" name="apellido" id="apellido" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={apellido || ""} onChange={(e: any) => setApellido(e.target.value)} required />
                        <label htmlFor="apellido" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellido</label>
                    </div>
                </div>

                <div className="relative z-0 mb-4 group flex items-center w-5/6 gap-4">
                    <div className='block w-11/12'>
                        <label htmlFor="tipoIdent" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Tipo de Identificación</label>
                        <select id="tipoIdent" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={tipoIdent || ""} onChange={(e: any) => setTipoIdent(e.target.value)}>
                            <option selected>-- Seleccione --</option>
                            <option value="CC">Cédula de Ciudadanía</option>
                            <option value="CE">Cédula de Extranjería</option>
                        </select>
                    </div>
                    <div className='block w-11/12 relative top-4'>
                        <input type="text" name="nIdenti" id="nIdenti" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={nIdent} onChange={(e: any) => setNIdent(e.target.value)} required />
                        <label htmlFor="nIdenti" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">N° Identificación</label>
                    </div>
                </div>
                <div className="relative z-0 mb-4 group flex items-center w-5/6 gap-4">
                    <div className='block w-11/12'>
                        <label htmlFor="tipoUsuario" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Tipo de Usuario</label>
                        <select id="tipoUsuario" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={tipoUsuario || ""} onChange={(e: any) => setTipoUsuario(e.target.value)}>
                            <option selected>-- Seleccione --</option>
                            <option value="ADMINISTRADOR">Administrador</option>
                            <option value="CUIDADOR(A)">Cuidador(a)</option>
                            <option value="MEDICO">Medico</option>
                        </select>
                    </div>
                </div>
                <div className="relative z-0 mb-4 group flex items-center w-5/6 gap-4">
                    <div className='block w-11/12'>
                        <input type="password" name="contrasena" id="contrasena" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={contrasena || ""} onChange={(e: any) => setContrasena(e.target.value)} required />
                        <label htmlFor="contrasena" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contraseña</label>
                    </div>
                    <div className='block w-11/12'>
                        <input type="password" name="contrasenaConfirm" id="contrasenaConfirm" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={contrasenaConfirm || ""} onChange={(e: any) => setContrasenaConfirm(e.target.value)} required />
                        <label htmlFor="contrasenaConfirm" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirmar Contraseña</label>
                    </div>
                </div>

                <input type='submit' value='Ingresar' className='rounded bg-sky-600 px-6 py-2.5 font-semibold uppercase  text-white shadow-md transition duration-150 ease-in-out hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none hover:cursor-pointer' />
            </form>
        </div>
    )
}

export default RegistroUsuario