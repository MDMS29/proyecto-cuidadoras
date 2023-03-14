import { useContext, useState } from 'react'

import PacienteListado from '../components/PacienteListado'
import { PacientesContext } from '../context/PacientesContext'

export interface IRegistroPaciente {
    nombres: string
    apellidos: string
    tipoDoc: string
    nIdent: string
    fechaNac: string
    edad: number
    sexo: string
    direccion: string
    eps: string
    fechaIng: string
    fechaSali?: string
}

const ListadoPacientes = () => {

    const { state, setState } = useContext(PacientesContext)


    const [pacientes, setPacientes] = useState(state.pacientes)

    return (
        <div className='flex flex-col z-10  bg-white' >
            <h1 className="p-5 text-xl font-semibold text-center  text-gray-900 mb-4  hover:font-extrabold">
                Consulta de Pacientes
            </h1>

            <div className="relative flex justify-end mr-5 mb-4 flex-wrap gap-3">
                <div className='flex justify-end gap-3 items-center'>
                    <label htmlFor="">Nombres</label>
                    <input type="text" className="flex p-2 pl-4 mr-5 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Buscar por Nombre" />
                </div>
                <div className='flex justify-end gap-3 items-center'>
                    <label htmlFor="">Apellidos</label>
                    <input type="text" className="flex p-2 pl-4 mr-5 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Buscar por Apellido" />
                </div>
                <div className='flex justify-end gap-3 items-center'>
                    <label htmlFor="">Fecha de Ingreso</label>
                    <input type="date" className="flex p-2 pl-4 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " />
                </div>
                <div className='flex justify-end gap-3 items-center'>
                    <label htmlFor="">Fecha de Salida</label>
                    <input type="date" className="flex p-2 pl-4 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " />
                </div>
            </div>

            <div className={`relative shadow-md max-md:overflow-x-scroll sm:rounded-lg`}>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-center">
                                #
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                N° Identificación
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Nombres
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Apellidos
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Fecha Ingreso
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Fecha Salida
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Sexo
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                EPS
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {pacientes.map(paciente => (
                            <PacienteListado key={paciente.idpaciente} paciente={paciente} />
                        ))}
                    </tbody>
                </table>
            </div>

        </div >
    )
}

export default ListadoPacientes