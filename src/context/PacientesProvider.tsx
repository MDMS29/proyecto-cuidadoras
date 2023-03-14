import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { IPaciente, PacientesContext, PacientesContextProps } from './PacientesContext'

import axios from 'axios'
import Swal from 'sweetalert2'

interface props {
    children: JSX.Element | JSX.Element[]
}

export const PacientesProvider = ({ children }: props) => {

    const navigate = useNavigate()

    const [state, setState] = useState<PacientesContextProps>({
        nombres: '',
        apellidos: '',
        tipoDoc: '',
        nIdent: '',
        fechaNac: '',
        edad: 0,
        sexo: '',
        direccion: '',
        eps: '',
        fechaIng: '',
        fechaSali: '',
        funcion: 0,
        pacientes: []
    })

    const listarPacientes = async () => {
        try {
            const { data } = await axios('http://localhost:4000/api/paciente/obtenerPacientes')
            setState({...state, pacientes: data })
            return
        } catch (error) {
            console.log(error)
        }
    }

    const insertarPaciente = async () => {
        const { nombres, apellidos, tipoDoc, nIdent, fechaNac, edad, sexo, direccion, eps, fechaIng } = state

        if ([nombres, apellidos, tipoDoc, nIdent, fechaNac, edad, sexo, direccion, eps, fechaIng].includes('' || 0)) {
            setState({ ...state, funcion: 0 })
            return Swal.fire({
                icon: 'error',
                text: '¡Debe llenar todos los campos!'
            })
        }

        try {
            const { data } = await axios.post('http://localhost:4000/api/paciente/registrarPaciente', { nombres, apellidos, tipoDoc, nIdent, fechaNac, edad, sexo, direccion, eps, fechaIng })
            if (data.msgEx) {
                setState({
                    ...state, nombres: '',
                    apellidos: '',
                    tipoDoc: '',
                    nIdent: '',
                    fechaNac: '',
                    edad: 0,
                    sexo: '',
                    direccion: '',
                    eps: '',
                    fechaIng: '',
                    fechaSali: '',
                    funcion: 0
                })
                return Swal.fire({
                    icon: 'success',
                    text: data.msgEx
                })
            } else if (data.msgErr) {
                setState({
                    ...state, nombres: '',
                    apellidos: '',
                    tipoDoc: '',
                    nIdent: '',
                    fechaNac: '',
                    edad: 0,
                    sexo: '',
                    direccion: '',
                    eps: '',
                    fechaIng: '',
                    fechaSali: '',
                    funcion: 0
                })
                return Swal.fire({
                    icon: 'error',
                    text: data.msgErr
                })
            }
        } catch (error) {
            return console.log(error)
        }
    }

    useEffect(() => {
        if (state.funcion == 1) { insertarPaciente() }
    }, [state.funcion])

    useEffect(() => { listarPacientes() }, [])


    return (
        <PacientesContext.Provider value={{
            state,
            setState
        }}>
            {children}
        </PacientesContext.Provider>
    )
}