import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AntecedentesPersonales from '../components/AntecedentesPersonales'
import DescripcionFisica from '../components/DescripcionFisica'
import GradoAutonomia from '../components/GradoAutonomia'
import InformacionPrincipal from '../components/InformacionPrincipal'

import { PacientesContext } from '../context/PacientesContext'

const FormularioPaciente = () => {

    const navigate = useNavigate()

    const { state, setState } = useContext(PacientesContext)

    const handleClick = (e: any) => {
        e.preventDefault();
        setState({...state, funcion: 1 })
    };

    return (
        <form className='p-3 flex flex-col items-center uppercase'>
            <button className='z-10 flex items-center bg-blue-500 hover:bg-blue-800 transition-colors text-white px-3 py-1 uppercase font-bold absolute left-10 top-14 rounded' type='button' onClick={() => navigate(-1)}>
                <p className='ml-2'>Volver</p>
            </button>
            <div className='z-10 mb-5'>
                <h1 className='font-semibold text-2xl text-center z-10'>INGRESO A PROGRAMA DE CUIDADOS PRIMARIOS</h1>
                <div className='flex justify-around font-semibold text-xl mt-2'>
                    <div>F-SER043</div>
                    <div>VERSION : 04</div>
                </div>
            </div>

            <details className='mb-5 bg-white p-2 rounded-lg shadow w-full z-10'>
                <summary className='flex font-semibold text-lg items-center justify-between cursor-pointer lg:hover:text-gray-400 transition ease-in duration-100
                text-gray-900'>
                    INFORMACIÓN PRINCIPAL
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  className="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                </summary>
                <InformacionPrincipal />
            </details>

            <details className='mb-5 bg-white p-2 rounded-lg shadow w-full z-10'>
                <summary className='flex font-semibold text-lg items-center justify-between cursor-pointer lg:hover:text-gray-400 transition ease-in duration-100
                text-gray-900'>
                    ANTECEDENTES PERSONALES
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                </summary>
                <AntecedentesPersonales />
            </details>

            <details className='mb-5 bg-white p-2 rounded-lg shadow w-full z-10'>
                <summary className='flex font-semibold text-lg items-center justify-between cursor-pointer lg:hover:text-gray-400 transition ease-in duration-100
                text-gray-900'>
                    GRADO DE AUTONOMIA
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                </summary>
                <GradoAutonomia />
            </details>

            <details className='mb-5 bg-white p-2 rounded-lg shadow w-full'>
                <summary className='flex font-semibold text-lg items-center justify-between cursor-pointer lg:hover:text-gray-400 transition ease-in duration-100
                text-gray-900'>
                    DESCRIPCION FISICA DEL USUARIO
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                </summary>
                <DescripcionFisica />
            </details>

            <button type="submit" className='w-56 bg-blue-500 hover:bg-blue-700 transition-colors text-white font-bold text-lg uppercase rounded px-2 py-1' onClick={handleClick}>Enviar información</button>

        </form>
    )
}

export default FormularioPaciente