import React from 'react'
import { useNavigate } from 'react-router-dom'

const ModalControlDeposicion = () => {

    const navigate = useNavigate()

    return (
        <div className='black'>
            <div className='blur-0'>
                <div className='px-7 flex justify-around text-xl mb-4'>
                    <label>Usuario : <span>Maryana De La Cruz</span></label>
                    <label>Mes/Año : <span>12 - 2022</span></label>
                </div>
                <div className="relative overflow-x-auto border shadow-md ">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-center">
                                    Fecha
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    Dia
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    Noche
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    Observaciones
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    No Veces
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    Firma
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className='text-base'>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 text-center text-gray-900 whitespace-nowrap dark:text-white">
                                    17 - 12 - 2022
                                </th>
                                <td className="px-6 py-4 text-center">

                                </td>
                                <td className="px-6 py-4 text-center ">
                                    X
                                </td>
                                <td className="px-6 py-4 text-center">
                                    No Realizo
                                </td>
                                <td className="px-6 py-4 text-center">
                                    0
                                </td>
                                <td className="px-6 py-4 text-center">
                                    Laura Mendoza
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 text-center text-gray-900 whitespace-nowrap dark:text-white">
                                    18 - 12 - 2022
                                </th>
                                <td className="px-6 py-4 text-center">
                                    X
                                </td>
                                <td className="px-6 py-4 text-center">

                                </td>
                                <td className="px-6 py-4 text-center">
                                    No Realizo
                                </td>
                                <td className="px-6 py-4 text-center">
                                    0
                                </td>
                                <td className="px-6 py-4 text-center">
                                    Diana Sanchez
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ModalControlDeposicion