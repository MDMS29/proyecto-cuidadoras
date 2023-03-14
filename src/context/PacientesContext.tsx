import React, { createContext } from "react";

export interface IPaciente {
    idpaciente: number;
    nombres: string
    apellidos: string
    tipoDoc: string
    nIdent: string
    fechaNac: string
    edad: number
    sexo: string
    direccion: string
    eps: string
    fechaIng: string
    fechaSali?: string
}



export type PacientesContextProps = {
    nombres: string
    apellidos: string
    tipoDoc: string
    nIdent: string
    fechaNac: string
    edad: number
    sexo: string
    direccion: string
    eps: string
    fechaIng: string
    fechaSali?: string
    funcion?: number
    pacientes: string[]

}
export const PacientesContext = createContext<{
    state: PacientesContextProps;
    setState: React.Dispatch<React.SetStateAction<PacientesContextProps>>

}>({
    state: { nombres: '', apellidos: '', tipoDoc: '', nIdent: '', fechaNac: '', edad: 0, sexo: '', direccion: '', eps: '', fechaIng: '', fechaSali: '', funcion: 0, pacientes : [] },
    setState: () => { }
})

