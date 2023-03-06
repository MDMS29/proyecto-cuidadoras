import { useState } from 'react'

import TextField from '@mui/material/TextField';
import { useAsyncError } from 'react-router-dom';

const DescripcionFisica = () => {

  const [olfato, InputOlfato] = useState()
  const [tacto, InputTacto] = useState()
  const [vista, InputVista] = useState()
  const [oido, InputOido] = useState()
  const [piel, InputPiel] = useState()

  return (
    <div className='px-2 m-4 overflow-hidden md:flex md:flex-col'>
      <div className='my-4 w-full sm:flex sm:items-center gap-5'>
        <div className='my-2 w-full'>
          <div className="relative z-0 mb-6 group flex items-center w-full">
            <div className='block lg:w-11/12 w-full'>
              <textarea name="Olfato" id="Olfato" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={olfato} onChange={(e: any) => InputOlfato(e.target.value)} />
              <label htmlFor="Olfato" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Olfato</label>
            </div>
          </div>
        </div>
        <div className='my-2 w-full'>
          <div className="relative z-0 mb-6 group flex items-center w-full">
            <div className='block lg:w-11/12 w-full'>
              <textarea name="Tacto" id="Tacto" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={tacto} onChange={(e: any) => InputTacto(e.target.value)} />
              <label htmlFor="Tacto" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tacto</label>
            </div>
          </div>
        </div>
      </div>
      <div className='my-4 w-full sm:flex sm:items-center gap-5'>
        <div className='my-2 w-full'>
          <div className="relative z-0 mb-6 group flex items-center w-full">
            <div className='block lg:w-11/12 w-full'>
              <textarea name="Vista" id="Vista" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={vista} onChange={(e: any) => InputVista(e.target.value)} />
              <label htmlFor="Vista" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Vista</label>
            </div>
          </div>
        </div>
        <div className='my-2 w-full'>
          <div className="relative z-0 mb-6 group flex items-center w-full">
            <div className='block lg:w-11/12 w-full'>
              <textarea name="Oido" id="Oido" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={oido} onChange={(e: any) => InputOido(e.target.value)} />
              <label htmlFor="Oido" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Oído</label>
            </div>
          </div>
        </div>
      </div>
      <div className='my-4 w-full sm:flex sm:items-center justify-center'>
      <div className="relative z-0 mb-6 group flex items-center w-full">
            <div className='block lg:w-11/12 w-full'>
              <textarea name="Piel" id="Piel" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={piel} onChange={(e: any) => InputPiel(e.target.value)} />
              <label htmlFor="Piel" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Piel</label>
            </div>
          </div>
      </div>

    </div>
  )
}

export default DescripcionFisica