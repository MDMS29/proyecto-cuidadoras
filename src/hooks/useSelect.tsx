import { useEffect, useState } from "react"

interface ParamOpc {
  id: string
  nombre: string
}

const useSelect = (label: string, opciones: Array<ParamOpc>) => {

  const [state, setState] = useState('')

  const SelectOpciones = () => (
    <>
      <label className='font-semibold text-base block'>{label}</label>
      <select
        className="text-center font-normal w-full sm:w-11/12 text-lg my-2 bg-slate-50 py-2 px-2 rounded outline-none cursor-pointer"
        value={state}
        onChange={(e) => setState(e.target.value)} //para que tome el valor que se seleccione
      >
        <option value="">- Seleccione -</option>
        {
          opciones?.map((opcion) => (
            <option key={opcion.nombre} value={opcion.id}>
              {opcion.nombre}
            </option>
          ))}
      </select>
    </>
  )

  return [state, SelectOpciones]
}

export default useSelect