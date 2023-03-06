import { useState } from 'react';

import Switch from '@mui/material/Switch';

export default function AntecedentesPersonales() {

  const [cdiabetes, CheckedDiabetes] = useState(false)
  const [expDiabetes, InputExpDiabe] = useState('')
  const [ctoxicos, CheckedToxicos] = useState(false)
  const [expToxico, InputExpToxi] = useState('')
  const [cinfecciosas, CheckedInfecciosas] = useState(false)
  const [expInfecciosas, InputExpInfec] = useState('')
  const [ccigarrillos, CheckedCigarrillos] = useState(false)
  const [expCiga, InputExpCiga] = useState('')
  const [chta, CheckedHta] = useState(false)
  const [expHta, InputExpHta] = useState('')
  const [cembarazos, CheckedEmbarazos] = useState(false)
  const [expEmbarazos, InputExpEmb] = useState('')
  const [ccardiovasculares, CheckedCardiovasculares] = useState(false)
  const [expCardio, InputExpCardio] = useState('')
  const [cpartos, CheckedPartos] = useState(false)
  const [expPartos, InputExpPartos] = useState('')
  const [cobesidad, CheckedObesidad] = useState(false)
  const [expObesidad, InputExpObesidad] = useState('')
  const [ccesareas, CheckedCesareas] = useState(false)
  const [expCesareas, InputExpCesa] = useState('')
  const [ccancer, CheckedCancer] = useState(false)
  const [expCancer, InputExpCancer] = useState('')
  const [cabortos, CheckedAbortos] = useState(false)
  const [expAbortos, InputExpAbortos] = useState('')
  const [cneurologicas, CheckedNeurologicas] = useState(false)
  const [expNeurologicas, InputExpNeurologicas] = useState('')
  const [cciclosRegulares, CheckedCiclosRegulares] = useState(false)
  const [expCiclosRegulares, InputExpCiclosRegulares] = useState('')
  const [crespiratorios, CheckedRespiratorios] = useState(false)
  const [expRespira, InputExpRespiratorios] = useState('')
  const [cedadMenarquia, CheckedEdadMenarquia] = useState(false)
  const [expEdadMenarquia, InputExpEdadMenarquia] = useState('')
  const [cquirurgicos, CheckedQuirurgicos] = useState(false)
  const [expQuirurgicos, InputExpQuirurgicos] = useState('')
  const [cedadMenopausia, CheckedEdadMenopausia] = useState(false)
  const [expEdadMenopausia, InputExpEdadMenopausia] = useState('')
  const [calergicos, CheckedAlergicos] = useState(false)
  const [expAlergicos, InputExpAlergicos] = useState('')
  const [chisterectomia, CheckedHisterectomia] = useState(false)
  const [expHisterectomia, InputExpHisterectomia] = useState('')
  const [cmentales, CheckedMentales] = useState(false)
  const [expMentales, InputExpMentales] = useState('')
  const [cvaseptomia, CheckedVaseptomia] = useState(false)
  const [expVaseptomia, InputExpVaseptomia] = useState('')

  return (
    <div className='px-2 m-4 overflow-hidden md:flex md:flex-col'>
      <div className='flex flex-wrap md:flex-nowrap items-center'>
        <div className='my-2 w-full p-2'>
          <label htmlFor='Diabetes'>Diabetes</label>
          <Switch id='Diabetes' checked={cdiabetes} onChange={e => CheckedDiabetes(e.target.checked)} />
          <label>{cdiabetes ? 'Si' : 'No'}</label>
          {cdiabetes && (
            <div className="relative z-0 mb-6 group flex items-center w-full">
              <div className='block lg:w-11/12 w-full'>
                <input type="text" name="Diabetes" id="Diabetes" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={expDiabetes} onChange={(e: any) => InputExpDiabe(e.target.value)} />
                <label htmlFor="Diabetes" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Explicación</label>
              </div>
            </div>
          )}
        </div>
        <div className='my-2 w-full p-2'>
          <label htmlFor="toxicos">Tóxicos</label>
          <Switch id='toxicos' checked={ctoxicos} onChange={e => CheckedToxicos(e.target.checked)} />
          <label>{ctoxicos ? 'Si' : 'No'}</label>
          {ctoxicos && (
            <div className="relative z-0 mb-6 group flex items-center w-full">
              <div className='block lg:w-11/12 w-full'>
                <input type="text" name="toxicos" id="toxicos" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={expToxico} onChange={(e: any) => InputExpToxi(e.target.value)} />
                <label htmlFor="toxicos" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Explicación</label>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='flex flex-wrap md:flex-nowrap items-center'>
        <div className='my-2 w-full p-2'>
          <label htmlFor='infecciosas'>Infecciosas</label>
          <Switch id='infecciosas' checked={cinfecciosas} onChange={e => CheckedInfecciosas(e.target.checked)} />
          <label>{cinfecciosas ? 'Si' : 'No'}</label>
          {cinfecciosas && (
            <div className="relative z-0 mb-6 group flex items-center w-full">
              <div className='block lg:w-11/12 w-full'>
                <input type="text" name="expInfecciosas" id="expInfecciosas" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={expInfecciosas} onChange={(e: any) => InputExpInfec(e.target.value)} />
                <label htmlFor="expInfecciosas" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Explicación</label>
              </div>
            </div>
          )}
        </div>
        <div className='my-2 w-full p-2'>
          <label htmlFor='cigarrillos'>Cigarrillos</label>
          <Switch id='cigarrillos' checked={ccigarrillos} onChange={e => CheckedCigarrillos(e.target.checked)} />
          <label>{ccigarrillos ? 'Si' : 'No'}</label>
          {ccigarrillos && (
            <div className="relative z-0 mb-6 group flex items-center w-full">
              <div className='block lg:w-11/12 w-full'>
                <input type="text" name="expCiga" id="expCiga" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={expCiga} onChange={(e: any) => InputExpCiga(e.target.value)} />
                <label htmlFor="expCiga" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Explicación</label>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className='my-4 w-full md:flex sm:items-center'>
        <div className='my-2 w-full p-2'>
          <label htmlFor='hta'>HTA</label>
          <Switch id='hta' checked={chta} onChange={e => CheckedHta(e.target.checked)} />
          <label>{chta ? 'Si' : 'No'}</label>
          {chta && (
            <div className="relative z-0 mb-6 group flex items-center w-full">
              <div className='block lg:w-11/12 w-full'>
                <input type="text" name="expHta" id="expHta" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={expHta} onChange={(e: any) => InputExpHta(e.target.value)} />
                <label htmlFor="expHta" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Explicación</label>
              </div>
            </div>
          )}
        </div>
        <br />
        <div className='my-2 w-full p-2'>
          <label htmlFor='embarazos'>Embarazos</label>
          <Switch id='embarazos' checked={cembarazos} onChange={e => CheckedEmbarazos(e.target.checked)} />
          <label>{cembarazos ? 'Si' : 'No'}</label>
          {cembarazos && (
           <div className="relative z-0 mb-6 group flex items-center w-full">
              <div className='block lg:w-11/12 w-full'>
                <input type="text" name="expEmbarazos" id="expEmbarazos" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={expEmbarazos} onChange={(e: any) => InputExpEmb(e.target.value)} />
                <label htmlFor="expEmbarazos" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Explicación</label>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className='my-4 w-full md:flex sm:items-center'>
        <div className='my-2 w-full p-2'>
          <label htmlFor='cardiovasculares'>Cardiovasculares</label>
          <Switch id='cardiovasculares' checked={ccardiovasculares} onChange={e => CheckedCardiovasculares(e.target.checked)} />
          <label>{ccardiovasculares ? 'Si' : 'No'}</label>
          {ccardiovasculares && (
            <div className="relative z-0 mb-6 group flex items-center w-full">
              <div className='block lg:w-11/12 w-full'>
                <input type="text" name="expCardio" id="expCardio" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={expCardio} onChange={(e: any) => InputExpCardio(e.target.value)} />
                <label htmlFor="expCardio" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Explicación</label>
              </div>
            </div>
          )}
        </div>
        <br />
        <div className='my-2 w-full p-2'>
          <label htmlFor='partos'>Partos</label>
          <Switch id='partos' checked={cpartos} onChange={e => CheckedPartos(e.target.checked)} />
          <label>{cpartos ? 'Si' : 'No'}</label>
          {cpartos && (
            <div className="relative z-0 mb-6 group flex items-center w-full">
              <div className='block lg:w-11/12 w-full'>
                <input type="text" name="expPartos" id="expPartos" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={expPartos} onChange={(e: any) => InputExpPartos(e.target.value)} />
                <label htmlFor="expPartos" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Explicación</label>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className='my-4 w-full md:flex sm:items-center'>
        <div className='my-2 w-full p-2'>
          <label htmlFor='obesidad'>Obesidad</label>
          <Switch id='obesidad' checked={cobesidad} onChange={e => CheckedObesidad(e.target.checked)} />
          <label>{cobesidad ? 'Si' : 'No'}</label>
          {cobesidad && (
            <div className="relative z-0 mb-6 group flex items-center w-full">
              <div className='block lg:w-11/12 w-full'>
                <input type="text" name="expObesidad" id="expObesidad" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={expObesidad} onChange={(e: any) => InputExpObesidad(e.target.value)} />
                <label htmlFor="expObesidad" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Explicación</label>
              </div>
            </div>
          )}
        </div>
        <br />
        <div className='my-2 w-full p-2'>
          <label htmlFor='cesareas'>Cesáreas</label>
          <Switch id='cesareas' checked={ccesareas} onChange={e => CheckedCesareas(e.target.checked)} />
          <label>{ccesareas ? 'Si' : 'No'}</label>
          {ccesareas && (
           <div className="relative z-0 mb-6 group flex items-center w-full">
              <div className='block lg:w-11/12 w-full'>
                <input type="text" name="expCesareas" id="expCesareas" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={expCesareas} onChange={(e: any) => InputExpCesa(e.target.value)} />
                <label htmlFor="expCesareas" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Explicación</label>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className='my-4 w-full md:flex sm:items-center'>
        <div className='my-2 w-full p-2'>
          <label htmlFor='cancer'>Cancer</label>
          <Switch id='cancer' checked={ccancer} onChange={e => CheckedCancer(e.target.checked)} />
          <label>{ccancer ? 'Si' : 'No'}</label>
          {ccancer && (
           <div className="relative z-0 mb-6 group flex items-center w-full">
              <div className='block lg:w-11/12 w-full'>
                <input type="text" name="expCancer" id="expCancer" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={expCancer} onChange={(e: any) => InputExpCancer(e.target.value)} />
                <label htmlFor="expCancer" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Explicación</label>
              </div>
            </div>
          )}
        </div>
        <br />
        <div className='my-2 w-full p-2'>
          <label htmlFor='abortos'>Abortos</label>
          <Switch id='abortos' checked={cabortos} onChange={e => CheckedAbortos(e.target.checked)} />
          <label>{cabortos ? 'Si' : 'No'}</label>
          {cabortos && (
           <div className="relative z-0 mb-6 group flex items-center w-full">
              <div className='block lg:w-11/12 w-full'>
                <input type="text" name="expAbortos" id="expAbortos" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={expAbortos} onChange={(e: any) => InputExpAbortos(e.target.value)} />
                <label htmlFor="expAbortos" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Explicación</label>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className='my-4 w-full md:flex sm:items-center'>
        <div className='my-2 w-full p-2'>
          <label htmlFor='neurologicas'>Neurologicas</label>
          <Switch id='neurologicas' checked={cneurologicas} onChange={e => CheckedNeurologicas(e.target.checked)} />
          <label>{cneurologicas ? 'Si' : 'No'}</label>
          {cneurologicas && (
           <div className="relative z-0 mb-6 group flex items-center w-full">
              <div className='block lg:w-11/12 w-full'>
                <input type="text" name="expNeurologicas" id="expNeurologicas" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={expNeurologicas} onChange={(e: any) => InputExpNeurologicas(e.target.value)} />
                <label htmlFor="expNeurologicas" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Explicación</label>
              </div>
            </div>
          )}
        </div>
        <br />
        <div className='my-2 w-full p-2'>
          <label htmlFor='ciclosRegulares'>Ciclos Regulares</label>
          <Switch id='ciclosRegulares' checked={cciclosRegulares} onChange={e => CheckedCiclosRegulares(e.target.checked)} />
          <label>{cciclosRegulares ? 'Si' : 'No'}</label>
          {cciclosRegulares && (
           <div className="relative z-0 mb-6 group flex items-center w-full">
              <div className='block lg:w-11/12 w-full'>
                <input type="text" name="expCiclosRegulares" id="expCiclosRegulares" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={expCiclosRegulares} onChange={(e: any) => InputExpCiclosRegulares(e.target.value)} />
                <label htmlFor="expCiclosRegulares" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Explicación</label>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className='my-4 w-full md:flex sm:items-center'>
        <div className='my-2 w-full'>
          <label htmlFor='respiratorios'>Respiratorios</label>
          <Switch id='respiratorios' checked={crespiratorios} onChange={e => CheckedRespiratorios(e.target.checked)} />
          <label>{crespiratorios ? 'Si' : 'No'}</label>
          {crespiratorios && (
            <div className="relative z-0 mb-6 group flex items-center w-full">
              <div className='block lg:w-11/12 w-full'>
                <input type="text" name="expRespira" id="expRespira" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={expRespira} onChange={(e: any) => InputExpRespiratorios(e.target.value)} />
                <label htmlFor="expRespira" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Explicación</label>
              </div>
            </div>
          )}
        </div>
        <br />
        <div className='my-2 w-full p-2'>
          <label htmlFor='edadMenarquia'>Edad Menarquia</label>
          <Switch id='edadMenarquia' checked={cedadMenarquia} onChange={e => CheckedEdadMenarquia(e.target.checked)} />
          <label>{cedadMenarquia ? 'Si' : 'No'}</label>
          {cedadMenarquia && (
            <div className="relative z-0 mb-6 group flex items-center w-full">
              <div className='block lg:w-11/12 w-full'>
                <input type="text" name="expEdadMenarquia" id="expEdadMenarquia" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={expEdadMenarquia} onChange={(e: any) => InputExpEdadMenarquia(e.target.value)} />
                <label htmlFor="expEdadMenarquia" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Explicación</label>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className='my-4 w-full md:flex sm:items-center'>
        <div className='my-2 w-full p-2'>
          <label htmlFor='quirurgicos'>Quirurgicos</label>
          <Switch id='quirurgicos' checked={cquirurgicos} onChange={e => CheckedQuirurgicos(e.target.checked)} />
          <label>{cquirurgicos ? 'Si' : 'No'}</label>
          {cquirurgicos && (
           <div className="relative z-0 mb-6 group flex items-center w-full">
              <div className='block lg:w-11/12 w-full'>
                <input type="text" name="expQuirurgicos" id="expQuirurgicos" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={expQuirurgicos} onChange={(e: any) => InputExpQuirurgicos(e.target.value)} />
                <label htmlFor="expQuirurgicos" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Explicación</label>
              </div>
            </div>
          )}
        </div>
        <br />
        <div className='my-2 w-full p-2'>
          <label htmlFor='edadMenopausia'>Menopausia</label>
          <Switch id='edadMenopausia' checked={cedadMenopausia} onChange={e => CheckedEdadMenopausia(e.target.checked)} />
          <label>{cedadMenopausia ? 'Si' : 'No'}</label>
          {cedadMenopausia && (
           <div className="relative z-0 mb-6 group flex items-center w-full">
              <div className='block lg:w-11/12 w-full'>
                <input type="text" name="expEdadMenopausia" id="expEdadMenopausia" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={expEdadMenopausia} onChange={(e: any) => InputExpEdadMenopausia(e.target.value)} />
                <label htmlFor="expEdadMenopausia" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Explicación</label>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className='my-4 w-full md:flex sm:items-center'>
        <div className='my-2 w-full p-2'>
          <label htmlFor='alergicos'>Alergicos</label>
          <Switch id='alergicos' checked={calergicos} onChange={e => CheckedAlergicos(e.target.checked)} />
          <label>{calergicos ? 'Si' : 'No'}</label>
          {calergicos && (
           <div className="relative z-0 mb-6 group flex items-center w-full">
              <div className='block lg:w-11/12 w-full'>
                <input type="text" name="expAlergicos" id="expAlergicos" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={expAlergicos} onChange={(e: any) => InputExpAlergicos(e.target.value)} />
                <label htmlFor="expAlergicos" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Explicación</label>
              </div>
            </div>
          )}
        </div>
        <br />
        <div className='my-2 w-full p-2'>
          <label htmlFor='histerectomia'>Histerectomia</label>
          <Switch id='histerectomia' checked={chisterectomia} onChange={e => CheckedHisterectomia(e.target.checked)} />
          <label>{chisterectomia ? 'Si' : 'No'}</label>
          {chisterectomia && (
           <div className="relative z-0 mb-6 group flex items-center w-full">
              <div className='block lg:w-11/12 w-full'>
                <input type="text" name="expHisterectomia" id="expHisterectomia" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={expHisterectomia} onChange={(e: any) => InputExpHisterectomia(e.target.value)} />
                <label htmlFor="expHisterectomia" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Explicación</label>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className='my-4 w-full md:flex items-center'>
        <div className='my-2 w-full p-2'>
          <label htmlFor='mentales'>Mentales</label>
          <Switch id='mentales' checked={cmentales} onChange={e => CheckedMentales(e.target.checked)} />
          <label>{cmentales ? 'Si' : 'No'}</label>
          {cmentales && (
           <div className="relative z-0 mb-6 group flex items-center w-full">
              <div className='block lg:w-11/12 w-full'>
                <input type="text" name="expMentales" id="expMentales" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={expMentales} onChange={(e: any) => InputExpMentales(e.target.value)} />
                <label htmlFor="expMentales" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Explicación</label>
              </div>
            </div>
          )}
        </div>
        <div className='my-2 w-full p-2'>
          <label htmlFor='vaseptomia'>Vaseptomia</label>
          <Switch id='vaseptomia' checked={cvaseptomia} onChange={e => CheckedVaseptomia(e.target.checked)} />
          <label>{cvaseptomia ? 'Si' : 'No'}</label>
          {cvaseptomia && (
           <div className="relative z-0 mb-6 group flex items-center w-full">
              <div className='block lg:w-11/12 w-full'>
                <input type="text" name="expVaseptomia" id="expVaseptomia" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={expVaseptomia} onChange={(e: any) => InputExpVaseptomia(e.target.value)} />
                <label htmlFor="expVaseptomia" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Explicación</label>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}