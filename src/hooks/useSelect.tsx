import { useEffect, useState } from "react"

interface ParamOpc {
  id: string
  nombre: string
}

const useSelect = (label: string, opciones: Array<ParamOpc>) => {

  const [state, setState] = useState('')

  const SelectOpciones = () => (
    <div>
      <label className=' block'>{label}</label>
      <select
        className="text-center w-full text-lg my-2 bg-slate-50 py-2 px-2 rounded outline-none cursor-pointer"
        value={state}
        onChange={(e: any) => setState(e.target.value)} //para que tome el valor que se seleccione
      >
        <option value="">-- Seleccione --</option>
        {
          opciones?.map((opcion) => (
            <option key={opcion.nombre} value={opcion.id}>
              {opcion.nombre}
            </option>
          ))}
      </select>
    </div>
  )

  return [state, SelectOpciones]
}

export default useSelect