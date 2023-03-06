import React from 'react'
import { Link } from 'react-router-dom'

const ListadoPacientes = () => {
    return (
        <div>
            <h1 className="p-5 text-xl font-semibold text-center  text-gray-900 bg-white mb-4">
                Listado de Pacientes
            </h1>

        
            <div className="overflow-x-auto z-10 bg-white rounded-lg shadow overflow-y-auto ">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-center">
                                Nombres
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Apellidos
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Edad
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Sexo
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                EPS
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Fecha Ingreso
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Fecha Salida
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Opciones
                            </th>
                        </tr>
                    </thead>
                    <tbody className='text-base'>
                        

                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4 text-center whitespace-nowrap dark:text-white">
                                Jose Francisco
                            </td>
                            <td className="px-6 py-4 text-center">
                                Torres Rodriguez
                            </td>
                            <td className="px-6 py-4 text-center ">
                                {`${56} años`}
                            </td>
                            <td className="px-6 py-4 text-center ">
                                M
                            </td>
                            <td className="px-6 py-4 text-center">
                                SURA
                            </td>
                            <td className="px-6 py-4 text-center">
                                01 - 03 - 2023
                            </td>
                            <td className="px-6 py-4 text-center">
                                06 - 03 - 2023
                            </td>
                            <td className="px-6 py-4">
                                <details>
                                    <summary className='flex hover:cursor-pointer px-4 py-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                        </svg> Más
                                    </summary>
                                    <div className='absolute z-10 bg-white px-6 py-3 border flex flex-col'>
                                        <a href="">Editar</a>
                                        <a href="">Evolución</a>
                                        <Link to="/auth/control-deposicion/8">Control Deposición</Link>
                                        <a href="">Inventario</a>
                                    </div>
                                </details>

                            </td>
                        </tr>
                        

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListadoPacientes