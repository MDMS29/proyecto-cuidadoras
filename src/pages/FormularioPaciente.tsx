import React from 'react'
import AntecedentesPersonales from '../components/AntecedentesPersonales'
import DescripcionFisica from '../components/DescripcionFisica'
import GradoAutonomia from '../components/GradoAutonomia'
import HeaderFomulario from '../components/HeaderFomulario'
import InformacionPrincipal from '../components/InformacionPrincipal'

const FormularioPaciente = () => {

    return (
        <form className='p-3 flex flex-col items-center uppercase'>

            <details className='mb-5 bg-white p-2 rounded-lg shadow w-full z-10' >
                <summary className='flex font-semibold text-lg items-center justify-between cursor-pointer lg:hover:text-cyan-400 ltransition ease-in duration-300'>
                    INFORMACION PRINCIPAL
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                </summary>
                <InformacionPrincipal />
            </details>

            <details className='mb-5 bg-white p-2 rounded-lg shadow w-full z-10'>
                <summary className='flex font-semibold text-lg items-center justify-between cursor-pointer lg:hover:text-cyan-400 transition ease-in duration-300'>
                    ANTECEDENTES PERSONALES
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                </summary>
                <AntecedentesPersonales />
            </details>

            <details className='mb-5 bg-white p-2 rounded-lg shadow w-full z-10'>
                <summary className='flex font-semibold text-lg items-center justify-between cursor-pointer lg:hover:text-cyan-400 transition ease-in duration-300'>
                    GRADO DE AUTONOMIA
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                </summary>
                <GradoAutonomia />
            </details>

            <details className='mb-5 bg-white p-2 rounded-lg shadow w-full'>
                <summary className='flex font-semibold text-lg items-center justify-between cursor-pointer lg:hover:text-cyan-400 transition ease-in duration-300'>
                    DESCRIPCION FISICA DEL USUARIO
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                </summary>
                <DescripcionFisica />
            </details>
            
            <button className='w-56 bg-blue-500 hover:bg-blue-700 transition-colors text-white font-bold text-lg uppercase rounded px-2 py-1'>Enviar información</button>
            
        </form>
    )
}

export default FormularioPaciente