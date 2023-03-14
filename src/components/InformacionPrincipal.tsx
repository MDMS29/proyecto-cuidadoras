import { useState, useEffect, useContext } from 'react'
import useSelect from '../hooks/useSelect'
import { siNo, tiposDocumentos, genero, servicios } from '../helpers/Opciones'
import { formatearFecha } from '../helpers/index'
import { PacientesContext } from '../context/PacientesContext'

const InformacionPrincipal = () => {

    const { state, setState } = useContext(PacientesContext)
    //INPUTS
    const [entidadRemitente, InputEntRemi] = useState('')
    const [edad, InputEdad] = useState('')
    const [diagnostico, InputDiag] = useState('')
    const [barrio, InputBarrio] = useState('')
    const [tiempo, InputTiempo] = useState(0)
    const [servUrgen, InputServUrgen] = useState('')
    const [clinAds, InputClinAds] = useState('')
    const [medicTratan, InputMedicTratan] = useState('')
    const [telefono, InputTelefono] = useState('')
    const [nombFami1, InputNombFami1] = useState('')
    const [parentesco1, InputParentesco1] = useState('')
    const [telefFam1, InputTeleFam1] = useState('')
    const [direccFam1, InputDireccFam1] = useState('')
    const [nombFami2, InputNombFami2] = useState('')
    const [parentesco2, InputParentesco2] = useState('')
    const [correoFam2, InputCorreoFam2] = useState('')
    const [direccFam2, InputDireccFam2] = useState('')

    //SELECT
    const [alergias, SelectAlergias] = useSelect('Alergias', siNo)  
    const [servicio, SelectServicio] = useSelect('Servicio solicitado', servicios)

    let fechaFormateada = formatearFecha(Date())
    let fechaLimite = `${fechaFormateada[2]}-${fechaFormateada[1]}-${fechaFormateada[0]}`


    return (
        <div className='px-2 m-4 overflow-hidden md:flex md:flex-col'>
            {/* ENTIDAD REMITENTE Y ALERGIAS */}
            <div className='flex max-md:flex-wrap w-full'>
                <div className='max-md:w-full w-8/12 mt-3'>
                    <div className="relative z-0 mb-6 group flex items-center justify-center w-5/6">
                        <div className='block w-11/12 max-md:w-full'>
                            <input type="text" name="EntidadRemitente" id="EntidadRemitente" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={entidadRemitente} onChange={(e: any) => InputEntRemi(e.target.value)} />
                            <label htmlFor="EntidadRemitente" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">EntidadRemitente</label>
                        </div>
                    </div>
                </div>
                <div className='mr-5 flex justify-center'>
                    <SelectAlergias />
                </div>
                {alergias == "true" && (
                    <div className='flex justify-center w-full lg:w-8/12'>
                        <textarea className='border border-gray-400 outline-none font-normal text-lg px-2 py-1 w-full' placeholder='Tipos de alergias...' />
                    </div>
                )}

            </div>
            {/* NOMBRES Y APELLIDOS */}
            <div className='flex max-md:flex-wrap mt-4'>
                <div className="relative z-0 mb-6 group flex items-center justify-center w-full">
                    <div className='block w-11/12 max-md:w-full'>
                        <input type="text" name="Nombres" id="Nombres" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={state.nombres} onChange={(e: any) => setState({ ...state, nombres: e.target.value })} />
                        <label htmlFor="Nombres" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombres</label>
                    </div>
                </div>
                <div className="relative z-0 mb-6 group flex items-center justify-center w-full">
                    <div className='block w-11/12 max-md:w-full'>
                        <input type="text" name="Apellidos" id="Apellidos" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={state.apellidos} onChange={(e: any) => setState({ ...state, apellidos: e.target.value })} />
                        <label htmlFor="Apellidos" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellidos</label>
                    </div>
                </div>
            </div>
            {/* TIPO Y NUMERO DOCUMENTO*/}
            <div className='mt-4 w-full sm:flex sm:items-center'>
                <div className='my-2 md:w-8/12 block justify-center w-full md:mr-10'>
                    <div>
                        <label className=' block'>Tipo de Documento</label>
                        <select
                            className="text-center w-full text-lg my-2 bg-slate-50 py-2 px-2 rounded outline-none cursor-pointer"
                            value={state.tipoDoc} onChange={(e: any) => setState({ ...state, tipoDoc: e.target.value })}//para que tome el valor que se seleccione
                        >
                            <option value="">-- Seleccione --</option>
                            {
                                tiposDocumentos?.map((opcion) => (
                                    <option key={opcion.nombre} value={opcion.id}>
                                        {opcion.nombre}
                                    </option>
                                ))}
                        </select>
                    </div>
                </div>
                <div className='my-2 w-full lg:flex lg:justify-center'>
                    <div className="relative z-0 mb-6 group flex items-center w-full">
                        <div className='block lg:w-11/12 w-full'>
                            <input type="number" name="NumDoc" id="NumDoc" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={state.nIdent} onChange={(e: any) => setState({ ...state, nIdent: e.target.value })} />
                            <label htmlFor="NumDoc" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Numero de Documento</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className='my-4 w-full sm:flex sm:items-center'>
                <div className="relative z-0 mb-6 group flex items-center w-full">
                    <div className='block lg:w-11/12 w-full'>
                        <input type="date" name="fechaNac" max={fechaLimite} id="fechaNac" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={state.fechaNac} onChange={(e: any) => setState({ ...state, fechaNac: e.target.value })} />
                        <label htmlFor="fechaNac" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fecha de Nacimiento</label>
                    </div>
                </div>
                <div className='my-2 w-full lg:flex lg:justify-center'>
                    <div className="relative z-0 mb-6 group flex items-center w-full">
                        <div className='block lg:w-11/12 w-full'>
                            <input type="text" name="NumDoc" id="NumDoc" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={state.edad} onChange={(e: any) => setState({ ...state, edad: e.target.value })} />
                            <label htmlFor="NumDoc" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Edad</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className='my-4 w-full sm:flex sm:items-center'>
                <div className='my-2 md:w-8/12 block justify-center w-full md:mr-10'>
                <div>
                        <label className=' block'>Genero</label>
                        <select
                            className="text-center w-full text-lg my-2 bg-slate-50 py-2 px-2 rounded outline-none cursor-pointer"
                            value={state.sexo} onChange={(e: any) => setState({ ...state, sexo: e.target.value })}//para que tome el valor que se seleccione
                        >
                            <option value="">-- Seleccione --</option>
                            {
                                genero?.map((opcion) => (
                                    <option key={opcion.nombre} value={opcion.id}>
                                        {opcion.nombre}
                                    </option>
                                ))}
                        </select>
                    </div>
                </div>
                <div className='my-2 sm:w-full'>
                    <div className="relative z-0 mb-6 group flex items-center w-full">
                        <div className='block lg:w-11/12 w-full'>
                            <input type="date" name="fechaIng" max={fechaLimite} id="fechaIng" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={state.fechaIng} onChange={(e: any) => setState({ ...state, fechaIng: e.target.value })} />
                            <label htmlFor="fechaIng" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fecha de Ingreso</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className='my-4 w-full sm:flex sm:items-center justify-center'>
                <div className="relative z-0 mb-6 group flex items-center w-full">
                    <div className='block lg:w-11/12 w-full'>
                        <textarea name="diagnostico" id="diagnostico" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={diagnostico} onChange={(e: any) => InputDiag(e.target.value)} />
                        <label htmlFor="diagnostico" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Diagnostico</label>
                    </div>
                </div>
            </div>

            <div className='my-4 w-full sm:flex sm:items-center'>
                <div className='my-2 w-full'>
                    <div className="relative z-0 mb-6 group flex items-center w-full">
                        <div className='block lg:w-11/12 w-full'>
                            <input type="text" name="direcc" id="direcc" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={state.direccion} onChange={(e: any) => setState({ ...state, direccion: e.target.value })} />
                            <label htmlFor="direcc" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Dirección</label>
                        </div>
                    </div>
                </div>
                <div className='my-2 w-full'>
                    <div className="relative z-0 mb-6 group flex items-center w-full">
                        <div className='block lg:w-11/12 w-full'>
                            <input type="text" name="barrio" id="barrio" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={barrio} onChange={(e: any) => InputBarrio(e.target.value)} />
                            <label htmlFor="barrio" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Barrio</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className='my-4 w-full sm:flex sm:items-center'>
                <div className='my-2 md:w-8/12 block justify-center w-full md:mr-10'>
                    <SelectServicio />
                </div>
                <div className='my-2 sm:w-full'>
                    <div className="relative z-0 mb-6 group flex items-center w-full">
                        <div className='block lg:w-11/12 w-full'>
                            <input type="number" name="tiempo" id="tiempo" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={tiempo} onChange={(e: any) => InputTiempo(e.target.value)} />
                            <label htmlFor="tiempo" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tiempo (Horas)</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className='my-4 w-full sm:flex sm:items-center'>
                <div className='my-2 w-full'>
                    <div className="relative z-0 mb-6 group flex items-center w-full">
                        <div className='block lg:w-11/12 w-full'>
                            <input type="text" name="eps" id="eps" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={state.eps} onChange={(e: any) => setState({ ...state, eps: e.target.value })} />
                            <label htmlFor="eps" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">EPS</label>
                        </div>
                    </div>
                </div>
                <div className='my-2 w-full'>
                    <div className="relative z-0 mb-6 group flex items-center w-full">
                        <div className='block lg:w-11/12 w-full'>
                            <input type="text" name="servUrgen" id="servUrgen" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={servUrgen} onChange={(e: any) => InputServUrgen(e.target.value)} />
                            <label htmlFor="servUrgen" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Servicio Urgencia</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className='my-4 w-full sm:flex sm:items-center'>
                <div className='my-2 w-full'>
                    <div className="relative z-0 mb-6 group flex items-center w-full">
                        <div className='block lg:w-11/12 w-full'>
                            <input type="text" name="clinAds" id="clinAds" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={clinAds} onChange={(e: any) => InputClinAds(e.target.value)} />
                            <label htmlFor="clinAds" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Clínicas Adscritas</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className='my-4 w-full sm:flex sm:items-center'>
                <div className='my-2 w-full'>
                    <div className="relative z-0 mb-6 group flex items-center w-full">
                        <div className='block lg:w-11/12 w-full'>
                            <input type="text" name="medicTratan" id="medicTratan" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={medicTratan} onChange={(e: any) => InputMedicTratan(e.target.value)} />
                            <label htmlFor="medicTratan" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Medico Tratante</label>
                        </div>
                    </div>
                </div>
                <div className='my-2 w-full'>
                    <div className="relative z-0 mb-6 group flex items-center w-full">
                        <div className='block lg:w-11/12 w-full'>
                            <input type="text" name="telefono" id="telefono" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={telefono} onChange={(e: any) => InputTelefono(e.target.value)} />
                            <label htmlFor="telefono" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Teléfono</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className='my-4 w-full sm:flex sm:items-center'>
                <div className='my-2 w-full'>
                    <div className="relative z-0 mb-6 group flex items-center w-full">
                        <div className='block lg:w-11/12 w-full'>
                            <input type="text" name="nombFami1" id="nombFami1" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={nombFami1} onChange={(e: any) => InputNombFami1(e.target.value)} />
                            <label htmlFor="nombFami1" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre del familiar - 1</label>
                        </div>
                    </div>
                </div>

                <div className='my-2 w-full'>
                    <div className="relative z-0 mb-6 group flex items-center w-full">
                        <div className='block lg:w-11/12 w-full'>
                            <input type="text" name="parentesco1" id="parentesco1" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={parentesco1} onChange={(e: any) => InputParentesco1(e.target.value)} />
                            <label htmlFor="parentesco1" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Parentesco - 1</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mb-7 w-full sm:flex sm:items-center'>
                <div className='my-2 w-full'>
                    <div className="relative z-0 mb-6 group flex items-center w-full">
                        <div className='block lg:w-11/12 w-full'>
                            <input type="text" name="telefFam1" id="telefFam1" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={telefFam1} onChange={(e: any) => InputTeleFam1(e.target.value)} />
                            <label htmlFor="parenttelefFam1" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Teléfono - 1</label>
                        </div>
                    </div>
                </div>

                <div className='my-2 w-full'>
                    <div className="relative z-0 mb-6 group flex items-center w-full">
                        <div className='block lg:w-11/12 w-full'>
                            <input type="text" name="direccFam1" id="direccFam1" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={direccFam1} onChange={(e: any) => InputDireccFam1(e.target.value)} />
                            <label htmlFor="direccFam1" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Dirección - 1</label>
                        </div>
                    </div>
                </div>
            </div>


            <div className='my-4 w-full sm:flex sm:items-center'>
                <div className='my-2 w-full'>
                    <div className="relative z-0 mb-6 group flex items-center w-full">
                        <div className='block lg:w-11/12 w-full'>
                            <input type="text" name="nombFami2" id="nombFami2" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={nombFami2} onChange={(e: any) => InputNombFami2(e.target.value)} />
                            <label htmlFor="nombFami2" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre del familiar - 2</label>
                        </div>
                    </div>
                </div>

                <div className='my-2 w-full'>
                    <div className="relative z-0 mb-6 group flex items-center w-full">
                        <div className='block lg:w-11/12 w-full'>
                            <input type="text" name="parentesco2" id="parentesco2" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={parentesco2} onChange={(e: any) => InputParentesco2(e.target.value)} />
                            <label htmlFor="parentesco2" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Parentesco - 2</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mb-7 w-full sm:flex sm:items-center'>
                <div className='my-2 w-full'>
                    <div className="relative z-0 mb-6 group flex items-center w-full">
                        <div className='block lg:w-11/12 w-full'>
                            <input type="email" name="correoFam2" id="correoFam2" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={correoFam2} onChange={(e: any) => InputCorreoFam2(e.target.value)} />
                            <label htmlFor="correoFam2" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Correo Electrónico -2</label>
                        </div>
                    </div>
                </div>

                <div className='my-2 w-full'>
                    <div className="relative z-0 mb-6 group flex items-center w-full">
                        <div className='block lg:w-11/12 w-full'>
                            <input type="text" name="direccFam2" id="direccFam2" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={direccFam2} onChange={(e: any) => InputDireccFam2(e.target.value)} />
                            <label htmlFor="direccFam2" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Dirección - 2</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InformacionPrincipal