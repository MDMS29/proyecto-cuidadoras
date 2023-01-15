import { useState } from 'react'
import useSelect from '../hooks/useSelect'
import { siNo, tiposDocumentos, genero, servicios } from '../helpers/Opciones'
import { formatearFecha } from '../helpers/index'

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

const InformacionPrincipal = () => {

    const [alergias, SelectAlergias] = useSelect('Alergias', siNo)
    const [tipoDocumento, SelectTipoDocumento] = useSelect('Tipo de Documento', tiposDocumentos)
    const [sexo, SelectGenero] = useSelect('Sexo', genero)
    const [servicio, SelectServicio] = useSelect('Servicio solicitado', servicios)
    const [wifi, SelectWifi] = useSelect('Wifi', siNo)

    const [edad, setEdad] = useState('')
    let fechaFormateada = formatearFecha(Date())
    let fechaLimite = `${fechaFormateada[2]}-${fechaFormateada[1]}-${fechaFormateada[0]}`


    return (
        <div className='px-2 m-4 overflow-hidden md:flex md:flex-col'>
            <div className='flex flex-wrap md:flex-nowrap items-center '>
                <div className='w-full sm:w-1/2'>
                    <TextField id="standard-basic" label="entidad remitente" variant="standard" className='px-2 py-1 w-full sm:w-11/12' />
                </div>
                <div className='my-2 flex items-center w-full flex-wrap justify-center'>
                    <div className='mr-5 w-96'>
                        <SelectAlergias />
                    </div>
                </div>
                {alergias == "true" && (
                    <div className=' w-full'>
                        <textarea className='border border-gray-400 outline-none font-normal text-lg px-2 py-1 w-full' placeholder='Tipos de alergias...' />
                    </div>
                )}

            </div>

            <div className='w-full my-4'>
                <TextField id="standard-basic" label="nombre y apellido" variant="standard" className=' w-full sm:w-3/4 px-2 py-1' />
            </div>

            <div className='my-4 w-full sm:flex sm:items-center'>
                <div className='my-2 w-full'>
                    <SelectTipoDocumento />
                </div>
                <div className='my-2 sm:w-full'>
                    <TextField type="number" id="standard-basic" label="identificación" variant="standard" className='px-2 py-1 w-full sm:w-3/4' />
                </div>
            </div>

            <div className='my-4 w-full sm:flex sm:items-center'>
                <div className='w-full my-2'>
                    <label htmlFor="" className='font-semibold text-base block'>fecha de nacimiento</label>
                    <input type="date" min="1900-01-01" max={fechaLimite} className='bg-slate-50 border-b  rounded border-b-gray-400 outline-none font-normal text-lg px-2 py-1 w-full sm:w-3/4' />
                </div>
                <div className='w-full my-2'>
                    <TextField type="number" id="standard-basic" label="edad" variant="standard" className='px-2 py-1 w-full sm:w-3/4' value={edad} onChange={e => setEdad(e.target.value.slice(0, 2))} />
                </div>
            </div>

            <div className='my-4 w-full sm:flex sm:items-center'>
                <div className='my-2 w-full'>
                    <SelectGenero />
                </div>
                <div className='my-2 sm:w-full'>
                    <label htmlFor="" className='font-semibold text-base block'>fecha de ingreso</label>
                    <input type="date" min="2010-01-01" max={fechaLimite} className='bg-slate-50 border-b  rounded border-b-gray-400 outline-none font-normal text-lg px-2 py-1 w-full sm:w-3/4' />
                </div>
            </div>

            <div className='my-4'>
                <TextField id="standard-basic" label="diagnostico" variant="standard" className='px-2 py-1 w-full sm:h-20' multiline rows={3} />
            </div>

            <div className='my-4 w-full sm:flex sm:items-center'>
                <div className='my-2 w-full'>
                    <TextField id="standard-basic" label="dirección" variant="standard" className='px-2 py-1 w-full sm:w-3/4' />
                </div>
                <div className='my-2 w-full'>
                    <TextField id="standard-basic" label="barrio" variant="standard" className='px-2 py-1 w-full sm:w-3/4' />
                </div>
            </div>

            <div className='my-4 w-full sm:flex sm:items-center'>
                <div className='my-2 w-full '>
                    <SelectServicio />
                </div>
                <div className='my-2 sm:w-full'>
                    <div className='flex items-center'>
                        <TextField type="number" id="standard-basic" label="tiempo" variant="standard" className='px-2 py-1 w-3/4 sm:w-3/4 flex' InputProps={{endAdornment: <InputAdornment position="start">Horas</InputAdornment> }} />
                    </div>
                </div>
            </div>

            <div className='my-4 w-full sm:flex sm:items-center'>
                <div className='my-2 w-full'>
                    <TextField id="standard-basic" label="eps" variant="standard" className='px-2 py-1 w-full sm:w-3/4' />
                </div>
                <div className='my-2 w-full'>
                    <TextField id="standard-basic" label="servicio urgencia" variant="standard" className='px-2 py-1 w-full sm:w-3/4' />
                </div>
            </div>

            <div className='my-4 w-full sm:flex sm:items-center'>
                <div className='my-2 w-full'>
                    <TextField id="standard-basic" label="clinicas adscritas" variant="standard" className='px-2 py-1 w-full sm:w-3/4' />
                </div>
            </div>

            <div className='my-4 w-full sm:flex sm:items-center'>
                <div className='my-2 w-full'>
                    <TextField id="standard-basic" label="medico tratante" variant="standard" className='px-2 py-1 w-full sm:w-3/4' />
                </div>
                <div className='my-2 w-full'>
                    <TextField type="number" id="standard-basic" label="telefono" variant="standard" className='px-2 py-1 w-full sm:w-3/4' />
                </div>
            </div>

            <div className='my-4 w-full sm:flex sm:items-center'>
                <div className='my-2 w-full'>
                    <TextField id="standard-basic" label="nombre del familiar - 1" variant="standard" className='px-2 py-1 w-full sm:w-3/4' />
                </div>

                <div className='my-2 w-full'>
                    <TextField id="standard-basic" label="parentesco" variant="standard" className='px-2 py-1 w-full sm:w-3/4' />
                </div>
            </div>

            <div className='mb-7 w-full sm:flex sm:items-center'>
                <div className='my-2 w-full'>
                    <TextField type="number" id="standard-basic" label="telefono" variant="standard" className='px-2 py-1 w-full sm:w-3/4' />
                </div>

                <div className='my-2 w-full'>
                    <TextField id="standard-basic" label="direccion" variant="standard" className='px-2 py-1 w-full sm:w-3/4' />
                </div>
            </div>

            <div className='mb-4 w-full sm:flex sm:items-center'>
                <div className='my-2 w-full'>
                    <TextField id="standard-basic" label="nombre del familiar - 2" variant="standard" className='px-2 py-1 w-full sm:w-3/4' />
                </div>
                <div className='my-2 w-full'>
                    <TextField type="email" id="standard-basic" label="correo electronico" variant="standard" className='px-2 py-1 w-full sm:w-3/4' />
                </div>
            </div>

            <div className='my-4 w-full sm:flex sm:items-center'>
                <div className='my-2 w-full'>
                    <TextField id="standard-basic" label="parentesco" variant="standard" className='px-2 py-1 w-full sm:w-3/4' />
                </div>

                <div className='my-2 w-full'>
                    <TextField type="number" id="standard-basic" label="telefono" variant="standard" className='px-2 py-1 w-full sm:w-3/4' />
                </div>
            </div>

            <div className='my-4 w-full sm:flex sm:items-center'>
                <div className='my-2 w-full'>
                    <SelectWifi />
                </div>

                <div className='my-2 w-full'>
                    <TextField id="standard-basic" label="direccion" variant="standard" className='px-2 py-1 w-full sm:w-3/4' />
                </div>
            </div>
        </div>
    )
}

export default InformacionPrincipal