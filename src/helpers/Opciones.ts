export let siNo = [
    { id: 'true', nombre: 'Si' },
    { id: 'false', nombre: 'No' }
]

export const tiposDocumentos = [
    { id: 'TI', nombre: 'Tarjeta de Identidad' },
    { id: 'CC', nombre: 'Cédula de Ciudadanía' },
    { id: 'RC', nombre: 'Registro Civil' },
    { id: 'CE', nombre: 'Cédula de Extranjería' },
]

export const genero = [
    { id: 'M', nombre: 'Masculino' },
    { id: 'F', nombre: 'Femenino' },
    { id: 'O', nombre: 'Otro' }
]

export const servicios = [
    { id: 'domicilio', nombre: 'Domiciliario' },
    { id: 'institucional', nombre: 'Institucional' },
    { id: 'pasadia', nombre: 'Pasadía' },
]

export const asistencia = [
    { id: 'true', nombre: 'Asistencia' },
    { id: 'false', nombre: 'No' },
]

export interface TablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (
        event: React.MouseEvent<HTMLButtonElement>,
        newPage: number,
    ) => void;
}