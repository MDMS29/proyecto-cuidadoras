import React from 'react'

import useSelect from '../hooks/useSelect'
import { siNo, asistencia } from '../helpers/Opciones'


const GradoAutonomia = () => {

  const [aseoPersonal, SelectAseoPersonal] = useSelect('Aseo Personal', asistencia)
  const [desplazamiento, SelectDesplazamiento] = useSelect('Desplazamiento ', asistencia)
  const [tipoAlimentacion, SelectTipoAlimentacion] = useSelect('Tipo de alimentación', asistencia)
  const [cambioRopa, SelectCambioRopa] = useSelect('Cambio de ropa', asistencia)
  const [cambioPosicion, SelectCambioPosicion] = useSelect('Cambio de posición', asistencia)
  const [incontinencia, SelectIncontinencia] = useSelect('Incontinencia', asistencia)
  const [usoPanal, SelectUsoPanal] = useSelect('Uso de Pañal', siNo)
  const [protesis, SelectProtesis] = useSelect('Protesis', siNo)

  return (
    <div className='px-2 m-4 overflow-hidden md:flex md:flex-col'>
      <div className='mb-4 w-full tall:flex items-center'>
        <div className="w-full sm:flex items-center">
          <div className='my-2 w-full'>
            <SelectAseoPersonal />
          </div>
          <div className='my-2 w-full'>
            <SelectDesplazamiento />
          </div>
        </div>
        <div className="w-full sm:flex items-center">
          <div className='my-2 w-full'>
            <SelectTipoAlimentacion />
          </div>
          <div className='my-2 w-full'>
            <SelectCambioRopa />
          </div>
        </div>
      </div>

      <div className='mb-4 w-full tall:flex items-center'>
        <div className='w-full sm:flex items-center'>
          <div className='my-2 w-full'>
            <SelectCambioPosicion />
          </div>
          <div className='my-2 w-full'>
            <SelectIncontinencia />
          </div>
        </div>
        <div className='w-full sm:flex items-center'>
          <div className='my-2 w-full'>
            <SelectUsoPanal />
          </div>
          <div className='my-2 w-full'>
            <SelectProtesis />
          </div>
        </div>


      </div>
    </div>
  )
}

export default GradoAutonomia