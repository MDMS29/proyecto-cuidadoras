import { useState } from 'react';

import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';

export default function BasicTextFields() {

  const [cdiabetes, CheckedDiabetes] = useState(false)
  const [ctoxicos, CheckedToxicos] = useState(false)
  const [cinfecciosas, CheckedInfecciosas] = useState(false)
  const [ccigarrillos, CheckedCigarrillos] = useState(false)
  const [chta, CheckedHta] = useState(false)
  const [cembarazos, CheckedEmbarazos] = useState(false)
  const [ccardiovasculares, CheckedCardiovasculares] = useState(false)
  const [cpartos, CheckedPartos] = useState(false)
  const [cobesidad, CheckedObesidad] = useState(false)
  const [ccesareas, CheckedCesareas] = useState(false)
  const [ccancer, CheckedCancer] = useState(false)
  const [cabortos, CheckedAbortos] = useState(false)
  const [cneurologicas, CheckedNeurologicas] = useState(false)
  const [cciclosRegulares, CheckedCiclosRegulares] = useState(false)
  const [crespiratorios, CheckedRespiratorios] = useState(false)
  const [cedadMenarquia, CheckedEdadMenarquia] = useState(false)
  const [cquirurgicos, CheckedQuirurgicos] = useState(false)
  const [cedadMenopausia, CheckedEdadMenopausia] = useState(false)
  const [calergicos, CheckedAlergicos] = useState(false)
  const [chisterectomia, CheckedHisterectomia] = useState(false)
  const [cmentales, CheckedMentales] = useState(false)
  const [cvaseptomia, CheckedVaseptomia] = useState(false)

  return (
    <div className='px-2 m-4 overflow-hidden md:flex md:flex-col'>
      <div className='flex flex-wrap md:flex-nowrap items-center'>
        <div className='my-2 w-full p-2'>
          <label htmlFor={`${cdiabetes}`}>{cdiabetes}</label>
          <Switch id={`${cdiabetes}`} checked={cdiabetes} onChange={e => CheckedDiabetes(e.target.checked)} />
          <label htmlFor={`${cdiabetes}`}>{cdiabetes ? 'Si' : 'No'}</label>
          {cdiabetes && (
            <TextField id="fullWidth" label="Explicacion" variant="standard" className='px-2 py-1 w-full sm:h-20 ' />
          )}
        </div>
        <div className='my-2 w-full p-2'>
          <label htmlFor={`${ctoxicos}`}>{ctoxicos}</label>
          <Switch id={`${ctoxicos}`} checked={ctoxicos} onChange={e => CheckedToxicos(e.target.checked)} />
          <label htmlFor={`${ctoxicos}`}>{ctoxicos ? 'Si' : 'No'}</label>
          {ctoxicos && (
            <TextField id="standard-basic" label="Explicacion" variant="standard" className='px-2 py-1 w-full sm:h-20 ' />
          )}
        </div>
      </div>
      <div className='flex flex-wrap md:flex-nowrap items-center'>
        <div className='my-2 w-full p-2'>
          <label htmlFor={`${cinfecciosas}`}>{cinfecciosas}</label>
          <Switch id={`${cinfecciosas}`} checked={cinfecciosas} onChange={e => CheckedInfecciosas(e.target.checked)} />
          <label htmlFor={`${cinfecciosas}`}>{cinfecciosas ? 'Si' : 'No'}</label>
          {cinfecciosas && (
            <TextField id="standard-basic" label="Explicacion" variant="standard" className='px-2 py-1 w-full sm:h-20 ' />
          )}
        </div>
        <div className='my-2 w-full p-2'>
          <label htmlFor={`${ccigarrillos}`}>{ccigarrillos}</label>
          <Switch id={`${ccigarrillos}`} checked={ccigarrillos} onChange={e => CheckedCigarrillos(e.target.checked)} />
          <label htmlFor={`${ccigarrillos}`}>{ccigarrillos ? 'Si' : 'No'}</label>
          {ccigarrillos && (
            <TextField id="standard-basic" label="Explicacion" variant="standard" className='px-2 py-1 w-full sm:h-20 ' />
          )}
        </div>
      </div>

      <div className='my-4 w-full md:flex sm:items-center'>
        <div className='my-2 w-full p-2'>
          <label htmlFor={`${chta}`}>{chta}</label>
          <Switch id={`${chta}`} checked={chta} onChange={e => CheckedHta(e.target.checked)} />
          <label htmlFor={`${chta}`}>{chta ? 'Si' : 'No'}</label>
          {chta && (
            <TextField id="standard-basic" label="Explicacion" variant="standard" className='px-2 py-1 w-full sm:h-20 ' />
          )}
        </div>
        <br />
        <div className='my-2 w-full p-2'>
          <label htmlFor={`${cembarazos}`}>{cembarazos}</label>
          <Switch id={`${cembarazos}`} checked={cembarazos} onChange={e => CheckedEmbarazos(e.target.checked)} />
          <label htmlFor={`${cembarazos}`}>{cembarazos ? 'Si' : 'No'}</label>
          {cembarazos && (
            <TextField id="standard-basic" label="Explicacion" variant="standard" className='px-2 py-1 w-full sm:h-20 ' />
          )}
        </div>
      </div>

      <div className='my-4 w-full md:flex sm:items-center'>
        <div className='my-2 w-full p-2'>
          <label htmlFor={`${ccardiovasculares}`}>{ccardiovasculares}</label>
          <Switch id={`${ccardiovasculares}`} checked={ccardiovasculares} onChange={e => CheckedCardiovasculares(e.target.checked)} />
          <label htmlFor={`${ccardiovasculares}`}>{ccardiovasculares ? 'Si' : 'No'}</label>
          {ccardiovasculares && (
            <TextField id="standard-basic" label="Explicacion" variant="standard" className='px-2 py-1 w-full sm:h-20 ' />
          )}
        </div>
        <br />
        <div className='my-2 w-full p-2'>
          <label htmlFor={`${cpartos}`}>{cpartos}</label>
          <Switch id={`${cpartos}`} checked={cpartos} onChange={e => CheckedPartos(e.target.checked)} />
          <label htmlFor={`${cpartos}`}>{cpartos ? 'Si' : 'No'}</label>
          {cpartos && (
            <TextField id="standard-basic" label="Explicacion" variant="standard" className='px-2 py-1 w-full sm:h-20 ' />
          )}
        </div>
      </div>

      <div className='my-4 w-full md:flex sm:items-center'>
        <div className='my-2 w-full p-2'>
          <label htmlFor={`${cobesidad}`}>{cobesidad}</label>
          <Switch id={`${cobesidad}`} checked={cobesidad} onChange={e => CheckedObesidad(e.target.checked)} />
          <label htmlFor={`${cobesidad}`}>{cobesidad ? 'Si' : 'No'}</label>
          {cobesidad && (
            <TextField id="standard-basic" label="Explicacion" variant="standard" className='px-2 py-1 w-full sm:h-20 ' />
          )}
        </div>
        <br />
        <div className='my-2 w-full p-2'>
          <label htmlFor={`${ccesareas}`}>{ccesareas}</label>
          <Switch id={`${ccesareas}`} checked={ccesareas} onChange={e => CheckedCesareas(e.target.checked)} />
          <label htmlFor={`${ccesareas}`}>{ccesareas ? 'Si' : 'No'}</label>
          {ccesareas && (
            <TextField id="standard-basic" label="Explicacion" variant="standard" className='px-2 py-1 w-full sm:h-20 ' />
          )}
        </div>
      </div>

      <div className='my-4 w-full md:flex sm:items-center'>
        <div className='my-2 w-full p-2'>
          <label htmlFor={`${ccancer}`}>{ccancer}</label>
          <Switch id={`${ccancer}`} checked={ccancer} onChange={e => CheckedCancer(e.target.checked)} />
          <label htmlFor={`${ccancer}`}>{ccancer ? 'Si' : 'No'}</label>
          {ccancer && (
            <TextField id="standard-basic" label="Explicacion" variant="standard" className='px-2 py-1 w-full sm:h-20 ' />
          )}
        </div>
        <br />
        <div className='my-2 w-full p-2'>
          <label htmlFor={`${cabortos}`}>{cabortos}</label>
          <Switch id={`${cabortos}`} checked={cabortos} onChange={e => CheckedAbortos(e.target.checked)} />
          <label htmlFor={`${cabortos}`}>{cabortos ? 'Si' : 'No'}</label>
          {cabortos && (
            <TextField id="standard-basic" label="Explicacion" variant="standard" className='px-2 py-1 w-full sm:h-20 ' />
          )}
        </div>
      </div>

      <div className='my-4 w-full md:flex sm:items-center'>
        <div className='my-2 w-full p-2'>
          <label htmlFor={`${cneurologicas}`}>{cneurologicas}</label>
          <Switch id={`${cneurologicas}`} checked={cneurologicas} onChange={e => CheckedNeurologicas(e.target.checked)} />
          <label htmlFor={`${cneurologicas}`}>{cneurologicas ? 'Si' : 'No'}</label>
          {cneurologicas && (
            <TextField id="standard-basic" label="Explicacion" variant="standard" className='px-2 py-1 w-full sm:h-20 ' />
          )}
        </div>
        <br />
        <div className='my-2 w-full p-2'>
          <label htmlFor={`${cciclosRegulares}`}>{cciclosRegulares}</label>
          <Switch id={`${cciclosRegulares}`} checked={cciclosRegulares} onChange={e => CheckedCiclosRegulares(e.target.checked)} />
          <label htmlFor={`${cciclosRegulares}`}>{cciclosRegulares ? 'Si' : 'No'}</label>
          {cciclosRegulares && (
            <TextField id="standard-basic" label="Explicacion" variant="standard" className='px-2 py-1 w-full sm:h-20 ' />
          )}
        </div>
      </div>

      <div className='my-4 w-full md:flex sm:items-center'>
        <div className='my-2 w-full'>
          <label htmlFor={`${crespiratorios}`}>{crespiratorios}</label>
          <Switch id={`${crespiratorios}`} checked={crespiratorios} onChange={e => CheckedRespiratorios(e.target.checked)} />
          <label htmlFor={`${crespiratorios}`}>{crespiratorios ? 'Si' : 'No'}</label>
          {crespiratorios && (
            <TextField id="standard-basic" label="Explicacion" variant="standard" className='px-2 py-1 w-full sm:h-20 ' />
          )}
        </div>
        <br />
        <div className='my-2 w-full p-2'>
          <label htmlFor={`${cedadMenarquia}`}>{cedadMenarquia}</label>
          <Switch id={`${cedadMenarquia}`} checked={cedadMenarquia} onChange={e => CheckedEdadMenarquia(e.target.checked)} />
          <label htmlFor={`${cedadMenarquia}`}>{cedadMenarquia ? 'Si' : 'No'}</label>
          {cedadMenarquia && (
            <TextField id="standard-basic" label="Explicacion" variant="standard" className='px-2 py-1 w-full sm:h-20 ' />
          )}
        </div>
      </div>

      <div className='my-4 w-full md:flex sm:items-center'>
        <div className='my-2 w-full p-2'>
          <label htmlFor={`${cquirurgicos}`}>{cquirurgicos}</label>
          <Switch id={`${cquirurgicos}`} checked={cquirurgicos} onChange={e => CheckedQuirurgicos(e.target.checked)} />
          <label htmlFor={`${cquirurgicos}`}>{cquirurgicos ? 'Si' : 'No'}</label>
          {cquirurgicos && (
            <TextField id="standard-basic" label="Explicacion" variant="standard" className='px-2 py-1 w-full sm:h-20 ' />
          )}
        </div>
        <br />
        <div className='my-2 w-full p-2'>
          <label htmlFor={`${cedadMenopausia}`}>{cedadMenopausia}</label>
          <Switch id={`${cedadMenopausia}`} checked={cedadMenopausia} onChange={e => CheckedEdadMenopausia(e.target.checked)} />
          <label htmlFor={`${cedadMenopausia}`}>{cedadMenopausia ? 'Si' : 'No'}</label>
          {cedadMenopausia && (
            <TextField id="standard-basic" label="Explicacion" variant="standard" className='px-2 py-1 w-full sm:h-20 ' />
          )}
        </div>
      </div>

      <div className='my-4 w-full md:flex sm:items-center'>
        <div className='my-2 w-full p-2'>
          <label htmlFor={`${calergicos}`}>{calergicos}</label>
          <Switch id={`${calergicos}`} checked={calergicos} onChange={e => CheckedAlergicos(e.target.checked)} />
          <label htmlFor={`${calergicos}`}>{calergicos ? 'Si' : 'No'}</label>
          {calergicos && (
            <TextField id="standard-basic" label="Explicacion" variant="standard" className='px-2 py-1 w-full sm:h-20 ' />
          )}
        </div>
        <br />
        <div className='my-2 w-full p-2'>
          <label htmlFor={`${chisterectomia}`}>{chisterectomia}</label>
          <Switch id={`${chisterectomia}`} checked={chisterectomia} onChange={e => CheckedHisterectomia(e.target.checked)} />
          <label htmlFor={`${chisterectomia}`}>{chisterectomia ? 'Si' : 'No'}</label>
          {chisterectomia && (
            <TextField id="standard-basic" label="Explicacion" variant="standard" className='px-2 py-1 w-full sm:h-20 ' />
          )}
        </div>
      </div>

      <div className='my-4 w-full md:flex items-center'>
        <div className='my-2 w-full p-2'>
          <label htmlFor={`${cmentales}`}>{cmentales}</label>
          <Switch id={`${cmentales}`} checked={cmentales} onChange={e => CheckedMentales(e.target.checked)} />
          <label htmlFor={`${cmentales}`}>{cmentales ? 'Si' : 'No'}</label>
          {cmentales && (
            <TextField id="standard-basic" label="Explicacion" variant="standard" className='px-2 py-1 w-full sm:h-20 ' />
          )}
        </div>
        <div className='my-2 w-full p-2'>
          <label htmlFor={`${cvaseptomia}`}>{cvaseptomia}</label>
          <Switch id={`${cvaseptomia}`} checked={cvaseptomia} onChange={e => CheckedVaseptomia(e.target.checked)} />
          <label htmlFor={`${cvaseptomia}`}>{cvaseptomia ? 'Si' : 'No'}</label>
          {cvaseptomia && (
            <TextField id="standard-basic" label="Explicacion" variant="standard" className='px-2 py-1 w-full sm:h-20 ' />
          )}
        </div>
      </div>
    </div>
  );
}