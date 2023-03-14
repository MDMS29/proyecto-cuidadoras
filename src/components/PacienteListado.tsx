import React, { useState } from 'react'
import { IRegistroPaciente } from '../pages/ListadoPacientes'

const PacienteListado = ({ paciente }: IRegistroPaciente) => {

    const [op, setOp] = useState(false)
    const verOpciones = () => setOp(!op)

    return (
        <tr className="bg-white border-b  hover:bg-gray-50">
            <th className="px-6  py-4 text-center">
                {paciente.idpaciente}
            </th>
            <th className="px-6  py-4 text-center">
                {paciente.identificacion}
            </th>
            <td className="px-6  py-4 text-center">
                {paciente.nombres}
            </td>
            <td className="px-6  py-4 text-center">
                {paciente.apellidos}
            </td>
            <td className="px-6  py-4 text-center">
                {paciente.fechaIngreso.split('T')[0]}
            </td>
            <td className="px-6  py-4 text-center">
                {paciente.fechaSalida}
            </td>
            <td className="px-6  py-4 text-center">
                {paciente.sexo}
            </td>
            <td className="px-6  py-4 text-center">
                {paciente.eps}
            </td>
            <td className="px-6  py-4 text-center flex flex-col justify-center gap-2 items-center">
                <button type='button' className="flex gap-4 font-semibold" onClick={verOpciones}>
                    Ver Mas
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`w-6 h-6 ${op && '-rotate-180'} transition-all`}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
                {op && (
                    <div className='flex flex-col absolute top-20 max-lg:top-24 bg-white p-1 z-10 '>
                        <a href="#" className="font-medium text-center  hover:bg-blue-500 hover:text-white mb-2 px-2 py-1">Inventario</a>
                        <a href="#" className="font-medium text-center  hover:bg-blue-500 hover:text-white mb-2 px-4 py-1">Control Deposición</a>
                        <a href="#" className="font-medium text-center  hover:bg-blue-500 hover:text-white mb-2 px-4 py-1">Signos Vitales</a>
                        <a href="#" className="font-medium text-center  hover:bg-blue-500 hover:text-white mb-2 px-4 py-1">Editar</a>
                    </div>

                )}
            </td>
        </tr>
    )
}

export default PacienteListado