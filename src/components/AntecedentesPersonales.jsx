import { useState } from 'react';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


import useChecked from '../hooks/useChecked';

export default function BasicTextFields() {

  const [diabetes, CheckedDiabetes] = useChecked('Diabetes')
  const [toxicos, CheckedToxicos] = useChecked('Toxicos')
  const [infecciosas, CheckedInfecciosas] = useChecked('Infecciosas')
  const [cigarrillos, CheckedCigarrillos] = useChecked('Cigarrillos')
  const [hta, CheckedHta] = useChecked('Hta')
  const [embarazos, CheckedEmbarazos] = useChecked('Emabarazos')
  const [cardiovasculares, CheckedCardiovasculares] = useChecked('Cardiovasculares')
  const [partos, CheckedPartos] = useChecked('Partos')
  const [obesidad, CheckedObesidad] = useChecked('Obesidad')
  const [cesareas, CheckedCesareas] = useChecked('Cesareas')
  const [cancer, CheckedCancer] = useChecked('Cancer')
  const [abortos, CheckedAbortos] = useChecked('Abortos')
  const [neurologicas, CheckedNeurologicas] = useChecked('Neurologicas')
  const [ciclosRegulares, CheckedCiclosRegulares] = useChecked('Ciclos Regulares')
  const [respiratorios, CheckedRespiratorios] = useChecked('Respiratorios')
  const [edadMenarquia, CheckedEdadMenarquia] = useChecked('Edad Menarquia')
  const [quirurgicos, CheckedQuirurgicos] = useChecked('Quirurgicos')
  const [edadMenopausia, CheckedEdadMenopausia] = useChecked('Edad Menopausia')
  const [alergicos, CheckedAlergicos] = useChecked('Alergicos')
  const [histerectomia, CheckedHisterectomia] = useChecked('Histerectomia')
  const [mentales, CheckedMentales] = useChecked('Mentales')
  const [vaseptomia, CheckedVaseptomia] = useChecked('Vaseptomia')

  return (
    <div className='px-2 m-4 overflow-hidden md:flex md:flex-col'>
      <div className='flex flex-wrap md:flex-nowrap items-center'>
        <div className='my-2 w-full p-2'>
          <CheckedDiabetes />
          {diabetes && (
            <TextField id="fullWidth" label="Explicacion" variant="standard" className='px-2 py-1 w-full sm:h-20 ' />
          )}
        </div>
        <div className='my-2 w-full p-2'>
          <CheckedToxicos />
          {toxicos && (
            <TextField id="standard-basic" label="Explicacion" variant="standard" className='px-2 py-1 w-full sm:h-20 ' />
          )}
        </div>
      </div>
      <div className='flex flex-wrap md:flex-nowrap items-center'>
        <div className='my-2 w-full p-2'>
          <CheckedInfecciosas />
          {infecciosas && (
            <TextField id="standard-basic" label="Explicacion" variant="standard" className='px-2 py-1 w-full sm:h-20 ' />
          )}
        </div>
        <div className='my-2 w-full p-2'>
          <CheckedCigarrillos />
          {cigarrillos && (
            <TextField id="standard-basic" label="Explicacion" variant="standard" className='px-2 py-1 w-full sm:h-20 ' />
          )}
        </div>
      </div>

      <div className='my-4 w-full md:flex sm:items-center'>
        <div className='my-2 w-full p-2'>
          <CheckedHta />
          {hta && (
            <TextField id="standard-basic" label="Explicacion" variant="standard" className='px-2 py-1 w-full sm:h-20 ' />
          )}
        </div>
        <br />
        <div className='my-2 w-full p-2'>
          <CheckedEmbarazos />
          {embarazos && (
            <TextField id="standard-basic" label="Explicacion" variant="standard" className='px-2 py-1 w-full sm:h-20 ' />
          )}
        </div>
      </div>

      <div className='my-4 w-full md:flex sm:items-center'>
        <div className='my-2 w-full p-2'>
          <CheckedCardiovasculares />
          {cardiovasculares && (
            <TextField id="standard-basic" label="Explicacion" variant="standard" className='px-2 py-1 w-full sm:h-20 ' />
          )}
        </div>
        <br />
        <div className='my-2 w-full p-2'>
          <CheckedPartos />
          {partos && (
            <TextField id="standard-basic" label="Explicacion" variant="standard" className='px-2 py-1 w-full sm:h-20 ' />
          )}
        </div>
      </div>

      <div className='my-4 w-full md:flex sm:items-center'>
        <div className='my-2 w-full p-2'>
          <CheckedObesidad />
          {obesidad && (
            <TextField id="standard-basic" label="Explicacion" variant="standard" className='px-2 py-1 w-full sm:h-20 ' />
          )}
        </div>
        <br />
        <div className='my-2 w-full p-2'>
          <CheckedCesareas />
          {cesareas && (
            <TextField id="standard-basic" label="Explicacion" variant="standard" className='px-2 py-1 w-full sm:h-20 ' />
          )}
        </div>
      </div>

      <div className='my-4 w-full md:flex sm:items-center'>
        <div className='my-2 w-full p-2'>
          <CheckedCancer />
          {cancer && (
            <TextField id="standard-basic" label="Explicacion" variant="standard" className='px-2 py-1 w-full sm:h-20 ' />
          )}
        </div>
        <br />
        <div className='my-2 w-full p-2'>
          <CheckedAbortos />
          {abortos && (
            <TextField id="standard-basic" label="Explicacion" variant="standard" className='px-2 py-1 w-full sm:h-20 ' />
          )}
        </div>
      </div>

      <div className='my-4 w-full md:flex sm:items-center'>
        <div className='my-2 w-full p-2'>
          <CheckedNeurologicas />
          {neurologicas && (
            <TextField id="standard-basic" label="Explicacion" variant="standard" className='px-2 py-1 w-full sm:h-20 ' />
          )}
        </div>
        <br />
        <div className='my-2 w-full p-2'>
          <CheckedCiclosRegulares />
          {ciclosRegulares && (
            <TextField id="standard-basic" label="Explicacion" variant="standard" className='px-2 py-1 w-full sm:h-20 ' />
          )}
        </div>
      </div>

      <div className='my-4 w-full md:flex sm:items-center'>
        <div className='my-2 w-full'>
          <CheckedRespiratorios />
          {respiratorios && (
            <TextField id="standard-basic" label="Explicacion" variant="standard" className='px-2 py-1 w-full sm:h-20 ' />
          )}
        </div>
        <br />
        <div className='my-2 w-full p-2'>
          <CheckedEdadMenarquia />
          {edadMenarquia && (
            <TextField id="standard-basic" label="Explicacion" variant="standard" className='px-2 py-1 w-full sm:h-20 ' />
          )}
        </div>
      </div>

      <div className='my-4 w-full md:flex sm:items-center'>
        <div className='my-2 w-full p-2'>
          <CheckedQuirurgicos />
          {quirurgicos && (
            <TextField id="standard-basic" label="Explicacion" variant="standard" className='px-2 py-1 w-full sm:h-20 ' />
          )}
        </div>
        <br />
        <div className='my-2 w-full p-2'>
          <CheckedEdadMenopausia />
          {edadMenopausia && (
            <TextField id="standard-basic" label="Explicacion" variant="standard" className='px-2 py-1 w-full sm:h-20 ' />
          )}
        </div>
      </div>

      <div className='my-4 w-full md:flex sm:items-center'>
        <div className='my-2 w-full p-2'>
          <CheckedAlergicos />
          {alergicos && (
            <TextField id="standard-basic" label="Explicacion" variant="standard" className='px-2 py-1 w-full sm:h-20 ' />
          )}
        </div>
        <br />
        <div className='my-2 w-full p-2'>
          <CheckedHisterectomia />
          {histerectomia && (
            <TextField id="standard-basic" label="Explicacion" variant="standard" className='px-2 py-1 w-full sm:h-20 ' />
          )}
        </div>
      </div>

      <div className='my-4 w-full md:flex items-center'>
        <div className='my-2 w-full p-2'>
          <CheckedMentales />
          {mentales && (
            <TextField id="standard-basic" label="Explicacion" variant="standard" className='px-2 py-1 w-full sm:h-20 ' />
          )}
        </div>
        <div className='my-2 w-full p-2'>
          <CheckedVaseptomia />
          {vaseptomia && (
            <TextField id="standard-basic" label="Explicacion" variant="standard" className='px-2 py-1 w-full sm:h-20 ' />
          )}
        </div>
      </div>
    </div>
  );
}