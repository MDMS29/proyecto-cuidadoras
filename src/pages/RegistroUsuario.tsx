import axios from 'axios'
import { useState } from 'react'

import Swal from 'sweetalert2'

const RegistroUsuario = () => {

    const [usuario, setUsuario] = useState('')
    const [contrasena, setContrasena] = useState('')

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        if ([usuario, contrasena].includes('')) {
            return Swal.fire({
                icon: 'error',
                text: '¡Debe llenar todos los campos!'
            })
        }

        try {
            const { data } = await axios.post('http://localhost:4000/api/usuario/registrarUsuario', { usuario, contrasena })


            return Swal.fire({
                icon: 'success',
                text: `${data.msg}`
            })

        } catch (error) {
            console.log(error)
            return
        }

    }

    return (
        <form onSubmit={handleSubmit} className='flex z-10'>
            <input className='z-10 border border-slate-900 ' type="text" value={usuario} onChange={e => setUsuario(e.target.value)} />
            <input className='z-10 border border-slate-900 ' type="text" value={contrasena} onChange={e => setContrasena(e.target.value)} />
            <input className='z-10 border border-slate-900 ' type="submit" value="enviar" />
        </form>
    )
}

export default RegistroUsuario